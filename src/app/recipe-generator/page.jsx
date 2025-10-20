"use client";
import React, { useState, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Switch } from "@/components/ui/switch";
import axios from "axios";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import { jsPDF } from "jspdf";
import {
  Loader2,
  Utensils,
  Heart,
  Share2,
  Star,
  ChefHat,
  Clock,
  Users,
  Salad,
  Download,
} from "lucide-react";

// Mock recipes for fallback (offline or persistent timeout)
const mockRecipes = [
  `
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
`,
];

// Ingredient suggestions
const ingredientSuggestions = {
  chicken: ["chicken breast", "chicken thighs", "chicken drumsticks"],
  rice: ["white rice", "brown rice", "jasmine rice"],
  spices: ["paprika", "cumin", "garlic powder", "oregano"],
};

export default function RecipeGenerator() {
  const [ingredients, setIngredients] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [dietary, setDietary] = useState("none");
  const [cuisine, setCuisine] = useState("");
  const [servings, setServings] = useState("2-4");
  const [difficulty, setDifficulty] = useState("easy");
  const [language, setLanguage] = useState("en");
  const [includeImages, setIncludeImages] = useState(false);
  const [recipe, setRecipe] = useState("");
  const [rating, setRating] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [history, setHistory] = useState([]);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  // Load favorites, history, and offline status
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const storedHistory = JSON.parse(localStorage.getItem("history") || "[]");
    setFavorites(storedFavorites);
    setHistory(storedHistory);

    // Handle online/offline status
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Save to localStorage
  const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  // Update ingredient suggestions
  useEffect(() => {
    const input = ingredients.toLowerCase().split(",").map((i) => i.trim());
    const lastInput = input[input.length - 1];
    if (lastInput && ingredientSuggestions[lastInput]) {
      setSuggestions(ingredientSuggestions[lastInput]);
    } else {
      setSuggestions([]);
    }
  }, [ingredients]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.15,
        type: "spring",
        stiffness: 80,
      },
    },
  };
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, rotate: -2 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.6, type: "spring" },
    },
    hover: {
      y: -10,
      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
      transition: { duration: 0.3 },
    },
  };
  const buttonVariants = {
    hover: {
      scale: 1.08,
      transition: { duration: 0.3, type: "spring", stiffness: 200 },
    },
    tap: { scale: 0.92 },
  };
  const dialogVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  // Handle recipe generation
  const handleGenerateRecipe = useCallback(async () => {
    if (!ingredients.trim()) {
      setError("Please enter some ingredients!");
      return;
    }
    if (isOffline) {
      setRecipe(mockRecipes[Math.floor(Math.random() * mockRecipes.length)]);
      setIsDialogOpen(true);
      setIsFavorite(false);
      setRating(0);
      setError("Offline mode: Showing a sample recipe.");
      return;
    }
    setIsLoading(true);
    setError("");
    setRecipe("");
    setIsFavorite(false);
    setRating(0);
    try {
      const response = await axios.post(
        "/api/generate-recipe",
        { ingredients, dietary, cuisine, servings, difficulty, language, includeImages },
        { timeout: 30000 }
      );
      setRecipe(response.data.recipe);
      setIsDialogOpen(true);

      // Add to history
      const newHistory = [...history, response.data.recipe].slice(-10);
      setHistory(newHistory);
      saveToLocalStorage("history", newHistory);
    } catch (err) {
      console.error("Frontend error:", err);
      const errorMessage =
        err.response?.status === 504
          ? "Recipe generation timed out. Using a sample recipe!"
          : err.response?.status === 429
          ? "We're cooking too fast! Please wait a moment and try again."
          : err.response?.data?.error ||
            "Failed to generate recipe. Try again later.";
      setError(errorMessage);
      if (err.response?.status === 504 || err.response?.status === 404) {
        setRecipe(mockRecipes[Math.floor(Math.random() * mockRecipes.length)]);
        setIsDialogOpen(true);
      }
    } finally {
      setIsLoading(false);
    }
  }, [ingredients, dietary, cuisine, servings, difficulty, language, includeImages, history, isOffline]);

  // Toggle favorite
  const toggleFavorite = () => {
    if (isFavorite) {
      const newFavorites = favorites.filter((fav) => fav !== recipe);
      setFavorites(newFavorites);
      saveToLocalStorage("favorites", newFavorites);
    } else {
      const newFavorites = [...favorites, recipe];
      setFavorites(newFavorites);
      saveToLocalStorage("favorites", newFavorites);
    }
    setIsFavorite(!isFavorite);
  };

  // Rate recipe
  const rateRecipe = (value) => {
    setRating(value);
    const ratedRecipes = JSON.parse(localStorage.getItem("ratedRecipes") || "{}");
    ratedRecipes[recipe.split('\n')[0]] = value;
    localStorage.setItem("ratedRecipes", JSON.stringify(ratedRecipes));
  };

  // Share recipe
  const shareRecipe = async () => {
    const title = recipe.split('\n')[0].replace(/\*\*/g, '');
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: recipe,
          url: window.location.href,
        });
      } catch (err) {
        console.error("Share error:", err);
        navigator.clipboard.writeText(recipe);
        alert("Recipe copied to clipboard!");
      }
    } else {
      navigator.clipboard.writeText(recipe);
      alert("Recipe copied to clipboard!");
    }
  };

  // Export to PDF
  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.text(recipe, 10, 10);
    doc.save("recipe.pdf");
  };

  // Add suggested ingredient
  const addSuggestion = (suggestion) => {
    const current = ingredients.split(",").map((i) => i.trim());
    current[current.length - 1] = suggestion;
    setIngredients(current.join(", "));
    setSuggestions([]);
  };

  return (
    <>
      <Head>
        <title>Momszyka Recipe Generator - Create Cozy Meals</title>
        <meta
          name="description"
          content="Generate delicious, home-cooked recipes with Momszyka's Recipe Generator. Customize with dietary preferences, cuisine, servings, and more!"
        />
        <meta
          name="keywords"
          content="recipe generator, Momszyka, home-cooked meals, Gemini AI, family recipes, customizable recipes"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lato:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Momszyka Recipe Generator",
              description:
                "Generate personalized home-cooked recipes with Momszyka using your favorite ingredients, dietary preferences, and more.",
              url: "https://momszyka.com/recipe-generator",
              applicationCategory: "Food",
            }),
          }}
        />
      </Head>

      <div className="flex flex-col min-h-screen bg-gradient-to-b from-amber-50 to-white dark:from-amber-900 dark:to-amber-800 font-lato text-amber-800 dark:text-amber-100 leading-relaxed">
        <main className="flex-grow">
          <motion.section
            className="py-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="container max-w-7xl mx-auto px-6 text-center">
              <h1 className="text-4xl sm:text-5xl font-playfair font-extrabold text-amber-800 dark:text-amber-100 mb-6 flex items-center justify-center gap-3">
                <Utensils className="w-8 h-8 text-amber-600" />
                Momszyka Recipe Generator
              </h1>
              <p className="text-lg sm:text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300 mb-8">
                Create cozy, home-cooked recipes with love. Customize your dish with ingredients, dietary needs, cuisine, and more! {isOffline && (
                  <span className="text-red-500">Offline mode enabled.</span>
                )}
              </p>
              <motion.div className="max-w-lg mx-auto" variants={cardVariants}>
                <Card className="bg-amber-50 dark:bg-amber-900 border-amber-200 dark:border-amber-700 rounded-2xl shadow-md p-6">
                  <CardContent className="space-y-4">
                    <div className="relative">
                      <Textarea
                        placeholder="Enter ingredients (e.g., chicken, rice, spices - one per line or comma-separated)"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        className="mb-4 rounded-xl p-3 border-amber-300 focus:ring-amber-500 min-h-[100px]"
                        aria-label="Ingredients input"
                      />
                      {suggestions.length > 0 && (
                        <div className="absolute z-10 bg-white dark:bg-amber-800 border border-amber-300 rounded-md shadow-md mt-1 w-full">
                          {suggestions.map((suggestion, idx) => (
                            <div
                              key={idx}
                              className="px-3 py-2 hover:bg-amber-100 dark:hover:bg-amber-700 cursor-pointer"
                              onClick={() => addSuggestion(suggestion)}
                            >
                              {suggestion}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Select value={dietary} onValueChange={setDietary}>
                        <SelectTrigger className="rounded-full border-amber-300">
                          <SelectValue placeholder="Dietary Preference" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">None</SelectItem>
                          <SelectItem value="vegan">Vegan</SelectItem>
                          <SelectItem value="vegetarian">Vegetarian</SelectItem>
                          <SelectItem value="gluten-free">Gluten-Free</SelectItem>
                          <SelectItem value="keto">Keto</SelectItem>
                          <SelectItem value="paleo">Paleo</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input
                        type="text"
                        placeholder="Cuisine (e.g., Italian, Asian)"
                        value={cuisine}
                        onChange={(e) => setCuisine(e.target.value)}
                        className="rounded-full p-3 border-amber-300 focus:ring-amber-500"
                      />
                      <Select value={servings} onValueChange={setServings}>
                        <SelectTrigger className="rounded-full border-amber-300">
                          <SelectValue placeholder="Servings" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-2">1-2</SelectItem>
                          <SelectItem value="2-4">2-4</SelectItem>
                          <SelectItem value="4-6">4-6</SelectItem>
                          <SelectItem value="6+">6+</SelectItem>
                        </SelectContent>
                      </Select>
                      <Select value={difficulty} onValueChange={setDifficulty}>
                        <SelectTrigger className="rounded-full border-amber-300">
                          <SelectValue placeholder="Difficulty" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="easy">Easy</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="hard">Hard</SelectItem>
                        </SelectContent>
                      </Select>
                      <Select value={language} onValueChange={setLanguage}>
                        <SelectTrigger className="rounded-full border-amber-300">
                          <SelectValue placeholder="Language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="es">Spanish</SelectItem>
                          <SelectItem value="fr">French</SelectItem>
                          <SelectItem value="it">Italian</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="include-images" className="flex items-center gap-2 text-sm">
                        <Salad className="w-4 h-4" />
                        Include suggested images?
                      </label>
                      <Switch id="include-images" checked={includeImages} onCheckedChange={setIncludeImages} />
                    </div>
                    {error && (
                      <p className="text-red-500 text-sm mb-4">{error}</p>
                    )}
                    <motion.div
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <Button
                        className="w-full bg-amber-600 text-white rounded-full py-3 text-lg font-medium hover:bg-amber-700"
                        onClick={handleGenerateRecipe}
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <div className="flex items-center gap-2">
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Cooking...
                          </div>
                        ) : (
                          "Generate Recipe"
                        )}
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>

              {(history.length > 0 || favorites.length > 0) && (
                <motion.div className="mt-12 max-w-4xl mx-auto" variants={containerVariants}>
                  <Tabs defaultValue="history" className="bg-amber-100 dark:bg-amber-800 rounded-2xl p-4">
                    <TabsList className="justify-center mb-4">
                      <TabsTrigger value="history">Recent Recipes</TabsTrigger>
                      <TabsTrigger value="favorites">Favorites</TabsTrigger>
                    </TabsList>
                    <TabsContent value="history">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {history.map((rec, idx) => (
                          <Card key={idx} className="p-4 cursor-pointer" onClick={() => { setRecipe(rec); setIsDialogOpen(true); setIsFavorite(favorites.includes(rec)); }}>
                            <h3 className="font-bold">{rec.split('\n')[0].replace(/\*\*/g, '')}</h3>
                            <p className="text-sm text-gray-500">{rec.substring(0, 100)}...</p>
                          </Card>
                        ))}
                      </div>
                    </TabsContent>
                    <TabsContent value="favorites">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {favorites.map((rec, idx) => (
                          <Card key={idx} className="p-4 cursor-pointer" onClick={() => { setRecipe(rec); setIsDialogOpen(true); setIsFavorite(true); }}>
                            <h3 className="font-bold">{rec.split('\n')[0].replace(/\*\*/g, '')}</h3>
                            <p className="text-sm text-gray-500">{rec.substring(0, 100)}...</p>
                          </Card>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                </motion.div>
              )}
            </div>
          </motion.section>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className="bg-amber-50 dark:bg-amber-900 rounded-2xl max-w-3xl max-h-[80vh] overflow-y-auto">
              <motion.div
                variants={dialogVariants}
                initial="hidden"
                animate="visible"
              >
                <DialogHeader>
                  <DialogTitle className="text-2xl font-playfair text-amber-800 dark:text-amber-100 flex items-center gap-3">
                    <Heart className="w-6 h-6 text-amber-600" />
                    Your Cozy Recipe
                  </DialogTitle>
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex gap-2">
                      <Badge variant="outline" className="flex items-center gap-1"><Clock className="w-4 h-4" /> Prep: 10-20 mins</Badge>
                      <Badge variant="outline" className="flex items-center gap-1"><Users className="w-4 h-4" /> {servings}</Badge>
                      <Badge variant="outline" className="flex items-center gap-1"><ChefHat className="w-4 h-4" /> {difficulty}</Badge>
                    </div>
                    <div className="flex gap-2">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" onClick={toggleFavorite}>
                              <Star className={`w-5 h-5 ${isFavorite ? 'text-yellow-500 fill-yellow-500' : ''}`} />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>{isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" onClick={shareRecipe}>
                              <Share2 className="w-5 h-5" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>Share Recipe</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" onClick={exportToPDF}>
                              <Download className="w-5 h-5" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>Download as PDF</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                  <div className="flex gap-1 mt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-5 h-5 cursor-pointer ${rating >= star ? 'text-yellow-500 fill-yellow-500' : ''}`}
                        onClick={() => rateRecipe(star)}
                      />
                    ))}
                  </div>
                </DialogHeader>
                <DialogDescription className="text-base text-gray-600 dark:text-gray-300 mt-4">
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Generating your recipe...
                    </div>
                  ) : recipe ? (
                    <>
                      <div className="prose prose-amber dark:prose-invert max-w-none">
                        <ReactMarkdown
                          components={{
                            h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mb-4" {...props} />,
                            h2: ({ node, ...props }) => <h2 className="text-2xl font-semibold mb-3" {...props} />,
                            ul: ({ node, ...props }) => <ul className="list-disc pl-6 mb-4" {...props} />,
                            ol: ({ node, ...props }) => <ol className="list-decimal pl-6 mb-4" {...props} />,
                            p: ({ node, ...props }) => <p className="mb-2" {...props} />,
                            img: ({ node, ...props }) => <img className="rounded-lg shadow-md max-w-full h-auto" {...props} alt={props.alt || 'Recipe Image'} />,
                          }}
                        >
                          {recipe}
                        </ReactMarkdown>
                      </div>
                      {recipe.includes('**Suggested Images:**') && (
                        <div className="mt-4">
                          <h3 className="font-bold text-lg">Suggested Visuals</h3>
                          <ul className="list-disc pl-6">
                            {recipe.split('**Suggested Images:**')[1].split('\n').filter(line => line.trim().startsWith('-')).map((img, idx) => (
                              <li key={idx}>{img.replace('- ', '')}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </>
                  ) : (
                    "Enter ingredients and click 'Generate Recipe' to see your cozy dish!"
                  )}
                </DialogDescription>
                <div className="mt-6 flex justify-end">
                  <Button
                    className="bg-amber-600 text-white rounded-full py-3 px-6"
                    onClick={() => setIsDialogOpen(false)}
                  >
                    Close
                  </Button>
                </div>
              </motion.div>
            </DialogContent>
          </Dialog>
        </main>
      </div>
    </>
  );
}