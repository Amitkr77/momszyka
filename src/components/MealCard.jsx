import React, { useMemo } from "react";
import Image from "next/image";
import { Calendar } from "lucide-react";

const MealCard = ({ meal, onSubscribe }) => {
  const { type, image, badges, meals, description, price, pricePerMeal } = meal;

  const getBadgeEmoji = (badge) => {
    const lowerBadge = badge.toLowerCase();
    if (lowerBadge.includes("fresh") || lowerBadge.includes("ingredients"))
      return "🥬";
    if (lowerBadge.includes("home") || lowerBadge.includes("cooking"))
      return "🏠";
    if (lowerBadge.includes("hygienic") || lowerBadge.includes("packaging"))
      return "📦";
    if (lowerBadge.includes("protein")) return "💪";
    if (lowerBadge.includes("spicy")) return "🌶️";
    if (lowerBadge.includes("best") || lowerBadge.includes("value"))
      return "⭐";
    return "✓";
  };

  const memoizedBadges = useMemo(() => {
    return badges.map((badge) => ({
      text: badge,
      emoji: getBadgeEmoji(badge),
    }));
  }, [badges]);

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-transform duration-200">
      <div className="p-4 sm:p-6">
        {/* Title & Meals Count */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 flex-1 min-w-0">
            {type}
          </h3>
          <div className="flex items-center gap-1 sm:gap-1.5 text-gray-500 bg-gray-100 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full whitespace-nowrap flex-shrink-0">
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="text-xs font-semibold">{meals} meals</span>
          </div>
        </div>

        {/* Image */}
        <div className="relative h-36 sm:h-48 w-full overflow-hidden rounded-xl mb-3 sm:mb-4 bg-gray-100 group">
          <Image
            src={image}
            alt={`${type} Meal`}
            width={600}
            height={300}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Description */}
        <p className="text-gray-600 text-xs sm:text-sm mb-3 leading-relaxed font-medium">
          {description}
        </p>

        {/* Badges */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          {memoizedBadges.map((badge) => (
            <span
              key={badge.text}
              className="inline-flex items-center gap-1 sm:gap-1.5 text-new text-xs font-semibold bg-new/10 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-new/20"
            >
              <span className="text-sm sm:text-sm">{badge.emoji}</span>
              {badge.text}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 mb-3 sm:mb-4"></div>

        {/* Price & Button */}
        <div className="flex items-center justify-between gap-2 sm:gap-3">
          <div className="flex-1">
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-bold text-gray-900">
                ₹{price}
              </span>
              <span className="text-xs text-gray-500 font-medium">
                ₹{pricePerMeal} per meal
              </span>
            </div>
          </div>

          <button
            onClick={() => onSubscribe(meal)}
            className="bg-new hover:bg-primary text-white font-bold px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base rounded-full"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
