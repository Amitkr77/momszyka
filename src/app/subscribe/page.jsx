"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Utensils, Salad, Drumstick, Share2, Clock, Heart } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Image from "next/image";
import Head from "next/head";

const Page = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(null); // Track which dialog is open

  // Parallax effect for hero
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  // Animation variants for sections
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.15, type: "spring", stiffness: 80 },
    },
  };

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, rotate: -2 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.6, type: "spring" } },
    hover: { y: -10, boxShadow: "0 10px 20px rgba(0,0,0,0.1)", transition: { duration: 0.3 } },
  };

  // Animation variants for buttons
  const buttonVariants = {
    hover: { scale: 1.08, transition: { duration: 0.3, type: "spring", stiffness: 200 } },
    tap: { scale: 0.92 },
  };

  // Animation variants for dialogs
  const dialogVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <>
      <Head>
        <title>Momszyka - Craft Your Perfect Meal Plan</title>
        <meta
          name="description"
          content="Create a personalized meal plan with Momszyka and enjoy fresh, home-cooked meals delivered to you. Explore trial meals and share the joy with friends!"
        />
        <meta
          name="keywords"
          content="meal plan, home-cooked meals, Momszyka, trial meals, referral program"
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
              "@type": "Organization",
              name: "Momszyka",
              description: "Momszyka offers personalized meal plans with fresh, home-cooked meals delivered to you.",
              url: "https://momszyka.com/meal-plan",
              sameAs: ["https://instagram.com/momszyka", "https://wa.me/919304531876"],
            }),
          }}
        />
      </Head>

      <div className="flex flex-col min-h-screen bg-gradient-to-b from-amber-50 to-white dark:from-amber-900 dark:to-amber-800 font-['Lato'] text-amber-800 dark:text-amber-100 leading-relaxed">
        <main className="flex-grow">
          {/* Header (Hero) Section - Parallax with warm overlay */}
          <motion.section
            className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="absolute inset-0" style={{ y }}>
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-JpHlz2GvfaN-ejNLHdVg6f2mn5mUy7rRNwGPmBhwe_TbCeMM-G2iREQz6qNtK-3F751LhQxbghy7adHo4z771eJg_rJZsZY7IJCjeNQPeEtueXpPGhR0y027DYI6efuNXGlhF5fuz1GM5nDLJATfVswHef5mc0C3FqhiN2mVugFkWswj74FEad6OQEEwo0t1pCbHIMDgXzs9xNqtSvQ-b7UUPyrM2taxfzlisIZ2YZzZOX04NsdNr7d4T3nNnrUJH4aPpLZNAWs"
                alt="Warm home-cooked meal scene"
                layout="fill"
                objectFit="cover"
                priority
                className="brightness-75"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-b from-amber-600/40 to-amber-800/60"></div>
            <div className="relative z-10 container mx-auto px-6 text-center">
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-['Playfair_Display'] font-extrabold text-white tracking-tight mb-6 drop-shadow-lg"
                variants={containerVariants}
              >
                Craft Your Perfect Meal Plan
              </motion.h1>
              <motion.p
                className="text-lg sm:text-xl max-w-3xl mx-auto text-white/90 mb-8 font-light"
                variants={containerVariants}
              >
                Enjoy fresh, home-cooked meals delivered to you. Customize your plan, savor every bite, and discover the joy of meals made with care.
              </motion.p>
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Button
                  className="bg-amber-600 text-white text-lg font-medium px-8 py-4 rounded-full hover:bg-amber-700 shadow-lg"
                  asChild
                >
                  <a href="/create-plan">Start building your personalized meal plan today!</a>
                </Button>
              </motion.div>
            </div>
          </motion.section>

          {/* Specials Section - Interactive trial meal cards */}
          <motion.section
            className="py-20 bg-amber-100 dark:bg-amber-800"
            variants={containerVariants}
            initial="hidden"
            viewport={{ once: true }}
            whileInView="visible"
          >
            <div className="container max-w-7xl mx-auto px-6">
              <h2 className="text-4xl sm:text-5xl font-['Playfair_Display'] font-extrabold text-amber-800 dark:text-amber-100 text-center mb-6">
                Featured Trial Meals – Try Before You Commit
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12">
                Discover our hand-picked trial meals, perfect for a single order or to explore our menu.
              </p>
              <div className="grid gap-8 sm:grid-cols-2">
                {[
                  {
                    title: "Trial Meal – Veg",
                    price: 180,
                    icon: Salad,
                    iconColor: "text-green-500",
                    buttonColor: "bg-green-500 hover:bg-green-600",
                    desc: "Our Veg Trial Meal is crafted to delight your taste buds with fresh ingredients and balanced flavors. Be the first to try it—join the waitlist and enjoy an exclusive 10% OFF on your first order!",
                  },
                  {
                    title: "Trial Meal – Non Veg",
                    price: 220,
                    icon: Drumstick,
                    iconColor: "text-red-500",
                    buttonColor: "bg-red-500 hover:bg-red-600",
                    desc: "Experience our Non-Veg Trial Meal, cooked to perfection for rich, savory flavors. Sign up for early access and get 10% OFF your first order.",
                  },
                ].map((meal, index) => (
                  <motion.div key={index} variants={cardVariants} whileHover="hover">
                    <Card className="bg-white dark:bg-amber-900 border-amber-200 dark:border-amber-700 rounded-2xl overflow-hidden shadow-md">
                      <div className="relative">
                        <Image
                          src={`https://lh3.googleusercontent.com/aida-public/AB6AXu${index === 0 ? "B8c9d0e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z2A3B4C5D6E7F8G9H0I1J2K3L4M5N6O7P8Q9R0S1T2U3V4W5X6Y7Z8a9b0c1d2e3f4g5h6i7j8k9l0m1n2o3p4q5r6s7t8u9v0w1x2y3z4" : "C9d0e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z2A3B4C5D6E7F8G9H0I1J2K3L4M5N6O7P8Q9R0S1T2U3V4W5X6Y7Z8a9b0c1d2e3f4g5h6i7j8k9l0m1n2o3p4"}`}
                          alt={`${meal.title} image`}
                          width={400}
                          height={300}
                          className="w-full h-64 object-cover"
                        />
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 bg-amber-600/80 text-white p-3 text-center"
                          initial={{ opacity: 0, y: 20 }}
                          whileHover={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-sm font-medium">₹{meal.price}</p>
                        </motion.div>
                      </div>
                      <CardContent className="p-6">
                        <CardTitle className="text-xl font-['Playfair_Display'] text-amber-800 dark:text-amber-100 flex items-center gap-2">
                          <meal.icon className={`w-6 h-6 ${meal.iconColor}`} />
                          {meal.title}
                        </CardTitle>
                        <Dialog open={isDialogOpen === index} onOpenChange={(open) => setIsDialogOpen(open ? index : null)}>
                          <DialogTrigger asChild>
                            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                              <Button className={`w-full ${meal.buttonColor} text-white rounded-full py-3 mt-4`}>Join Waitlist</Button>
                            </motion.div>
                          </DialogTrigger>
                          <DialogContent className="bg-amber-50 dark:bg-amber-900 rounded-2xl max-w-md">
                            <motion.div variants={dialogVariants} initial="hidden" animate="visible">
                              <DialogHeader>
                                <DialogTitle className="text-2xl font-['Playfair_Display'] text-amber-800 dark:text-amber-100 flex items-center gap-2">
                                  <Clock className="w-6 h-6 text-amber-600" />
                                  {meal.title}
                                </DialogTitle>
                                <DialogDescription className="text-base text-gray-600 dark:text-gray-300">
                                  {meal.desc}
                                </DialogDescription>
                              </DialogHeader>
                              <div className="mt-4">
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                  Enter your email to get notified as soon as the trial meals are available. Don’t miss out on the chance to enjoy these fresh, chef-prepared dishes first!
                                </p>
                                <div className="flex gap-4">
                                  <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 p-3 border border-amber-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500"
                                    aria-label="Email for waitlist"
                                  />
                                  <Button className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-6 py-3">
                                    Join Waitlist
                                  </Button>
                                </div>
                              </div>
                            </motion.div>
                          </DialogContent>
                        </Dialog>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Referral/Share Section - Bold and inviting */}
          <motion.section
            className="py-20 bg-gradient-to-r from-amber-600 to-amber-800 text-white"
            variants={containerVariants}
            initial="hidden"
            viewport={{ once: true }}
            whileInView="visible"
          >
            <div className="container max-w-7xl mx-auto px-6 text-center">
              <h2 className="text-4xl sm:text-5xl font-['Playfair_Display'] font-extrabold mb-6 flex items-center justify-center gap-3">
                <Share2 className="w-7 h-7" />
                Share the Joy – Reward Yourself
              </h2>
              <p className="text-lg mb-4">
                Invite friends to join your meal plan and earn <span className="font-bold">₹250 OFF</span> your next order for every referral.
              </p>
              <p className="text-lg mb-8">
                Go big: Refer 10 friends and enjoy <span className="font-bold">1 month of free meals</span>. Good food is better when shared!
              </p>
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Button
                  className="bg-white text-amber-800 text-lg font-medium px-8 py-4 rounded-full hover:bg-amber-100 shadow-lg"
                  asChild
                >
                  <a href="/refer">Spread the joy of home-cooked meals with your friends!</a>
                </Button>
              </motion.div>
            </div>
          </motion.section>
        </main>
      </div>
    </>
  );
};

export default Page;