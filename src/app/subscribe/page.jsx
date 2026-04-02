"use client";

import React, { useState, useCallback, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { Leaf, Drumstick } from "lucide-react";
import MealCard from "@/components/MealCard";
import SubscriptionPopup from "@/components/Subscriptionpopup";
import MealPlanTabs from "@/components/Mealplantabs";
// IMPORT YOUR COMPONENT HERE
import FrequentOrders from "@/components/Frequentorders";
import { frequentOrders } from "@/components/data/freqOrderData";
import OrderCard from "@/components/OrderCard";
import OrderModal from "@/components/OrderModal";
import BulkOrders from "@/components/BulkOrders";

import {
  PLAN_TYPES,
  PLAN_META,
  MEALS_BY_PLAN,
  MEALS_BY_DIET,
} from "@/components/data/Allmenudata";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

// ─────────────────────────────────────────────
// Hero Section
// ─────────────────────────────────────────────
const HeroSection = () => {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[60vh] flex items-center justify-center"
      style={{ clipPath: "inset(0)" }}
    >
      <motion.div className="absolute inset-0 w-full h-full" style={{ y }}>
        <Image
          src="/Menu.jpeg"
          alt="Warm home-cooked meal scene"
          fill
          priority
          className="object-cover object-center md:object-[50%_center]"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/40" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 container mx-auto px-6 text-center"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          Our Full Menu
        </h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto text-white/90 drop-shadow-md">
          Every plan we offer, in one place. Browse by plan duration or by your
          diet preference.
        </p>
      </motion.div>
    </section>
  );
};

// ─────────────────────────────────────────────
// Section Heading with accent underline
// ─────────────────────────────────────────────
const SectionHeading = ({ children }) => (
  <h2 className="text-3xl font-bold text-gray-800 mb-1">
    {children}
    <span className="block w-12 h-1 bg-amber-400 mt-2 rounded-full" />
  </h2>
);

// ─────────────────────────────────────────────
// Section 1 — Plan Type
// ─────────────────────────────────────────────
const PlanTypeSection = React.memo(({ onSubscribe }) => {
  const [activeTab, setActiveTab] = useState("weekly");

  const meals = MEALS_BY_PLAN[activeTab] || [];

  return (
    <div>
      <div className="mb-4">
        <SectionHeading>Browse by Plan Type</SectionHeading>
      </div>

      <MealPlanTabs activeTab={activeTab} onTabChange={setActiveTab} />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
        >
          <div className="relative px-0 sm:px-12">
            <Carousel
              opts={{ align: "start", loop: false }}
              className="w-full overflow-visible"
            >
              <CarouselContent className="cursor-grab active:cursor-grabbing py-2">
                {meals.map((meal) => (
                  <CarouselItem
                    key={meal.type}
                    className="basis-[85%] sm:basis-1/2 lg:basis-1/3"
                  >
                    <MealCard meal={meal} onSubscribe={onSubscribe} />
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious className="left-2 sm:-left-4 z-10 bg-white/90 backdrop-blur-sm shadow-md hover:bg-white" />
              <CarouselNext className="right-2 sm:-right-4 z-10 bg-white/90 backdrop-blur-sm shadow-md hover:bg-white" />
            </Carousel>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

PlanTypeSection.displayName = "PlanTypeSection";

// ─────────────────────────────────────────────
// Section 2 — Diet Type
// ─────────────────────────────────────────────
const DietTypeSection = React.memo(({ onSubscribe }) => {
  const [diet, setDiet] = useState("veg");
  const [selectedOrder, setSelectedOrder] = useState(null);

  const vegMeals = MEALS_BY_DIET["veg"];
  const nonVegMeals = MEALS_BY_DIET["non-veg"];
  const shown = diet === "veg" ? vegMeals : nonVegMeals;

  // Filter frequent orders by diet
  const filteredOrders = frequentOrders.filter((order) =>
    diet === "veg" ? order.isVeg === true : order.isVeg === false,
  );

  return (
    <div>
      <div className="mb-4">
        <SectionHeading>Browse by Diet Type</SectionHeading>
      </div>

      {/* Toggle Buttons */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <div className="inline-flex bg-gray-100 rounded-2xl p-1 shadow-inner gap-1">
          <button
            onClick={() => setDiet("veg")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
              diet === "veg"
                ? "bg-white text-emerald-700 shadow-md"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <Leaf className="w-4 h-4" />
            Vegetarian
          </button>

          <button
            onClick={() => setDiet("non-veg")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
              diet === "non-veg"
                ? "bg-white text-rose-700 shadow-md"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <Drumstick className="w-4 h-4" />
            Non-Veg
          </button>
        </div>
      </div>

      {/* Meal Plans Carousel — unchanged */}
      <AnimatePresence mode="wait">
        <motion.div
          key={diet}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
        >
          <div className="relative px-0 sm:px-12">
            <Carousel opts={{ align: "start", loop: false }} className="w-full">
              <CarouselContent className="cursor-grab active:cursor-grabbing py-2">
                {shown.map((meal) => (
                  <CarouselItem
                    key={meal.type}
                    className="basis-[85%] sm:basis-1/2 lg:basis-1/3"
                  >
                    <MealCard meal={meal} onSubscribe={onSubscribe} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 sm:-left-4 z-10 bg-white/90 backdrop-blur-sm shadow-md hover:bg-white" />
              <CarouselNext className="right-2 sm:-right-4 z-10 bg-white/90 backdrop-blur-sm shadow-md hover:bg-white" />
            </Carousel>
          </div>

          {/* ✅ NEW — Frequent Orders filtered by diet */}
          {filteredOrders.length > 0 && (
            <div className="mt-8">
              <p
                className={`text-sm font-semibold mb-3 ${diet === "veg" ? "text-emerald-600" : "text-rose-600"}`}
              >
                {diet === "veg" ? "🌿 Veg" : "🍗 Non-Veg"} Popular Orders
              </p>
              <div className="relative px-0 sm:px-12">
                <Carousel
                  opts={{ align: "start", loop: false, dragFree: true }}
                  className="w-full"
                >
                  <CarouselContent className="cursor-grab active:cursor-grabbing py-2">
                    {filteredOrders.map((order) => (
                      <CarouselItem
                        key={order.id}
                        className="basis-[85%] sm:basis-1/2 lg:basis-1/3"
                      >
                        <OrderCard
                          order={order}
                          onOrderClick={setSelectedOrder}
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2 sm:-left-4 z-10 bg-white/90 backdrop-blur-sm shadow-md hover:bg-white" />
                  <CarouselNext className="right-2 sm:-right-4 z-10 bg-white/90 backdrop-blur-sm shadow-md hover:bg-white" />
                </Carousel>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Order Modal */}
      {selectedOrder && (
        <OrderModal
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
        />
      )}
    </div>
  );
});

DietTypeSection.displayName = "DietTypeSection";

// ─────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────
const FullMenuSection = () => {
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const timeoutRef = useRef(null);
  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const handleSubscribe = useCallback((meal) => {
    setSelectedMeal(meal);
    setIsPopupOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsPopupOpen(false);
    timeoutRef.current = setTimeout(() => setSelectedMeal(null), 300);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-gradient-to-b from-amber-50 to-white">
        <HeroSection />

        <section className="py-8 sm:py-12">
          <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 space-y-16 sm:space-y-20">
            {" "}
            <PlanTypeSection onSubscribe={handleSubscribe} />
            <hr className="border-amber-100" />
            <DietTypeSection onSubscribe={handleSubscribe} />
          </div>
        </section>
      </div>

      {/* FREQUENT ORDERS COMPONENT PLACED HERE */}
      <div id="popular-orders">
        <FrequentOrders variant="menu" />
      </div>

      {/* ✅ BULK ORDERS SECTION */}
      <div id="bulk-orders">
        <BulkOrders />
      </div>

      <SubscriptionPopup
        meal={selectedMeal}
        isOpen={isPopupOpen}
        onClose={handleClose}
      />
    </div>
  );
};

export default FullMenuSection;
