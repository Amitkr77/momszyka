"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Utensils, Users, DollarSign, Heart, ChefHat, Sparkles } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
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
import { Input } from "@/components/ui/input";

// Sample cook data with refined descriptions
const cooks = [
  {
    name: "Maria G.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOKgYrPh7MIEr6fCSlwdlCnJg-pffmSV0Q0m0FNBtDRozrbjqgvLoF8rTZgIAgo_IY8w08Yzq3A-tj3WgYOCX3cLpuVlYOZYJNuM-_lA18dEz4wDXThx9wRxGropkQIwwyjwnF6P1XAz0qU3E7pMqhVttRES0DHC8pR639jzM2CS752wtwalfaJhfwrNE4pB_VeqY5vE0AeSVDFMSAlTEQ1vzk_1TWjEZKo2ciKH_7eVuGOoQNMmN2ogDN_ak-59T5tjO3mb02k0s",
    desc: "Maria brings Italy’s heart to your plate — her recipes are inspired by family traditions passed down for generations.",
    signatureDish: "Lasagna",
    rating: 4.9,
  },
  {
    name: "Aisha K.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCORzqswqT2ia1SchrA2-ATJuauxtgxsm8a5WVzqQUrnfA7P_QRahwHMB_pa-u0MmK_JjrCDs_kMDv5NxgUGVm991_lUAIbuOLP8yeB6E6GZmekX7RpOkPQ608hceXpAfvyktNCvYyozvBAaO718h8mFsJe7N7ENYM_K4aiie5FHlU3KDsqEPAsV2lIFJtNJg56QW_AiXKVu9Igy4o-8SANjChzyJwBa73mkooCDhG6AT9ZIFApxpg1VM7HPOv1jFZ1ymav9hHaUQQ",
    desc: "Aisha’s vibrant Indian dishes, from butter chicken to spicy biryani, are a love letter to her heritage.",
    signatureDish: "Butter Chicken",
    rating: 4.8,
  },
  {
    name: "Carlos M.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA73bdZWoYPtbugHof2K_odtINA-Vs1X2nRcF8XC10HlMMVZwZ_xtZuEwi4-0qTC4BwSwAJCc8al3_yo7cZqYRhnmSop3ck_sp238uFNVXKAz3bvK5O7xRQMeSX6OfO2a7GpCIvX_Uhe_xlUYoytRBBw_5gxG0WJbIoRii_d_s1AhZZRJLSaZC8z1qQwpKcuYVLfr9ZL2zMvY6kdflVr2Toa391-1oBbttK8ycE6AqfShZc0Os8iAim-gcA6M87_MWU0Ub6rjWQUVU",
    desc: "Carlos crafts bold Mexican flavors, turning tacos and enchiladas into a fiesta of taste.",
    signatureDish: "Tacos",
    rating: 4.7,
  },
];

const MomszykaCooks = () => {
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
        <title>Become a Momszyka Home Chef - Share Your Culinary Passion</title>
        <meta
          name="description"
          content="Join Momszyka as a home chef and share your love for cooking. Earn a flexible income, connect with your community, and bring joy with every homemade meal."
        />
        <meta
          name="keywords"
          content="home chef, Momszyka cook, homemade food, earn from cooking, community cooking"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lato:wght@400;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Momszyka",
              description: "Join Momszyka to cook and share homemade meals with your community.",
              url: "https://momszyka.com/cooks",
              sameAs: ["https://instagram.com/momszyka", "https://wa.me/919304531876"],
            }),
          }}
        />
      </Head>

      <div className="flex flex-col min-h-screen bg-gradient-to-b from-amber-50 to-white dark:from-amber-900 dark:to-amber-800 font-['Lato'] text-amber-800 dark:text-amber-100 leading-relaxed">
        <main className="flex flex-1 flex-col items-center">
          <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Hero Section - Enhanced with parallax, layered text, and warm overlay */}
            <motion.section
              className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden rounded-2xl"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div className="absolute inset-0" style={{ y }}>
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9V9QGlRkcmYbJWvdOSJnc-Y-D4wr1rpIGh8HOx8gl1HUOc5mpL8Wmo_QfODVhmJJsgG0NQPNtGMv4hVvD6NqrY7GwM1Zn3wUYqKFdzCcwZndeNNiYjMuHZ4O5PO8uWb_prWyIncjt_csrI1Vxw7IUj4T_Tlne9es1FnIl0i9TUJXLbFw5NTgGr6_iSK5RKat-sx3OUZnQy-HNmhzFqLSOpW4cgd1V6xEK4zU_h_zsJtaAmoK0EyS6GPpdQ-2zuuScmRqfmLp2A54"
                  alt="Warm home kitchen scene"
                  layout="fill"
                  objectFit="cover"
                  priority
                  className="brightness-75"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-b from-amber-600/30 to-amber-800/50"></div>
              <div className="relative z-10 text-center max-w-4xl px-6">
                <motion.h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-['Playfair_Display'] font-extrabold text-white tracking-tight mb-6"
                  variants={containerVariants}
                >
                  Cook. Connect. Celebrate Homemade.
                </motion.h1>
                <motion.p
                  className="text-lg sm:text-xl text-white/90 mb-8 font-light"
                  variants={containerVariants}
                >
                  Turn your kitchen into a place of joy and opportunity — share your homemade meals, earn with flexibility, and bring comfort food to your community through Momszyka.
                </motion.p>
                <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={containerVariants}>
                  <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                    <Button
                      className="bg-amber-600 text-white text-lg font-medium px-8 py-4 rounded-full hover:bg-amber-700 shadow-lg"
                      onClick={() => setIsDialogOpen(true)}
                    >
                      Start Cooking Today
                    </Button>
                  </motion.div>
                  <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                    <Button
                      variant="outline"
                      className="border-2 border-white text-white text-lg font-medium px-8 py-4 rounded-full hover:bg-white/20"
                      onClick={() => window.location.href = "/menu"}
                    >
                      Explore Our Meals
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.section>

            {/* Why Cook Section - Warm cards with icons and subtle hover animations */}
            <motion.section
              className="py-20"
              variants={containerVariants}
              initial="hidden"
              viewport={{ once: true }}
              whileInView="visible"
            >
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-['Playfair_Display'] font-extrabold text-amber-800 dark:text-amber-100 tracking-tight mb-6">
                  Why Cook with Momszyka?
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Join a movement that celebrates authentic, home-cooked meals made with love. Whether you’re a mom, a foodie, or a passionate chef, Momszyka gives you the space to share your flavors, earn at your pace, and grow within a caring community.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Utensils,
                    title: "Cook on Your Terms",
                    desc: "Create and deliver meals when it fits your day — from your own kitchen, your own way.",
                  },
                  {
                    icon: Users,
                    title: "Share Your Story Through Food",
                    desc: "Every meal carries a story. Build lasting bonds with neighbors who appreciate real, homemade goodness.",
                  },
                  {
                    icon: DollarSign,
                    title: "Earn Doing What You Love",
                    desc: "Turn your cooking passion into purpose. Momszyka ensures secure payments and transparency every step.",
                  },
                ].map((item, index) => (
                  <motion.div key={index} variants={cardVariants} whileHover="hover">
                    <Card className="bg-amber-50 dark:bg-amber-900 border-amber-200 dark:border-amber-700 rounded-2xl shadow-md">
                      <CardContent className="p-8 text-center">
                        <div className="p-4 bg-amber-100 dark:bg-amber-800 rounded-full text-amber-600 inline-flex mb-6">
                          <item.icon className="h-8 w-8" />
                        </div>
                        <CardTitle className="text-xl font-['Playfair_Display'] font-bold text-amber-800 dark:text-amber-100">{item.title}</CardTitle>
                        <CardDescription className="mt-3 text-base text-gray-600 dark:text-gray-300">{item.desc}</CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Meet Our Home Chefs - Interactive cards with hover recipe peek */}
            <motion.section
              className="py-20 bg-gradient-to-b from-white to-amber-50 dark:from-amber-900 dark:to-amber-800"
              variants={containerVariants}
              initial="hidden"
              viewport={{ once: true }}
              whileInView="visible"
            >
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-['Playfair_Display'] font-extrabold text-amber-800 dark:text-amber-100 tracking-tight mb-6">
                  Meet Our Home Chefs
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Discover the amazing home cooks who turn everyday ingredients into moments of joy. Each dish is made with care, tradition, and love — straight from their kitchens to yours.
                </p>
              </div>
              <div className="mt-12 grid gap-8 md:grid-cols-3">
                {cooks.map((cook, index) => (
                  <motion.div key={index} variants={cardVariants} whileHover="hover">
                    <Card className="bg-white dark:bg-amber-900 border-amber-200 dark:border-amber-700 rounded-2xl overflow-hidden shadow-md">
                      <div className="relative">
                        <Image
                          src={cook.image}
                          alt={`${cook.name} in her kitchen`}
                          width={400}
                          height={300}
                          className="w-full h-64 object-cover"
                        />
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 bg-amber-600/80 text-white p-4 text-center"
                          initial={{ opacity: 0, y: 20 }}
                          whileHover={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-sm font-medium">Signature: {cook.signatureDish}</p>
                        </motion.div>
                      </div>
                      <CardContent className="p-6">
                        <CardTitle className="text-xl font-['Playfair_Display'] text-amber-800 dark:text-amber-100">{cook.name}</CardTitle>
                        <CardDescription className="mt-2 text-base text-gray-600 dark:text-gray-300">
                          {cook.desc} <br />
                          <span className="text-amber-600 font-bold">★★★★★ ({cook.rating}/5)</span>
                        </CardDescription>
                        <div className="mt-4 flex justify-between items-center">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="outline"
                                className="rounded-full border-amber-300 text-amber-600 hover:bg-amber-100 dark:hover:bg-amber-800"
                              >
                                View Menu
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="bg-amber-50 dark:bg-amber-900 rounded-2xl max-w-md">
                              <DialogHeader>
                                <DialogTitle className="text-2xl font-['Playfair_Display'] text-amber-800 dark:text-amber-100">
                                  {cook.name}  &apos;s Menu
                                </DialogTitle>
                                <DialogDescription className="text-gray-600 dark:text-gray-300 text-base">
                                  Explore {cook.name}&apos;s authentic dishes, including her famous {cook.signatureDish.toLowerCase()}. Order now for a taste of home!
                                </DialogDescription>
                              </DialogHeader>
                              <Button className="bg-amber-600 text-white rounded-full mt-4">Order Now</Button>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* FAQ Section - Warm, human tone with accordion */}
            <motion.section
              className="py-20"
              variants={containerVariants}
              initial="hidden"
              viewport={{ once: true }}
              whileInView="visible"
            >
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-['Playfair_Display'] font-extrabold text-amber-800 dark:text-amber-100 tracking-tight mb-6">
                  Got Questions? We&apos;re Here!
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Let’s make your first step as a Momszyka cook easy and confident.
                </p>
              </div>
              <div className="mt-12 max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {[
                    {
                      q: "How do I become a Momszyka cook?",
                      a: "Sign up, complete a quick onboarding, and craft your menu. We’ll walk you through every step so you can start cooking with confidence.",
                    },
                    {
                      q: "What are the kitchen requirements?",
                      a: "A clean, safe kitchen and love for food are all you need. We’ll guide you on meeting local food safety standards.",
                    },
                    {
                      q: "How much can I earn?",
                      a: "Your income grows with your passion — cooks earn based on their menu and orders, with secure weekly payments.",
                    },
                    {
                      q: "Can I choose my menu?",
                      a: "Absolutely! Momszyka celebrates creativity — craft a menu that showcases your unique flavor and style.",
                    },
                  ].map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index + 1}`}
                      className="border border-amber-200 dark:border-amber-700 rounded-lg"
                    >
                      <AccordionTrigger className="px-6 py-4 text-left text-amber-800 dark:text-amber-100">
                        <span className="flex items-center gap-3">
                          <Sparkles className="h-5 w-5 text-amber-600" />
                          {faq.q}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4 text-base text-gray-600 dark:text-gray-300">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </motion.section>

            {/* Final CTA - Bold and inviting with gradient background */}
            <motion.section
              className="py-20 bg-gradient-to-r from-amber-600 to-amber-800 text-white rounded-2xl mb-16"
              variants={containerVariants}
              initial="hidden"
              viewport={{ once: true }}
              whileInView="visible"
            >
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl sm:text-5xl font-['Playfair_Display'] font-extrabold tracking-tight mb-6">
                  Your Kitchen. Your Rules. Your Reward.
                </h2>
                <p className="text-lg text-white/90 mb-8">
                  Join a growing family of home chefs redefining food delivery — one homemade meal at a time.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                    <Button className="bg-white text-amber-800 text-lg font-medium px-8 py-4 rounded-full hover:bg-amber-100 shadow-lg">
                      Join as a Home Chef
                    </Button>
                  </motion.div>
                  <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                    <Button
                      variant="outline"
                      className="border-2 border-white text-white text-lg font-medium px-8 py-4 rounded-full hover:bg-white/20"
                    >
                      Explore Our Meals
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.section>

            {/* Sign-Up Dialog - Warm and welcoming */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogContent className="bg-amber-50 dark:bg-amber-900 rounded-2xl max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-3xl font-['Playfair_Display'] text-amber-800 dark:text-amber-100 flex items-center gap-3">
                    <Heart className="w-7 h-7 text-amber-600" />
                    Start Your Cooking Journey
                  </DialogTitle>
                  <DialogDescription className="text-gray-600 dark:text-gray-300 text-lg">
                    Share your culinary passion with your community. Sign up now to become a Momszyka home chef!
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-6 flex flex-col gap-4">
                  <Input type="text" placeholder="Your Name" className="rounded-full p-3" />
                  <Input type="email" placeholder="Your Email" className="rounded-full p-3" />
                  <Button className="bg-amber-600 text-white rounded-full py-3">Sign Up</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </main>
      </div>
    </>
  );
};

export default MomszykaCooks;