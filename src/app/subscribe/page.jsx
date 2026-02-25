// "use client";
// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardTitle,
//   CardDescription,
// } from "@/components/ui/card";
// import { Utensils, Salad, Drumstick, Share2, Clock, Heart } from "lucide-react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import {
//   Dialog,
//   DialogTrigger,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
// } from "@/components/ui/dialog";
// import Image from "next/image";
// import Head from "next/head";

// const Page = () => {
//   const [isDialogOpen, setIsDialogOpen] = useState(null); // Track which dialog is open

//   // Parallax effect for hero
//   const { scrollYProgress } = useScroll();
//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

//   // Animation variants for sections
//   const containerVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut",
//         staggerChildren: 0.15,
//         type: "spring",
//         stiffness: 80,
//       },
//     },
//   };

//   // Animation variants for cards
//   const cardVariants = {
//     hidden: { opacity: 0, scale: 0.95, rotate: -2 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       rotate: 0,
//       transition: { duration: 0.6, type: "spring" },
//     },
//     hover: {
//       y: -10,
//       boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
//       transition: { duration: 0.3 },
//     },
//   };

//   // Animation variants for buttons
//   const buttonVariants = {
//     hover: {
//       scale: 1.08,
//       transition: { duration: 0.3, type: "spring", stiffness: 200 },
//     },
//     tap: { scale: 0.92 },
//   };

//   // Animation variants for dialogs
//   const dialogVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.3, ease: "easeOut" },
//     },
//   };

//   return (
//     <>
//       <Head>
//         <title>Momszyka - Craft Your Perfect Meal Plan</title>
//         <meta
//           name="description"
//           content="Create a personalized meal plan with Momszyka and enjoy fresh, home-cooked meals delivered to you. Explore trial meals and share the joy with friends!"
//         />
//         <meta
//           name="keywords"
//           content="meal plan, home-cooked meals, Momszyka, trial meals, referral program"
//         />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lato:wght@400;700&display=swap"
//           rel="stylesheet"
//         />
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "Organization",
//               name: "Momszyka",
//               description:
//                 "Momszyka offers personalized meal plans with fresh, home-cooked meals delivered to you.",
//               url: "https://momszyka.com/meal-plan",
//               sameAs: [
//                 "https://instagram.com/momszyka",
//                 "https://wa.me/919304531876",
//               ],
//             }),
//           }}
//         />
//       </Head>

//       <div className="flex flex-col min-h-screen bg-gradient-to-b from-amber-50 to-white dark:from-amber-900 dark:to-amber-800 font-['Lato'] text-amber-800 dark:text-amber-100 leading-relaxed">
//         <main className="flex-grow">
//           {/* Header (Hero) Section - Parallax with warm overlay */}
//           <motion.section
//             className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             <motion.div className="absolute inset-0" style={{ y }}>
//               {/* <Image
//                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-JpHlz2GvfaN-ejNLHdVg6f2mn5mUy7rRNwGPmBhwe_TbCeMM-G2iREQz6qNtK-3F751LhQxbghy7adHo4z771eJg_rJZsZY7IJCjeNQPeEtueXpPGhR0y027DYI6efuNXGlhF5fuz1GM5nDLJATfVswHef5mc0C3FqhiN2mVugFkWswj74FEad6OQEEwo0t1pCbHIMDgXzs9xNqtSvQ-b7UUPyrM2taxfzlisIZ2YZzZOX04NsdNr7d4T3nNnrUJH4aPpLZNAWs"
//                 alt="Warm home-cooked meal scene"
//                 layout="fill"
//                 objectFit="cover"
//                 priority
//                 className=""
//               /> */}
//               <img
//                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-JpHlz2GvfaN-ejNLHdVg6f2mn5mUy7rRNwGPmBhwe_TbCeMM-G2iREQz6qNtK-3F751LhQxbghy7adHo4z771eJg_rJZsZY7IJCjeNQPeEtueXpPGhR0y027DYI6efuNXGlhF5fuz1GM5nDLJATfVswHef5mc0C3FqhiN2mVugFkWswj74FEad6OQEEwo0t1pCbHIMDgXzs9xNqtSvQ-b7UUPyrM2taxfzlisIZ2YZzZOX04NsdNr7d4T3nNnrUJH4aPpLZNAWs"
//                 alt="Warm home-cooked meal scene"
//                 className="w-full h-full object-cover"
//               />
//             </motion.div>
//             <div className="absolute inset-0 bg-black/20"></div>
//             <div className="relative z-10 container mx-auto px-6 text-center">
//               <motion.h1
//                 className="text-4xl sm:text-5xl lg:text-6xl font-['Playfair_Display'] font-extrabold text-white tracking-tight mb-6 drop-shadow-lg"
//                 variants={containerVariants}
//               >
//                 Craft Your Perfect Meal Plan
//               </motion.h1>
//               <motion.p
//                 className="text-lg sm:text-xl max-w-3xl mx-auto text-white/90 mb-8 font-light"
//                 variants={containerVariants}
//               >
//                 Enjoy fresh, home-cooked meals delivered to you. Customize your
//                 plan, savor every bite, and discover the joy of meals made with
//                 care.
//               </motion.p>
//             </div>
//           </motion.section>

//           {/* Specials Section - Interactive trial meal cards */}
//           <motion.section
//             className="py-20 bg-amber-100 dark:bg-amber-800"
//             variants={containerVariants}
//             initial="hidden"
//             viewport={{ once: true }}
//             whileInView="visible"
//           >
//             <div className="container max-w-7xl mx-auto px-6">
//               <h2 className="text-4xl sm:text-5xl font-['Playfair_Display'] font-extrabold text-amber-800 dark:text-amber-100 text-center mb-6">
//                 Featured Trial Meals – Try Before You Commit
//               </h2>
//               <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12">
//                 Discover our hand-picked trial meals, perfect for a single order
//                 or to explore our menu.
//               </p>
//               <div className="grid gap-8 sm:grid-cols-2">
//                 {[
//                   {
//                     title: "Trial Meal – Veg",
//                     price: 0,
//                     icon: Salad,
//                     iconColor: "text-green-500",
//                     buttonColor: "bg-green-500 hover:bg-green-600",
//                     desc: "Our Veg Trial Meal is crafted to delight your taste buds with fresh ingredients and balanced flavors. Be the first to try it—join the waitlist and enjoy an exclusive 10% OFF on your first order!",
//                     image: "/specials/veg.jpg",
//                   },
//                   {
//                     title: "Trial Meal – Non Veg",
//                     price: 0,
//                     icon: Drumstick,
//                     iconColor: "text-red-500",
//                     buttonColor: "bg-red-500 hover:bg-red-600",
//                     desc: "Experience our Non-Veg Trial Meal, cooked to perfection for rich, savory flavors. Sign up for early access and get 10% OFF your first order.",
//                     image: "/specials/non-veg.jpg",
//                   },
//                 ].map((meal, index) => (
//                   <motion.div
//                     key={index}
//                     variants={cardVariants}
//                     whileHover="hover"
//                   >
//                     <Card className="bg-white dark:bg-amber-900 border-amber-200 dark:border-amber-700 rounded-2xl overflow-hidden shadow-md">
//                       <div className="relative">
//                         <Image
//                           src={meal.image}
//                           alt={`${meal.title} image`}
//                           width={400}
//                           height={300}
//                           className="w-full h-64 object-cover"
//                         />

//                         <motion.div
//                           className="absolute bottom-0 left-0 right-0 bg-amber-600/80 text-white p-3 text-center"
//                           initial={{ opacity: 0, y: 20 }}
//                           whileHover={{ opacity: 1, y: 0 }}
//                           transition={{ duration: 0.3 }}
//                         >
//                           <p className="text-sm font-medium">₹{meal.price}</p>
//                         </motion.div>
//                       </div>

//                       {/* …rest of the card (title, dialog, button) stays unchanged… */}
//                       <CardContent className="p-6">
//                         <CardTitle className="text-xl font-['Playfair_Display'] text-amber-800 dark:text-amber-100 flex items-center gap-2">
//                           <meal.icon className={`w-6 h-6 ${meal.iconColor}`} />
//                           {meal.title}
//                         </CardTitle>

//                         <Dialog
//                           open={isDialogOpen === index}
//                           onOpenChange={(open) =>
//                             setIsDialogOpen(open ? index : null)
//                           }
//                         >
//                           <DialogTrigger asChild>
//                             <motion.div
//                               variants={buttonVariants}
//                               whileHover="hover"
//                               whileTap="tap"
//                             >
//                               <Button
//                                 onClick={() => {
//                                   const message = encodeURIComponent(
//                                     "Hi, I'd love to order some home-cooked goodness!"
//                                   );
//                                   window.open(
//                                     `https://wa.me/919304531876?text=${message}`,
//                                     "_blank"
//                                   );
//                                 }}
//                                 className={`w-full ${meal.buttonColor} text-white rounded-full py-3 mt-4`}
//                               >
//                                 Order now
//                               </Button>
//                             </motion.div>
//                           </DialogTrigger>

//                           <DialogContent className="bg-amber-50 dark:bg-amber-900 rounded-2xl max-w-md">
//                             {/* …dialog content unchanged… */}
//                           </DialogContent>
//                         </Dialog>
//                       </CardContent>
//                     </Card>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </motion.section>

//           {/* Referral/Share Section - Bold and inviting */}
//           <motion.section
//             className="py-20 bg-gradient-to-r from-amber-600 to-amber-800 text-white"
//             variants={containerVariants}
//             initial="hidden"
//             viewport={{ once: true }}
//             whileInView="visible"
//           >
//             <div className="container max-w-7xl mx-auto px-6 text-center">
//               <h2 className="text-4xl sm:text-5xl font-['Playfair_Display'] font-extrabold mb-6 flex items-center justify-center gap-3">
//                 <Share2 className="w-7 h-7" />
//                 Share the Joy – Reward Yourself
//               </h2>
//               <p className="text-lg mb-4">
//                 Invite friends to join your meal plan and earn{" "}
//                 <span className="font-bold">₹250 OFF</span> your next order for
//                 every referral.
//               </p>
//               <p className="text-lg mb-8">
//                 Go big: Refer 10 friends and enjoy{" "}
//                 <span className="font-bold">1 month of free meals</span>. Good
//                 food is better when shared!
//               </p>
//               <motion.div
//                 variants={buttonVariants}
//                 whileHover="hover"
//                 whileTap="tap"
//               >
//                 <Button
//                   className="bg-white text-amber-800 text-lg font-medium px-8 py-4 rounded-full hover:bg-amber-100 shadow-lg"
//                   asChild
//                 >
//                   <a href="/refer">
//                     Spread the joy of home-cooked meals with your friends!
//                   </a>
//                 </Button>
//               </motion.div>
//             </div>
//           </motion.section>
//         </main>
//       </div>
//     </>
//   );
// };

// export default Page;

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
        <img
          // src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-JpHlz2GvfaN-ejNLHdVg6f2mn5mUy7rRNwGPmBhwe_TbCeMM-G2iREQz6qNtK-3F751LhQxbghy7adHo4z771eJg_rJZsZY7IJCjeNQPeEtueXpPGhR0y027DYI6efuNXGlhF5fuz1GM5nDLJATfVswHef5mc0C3FqhiN2mVugFkWswj74FEad6OQEEwo0t1pCbHIMDgXzs9xNqtSvQ-b7UUPyrM2taxfzlisIZ2YZzZOX04NsdNr7d4T3nNnrUJH4aPpLZNAWs"
          src="/Menu.jpeg"
          alt="Warm home-cooked meal scene"
          className="w-full h-full object-cover drop-shadow-lg"
          style={{ minHeight: "120%" }}
          fetchPriority="high"
          decoding="async"
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
      <FrequentOrders variant="menu" />

      <SubscriptionPopup
        meal={selectedMeal}
        isOpen={isPopupOpen}
        onClose={handleClose}
      />
    </div>
  );
};

export default FullMenuSection;
