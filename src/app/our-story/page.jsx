"use client";
import React, { useState } from "react";
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
import { Heart, ChefHat, Truck, PackageCheck } from "lucide-react";
import { JoinAsMomDialog } from "@/components/Form";

const AboutMomszyka = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [joinOpen, setJoinOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const features = [
    {
      icon: ChefHat,
      title: "Truly Home-Style Meals",
      description:
        "Inspired by everyday Indian kitchens — simple, soulful, and satisfying. No restaurant-style heaviness, only honest flavors.",
      gradient: "from-[#f25c41] to-[#f79e33]",
    },
    {
      icon: Truck,
      title: "Reliable Daily Delivery",
      description:
        "We understand your routine. We ensure on-time delivery so your meals fit perfectly into your day without stress.",
      gradient: "from-[#f79e33] to-[#f25c41]",
    },
    {
      icon: PackageCheck,
      title: "Clean & Safe Packaging",
      description:
        "Hygiene is non-negotiable. Every tiffin is packed in food-grade, sealed containers to maintain freshness and safety.",
      gradient: "from-[#f25c41] to-[#f79e33]",
    },
  ];

  const values = [
    { emoji: "❤️", text: "Made with love, just like home" },
    { emoji: "🌿", text: "Fresh ingredients, every single day" },
    { emoji: "🧑‍🍳", text: "FSSAI certified" },
  ];

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

  const buttonVariants = {
    hover: {
      scale: 1.08,
      transition: { duration: 0.3, type: "spring", stiffness: 200 },
    },
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
              description:
                "Momszyka connects home cooks with food lovers, celebrating authentic, home-cooked meals.",
              url: "https://momszyka.com",
              sameAs: [
                "https://instagram.com/momszyka",
                "https://wa.me/919304531876",
              ],
            }),
          }}
        />
      </Head>

      <div className="flex flex-col min-h-screen bg-gradient-to-b from-amber-50 to-white dark:from-amber-900 dark:to-amber-800 font-['Lato'] text-amber-800 dark:text-amber-100 leading-relaxed">
        <main className="flex-grow">
          {/* Hero Section */}
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
            <div className="absolute inset-0 bg-black/20"></div>
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
                Momszyka honors the love, care, and creativity mothers bring to
                every meal. Join a community where passion for cooking meets the
                joy of sharing.
              </motion.p>
              <motion.div variants={containerVariants}>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <motion.button
                      className="inline-flex items-center justify-center bg-amber-600 text-white text-lg font-medium px-8 py-4 rounded-full hover:bg-amber-700 shadow-lg"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      Join Our Community
                    </motion.button>
                  </DialogTrigger>

                  <DialogContent className="bg-amber-50 dark:bg-amber-900 rounded-2xl max-w-md">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-['Playfair_Display'] text-amber-800 dark:text-amber-100 flex items-center gap-3">
                        <Heart className="w-6 h-6 text-amber-600" />
                        Become a Part of Momszyka
                      </DialogTitle>
                      <DialogDescription className="text-gray-600 dark:text-gray-300 text-base">
                        Become part of Momszyka to explore home-cooked meals or
                        share your culinary creations with food lovers
                        everywhere.
                      </DialogDescription>
                    </DialogHeader>

                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                      <motion.a
                        href="/subscribe"
                        className="inline-flex items-center justify-center text-center bg-amber-600 text-white rounded-full py-3 px-5 font-medium hover:bg-amber-700 transition-colors shadow-sm"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        Discover dishes crafted with love by talented home
                        cooks.
                      </motion.a>

                      <motion.button
                        onClick={() => setJoinOpen(true)}
                        className="inline-flex items-center justify-center text-center bg-amber-100 text-amber-800 hover:bg-amber-200 dark:bg-amber-800 dark:text-amber-100 dark:hover:bg-amber-700 rounded-full py-3 px-5 font-medium transition-colors shadow-sm"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        Join as Cook
                      </motion.button>

                      <JoinAsMomDialog
                        open={joinOpen}
                        onOpenChange={setJoinOpen}
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            </div>
          </motion.section>

          {/* About Section */}
          <section
            id="about"
            className="py-4 md:py-6 relative overflow-hidden bg-[#F9FAFB]"
          >
            <div className="max-w-[1350px] mx-auto px-4 md:px-6 lg:px-8">
              {/* Header */}
              <motion.div
                className="text-center mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl md:text-6xl font-['Playfair_Display'] font-bold text-[var(--color-new)] mb-4">
                  About Momszyka
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  At Momszyka, we believe food is more than just a meal — it's a
                  feeling of care, comfort, and home.
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-12 items-center mb-8">
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -inset-4 bg-gradient-to-br from-[#f25c41]/30 to-[#f79e33]/30 rounded-[3rem] blur-2xl"></div>
                  <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3]">
                    <Image
                      src="/about_img.png"
                      alt="Home-style meal"
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>

                {/* Mission */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <h3 className="text-4xl font-['Playfair_Display'] font-bold text-gray-900">
                    Our Mission
                  </h3>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Our mission is simple: to bring real home-style food to
                    students, working professionals, and families who miss the
                    warmth of{" "}
                    <strong className="font-bold text-[#f25c41]">
                      ghar ka khana
                    </strong>
                    .
                  </p>
                  <div className="bg-gradient-to-r from-[#f25c41]/10 to-[#f79e33]/10 rounded-2xl p-5 border-l-4 border-[#f25c41]">
                    <p className="text-lg text-[#2D3A3A] font-['Yatra_One',_cursive] italic">
                      "Every meal is prepared using fresh ingredients and
                      traditional recipes, ensuring taste that feels familiar —
                      just like food cooked by a mom."
                    </p>
                  </div>
                  <p className="text-2xl font-['Playfair_Display'] font-bold text-[var(--color-new)]">
                    Balanced nutrition and soulful flavors for your daily
                    routine.
                  </p>

                  {/* Values Pills */}
                  <div className="flex flex-nowrap gap-2.5 pt-1 overflow-x-auto">
                    {values.map((value, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className="flex items-center gap-2 bg-white px-3 py-2.5 rounded-full shadow-md border border-gray-200 hover:border-[#f25c41]/30 hover:shadow-lg transition-all whitespace-nowrap"
                      >
                        <span className="text-xl">{value.emoji}</span>
                        <span className="text-gray-700 text-xs font-medium">
                          {value.text}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-center text-gray-900 mb-4">
                  What Makes Momszyka Special?
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -8 }}
                      className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all"
                    >
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center text-white mb-4`}
                      >
                        <feature.icon size={32} />
                      </div>
                      <h4 className="text-2xl font-['Playfair_Display'] font-bold mb-3 text-gray-900">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default AboutMomszyka;
