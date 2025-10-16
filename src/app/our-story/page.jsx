"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Utensils, ChefHat, Users, Heart, Sparkles } from "lucide-react";
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

// Sample meal category images (replace with actual URLs in production)
const mealCategories = [
  {
    title: "Comfort Foods",
    desc: "Hearty classics that warm the soul, from family-favorite pies to rich casseroles.",
    price: 12.99,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8c9d0e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z2A3B4C5D6E7F8G9H0I1J2K3L4M5N6O7P8Q9R0S1T2U3V4W5X6Y7Z8a9b0c1d2e3f4g5h6i7j8k9l0m1n2o3p4q5r6s7t8u9v0w1x2y3z4",
  },
  {
    title: "Global Flavors",
    desc: "Explore international dishes lovingly prepared by home cooks who bring the world to your plate.",
    price: 14.99,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9d0e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z2A3B4C5D6E7F8G9H0I1J2K3L4M5N6O7P8Q9R0S1T2U3V4W5X6Y7Z8a9b0c1d2e3f4g5h6i7j8k9l0m1n2o3p4",
  },
  {
    title: "Healthy Bites",
    desc: "Nourishing and wholesome meals designed for a balanced lifestyle without compromising flavor.",
    price: 10.99,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z2A3B4C5D6E7F8G9H0I1J2K3L4M5N6O7P8Q9R0S1T2U3V4W5X6Y7Z8a9b0c1d2e3f4g5h6i7j8k9",
  },
];

const MomszykaStory = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Parallax effect for hero
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  // Animation variants with spring for warmth
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.15, type: "spring", stiffness: 80 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, rotate: -2 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.6, type: "spring" } },
    hover: { y: -10, boxShadow: "0 10px 20px rgba(0,0,0,0.1)", transition: { duration: 0.3 } },
  };

  const buttonVariants = {
    hover: { scale: 1.08, transition: { duration: 0.3, type: "spring", stiffness: 200 } },
    tap: { scale: 0.92 },
  };

  return (
    <>
      <Head>
        <title>Momszyka - Celebrating Home-Cooked Meals with Love</title>
        <meta
          name="description"
          content="Momszyka honors the love and creativity of home cooks. Join our community to explore or share authentic, home-cooked meals."
        />
        <meta
          name="keywords"
          content="home-cooked meals, Momszyka, community cooking, authentic food, sustainable cooking"
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
              description: "Momszyka connects home cooks with food lovers, celebrating authentic, home-cooked meals.",
              url: "https://momszyka.com",
              sameAs: ["https://instagram.com/momszyka", "https://wa.me/919304531876"],
            }),
          }}
        />
      </Head>

      <div className="flex flex-col min-h-screen bg-gradient-to-b from-amber-50 to-white dark:from-amber-900 dark:to-amber-800 font-['Lato'] text-amber-800 dark:text-amber-100 leading-relaxed">
        <main className="flex-grow">
          {/* Hero Section - Parallax with warm overlay */}
          <motion.section
            className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="absolute inset-0" style={{ y }}>
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-JpHlz2GvfaN-ejNLHdVg6f2mn5mUy7rRNwGPmBhwe_TbCeMM-G2iREQz6qNtK-3F751LhQxbghy7adHo4z771eJg_rJZsZY7IJCjeNQPeEtueXpPGhR0y027DYI6efuNXGlhF5fuz1GM5nDLJATfVswHef5mc0C3FqhiN2mVugFkWswj74FEad6OQEEwo0t1pCbHIMDgXzs9xNqtSvQ-b7UUPyrM2taxfzlisIZ2YZzZOX04NsdNr7d4T3nNnrUJH4aPpLZNAWs"
                alt="Warm family kitchen scene"
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
                Celebrating the Heart of Every Home
              </motion.h1>
              <motion.p
                className="text-lg sm:text-xl max-w-3xl mx-auto text-white/90 mb-8 font-light"
                variants={containerVariants}
              >
                Momszyka honors the love, care, and creativity mothers bring to every meal. Join a community where passion for cooking meets the joy of sharing.
              </motion.p>
              <motion.div variants={containerVariants}>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button
                      className="bg-amber-600 text-white text-lg font-medium px-8 py-4 rounded-full hover:bg-amber-700 shadow-lg"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      Join Our Community
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-amber-50 dark:bg-amber-900 rounded-2xl max-w-md">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-['Playfair_Display'] text-amber-800 dark:text-amber-100 flex items-center gap-3">
                        <Heart className="w-6 h-6 text-amber-600" />
                        Become a Part of Momszyka
                      </DialogTitle>
                      <DialogDescription className="text-gray-600 dark:text-gray-300 text-base">
                        Become part of Momszyka to explore home-cooked meals or share your culinary creations with food lovers everywhere.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                      <Button
                        className="bg-amber-600 text-white rounded-full py-3"
                        asChild
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <a href="/menu">Discover dishes crafted with love by talented home cooks.</a>
                      </Button>
                      <Button
                        className="bg-amber-100 text-amber-800 hover:bg-amber-200 dark:bg-amber-800 dark:text-amber-100 dark:hover:bg-amber-700 rounded-full py-3"
                        asChild
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <a href="/cooks">Share your recipes and turn your culinary skills into opportunities.</a>
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            </div>
          </motion.section>

          {/* Story/About Section - Warm narrative with image */}
          <motion.section
            className="py-20"
            variants={containerVariants}
            initial="hidden"
            viewport={{ once: true }}
            whileInView="visible"
          >
            <div className="container mx-auto max-w-7xl px-6">
              <h2 className="text-4xl sm:text-5xl font-['Playfair_Display'] font-extrabold text-amber-800 dark:text-amber-100 text-center mb-12">
                Empowering Home Cooks, One Meal at a Time
              </h2>
              <div className="grid gap-12 md:grid-cols-2 items-center">
                <div className="space-y-8 prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
                  <div>
                    <h3 className="text-2xl font-['Playfair_Display'] font-bold text-amber-800 dark:text-amber-100">Passion Meets Opportunity</h3>
                    <p>
                      Momszyka is designed to give mothers and home cooks a platform to showcase their culinary talent. Every recipe shared connects them with people who appreciate genuine, home-cooked food.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-['Playfair_Display'] font-bold text-amber-800 dark:text-amber-100">Community at the Core</h3>
                    <p>
                      Our platform is more than recipes—it’s a network where cooks and food enthusiasts inspire, learn, and celebrate together. Through shared meals and stories, every user becomes part of our family.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-['Playfair_Display'] font-bold text-amber-800 dark:text-amber-100">Supporting Quality & Sustainability</h3>
                    <p>
                      We encourage safe, high-quality meals made from fresh, local ingredients. Sustainable cooking practices are promoted to create a positive impact on both families and the planet.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-['Playfair_Display'] font-bold text-amber-800 dark:text-amber-100">Join the Movement</h3>
                    <p>
                      Whether you’re sharing your favorite dishes or savoring authentic home cooking, Momszyka invites you to take part in a movement that values care, creativity, and connection.
                    </p>
                  </div>
                </div>
                <motion.div
                  className="rounded-2xl overflow-hidden shadow-lg"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp-BPMDWEOvMcpO8Cuo1Sad2a6S0htJIejCWFkZgw-GJDX0evBCZgklqhlm-AVkjQAHCuIels4aZnvo_wlnkU1bF0cCPiFibzOJeBTMp82HIDB07bDNUwynNJaGpBn_XOfPvXDxPWVOEG21sOjmfNQdHf6bRRKKFBPFhzdENlbkYgp9vnXaZpGUwkC4qgm77BcW83lJQrppNpHa3puS0puX_ZOwwiQia9jWwEl-DPJrntuw449-3fW_yjUy4wcZw7zNopZZRc565o"
                    alt="A family enjoying a home-cooked meal together"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Featured Meal Categories - Interactive cards */}
          <motion.section
            className="py-20 bg-amber-100 dark:bg-amber-800"
            variants={containerVariants}
            initial="hidden"
            viewport={{ once: true }}
            whileInView="visible"
          >
            <div className="container max-w-7xl mx-auto px-6">
              <h2 className="text-4xl sm:text-5xl font-['Playfair_Display'] font-extrabold text-amber-800 dark:text-amber-100 text-center mb-12">
                Meals That Bring People Together
              </h2>
              <div className="grid gap-8 md:grid-cols-3">
                {mealCategories.map((category, index) => (
                  <motion.div key={index} variants={cardVariants} whileHover="hover">
                    <Card className="bg-amber-50 dark:bg-amber-900 border-amber-200 dark:border-amber-700 rounded-2xl overflow-hidden shadow-md">
                      <div className="relative">
                        <Image
                          src={category.image}
                          alt={`${category.title} meal`}
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
                          <p className="text-sm font-medium">Starting at ${category.price}</p>
                        </motion.div>
                      </div>
                      <CardContent className="p-6">
                        <CardTitle className="text-xl font-['Playfair_Display'] text-amber-800 dark:text-amber-100">{category.title}</CardTitle>
                        <CardDescription className="mt-2 text-base text-gray-600 dark:text-gray-300">
                          {category.desc}
                        </CardDescription>
                        <div className="mt-4">
                          <Button
                            variant="outline"
                            className="w-full rounded-full border-amber-300 text-amber-600 hover:bg-amber-100 dark:hover:bg-amber-800"
                            asChild
                          >
                            <a href="/menu">Explore</a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Why Momszyka - Clean and inviting cards */}
          <motion.section
            className="py-20"
            variants={containerVariants}
            initial="hidden"
            viewport={{ once: true }}
            whileInView="visible"
          >
            <div className="container max-w-7xl mx-auto px-6">
              <h2 className="text-4xl sm:text-5xl font-['Playfair_Display'] font-extrabold text-amber-800 dark:text-amber-100 text-center mb-12">
                Why Choose Momszyka?
              </h2>
              <div className="grid gap-8 md:grid-cols-3">
                {[
                  {
                    icon: ChefHat,
                    title: "Empowerment",
                    desc: "Momszyka helps cooks share their culinary expertise and build confidence in their skills.",
                  },
                  {
                    icon: Utensils,
                    title: "Authenticity",
                    desc: "We celebrate home-cooked meals made with real ingredients and genuine care.",
                  },
                  {
                    icon: Users,
                    title: "Connection",
                    desc: "Build meaningful relationships with a community of passionate cooks and food lovers.",
                  },
                ].map((item, index) => (
                  <motion.div key={index} variants={cardVariants} whileHover="hover">
                    <Card className="bg-amber-50 dark:bg-amber-900 border-amber-200 dark:border-amber-700 rounded-2xl shadow-md">
                      <CardContent className="p-6 text-center">
                        <div className="p-4 bg-amber-100 dark:bg-amber-800 rounded-full text-amber-600 inline-flex mb-4">
                          <item.icon className="h-8 w-8" />
                        </div>
                        <CardTitle className="text-xl font-['Playfair_Display'] text-amber-800 dark:text-amber-100">{item.title}</CardTitle>
                        <CardDescription className="mt-2 text-base text-gray-600 dark:text-gray-300">{item.desc}</CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        </main>
      </div>
    </>
  );
};

export default MomszykaStory;