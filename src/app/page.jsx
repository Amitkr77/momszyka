"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
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
  MapPin,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Head from "next/head";
import CountUp from "react-countup"; // Add this library for animated counters: npm install react-countup

// Enhanced sample data with more details for immersion
const kitchenImages = [
  {
    src: "/kitchen/first_image.jpg",
    alt: "Cozy home kitchen with fresh ingredients and warm lighting",
  },
  { src: "/kitchen/second_image.jpg", alt: "Mom preparing a traditional meal with family recipes" },
  { src: "/kitchen/third_image.jpg", alt: "Homemade thali being plated with care" },
  {
    src: "/kitchen/fourth_image.jpg",
    alt: "Freshly baked naan in a home oven, steaming hot",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    image: "/testimonials/sarah.jpg",
    alt: "Sarah M. profile picture",
    rating: 5,
    text: "Momszyka has been a game-changer for our family! The meals are delicious, healthy, and save me so much time. It's like having a mom cook for you every day!",
  },
  {
    name: "David L.",
    image: "/testimonials/david.jpg",
    alt: "David L. profile picture",
    rating: 5,
    text: "I love the variety of cuisines on Momszyka. From North Indian to Italian, every dish feels like home. The customization options are fantastic!",
  },
  {
    name: "Emily R.",
    image: "/testimonials/emily.jpg",
    alt: "Emily R. profile picture",
    rating: 4,
    text: "The food is amazing, and delivery is always on time. Portions could be larger, but the warmth and care in every meal make up for it!",
  },
  // Added more for carousel variety
  {
    name: "Raj K.",
    image: "/testimonials/raj.jpg",
    alt: "Raj K. profile picture",
    rating: 5,
    text: "Authentic flavors that remind me of my childhood. Momszyka brings the essence of home cooking right to my door!",
  },
];

const Momszyka = () => {
  const [visible, setVisible] = useState(true);
  const [isDiscountPopupOpen, setIsDiscountPopupOpen] = useState(false);
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({ cuisine: "", dietary: "" });
  const [isQuizOpen, setIsQuizOpen] = useState(false); // New state for quiz dialog

  // Auto-dismiss sticky CTA after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  // Show discount popup on page load
  useEffect(() => {
    setIsDiscountPopupOpen(true);
  }, []);

  // Parallax effect for hero
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  // Enhanced animation variants with spring for a warmer feel
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.15, type: "spring", stiffness: 80 },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.08, transition: { duration: 0.3, type: "spring", stiffness: 200 } },
    tap: { scale: 0.92 },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, rotate: -2 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.6, ease: "easeOut", type: "spring" },
    },
    hover: { y: -10, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" },
  };

  const dialogVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut", type: "spring" },
    },
  };

  const counterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  // Quiz logic with enhanced feedback
  const handleQuizAnswer = (question, answer) => {
    setQuizAnswers({ ...quizAnswers, [question]: answer });
    setQuizStep(quizStep + 1);
  };

  const renderQuizContent = () => {
    switch (quizStep) {
      case 0:
        return (
          <motion.div className="text-center" variants={containerVariants} initial="hidden" animate="visible">
            <h3 className="text-2xl font-bold text-[var(--color-new)] mb-6 flex items-center justify-center gap-2">
              <Sparkles className="w-6 h-6 text-[var(--color-primary)]" />
              What's Your Favorite Cuisine?
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {["Indian", "Italian", "Mexican", "Chinese"].map((cuisine) => (
                <motion.div key={cuisine} variants={buttonVariants} whileHover="hover" whileTap="tap">
                  <Button
                    className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-new)] text-white rounded-xl py-3 text-lg"
                    onClick={() => handleQuizAnswer("cuisine", cuisine)}
                  >
                    {cuisine}
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      case 1:
        return (
          <motion.div className="text-center" variants={containerVariants} initial="hidden" animate="visible">
            <h3 className="text-2xl font-bold text-[var(--color-new)] mb-6 flex items-center justify-center gap-2">
              <Heart className="w-6 h-6 text-[var(--color-primary)]" />
              Any Dietary Preferences?
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {["Vegetarian", "Vegan", "Gluten-Free", "No Preference"].map((diet) => (
                <motion.div key={diet} variants={buttonVariants} whileHover="hover" whileTap="tap">
                  <Button
                    className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-new)] text-white rounded-xl py-3 text-lg"
                    onClick={() => handleQuizAnswer("dietary", diet)}
                  >
                    {diet}
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div className="text-center" variants={containerVariants} initial="hidden" animate="visible">
            <h3 className="text-2xl font-bold text-[var(--color-new)] mb-6 flex items-center justify-center gap-2">
              <Award className="w-6 h-6 text-[var(--color-primary)]" />
              Your Personalized Picks Are Ready!
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Based on your love for <span className="font-bold text-[var(--color-primary)]">{quizAnswers.cuisine}</span> cuisine and 
              <span className="font-bold text-[var(--color-primary)]"> {quizAnswers.dietary}</span> preferences, discover meals crafted with mom's touch!
            </p>
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Button
                className="bg-[var(--color-primary)] hover:bg-[var(--color-new)] text-white rounded-xl px-8 py-3 text-lg"
                onClick={() => {
                  setIsQuizOpen(false);
                  setQuizStep(0);
                  // Redirect to recommendations page or section
                  window.location.href = "/recommendations";
                }}
              >
                Explore Your Meals
              </Button>
            </motion.div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Head>
        <title>Momszyka - Home-Cooked Meals Delivered with Love</title>
        <meta
          name="description"
          content="Discover fresh, home-cooked meals made by passionate moms in your city. Healthy, authentic, and delivered warm with a touch of love."
        />
        <meta
          name="keywords"
          content="home-cooked meals, homemade food delivery, moms cooking, fresh meal delivery, authentic Indian food, healthy eating"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lato:wght@400;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Momszyka",
              description:
                "Momszyka delivers fresh, home-cooked meals made by moms in your city.",
              url: "https://momszyka.com",
              telephone: "+919304531876",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
              sameAs: [
                "https://instagram.com/momszyka",
                "https://wa.me/919304531876",
              ],
            }),
          }}
        />
      </Head>

      <div className="flex flex-col min-h-screen bg-[var(--color-light)] font-['Lato'] text-[#1b140d] leading-relaxed" style={{ "--font-heading": "Playfair Display" }}>
        {/* Discount Popup - Enhanced with confetti animation or subtle particles */}
        {/* <Dialog open={isDiscountPopupOpen} onOpenChange={setIsDiscountPopupOpen}>
          <DialogContent className="bg-white rounded-2xl max-w-md shadow-2xl border border-[var(--color-primary)]/20" aria-modal="true">
            <motion.div variants={dialogVariants} initial="hidden" animate="visible">
              <DialogHeader>
                <DialogTitle className="text-3xl font-['Playfair_Display'] text-[var(--color-new)] flex items-center gap-3">
                  <Sparkles className="w-7 h-7 text-[var(--color-primary)] animate-pulse" />
                  Exclusive Welcome Offer!
                </DialogTitle>
                <DialogDescription className="text-gray-600 text-lg mt-2">
                  Dive into the warmth of mom's cooking with <span className="font-bold text-[var(--color-primary)]">20% OFF</span> your first order. Fresh, loving meals await!
                </DialogDescription>
              </DialogHeader>
              <div className="mt-6">
                <p className="text-gray-700 mb-4 text-center text-base">Enter your email to unlock your discount and join the family!</p>
                <div className="flex gap-3">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 p-3 border border-gray-200 rounded-full focus:ring-2 focus:ring-[var(--color-primary)] shadow-inner"
                  />
                  <Button
                    className="bg-[var(--color-primary)] hover:bg-[var(--color-new)] text-white rounded-full px-7 text-base font-medium"
                    onClick={() => setIsDiscountPopupOpen(false)}
                  >
                    Claim Now
                  </Button>
                </div>
                <p className="text-sm text-gray-500 mt-3 text-center">
                  <a href="/privacy" className="underline hover:text-[var(--color-primary)]">Privacy respected</a>
                </p>
              </div>
              <DialogFooter className="mt-6 justify-center">
                <Button
                  variant="ghost"
                  onClick={() => setIsDiscountPopupOpen(false)}
                  className="text-[var(--color-primary)] hover:bg-[var(--color-light)]"
                >
                  Maybe Later
                </Button>
              </DialogFooter>
            </motion.div>
          </DialogContent>
        </Dialog> */}

        {/* Quiz Dialog - Innovative: Integrated as a full-screen modal with progress bar */}
        <Dialog open={isQuizOpen} onOpenChange={setIsQuizOpen}>
          <DialogContent className="bg-white rounded-2xl max-w-lg shadow-2xl" aria-modal="true">
            <motion.div variants={dialogVariants} initial="hidden" animate="visible">
              <DialogHeader>
                <DialogTitle className="text-3xl font-['Playfair_Display'] text-[var(--color-new)] text-center">Personalized Meal Journey</DialogTitle>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                  <motion.div className="bg-[var(--color-primary)] h-2 rounded-full" initial={{ width: 0 }} animate={{ width: `${(quizStep / 2) * 100}%` }} transition={{ duration: 0.5 }} />
                </div>
              </DialogHeader>
              {renderQuizContent()}
              <DialogFooter className="mt-6 justify-center">
                <Button variant="ghost" onClick={() => { setIsQuizOpen(false); setQuizStep(0); }} className="text-[var(--color-primary)]">
                  Close
                </Button>
              </DialogFooter>
            </motion.div>
          </DialogContent>
        </Dialog>

        <main className="flex-grow">
          {/* Hero Section - Enhanced with parallax background, layered text, and subtle particle effects for warmth */}
          <section className="relative h-screen min-h-[600px] overflow-hidden">
            <motion.div className="absolute inset-0" style={{ y }}>
              <Image
                src="/hero_image.png"
                alt="Warm home-cooked meal by a loving mom"
                layout="fill"
                objectFit="cover"
                priority
                className="brightness-90"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div>
            <div className="relative z-10 container mx-auto px-6 h-full flex flex-col items-center justify-center text-center text-white">
              <motion.h1
                className="text-5xl md:text-7xl font-['Playfair_Display'] font-black leading-tight max-w-4xl mb-6 drop-shadow-lg"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                Savor the Warmth of Mom's Home-Cooked Meals
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl max-w-3xl mb-8 font-light tracking-wide"
                variants={containerVariants}
              >
                Fresh, healthy, and delivered with love – straight from local moms' kitchens to your table.
              </motion.p>
              <motion.div className="flex gap-6" variants={containerVariants}>
                <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                  <Button
                    className="bg-[var(--color-primary)] text-white text-lg font-medium px-8 py-4 rounded-full hover:shadow-lg transition-shadow"
                    onClick={() => {
                      const message = encodeURIComponent("Hi, I'd love to order some home-cooked goodness!");
                      window.open(`https://wa.me/919304531876?text=${message}`, "_blank");
                    }}
                  >
                    Order with Love
                  </Button>
                </motion.div>
                <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                  <Button
                    variant="outline"
                    className="border-2 border-white text-white text-lg font-medium px-8 py-4 rounded-full hover:bg-white/20"
                    onClick={() => setIsQuizOpen(true)}
                  >
                    Start Your Quiz
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Our Story Section - Enhanced typography with italic quotes, subtle background texture */}
          <section className="py-20 bg-[var(--color-light)] relative">
            <div className="absolute inset-0 bg-pattern-home opacity-5" /> {/* Add a subtle kitchen pattern SVG as background */}
            <div className="container mx-auto px-6 text-center">
              <motion.div variants={containerVariants} initial="hidden" viewport={{ once: true }} whileInView="visible">
                <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold text-[var(--color-new)] mb-6">Our Heartfelt Story</h2>
                <p className="text-xl text-gray-700 max-w-4xl mx-auto italic font-light leading-loose">
                  "Inspired by the irreplaceable taste of 'maa ke haath ka khana,' Momszyka bridges passionate home chefs with those craving authentic comfort. Each meal is infused with warmth, purity, and generations of love."
                </p>
                <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap" className="mt-8">
                  <Button className="bg-[var(--color-primary)] hover:bg-[var(--color-new)] text-white rounded-full px-8 py-3 text-lg">
                    Meet Our Moms
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Meet Our Moms Section - Innovative: Interactive hover with recipe peek */}
          <section className="py-20 bg-gradient-to-br from-white to-[var(--color-light)]">
            <div className="container mx-auto px-6">
              <motion.h2
                className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold text-[var(--color-new)] text-center mb-12"
                variants={containerVariants}
                initial="hidden"
                viewport={{ once: true }}
                whileInView="visible"
              >
                Meet the Hearts Behind the Meals
              </motion.h2>
              <div className="grid gap-8 md:grid-cols-3">
                {[
                  {
                    name: "Radha",
                    desc: "Master of authentic Punjabi thalis, cooked with family heirloom recipes.",
                    recipePeek: "Try her butter chicken – creamy and soul-soothing!",
                    image: "/hero_image.png", // Placeholder
                  },
                  {
                    name: "Suman",
                    desc: "Expert in healthy fusion delights, blending tradition with wellness.",
                    recipePeek: "Her quinoa khichdi is a nutritious twist on comfort food.",
                    image: "/hero_image.png",
                  },
                  {
                    name: "Lakshmi",
                    desc: "Queen of South Indian classics, full of spice and love.",
                    recipePeek: "Savor her idli-sambar – fluffy and flavorful!",
                    image: "/hero_image.png",
                  },
                ].map((mom, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    initial="hidden"
                    viewport={{ once: true }}
                    whileInView="visible"
                    whileHover="hover"
                  >
                    <Card className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow border border-[var(--color-primary)]/10">
                      <div className="relative">
                        <Image
                          src={mom.image}
                          alt={`Mom ${mom.name} in her kitchen`}
                          width={400}
                          height={300}
                          className="w-full h-64 object-cover"
                        />
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 bg-[var(--color-primary)]/80 text-white p-4 text-center opacity-0"
                          initial={{ opacity: 0, y: 20 }}
                          whileHover={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-sm font-medium">{mom.recipePeek}</p>
                        </motion.div>
                      </div>
                      <CardContent className="p-6 text-center">
                        <CardTitle className="text-2xl font-['Playfair_Display'] text-[var(--color-new)] mb-2">{mom.name}</CardTitle>
                        <CardDescription className="text-gray-600 text-base">{mom.desc}</CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* How It Works Section - Enhanced with timeline layout and icons */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
              <motion.h2
                className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold text-[var(--color-new)] text-center mb-12"
                variants={containerVariants}
                initial="hidden"
                viewport={{ once: true }}
                whileInView="visible"
              >
                How the Magic Happens
              </motion.h2>
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[var(--color-primary)]/20 md:hidden" />
                <div className="grid gap-12 md:grid-cols-3">
                  {[
                    {
                      icon: ChefHat,
                      title: "Discover Loving Chefs",
                      desc: "Explore profiles of local moms with menus tailored just for you.",
                      image: "/steps/discover.jpg",
                    },
                    {
                      icon: ShoppingCart,
                      title: "Customize with Care",
                      desc: "Select dishes, add preferences, and schedule with real-time love.",
                      image: "/steps/customize.jpg",
                    },
                    {
                      icon: UtensilsCrossed,
                      title: "Savor the Warmth",
                      desc: "Receive fresh meals, rate, and get personalized hugs in food form.",
                      image: "/steps/savor.jpg",
                    },
                  ].map((step, index) => (
                    <motion.div
                      key={index}
                      className={`relative ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}
                      variants={cardVariants}
                      initial="hidden"
                      viewport={{ once: true }}
                      whileInView="visible"
                    >
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-primary)] text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:static md:translate-x-0 md:translate-y-0 md:mb-4 mx-auto">
                        <step.icon className="w-6 h-6" />
                      </div>
                      <Card className="bg-[var(--color-light)] rounded-2xl shadow-lg pt-16 md:pt-6">
                        <Image
                          src={step.image}
                          alt={step.title}
                          width={400}
                          height={250}
                          className="w-full h-48 object-cover rounded-t-2xl"
                        />
                        <CardContent className="p-6 text-center">
                          <h3 className="text-2xl font-['Playfair_Display'] text-[var(--color-new)] mb-2">{step.title}</h3>
                          <p className="text-gray-600 text-base">{step.desc}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Specials Section - Innovative: Add meal images and nutrition badges */}
          <section className="py-20 bg-[var(--color-light)]">
            <div className="container mx-auto px-6">
              <motion.h2
                className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold text-[var(--color-new)] text-center mb-12"
                variants={containerVariants}
                initial="hidden"
                viewport={{ once: true }}
                whileInView="visible"
              >
                Today's Loving Specials
              </motion.h2>
              <p className="text-center text-gray-600 text-lg mb-10 max-w-3xl mx-auto">Perfect starters or subscriptions – all made with mom's secret ingredients of love.</p>
              <div className="grid gap-8 md:grid-cols-2">
                {[
                  {
                    type: "Veg",
                    price: 180,
                    icon: Salad,
                    color: "green-500",
                    image: "/specials/veg.jpg", // Add actual image
                    badges: ["Healthy", "Fresh Herbs"],
                  },
                  {
                    type: "Non-Veg",
                    price: 220,
                    icon: Drumstick,
                    color: "red-500",
                    image: "/specials/nonveg.jpg",
                    badges: ["Protein-Packed", "Spicy Twist"],
                  },
                ].map((special, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden"
                    variants={cardVariants}
                    initial="hidden"
                    viewport={{ once: true }}
                    whileInView="visible"
                    whileHover="hover"
                  >
                    <Image
                      src={special.image}
                      alt={`${special.type} Trial Meal`}
                      width={600}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-2xl font-['Playfair_Display'] text-[var(--color-new)] flex items-center gap-3 mb-2">
                        <special.icon className={`w-7 h-7 text-${special.color}`} />
                        Trial Meal - {special.type}
                      </h3>
                      <p className="text-3xl font-bold text-gray-800 mb-4">₹{special.price}</p>
                      <div className="flex gap-2 mb-4">
                        {special.badges.map((badge) => (
                          <span key={badge} className="bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-3 py-1 rounded-full text-sm font-medium">
                            {badge}
                          </span>
                        ))}
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className={`w-full bg-${special.color} hover:bg-${special.color.replace('500', '600')} text-white rounded-full py-3 text-lg`}>
                            Order Now
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-white rounded-2xl max-w-md">
                          <motion.div variants={dialogVariants} initial="hidden" animate="visible">
                            <DialogHeader>
                              <DialogTitle className="text-3xl font-['Playfair_Display'] text-[var(--color-new)] flex items-center gap-3">
                                <Clock className="w-7 h-7 text-[var(--color-primary)]" />
                                Coming Soon with Love!
                              </DialogTitle>
                              <DialogDescription className="text-gray-600 text-lg mt-2">
                                Join the waitlist for your {special.type} trial and get <span className="font-bold text-[var(--color-primary)]">10% OFF</span>!
                              </DialogDescription>
                            </DialogHeader>
                            <div className="mt-6 flex gap-3">
                              <Input type="email" placeholder="Your email" className="flex-1 rounded-full" />
                              <Button className="bg-[var(--color-primary)] text-white rounded-full px-6">Join</Button>
                            </div>
                          </motion.div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Referral Section - Enhanced with share buttons and animation */}
          <section className="py-20 bg-gradient-to-b from-[var(--color-light)] to-white">
            <div className="container mx-auto px-6">
              <motion.div
                className="bg-[var(--color-primary)]/5 p-10 rounded-2xl text-center shadow-inner"
                variants={containerVariants}
                initial="hidden"
                viewport={{ once: true }}
                whileInView="visible"
              >
                <h2 className="text-4xl font-['Playfair_Display'] text-[var(--color-new)] mb-6 flex items-center justify-center gap-3">
                  <Share2 className="w-8 h-8 text-[var(--color-primary)]" />
                  Spread the Love
                </h2>
                <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto">Invite a talented mom to join or refer a friend – earn rewards wrapped in warmth.</p>
                <p className="text-xl text-gray-600 mb-8">Friends get ₹250 OFF, moms get a platform to shine!</p>
                <div className="flex gap-6 justify-center">
                  <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                    <Button className="bg-[var(--color-primary)] text-white rounded-full px-10 py-4 text-lg">Refer Now</Button>
                  </motion.div>
                  <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                    <Button variant="outline" className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] rounded-full px-10 py-4 text-lg">Join as Mom</Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Community Reviews Section - Enhanced carousel with auto-play and quotes */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
              <motion.h2
                className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold text-[var(--color-new)] text-center mb-12"
                variants={containerVariants}
                initial="hidden"
                viewport={{ once: true }}
                whileInView="visible"
              >
                Voices from Our Table
              </motion.h2>
              <Carousel className="max-w-5xl mx-auto" opts={{ loop: true, autoplay: true, autoplayInterval: 5000 }}>
                <CarouselContent>
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                      <motion.div variants={cardVariants} whileHover="hover">
                        <Card className="bg-[var(--color-light)] rounded-2xl shadow-lg h-full">
                          <CardContent className="p-8 flex flex-col h-full">
                            <div className="flex items-center gap-4 mb-6">
                              <Image src={testimonial.image} alt={testimonial.alt} width={60} height={60} className="rounded-full border-2 border-[var(--color-primary)]" />
                              <div>
                                <p className="font-['Playfair_Display'] text-xl text-[var(--color-new)]">{testimonial.name}</p>
                                <div className="flex text-[var(--color-primary)]">
                                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5" fill={i < testimonial.rating ? "currentColor" : "none"} stroke="currentColor" />)}
                                </div>
                              </div>
                            </div>
                            <p className="text-gray-600 text-lg italic flex-grow">"{testimonial.text}"</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex bg-[var(--color-primary)] text-white rounded-full" />
                <CarouselNext className="hidden md:flex bg-[var(--color-primary)] text-white rounded-full" />
              </Carousel>
            </div>
          </section>

          {/* Social Proof Metrics Section - Innovative: Animated counters with icons pulsing */}
          <section className="py-20 bg-[var(--color-light)]">
            <div className="container mx-auto px-6">
              <div className="grid gap-12 md:grid-cols-3 text-center">
                {[
                  { icon: Users, number: 10000, label: "Happy Families" },
                  { icon: Package, number: 50000, label: "Meals Shared" },
                  { icon: Award, number: 500, label: "Loving Moms" },
                ].map((metric, index) => (
                  <motion.div key={index} variants={counterVariants} initial="hidden" viewport={{ once: true }} whileInView="visible">
                    <metric.icon className="mx-auto h-16 w-16 text-[var(--color-primary)] mb-4 animate-pulse" />
                    <h3 className="text-5xl font-['Playfair_Display'] font-bold text-[var(--color-new)]">
                      <CountUp end={metric.number} duration={2.5} separator="," />+
                    </h3>
                    <p className="text-xl text-gray-600 mt-2">{metric.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

      

          {/* Sticky CTA - Enhanced with gradient and pulse */}
          <AnimatePresence>
            {visible && (
              <motion.div
                className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-new)] p-4 rounded-full shadow-2xl z-50 max-w-lg w-full mx-4"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                <div className="flex items-center justify-between text-white">
                  <p className="font-['Playfair_Display'] text-lg">Craving mom's touch? Let's get cooking!</p>
                  <div className="flex gap-3">
                    <Button variant="ghost" className="text-white hover:bg-white/20 rounded-full">Order</Button>
                    <Button variant="ghost" className="text-white hover:bg-white/20 rounded-full">Waitlist</Button>
                    <button onClick={() => setVisible(false)} className="hover:opacity-70">
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </>
  );
};

export default Momszyka;