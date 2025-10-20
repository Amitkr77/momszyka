import { GoogleGenerativeAI } from '@google/generative-ai';
import cache from 'memory-cache';

// Cache duration: 1 hour (in milliseconds)
const CACHE_DURATION = 60 * 60 * 1000;

// Mock recipe for fallback
const mockRecipe = `
**Cozy Chicken Rice Delight** 🌟

**Servings:** 2-4  
**Prep Time:** 10 mins  
**Cook Time:** 20 mins  
**Difficulty:** Easy  
**Dietary:** None specified  
**Nutrition:** ~400 kcal/serving, 20g protein, 50g carbs, 10g fat  

**Ingredients:**  
- 2 chicken breasts  
- 1 cup rice  
- 1 tbsp spices (paprika, cumin)  
- 1/4 cup broth  
- Parsley for garnish  

**Instructions:**  
1. Season chicken with spices, sauté until golden.  
2. Cook rice with 2 cups water until fluffy.  
3. Mix chicken with rice in a skillet.  
4. Add broth; simmer 5 minutes.  
5. Serve hot with parsley.  

**Tips:** Sing to your dish for extra love! 🎶  
**Suggested Images:**  
- A steaming plate of chicken and rice.  
- Close-up of golden chicken with parsley.  
`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { ingredients, dietary = 'none', cuisine = '', servings = '2-4', difficulty = 'easy', language = 'en', includeImages = false } = req.body;
  if (!ingredients) {
    return res.status(400).json({ error: 'Ingredients are required' });
  }

  // Normalize for cache key
  const normalizedKey = [
    ingredients.toLowerCase().split(',').map(i => i.trim()).sort().join(','),
    dietary,
    cuisine.toLowerCase(),
    servings,
    difficulty,
    language,
    includeImages ? 'images' : 'no-images'
  ].join('|');
  const cacheKey = `recipe_${normalizedKey}`;
  const cachedRecipe = cache.get(cacheKey);
  if (cachedRecipe) {
    return res.status(200).json({ recipe: cachedRecipe });
  }

  // Retry logic with exponential backoff
  const retryWithBackoff = async (fn, retries = 3, delay = 1000) => {
    for (let i = 0; i < retries; i++) {
      try {
        return await fn();
      } catch (err) {
        if (i === retries - 1 || (!err.message?.includes('timed out') && err.status !== 429 && err.status !== 404)) {
          throw err;
        }
        await new Promise((resolve) => setTimeout(resolve, delay * 2 ** i));
      }
    }
  };

  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    let model;
    try {
      model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    } catch (modelError) {
      console.warn('Falling back to gemini-pro due to model error:', modelError);
      model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    }

    let prompt = `
      Create a cozy, family-friendly recipe using these ingredients: ${ingredients}.
      Dietary preference: ${dietary !== 'none' ? dietary : 'any'}.
      Cuisine style: ${cuisine || 'any'}.
      Servings: ${servings}.
      Difficulty: ${difficulty}.
      Language: ${language === 'en' ? 'English' : language === 'es' ? 'Spanish' : language === 'fr' ? 'French' : 'Italian'}.
      
      Structure the response in Markdown with:
      - A catchy, fun title in **bold** with an emoji
      - **Servings:** ${servings} people
      - **Prep Time:** Estimate in minutes
      - **Cook Time:** Estimate in minutes
      - **Difficulty:** ${difficulty}
      - **Dietary:** ${dietary !== 'none' ? dietary : 'Standard'}
      - **Nutrition:** Estimate calories, protein, carbs, fat per serving
      - **Ingredients:** Bullet list with quantities
      - **Instructions:** Numbered list of 4-6 detailed, simple steps
      - **Tips:** 1-2 fun or helpful tips
      - Max 250 words for the entire recipe.
      Make it engaging, warm, and homey. Add emojis where appropriate for visual appeal.
    `;

    if (includeImages) {
      prompt += `
      - **Suggested Images:** Provide 2-3 placeholder image descriptions (e.g., "A close-up of golden smashed potatoes with melted cheese") that could be used for illustration. Do not include actual URLs.
      `;
    }

    const result = await retryWithBackoff(() =>
      Promise.race([
        model.generateContent(prompt),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error('API request timed out')), 20000)
        ),
      ])
    );

    const recipe = result.response.text();

    // Cache the recipe
    cache.put(cacheKey, recipe, CACHE_DURATION);

    res.status(200).json({ recipe });
  } catch (error) {
    console.error('Error generating recipe:', error);
    if (error.message?.includes('timed out') || error.status === 404) {
      console.error('Using mock recipe due to timeout or model not found');
      cache.put(cacheKey, mockRecipe, CACHE_DURATION);
      return res.status(200).json({ recipe: mockRecipe });
    } else if (error.status === 429) {
      res.status(429).json({ error: 'Rate limit exceeded. Please wait a moment and try again.' });
    } else {
      res.status(500).json({ error: 'Failed to generate recipe: ' + (error.message || 'Unknown error') });
    }
  }
}