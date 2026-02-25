"use client";

import React, { useState } from "react";
import MealPlanTabs from "./Mealplantabs";
import MealCard from "./MealCard";
import SubscriptionPopup from "./Subscriptionpopup";
import { MEALS_BY_PLAN } from "./data/Allmenudata";

const HOME_LIMIT = 3;

const MealSpecialsSection = () => {
  const [activeTab, setActiveTab] = useState("weekly");
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSubscribe = (meal) => {
    setSelectedMeal(meal);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedMeal(null);
  };

  const meals = MEALS_BY_PLAN[activeTab] || [];
  const visibleMeals = meals.slice(0, HOME_LIMIT);

  return (
    <section className="py-8 bg-gradient-to-b from-new/5 via-primary/3 to-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-3">
          <p className="text-new text-base md:text-lg font-medium mb-2">
            Our Offerings
          </p>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-3">
            Delicious Meal Plans
          </h2>

          <div className="flex items-center justify-center gap-1 mb-4">
            <div className="h-1 w-16 bg-new rounded" />
            <div className="h-1 w-16 bg-primary rounded" />
          </div>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Choose from our meal plans crafted with love, bringing the warmth of
            ghar ka khana to your doorstep.
          </p>
        </div>

        {/* Tabs */}
        <MealPlanTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto mt-4">
          {visibleMeals.map((meal, index) => (
            <MealCard
              key={`${meal.type}-${index}`}
              meal={meal}
              onSubscribe={handleSubscribe}
            />
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-8">
          <a
            href="/subscribe"
            className="inline-flex items-center gap-2 bg-new text-white font-bold px-8 py-3 rounded-full hover:bg-primary"
          >
            View All Plans →
          </a>
        </div>
      </div>

      {/* Popup */}
      <SubscriptionPopup
        meal={selectedMeal}
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
      />
    </section>
  );
};

export default React.memo(MealSpecialsSection);
