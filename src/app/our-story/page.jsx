"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Utensils, ChefHat, Users } from "lucide-react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const MomszykaStory = () => {

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };


  return (
    <div className="relative flex min-h-screen w-full flex-col bg-gradient-to-b from-amber-50 to-white dark:from-amber-900 dark:to-amber-800 font-display text-amber-800 dark:text-amber-100">
      <main className="flex-grow">
        <motion.section
          className="relative flex min-h-[60vh] items-center justify-center bg-cover bg-center py-20 text-white"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuD-JpHlz2GvfaN-ejNLHdVg6f2mn5mUy7rRNwGPmBhwe_TbCeMM-G2iREQz6qNtK-3F751LhQxbghy7adHo4z771eJg_rJZsZY7IJCjeNQPeEtueXpPGhR0y027DYI6efuNXGlhF5fuz1GM5nDLJATfVswHef5mc0C3FqhiN2mVugFkWswj74FEad6OQEEwo0t1pCbHIMDgXzs9xNqtSvQ-b7UUPyrM2taxfzlisIZ2YZzZOX04NsdNr7d4T3nNnrUJH4aPpLZNAWs')",
          }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tighter text-shadow sm:text-5xl lg:text-6xl">
              Our Story
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-base font-light leading-relaxed text-shadow sm:text-lg">
              Momszyka is a celebration of mothers who bring love to every meal.
              Our mission is to empower home cooks to share their culinary
              talents and build a community around the joy of home-cooked food.
            </p>
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="mt-8 bg-amber-600 text-white text-base font-bold rounded-full hover:bg-amber-700">
                    Join Our Community
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-amber-50 dark:bg-amber-900 rounded-lg">
                  <DialogHeader>
                    <DialogTitle className="text-amber-800 dark:text-amber-100">
                      Become a Part of Momszyka
                    </DialogTitle>
                    <DialogDescription className="text-gray-600 dark:text-gray-300">
                      Sign up to explore delicious meals or share your culinary
                      creations with our community.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex gap-4">
                    <Button
                      className="bg-amber-600 hover:bg-amber-700 text-white rounded-full"
                      asChild
                    >
                      <a href="/how-it-works">Explore Meals</a>
                    </Button>
                    <Button
                      className="bg-amber-100 text-amber-800 hover:bg-amber-200 dark:bg-amber-800 dark:text-amber-100 dark:hover:bg-amber-700 rounded-full"
                      asChild
                    >
                      <a href="/cooks">Become a Cook</a>
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          className="py-16 sm:py-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="container mx-auto max-w-7xl px-4">
            <div className="space-y-12">
              <div className="prose prose-lg mx-auto max-w-none text-gray-600 dark:text-gray-300">
                <h2 className="font-bold text-amber-800 dark:text-amber-100">
                  Empowering Mothers Through Culinary Arts
                </h2>
                <p>
                  Momszyka was founded to honor the heart of every home: the
                  kitchen. We created a platform where mothers and home cooks
                  can share their culinary talents, turning their passion for
                  food into a source of empowerment and income.
                </p>
                <h2 className="font-bold text-amber-800 dark:text-amber-100 mt-5">
                  Building a Culinary Community
                </h2>
                <p>
                  Our community is the heart of Momszyka. We connect cooks with
                  food lovers, fostering a sense of belonging through shared
                  meals and stories. Whether you’re cooking or enjoying a meal,
                  you’re part of a movement that celebrates love, care, and
                  creativity.
                </p>
                <h2 className="font-bold text-amber-800 dark:text-amber-100 mt-5">
                  Committed to Quality and Sustainability
                </h2>
                <p>
                  We support our cooks with resources to ensure high-quality,
                  safe meals. Our platform encourages sustainable practices,
                  from sourcing local ingredients to minimizing food waste, for
                  a healthier planet.
                </p>
                <h2 className="font-bold text-amber-800 dark:text-amber-100 mt-5">
                  Join the Momszyka Movement
                </h2>
                <p>
                  Be part of a community that celebrates the joy of home-cooked
                  meals. Whether you’re a cook sharing your recipes or a food
                  lover savoring authentic dishes, Momszyka welcomes you to our
                  table.
                </p>
              </div>
              <div className="w-full overflow-hidden rounded-xl max-w-4xl mx-auto">
                <img
                  alt="A family enjoying a home-cooked meal together"
                  className="h-full w-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp-BPMDWEOvMcpO8Cuo1Sad2a6S0htJIejCWFkZgw-GJDX0evBCZgklqhlm-AVkjQAHCuIels4aZnvo_wlnkU1bF0cCPiFibzOJeBTMp82HIDB07bDNUwynNJaGpBn_XOfPvXDxPWVOEG21sOjmfNQdHf6bRRKKFBPFhzdENlbkYgp9vnXaZpGUwkC4qgm77BcW83lJQrppNpHa3puS0puX_ZOwwiQia9jWwEl-DPJrntuw449-3fW_yjUy4wcZw7zNopZZRc565o"
                />
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="py-16 sm:py-24 bg-amber-100 dark:bg-amber-800"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="container max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Featured Meal Categories
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <motion.div variants={cardVariants} whileHover="hover">
                <Card className="bg-amber-50 dark:bg-amber-900 border-amber-200 dark:border-amber-700">
                  <CardContent className="p-0">
                    <div
                      className="aspect-square bg-cover bg-center rounded-t-xl"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB8c9d0e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z2A3B4C5D6E7F8G9H0I1J2K3L4M5N6O7P8Q9R0S1T2U3V4W5X6Y7Z8a9b0c1d2e3f4g5h6i7j8k9l0m1n2o3p4q5r6s7t8u9v0w1x2y3z4')",
                      }}
                    ></div>
                    <div className="p-4">
                      <CardTitle>Comfort Foods</CardTitle>
                      <CardDescription className="mt-2">
                        Hearty dishes like lasagna and shepherd’s pie, perfect
                        for cozy nights.
                      </CardDescription>
                      <div className="mt-4 flex justify-between items-center">
                        <span className="font-bold">Starting at $12.99</span>
                        <Button
                          variant="outline"
                          className="rounded-full border-amber-300 hover:bg-amber-100 dark:hover:bg-amber-800"
                        >
                          Explore
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={cardVariants} whileHover="hover">
                <Card className="bg-amber-50 dark:bg-amber-900 border-amber-200 dark:border-amber-700">
                  <CardContent className="p-0">
                    <div
                      className="aspect-square bg-cover bg-center rounded-t-xl"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC9d0e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z2A3B4C5D6E7F8G9H0I1J2K3L4M5N6O7P8Q9R0S1T2U3V4W5X6Y7Z8a9b0c1d2e3f4g5h6i7j8k9l0m1n2o3p4')",
                      }}
                    ></div>
                    <div className="p-4">
                      <CardTitle>Global Flavors</CardTitle>
                      <CardDescription className="mt-2">
                        Exotic dishes like butter chicken and sushi, crafted by
                        local cooks.
                      </CardDescription>
                      <div className="mt-4 flex justify-between items-center">
                        <span className="font-bold">Starting at $14.99</span>
                        <Button
                          variant="outline"
                          className="rounded-full border-amber-300 hover:bg-amber-100 dark:hover:bg-amber-800"
                        >
                          Explore
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={cardVariants} whileHover="hover">
                <Card className="bg-amber-50 dark:bg-amber-900 border-amber-200 dark:border-amber-700">
                  <CardContent className="p-0">
                    <div
                      className="aspect-square bg-cover bg-center rounded-t-xl"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD0e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z2A3B4C5D6E7F8G9H0I1J2K3L4M5N6O7P8Q9R0S1T2U3V4W5X6Y7Z8a9b0c1d2e3f4g5h6i7j8k9')",
                      }}
                    ></div>
                    <div className="p-4">
                      <CardTitle>Healthy Bites</CardTitle>
                      <CardDescription className="mt-2">
                        Nutritious meals like quinoa bowls and salads for a
                        balanced lifestyle.
                      </CardDescription>
                      <div className="mt-4 flex justify-between items-center">
                        <span className="font-bold">Starting at $10.99</span>
                        <Button
                          variant="outline"
                          className="rounded-full border-amber-300 hover:bg-amber-100 dark:hover:bg-amber-800"
                        >
                          Explore
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="py-16 sm:py-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="container max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Momszyka?
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <motion.div variants={cardVariants} whileHover="hover">
                <Card className="bg-amber-50 dark:bg-amber-900 border-amber-200 dark:border-amber-700">
                  <CardContent className="p-6">
                    <Utensils className="text-amber-600 h-8 w-8 mb-4" />
                    <CardTitle className="text-xl font-bold">
                      Empowerment
                    </CardTitle>
                    <CardDescription className="mt-2 text-gray-600 dark:text-gray-300">
                      We empower mothers to share their culinary talents,
                      turning passion into opportunity.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={cardVariants} whileHover="hover">
                <Card className="bg-amber-50 dark:bg-amber-900 border-amber-200 dark:border-amber-700">
                  <CardContent className="p-6">
                    <ChefHat className="text-amber-600 h-8 w-8 mb-4" />
                    <CardTitle className="text-xl font-bold">Quality</CardTitle>
                    <CardDescription className="mt-2 text-gray-600 dark:text-gray-300">
                      Our cooks use fresh, local ingredients to create
                      authentic, high-quality meals.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={cardVariants} whileHover="hover">
                <Card className="bg-amber-50 dark:bg-amber-900 border-amber-200 dark:border-amber-700">
                  <CardContent className="p-6">
                    <Users className="text-amber-600 h-8 w-8 mb-4" />
                    <CardTitle className="text-xl font-bold">
                      Community
                    </CardTitle>
                    <CardDescription className="mt-2 text-gray-600 dark:text-gray-300">
                      Join a vibrant network of cooks and food lovers sharing
                      stories and meals.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.section>

      
      </main>
    </div>
  );
};

export default MomszykaStory;
