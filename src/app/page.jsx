"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Star,
  Heart,
  ShieldCheck,
  Utensils,
  Salad,
  Drumstick,
  Share2,
  Smartphone,
  ChefHat,
  ShoppingCart,
  UtensilsCrossed,
  Users,
  Package,
  Award,
  Clock,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Momszyka = () => {
  const [visible, setVisible] = useState(true);

  // Optional: auto-dismiss after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  // State for discount popup
  const [isDiscountPopupOpen, setIsDiscountPopupOpen] = useState(false);
  // State for meal preference quiz
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({ cuisine: "", dietary: "" });

  // Show popup on page reload
  useEffect(() => {
    setIsDiscountPopupOpen(true);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const dialogVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const counterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  // Sample kitchen images
  const kitchenImages = [
    "https://example.com/kitchen1.jpg",
    "https://example.com/kitchen2.jpg",
    "https://example.com/kitchen3.jpg",
    "https://example.com/kitchen4.jpg",
  ];

  // Sample testimonials
  const testimonials = [
    {
      name: "Sarah M.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAOKgYrPh7MIEr6fCSlwdlCnJg-pffmSV0Q0m0FNBtDRozrbjqgvLoF8rTZgIAgo_IY8w08Yzq3A-tj3WgYOCX3cLpuVlYOZYJNuM-_lA18dEz4wDXThx9wRxGropkQIwwyjwnF6P1XAz0qU3E7pMqhVttRES0DHC8pR639jzM2CS752wtwalfaJhfwrNE4pB_VeqY5vE0AeSVDFMSAlTEQ1vzk_1TWjEZKo2ciKH_7eVuGOoQNMmN2ogDN_ak-59T5tjO3mb02k0s",
      rating: 5,
      text: "Momszyka has been a game-changer for our family! The meals are delicious, healthy, and save me so much time. It's like having a personal chef without the hefty price tag. The new subscription feature is fantastic and the app can't come soon enough!",
    },
    {
      name: "David L.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCORzqswqT2ia1SchrA2-ATJuauxtgxsm8a5WVzqQUrnfA7P_QRahwHMB_pa-u0MmK_JjrCDs_kMDv5NxgUGVm991_lUAIbuOLP8yeB6E6GZmekX7RpOkPQ608hceXpAfvyktNCvYyozvBAaO718h8mFsJe7N7ENYM_K4aiie5FHlU3KDsqEPAsV2lIFJtNJg56QW_AiXKVu9Igy4o-8SANjChzyJwBa73mkooCDhG6AT9ZIFApxpg1VM7HPOv1jFZ1ymav9hHaUQQ",
      rating: 5,
      text: "I love the variety of cuisines available on Momszyka. I've tried everything from Italian to Indian, and each dish has been fantastic. It's a great way to support local cooks and discover new flavors. The customization options are superb!",
    },
    {
      name: "Emily R.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA73bdZWoYPtbugHof2K_odtINA-Vs1X2nRcF8XC10HlMMVZwZ_xtZuEwi4-0qTC4BwSwAJCc8al3_yo7cZqYRhnmSop3ck_sp238uFNVXKAz3bvK5O7xRQMeSX6OfO2a7GpCIvX_Uhe_xlUYoytRBBw_5gxG0WJbIoRii_d_s1AhZZRJLSaZC8z1qQwpKcuYVLfr9ZL2zMvY6kdflVr2Toa391-1oBbttK8ycE6AqfShZc0Os8iAim-gcA6M87_MWU0Ub6rjWQUVU",
      rating: 4,
      text: "The food is generally very good, and the delivery is always on time. I appreciate the convenience and the ability to customize my orders. Sometimes the portions could be a bit larger, but the new features like loyalty points and community events make up for it.",
    },
  ];

  // Quiz logic
  const handleQuizAnswer = (question, answer) => {
    setQuizAnswers({ ...quizAnswers, [question]: answer });
    setQuizStep(quizStep + 1);
  };

  const renderQuizContent = () => {
    switch (quizStep) {
      case 0:
        return (
          <div className="text-center">
            <h3 className="text-xl font-semibold text-amber-800 dark:text-amber-100 mb-4">
              What's Your Favorite Cuisine?
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {["Italian", "Indian", "Mexican", "Chinese"].map((cuisine) => (
                <Button
                  key={cuisine}
                  className="bg-amber-600 hover:bg-amber-700 text-white rounded-full"
                  onClick={() => handleQuizAnswer("cuisine", cuisine)}
                >
                  {cuisine}
                </Button>
              ))}
            </div>
          </div>
        );
      case 1:
        return (
          <div className="text-center">
            <h3 className="text-xl font-semibold text-amber-800 dark:text-amber-100 mb-4">
              Any Dietary Preferences?
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {["Vegetarian", "Vegan", "Gluten-Free", "No Preference"].map(
                (diet) => (
                  <Button
                    key={diet}
                    className="bg-amber-600 hover:bg-amber-700 text-white rounded-full"
                    onClick={() => handleQuizAnswer("dietary", diet)}
                  >
                    {diet}
                  </Button>
                )
              )}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="text-center">
            <h3 className="text-xl font-semibold text-amber-800 dark:text-amber-100 mb-4">
              Your Personalized Picks Are Ready!
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Based on your preference for {quizAnswers.cuisine} cuisine and{" "}
              {quizAnswers.dietary} diet, we'll recommend the best home cooks
              for you!
            </p>
            <Button
              className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-6"
              onClick={() => setQuizStep(0)}
            >
              Explore Recommendations
            </Button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display text-[#1b140d] dark:text-background-light">
      {/* Discount Popup */}
      <Dialog open={isDiscountPopupOpen} onOpenChange={setIsDiscountPopupOpen}>
        <DialogContent className="bg-amber-50 dark:bg-amber-900 rounded-lg max-w-md">
          <motion.div
            variants={dialogVariants}
            initial="hidden"
            animate="visible"
          >
            <DialogHeader>
              <DialogTitle className="text-2xl text-amber-800 dark:text-amber-100 flex items-center gap-2">
                <Utensils className="w-6 h-6 text-amber-600" />
                Exclusive Offer Just for You!
              </DialogTitle>
              <DialogDescription className="text-gray-600 dark:text-gray-300">
                Order now and get{" "}
                <span className="font-bold text-amber-600">20% OFF</span> your
                first meal! Don't miss out on delicious, home-cooked goodness
                delivered to your door.
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <p className="text-gray-700 dark:text-gray-200 mb-4">
                Enter your email to claim your discount and start your culinary
                journey with Momszyka!
              </p>
              <div className="flex gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <Button
                  className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-6"
                  onClick={() => setIsDiscountPopupOpen(false)}
                >
                  Claim Offer
                </Button>
              </div>
            </div>
            <DialogFooter className="mt-4">
              <Button
                variant="outline"
                onClick={() => setIsDiscountPopupOpen(false)}
                className="text-amber-600 border-amber-600 hover:bg-amber-100 dark:hover:bg-amber-800"
              >
                Maybe Later
              </Button>
            </DialogFooter>
          </motion.div>
        </DialogContent>
      </Dialog>

      <main className="flex-grow">
        {/* Hero Section */}
        <section
          className="relative h-[80vh] min-h-[480px] bg-cover bg-center"
          style={{ backgroundImage: "url('./hero_image.png')" }}
        >
          <div className="absolute inset-0 gradient-overlay"></div>
          <div className="relative z-10 container mx-auto px-6 h-full flex flex-col items-center justify-center text-center text-white">
            <motion.h1
              className="text-4xl md:text-6xl font-black leading-tight tracking-tight max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Delicious Homemade Meals, Delivered with Love
            </motion.h1>
            <motion.p
              className="mt-4 text-lg md:text-xl max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Connect with talented home cooks in your community and enjoy
              authentic, home-cooked meals delivered right to your door. Now
              with flexible meal subscriptions and personalized recommendations!
            </motion.p>
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button className="mt-8 bg-amber-600 text-white text-base font-bold hover:bg-amber-700 transition-colors">
                Get Started
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Kitchen Carousel Section */}
        <section className="py-16 bg-gradient-to-b from-amber-50 to-white dark:from-amber-900 dark:to-amber-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-3xl font-semibold text-amber-800 dark:text-amber-100 mb-8 text-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              Discover Our Home Kitchens
            </motion.h2>
            <Carousel className="w-full">
              <CarouselContent>
                {kitchenImages.map((src, index) => (
                  <CarouselItem key={index}>
                    <motion.div
                      className="p-1"
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <img
                        src={src}
                        alt={`Kitchen ${index + 1}`}
                        className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                      />
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        {/* Meal Preference Quiz Section */}
        <section className="py-16 bg-amber-100 dark:bg-amber-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <h2 className="text-3xl font-semibold text-amber-800 dark:text-amber-100 mb-4 flex items-center justify-center gap-2">
                <Utensils className="w-8 h-8 text-amber-600" />
                Find Your Perfect Meal
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Take our quick quiz to discover home-cooked meals tailored to
                your tastes and dietary needs. Start your culinary journey with
                Momszyka!
              </p>
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                className="bg-white dark:bg-amber-800 p-8 rounded-lg shadow-lg"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={quizStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {renderQuizContent()}
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* App Coming Soon Section */}
        <section className="py-16 bg-gradient-to-b from-amber-50 to-white dark:from-amber-900 dark:to-amber-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <h2 className="text-3xl font-semibold text-amber-800 dark:text-amber-100 mb-4 flex items-center justify-center gap-2">
                <Smartphone className="w-8 h-8 text-amber-600" />
                Momszyka App Coming Soon!
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Get ready for an even better experience! Our mobile app will let
                you browse menus, place orders, track deliveries in real-time,
                and manage subscriptions on the go. Be the first to know about
                our launch!
              </p>
              <div className="flex justify-center gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email for updates"
                  className="max-w-md p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 dark:bg-amber-800 dark:text-amber-100 dark:border-amber-700"
                />
                <Button className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-6">
                  Notify Me
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Specials Section */}
        <section className="py-16 bg-amber-100 dark:bg-amber-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="mb-12"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <h2 className="text-3xl font-semibold text-amber-800 dark:text-amber-100 mb-6 text-center">
                Don't Miss Our Specials!
              </h2>
              <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Perfect for a single meal or trying us out. For regular
                deliveries, explore our flexible meal subscription options to
                customize your weekly or monthly plans and save more on every
                order.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div
                  className="bg-white dark:bg-amber-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <h3 className="text-xl font-semibold text-amber-700 dark:text-amber-200 flex items-center gap-2">
                    <Salad className="w-6 h-6 text-green-500" />
                    Trial Meal - Veg
                  </h3>
                  <p className="text-2xl font-bold text-gray-800 dark:text-gray-200 my-2">
                    ₹180
                  </p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <motion.div
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <Button className="w-full bg-green-500 hover:bg-green-600 text-white rounded-full">
                          Add to Cart
                        </Button>
                      </motion.div>
                    </DialogTrigger>
                    <DialogContent className="bg-amber-50 dark:bg-amber-900 rounded-lg">
                      <motion.div
                        variants={dialogVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <DialogHeader>
                          <DialogTitle className="text-2xl text-amber-800 dark:text-amber-100 flex items-center gap-2">
                            <Clock className="w-6 h-6 text-amber-600" />
                            Thank You for Choosing Us!
                          </DialogTitle>
                          <DialogDescription className="text-gray-600 dark:text-gray-300">
                            Our delicious Trial Meal - Veg is coming soon! We're
                            putting the final touches on our menu to ensure a
                            delightful experience. Join our waitlist to be the
                            first to savor it!
                          </DialogDescription>
                        </DialogHeader>
                        <div className="mt-4">
                          <p className="text-gray-700 dark:text-gray-200 mb-4">
                            Sign up below to get notified as soon as it's
                            available, plus receive an exclusive{" "}
                            <span className="font-bold text-amber-600">
                              10% OFF
                            </span>{" "}
                            your first order!
                          </p>
                          <div className="flex gap-4">
                            <Input
                              type="email"
                              placeholder="Enter your email"
                              className="flex-1 p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500"
                            />
                            <Button className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-6">
                              Join Waitlist
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    </DialogContent>
                  </Dialog>
                </motion.div>
                <motion.div
                  className="bg-white dark:bg-amber-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <h3 className="text-xl font-semibold text-amber-700 dark:text-amber-200 flex items-center gap-2">
                    <Drumstick className="w-6 h-6 text-red-500" />
                    Trial Meal - Non Veg
                  </h3>
                  <p className="text-2xl font-bold text-gray-800 dark:text-gray-200 my-2">
                    ₹220
                  </p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <motion.div
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <Button className="w-full bg-red-500 hover:bg-red-600 text-white rounded-full">
                          Add to Cart
                        </Button>
                      </motion.div>
                    </DialogTrigger>
                    <DialogContent className="bg-amber-50 dark:bg-amber-900 rounded-lg">
                      <motion.div
                        variants={dialogVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <DialogHeader>
                          <DialogTitle className="text-2xl text-amber-800 dark:text-amber-100 flex items-center gap-2">
                            <Clock className="w-6 h-6 text-amber-600" />
                            Thank You for Choosing Us!
                          </DialogTitle>
                          <DialogDescription className="text-gray-600 dark:text-gray-300">
                            Our flavorful Trial Meal - Non Veg is almost ready!
                            We're perfecting the recipe for you. Join our
                            waitlist to get early access and enjoy it fresh!
                          </DialogDescription>
                        </DialogHeader>
                        <div className="mt-4">
                          <p className="text-gray-700 dark:text-gray-200 mb-4">
                            Sign up below to get notified as soon as it's
                            available, plus receive an exclusive{" "}
                            <span className="font-bold text-amber-600">
                              10% OFF
                            </span>{" "}
                            your first order!
                          </p>
                          <div className="flex gap-4">
                            <Input
                              type="email"
                              placeholder="Enter your email"
                              className="flex-1 p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500"
                            />
                            <Button className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-6">
                              Join Waitlist
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    </DialogContent>
                  </Dialog>
                </motion.div>
              </div>
            </motion.div>

            {/* Referral Section */}
            <motion.div
              className="bg-amber-100 dark:bg-amber-900 p-8 rounded-lg text-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-semibold text-amber-800 dark:text-amber-100 mb-4 flex items-center justify-center gap-2">
                <Share2 className="w-7 h-7 text-amber-600" />
                Share & Save Big!
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-200 mb-2">
                Refer a friend for a monthly meal and get{" "}
                <span className="font-bold text-amber-600">₹250 OFF</span> your
                next order!
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-200 mb-6">
                Even better: Refer 10 friends and get your{" "}
                <span className="font-bold">1-month meal FREE!</span> Plus,
                enjoy priority support, exclusive recipes, and special community
                events.
              </p>
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-8 py-3">
                  Share the Love
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-gradient-to-b from-amber-50 to-white dark:from-amber-900 dark:to-amber-800">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-amber-800 dark:text-amber-100">
                How Momszyka Works
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Discover the joy of home-cooked meals with Momszyka. We connect
                you with talented home cooks in your community, offering a
                convenient, delicious alternative to takeout with personalized
                meal plans, real-time tracking, and seamless subscription
                management.
              </p>
            </motion.div>
            <motion.div
              className="mt-12 grid gap-8 md:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={cardVariants}>
                <Card className="bg-white dark:bg-amber-800 text-center border-amber-200 dark:border-amber-700">
                  <CardContent className="pt-6">
                    <ChefHat className="mx-auto h-8 w-8 text-amber-600 mb-4" />
                    <div
                      className="w-full aspect-video bg-cover bg-center rounded-xl mb-4"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBLBKtzKcvT2-nefh-bHnoBf3Q_nu-ATy-pwr_P3iDFGUMGU37BJOj0mT_SHI_udomIw4SvJ1yFGnVc5v65Xbd3mligJDYZmSvKqCRXrOP0_vK0qe5CnMWMgLpgjLMTO0vGhDZmSJLVOmCVny8jTMOm5ynQDBAjbfUmSPd3esJKIeF-31l0MCIxodIUCd9eC1o0TUPRnb0qz20kWB0Lyzu6wifzPG6IB6IjB43SV_-5Bsas3lVSC8Osxirw_64zL824yGva8_9mrFk')",
                      }}
                    ></div>
                    <h3 className="text-xl font-bold text-amber-700 dark:text-amber-200">
                      Discover Local Cooks
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      Browse profiles of skilled home cooks in your area with
                      interactive maps, video introductions, and detailed menus
                      tailored to your preferences.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={cardVariants}>
                <Card className="bg-white dark:bg-amber-800 text-center border-amber-200 dark:border-amber-700">
                  <CardContent className="pt-6">
                    <ShoppingCart className="mx-auto h-8 w-8 text-amber-600 mb-4" />
                    <div
                      className="w-full aspect-video bg-cover bg-center rounded-xl mb-4"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDsOhgqoY_aQBG4HjgCl-qbTR8quy6UZ8hjOGACSsTUbZ7UDSmVs7yqxvRnHU1JrGQiqBMvsSMMQx53Zf34_rHZqltXZwhbnXQrJV2T5E-VXkcpUqQv-xHeA-tS5TXwluHC4vcqDBCyEScDSdsffn13yI6AVlHvYQTCajDUAnMvTdY10BVPemdIphk9shH74nu3GO9_Ksl--5dAVZem-OqXeYioUZ7phbBawR-G9jeHuVCYh8UmQFMNvIZmCgkcsgm1Q68wbruss0Y')",
                      }}
                    ></div>
                    <h3 className="text-xl font-bold text-amber-700 dark:text-amber-200">
                      Customize Your Order
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      Choose from a variety of dishes, customize with dietary
                      preferences, portion sizes, and add-ons, and schedule
                      delivery with real-time updates.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={cardVariants}>
                <Card className="bg-white dark:bg-amber-800 text-center border-amber-200 dark:border-amber-700">
                  <CardContent className="pt-6">
                    <UtensilsCrossed className="mx-auto h-8 w-8 text-amber-600 mb-4" />
                    <div
                      className="w-full aspect-video bg-cover bg-center rounded-xl mb-4"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB_DtFlZYSwD8-5YTzLtLoKtFAt1Eq9h3jUpkyWlP-rE0NVLtcTU2DgjoQBwiDc0oJBeUK96RnnAFpCE6_A7cHnTcvfnaD4vRnQJYvtUnoiq3jSDjOYAQh9lptVCOTcy9qsahTcWbLhgMaYoZgdbliwbUWzw9idLTlFiSupqj1hjcl2r5Y2L3EYkUVY4syCW0EHqRYSweH11Lmwi9Ik7XQ5PEkD2kEtCzPW5IdsgLg6Kn4rt1ZxkPNWSJgbd5bNlKR40PZXiVtVo78')",
                      }}
                    ></div>
                    <h3 className="text-xl font-bold text-amber-700 dark:text-amber-200">
                      Savor the Experience
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      Enjoy authentic, home-cooked meals delivered fresh. Rate
                      your experience, earn loyalty points, and get personalized
                      recommendations for your next order.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Momszyka Section */}
        <section className="py-16 bg-amber-100 dark:bg-amber-900">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-amber-800 dark:text-amber-100">
                Why Choose Momszyka?
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Momszyka brings the warmth of home-cooked meals to your table
                with unmatched convenience, quality, and community spirit. Enjoy
                personalized dining, eco-friendly packaging, and exclusive
                rewards.
              </p>
            </motion.div>
            <motion.div
              className="mt-12 grid gap-8 md:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={cardVariants}>
                <Card className="bg-white dark:bg-amber-800 border-amber-200 dark:border-amber-700">
                  <CardContent className="p-6">
                    <Star className="text-amber-600 h-8 w-8 mb-4" />
                    <CardTitle className="text-xl font-bold text-amber-700 dark:text-amber-200">
                      Authentic Flavors
                    </CardTitle>
                    <CardDescription className="mt-2 text-gray-600 dark:text-gray-300">
                      Savor diverse, home-cooked dishes crafted with love,
                      featuring seasonal menus, chef stories, and authentic
                      recipes from local kitchens.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={cardVariants}>
                <Card className="bg-white dark:bg-amber-800 border-amber-200 dark:border-amber-700">
                  <CardContent className="p-6">
                    <Heart className="text-amber-600 h-8 w-8 mb-4" />
                    <CardTitle className="text-xl font-bold text-amber-700 dark:text-amber-200">
                      Support Local Cooks
                    </CardTitle>
                    <CardDescription className="mt-2 text-gray-600 dark:text-gray-300">
                      Empower talented home cooks by supporting their passion.
                      Join virtual cooking classes, community events, and
                      mentorship programs.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={cardVariants}>
                <Card className="bg-white dark:bg-amber-800 border-amber-200 dark:border-amber-700">
                  <CardContent className="p-6">
                    <ShieldCheck className="text-amber-600 h-8 w-8 mb-4" />
                    <CardTitle className="text-xl font-bold text-amber-700 dark:text-amber-200">
                      Safe and Reliable
                    </CardTitle>
                    <CardDescription className="mt-2 text-gray-600 dark:text-gray-300">
                      Enjoy secure transactions, reliable deliveries, and
                      top-tier hygiene standards with contactless delivery,
                      eco-friendly packaging, and 24/7 support.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Community Reviews Section (Carousel) */}
        <section className="py-16 bg-gradient-to-b from-amber-50 to-white dark:from-amber-900 dark:to-amber-800">
          <div className="container mx-auto px-6">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-center text-amber-800 dark:text-amber-100 mb-12"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              What Our Community Says
            </motion.h2>
            <Carousel className="max-w-4xl mx-auto">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <motion.div
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <Card className="bg-amber-50 dark:bg-amber-950">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4">
                            <img
                              alt={testimonial.name}
                              className="w-12 h-12 rounded-full object-cover"
                              src={testimonial.image}
                            />
                            <div>
                              <p className="font-bold text-amber-700 dark:text-amber-200">
                                {testimonial.name}
                              </p>
                              <div className="flex text-amber-600">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className="w-4 h-4"
                                    fill={
                                      i < testimonial.rating
                                        ? "currentColor"
                                        : "none"
                                    }
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                          <p className="mt-4 text-gray-600 dark:text-gray-300">
                            {testimonial.text}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        {/* Social Proof Metrics Section */}
        <section className="py-16 bg-amber-100 dark:bg-amber-900">
          <div className="container mx-auto px-6">
            <motion.div
              className="grid gap-8 md:grid-cols-3 text-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={counterVariants}>
                <Users className="mx-auto h-12 w-12 text-amber-600 mb-4" />
                <h3 className="text-3xl font-bold text-amber-800 dark:text-amber-100">
                  10,000+
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Happy Customers
                </p>
              </motion.div>
              <motion.div variants={counterVariants}>
                <Package className="mx-auto h-12 w-12 text-amber-600 mb-4" />
                <h3 className="text-3xl font-bold text-amber-800 dark:text-amber-100">
                  50,000+
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Meals Delivered
                </p>
              </motion.div>
              <motion.div variants={counterVariants}>
                <Award className="mx-auto h-12 w-12 text-amber-600 mb-4" />
                <h3 className="text-3xl font-bold text-amber-800 dark:text-amber-100">
                  500+
                </h3>
                <p className="text-gray-600 dark:text-gray-300">Local Cooks</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Newsletter Section */}
        {/* <section className="py-16 bg-gradient-to-b from-amber-50 to-white dark:from-amber-900 dark:to-amber-800">
          <div className="container mx-auto px-6 text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-amber-800 dark:text-amber-100 mb-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              Stay Updated
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 mb-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              Subscribe to our newsletter for the latest recipes, cooking tips,
              exclusive offers, community stories, and updates on our upcoming
              app launch.
            </motion.p>
            <motion.div
              className="max-w-md mx-auto flex gap-2"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                className="dark:bg-amber-800 dark:text-amber-100 dark:border-amber-700"
              />
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                Subscribe
              </Button>
            </motion.div>
          </div>
        </section> */}

        {/* Sticky CTA Bar */}
        <AnimatePresence>
          {visible && (
            <motion.div
              role="region"
              aria-label="Order Call To Action"
              className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-amber-100/90 dark:bg-amber-900/90 backdrop-blur-md p-4 sm:p-5 shadow-lg z-50 w-full max-w-md rounded-xl"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-amber-800 dark:text-amber-100 font-semibold text-sm sm:text-base flex-1 min-w-[150px]">
                  Ready to taste the love? Order now!
                </p>

                <div className="flex gap-2 shrink-0">
                  <Button
                    aria-label="Place an order now"
                    className="bg-amber-600 hover:bg-amber-700 text-white rounded-full flex items-center gap-1 text-sm"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Order Now
                  </Button>
                  <Button
                    aria-label="Join the waitlist"
                    variant="outline"
                    className="text-amber-600 border-amber-600 hover:bg-amber-200 dark:hover:bg-amber-800 rounded-full flex items-center gap-1 text-sm"
                  >
                    <Clock className="w-4 h-4" />
                    Waitlist
                  </Button>
                  <button
                    aria-label="Dismiss call to action"
                    onClick={() => setVisible(false)}
                    className="text-amber-700 dark:text-amber-300 hover:opacity-80 transition"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Momszyka;
