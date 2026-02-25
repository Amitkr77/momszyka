"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import {
  Star,
  Heart,
  Salad,
  Drumstick,
  Share2,
  ChefHat,
  ShoppingCart,
  UtensilsCrossed,
  Users,
  Package,
  Award,
  X,
  PhoneCall,
  ArrowRight,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Head from "next/head";
import CountUp from "react-countup";
import dynamic from "next/dynamic";
import { AboutMomszyka } from "@/components/About";
const MealSpecialsSection = dynamic(
  () => import("@/components/MealSpecialSections"),
  { ssr: false },
);
const FrequentOrders = dynamic(() => import("@/components/Frequentorders"), {
  ssr: false,
});
import { JoinAsMomDialog } from "@/components/Form";

const testimonials = [
  {
    name: "Nishant Kumar",
    designation: "Sr. Sub Editor",
    company: "Prabhat Khabar",
    image: "/testimonials/sarah.jpg",
    alt: "Nishant Kumar profile picture",
    rating: 5,
    text: "I really missed home-cooked meals — but ever since I started ordering from Momszyka, it feels like Maa ke haath ka khana is just a few taps away. The food is fresh, healthy, and full of love.",
  },
  {
    name: "Ashish Kumar",
    designation: "Political Consultant",
    company: "I-PAC",
    image: "/testimonials/david.jpg",
    alt: "Ashish Kumar profile picture",
    rating: 5,
    text: "Honestly, I was tired of outside food — oily, bland, and repetitive. Momszyka se order karne ke baad mujhe feel hua ki real ghar ka khana kya hota hai. Every bite reminds me of home. Thanks to the home chefs who put love in every meal!",
  },
  {
    name: "Pragati Sanskrit",
    designation: "Social Media Executive",
    company: "IPRD",
    image: "/testimonials/emily.jpg",
    alt: "Pragati Sanskrit profile picture",
    rating: 5,
    text: "I was looking for healthy options for my office lunch, and that’s when I found Momszyka. Now I actually wait for lunch every day 😄. The food is simple, tasty, and fresh — gives total ghar ka khana vibes! Feels like someone is sending it straight from home.",
  },
];

const Momszyka = () => {
  const [visible, setVisible] = useState(true);
  const [isDiscountPopupOpen, setIsDiscountPopupOpen] = useState(false);

  const [joinOpen, setJoinOpen] = useState(false);

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

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
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

        {/* ✅ Stronger viewport — prevents Android Chrome from zooming or overflowing */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover"
        />

        {/* ✅ Theme color — colors browser chrome on Android */}
        <meta name="theme-color" content="#FF8F00" />

        {/* ✅ Prevents iOS from auto-detecting phone numbers as links */}
        <meta name="format-detection" content="telephone=no" />

        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lato:wght@400;700&display=swap"
          rel="stylesheet"
        />
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

      <div
        className="flex flex-col min-h-screen bg-[var(--color-light)] font-['Lato'] text-[#1b140d] leading-relaxed"
        style={{ "--font-heading": "Playfair Display" }}
      >
        <main className="flex-grow">
          {/* Hero Section - Enhanced with parallax background, layered text, and subtle particle effects for warmth */}
          <section className="relative h-screen min-h-[600px] overflow-hidden bg-gradient-to-br from-slate-900 via-amber-950/20 to-slate-900">
            {/* Parallax Background */}
            <motion.div className="absolute inset-0" style={{ y }}>
              <Image
                src="/hero_image.jpeg"
                alt="Warm home-cooked meal by a loving mom"
                fill
                priority
                className="object-cover brightness-75 scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center text-white">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-5xl"
              >
                {/* Headline */}
                <motion.h1
                  variants={textVariants}
                  className="text-5xl md:text-7xl font-['Playfair_Display'] font-bold leading-tight tracking-tight mb-6 drop-shadow-2xl"
                >
                  Savor the{" "}
                  <span className="relative inline-block">
                    Warmth
                    <motion.span
                      className="absolute -bottom-1 left-0 w-full h-1 bg-amber-500/60 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: 0.8 }}
                    />
                  </span>{" "}
                  of Mom&apos;s Meals
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                  variants={textVariants}
                  className="text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light tracking-wide text-white/90"
                >
                  Fresh, healthy, and made with{" "}
                  <Heart className="inline-block h-5 w-5 text-amber-400 mx-1 fill-amber-400" />{" "}
                  — delivered from Momszyka to your heart.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 items-center justify-center"
                  variants={textVariants}
                >
                  {/* WhatsApp Button */}
                  <motion.div
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Button
                      onClick={() => {
                        const message = encodeURIComponent(
                          "Hi, I'd love to order some home-cooked goodness!",
                        );
                        window.open(
                          `https://wa.me/919304531876?text=${message}`,
                          "_blank",
                        );
                      }}
                      className="bg-amber-600 hover:bg-amber-700 text-white font-medium text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 group"
                    >
                      <span>Order with Love</span>
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </motion.span>
                    </Button>
                  </motion.div>

                  {/* Call Button */}
                  <motion.a
                    href="tel:+919304531876"
                    className="group inline-flex items-center gap-3 px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-medium text-lg transition-all duration-300 hover:bg-amber-600/20 hover:border-amber-500 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-amber-500/30"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    aria-label="Call to order"
                  >
                    <PhoneCall className="h-5 w-5 transition-transform group-hover:rotate-12" />
                    <span>Call Now</span>
                  </motion.a>
                </motion.div>

                {/* Phone Number (subtle) */}
                <motion.p
                  variants={textVariants}
                  className="mt-6 text-sm text-white/60 font-light"
                >
                  Or tap to call:{" "}
                  <span className="font-medium text-white">
                    +91 93045 31876
                  </span>
                </motion.p>
                <motion.p>
                  <span className="mt-2 text-sm text-white ">Patna</span>
                </motion.p>
              </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
              </div>
            </motion.div>
          </section>

          {/* Our Story Section - Enhanced typography with italic quotes, subtle background texture */}
          {/* <section className="py-20 bg-[var(--color-light)] relative">
            <div className="absolute inset-0 bg-pattern-home opacity-5" />
            <div className="container mx-auto px-6 text-center">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                viewport={{ once: true }}
                whileInView="visible"
              >
                <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold text-[var(--color-new)] mb-6">
                  Our Heartfelt Story
                </h2>
                <p className="text-xl text-gray-700 max-w-4xl mx-auto italic font-light leading-loose">
                  "Inspired by the irreplaceable taste of 'maa ke haath ka
                  khana,' Momszyka bridges passionate home chefs with those
                  craving authentic comfort. Each meal is infused with warmth,
                  purity, and generations of love."
                </p> */}
          {/* <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="mt-8"
                >
                  <Button className="bg-amber-600  text-white rounded-full px-8 py-3 text-lg">
                    Meet Our Moms
                  </Button>
                </motion.div> */}
          {/* </motion.div>
            </div>
          </section> */}

          {/* Meet Our Moms Section - Innovative: Interactive hover with recipe peek */}
          {/* <section className="py-20 bg-gradient-to-br from-white to-[var(--color-light)]">
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
                    recipePeek:
                      "Try her butter chicken – creamy and soul-soothing!",
                    image: "/hero_image.png",
                  },
                  {
                    name: "Suman",
                    desc: "Expert in healthy fusion delights, blending tradition with wellness.",
                    recipePeek:
                      "Her quinoa khichdi is a nutritious twist on comfort food.",
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
                    className="cursor-pointer rounded-2xl"
                  >
                    <Card className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow border border-[var(--color-primary)]/10 h-[450px]">
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
                          <p className="text-sm font-medium">
                            {mom.recipePeek}
                          </p>
                        </motion.div>
                      </div>
                      <CardContent className="p-6 text-center">
                        <CardTitle className="text-2xl font-['Playfair_Display'] text-[var(--color-new)] mb-2">
                          {mom.name}
                        </CardTitle>
                        <CardDescription className="text-gray-600 text-base">
                          {mom.desc}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section> */}

          {/* About Section */}
          <AboutMomszyka />

          {/* How It Works Section - Enhanced with timeline layout and icons */}
          {/* <section className="py-8 bg-gradient-to-b from-orange-50/30 via-white to-orange-50/20">
            <div className="container mx-auto px-6">
              <motion.h2
                className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold text-[var(--color-new)] text-center mb-3"
                variants={containerVariants}
                initial="hidden"
                viewport={{ once: true }}
                whileInView="visible"
              >
                How the Magic Happens
              </motion.h2>

              <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
                From our moms' kitchens to your heart, in three simple steps
              </p>

              <div className="grid gap-8 md:grid-cols-3">
                {[
                  {
                    icon: ChefHat,
                    title: "Meet Your Mom-Chef",
                    desc: "Browse loving home chefs in your area, each with their own special recipes and family traditions.",
                    image: "/steps/discover.png",
                  },
                  {
                    icon: ShoppingCart,
                    title: "Choose Your Comfort",
                    desc: "Pick your favorite dishes, customize preferences, and schedule when you'd like your ghar ka khana.",
                    image: "/steps/customize_2.png",
                  },
                  {
                    icon: UtensilsCrossed,
                    title: "Enjoy & Share Love",
                    desc: "Receive fresh meals made with care, savor every bite, and share your experience with us.",
                    image: "/steps/savor.png",
                  },
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    className="relative"
                    variants={cardVariants}
                    initial="hidden"
                    viewport={{ once: true }}
                    whileInView="visible"
                  >
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white mb-4 mx-auto shadow-lg">
                      <step.icon className="w-8 h-8" />
                    </div>

                    <Card className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-orange-100 hover:border-orange-200 hover:-translate-y-2">
                      <Image
                        src={step.image}
                        alt={step.title}
                        width={400}
                        height={250}
                        className="w-full h-52 object-cover"
                      />
                      <CardContent className="p-6 text-center">
                        <h3 className="text-2xl font-['Playfair_Display'] font-semibold text-[var(--color-new)] mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-base leading-relaxed">
                          {step.desc}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section> */}

          {/* Specials Section - Innovative: Add meal images and nutrition badges */}
          {/* <section className="py-20 bg-[var(--color-light)]">
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
              <p className="text-center text-gray-600 text-lg mb-10 max-w-3xl mx-auto">
                Perfect starters or subscriptions – all made with mom's secret
                ingredients of love.
              </p>
              <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
                {[
                  {
                    type: "Veg",
                    price: 180,
                    icon: Salad,
                    color: "green-500",
                    image: "/specials/veg.jpg",
                    badges: ["Healthy", "Fresh Herbs"],
                  },
                  {
                    type: "Non-Veg",
                    price: 220,
                    icon: Drumstick,
                    color: "red-500",
                    image: "/specials/non-veg.jpg",
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
                      className=" h-72 w-full object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-2xl font-['Playfair_Display'] text-[var(--color-new)] flex items-center gap-3 mb-2">
                        <special.icon
                          className={`w-7 h-7 text-${special.color}`}
                        />
                        Trial Meal - {special.type}
                      </h3> */}
          {/* <p className="text-3xl font-bold text-gray-800 mb-4">
                        ₹{special.price}
                      </p> */}
          {/* <div className="flex gap-2 mb-4">
                        {special.badges.map((badge) => (
                          <span
                            key={badge}
                            className="bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {badge}
                          </span>
                        ))}
                      </div> */}
          {/* <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            className={`w-full bg-${
                              special.color
                            } hover:bg-${special.color.replace(
                              "500",
                              "600"
                            )} text-white rounded-full py-3 text-lg`}
                          >
                            Order Now
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-white rounded-2xl max-w-md">
                          <motion.div
                            variants={dialogVariants}
                            initial="hidden"
                            animate="visible"
                          >
                            <DialogHeader>
                              <DialogTitle className="text-3xl font-['Playfair_Display'] text-[var(--color-new)] flex items-center gap-3">
                                <Clock className="w-7 h-7 text-[var(--color-primary)]" />
                                Coming Soon with Love!
                              </DialogTitle>
                              <DialogDescription className="text-gray-600 text-lg mt-2">
                                Join the waitlist for your {special.type} trial
                                and get{" "}
                                <span className="font-bold text-[var(--color-primary)]">
                                  10% OFF
                                </span>
                                !
                              </DialogDescription>
                            </DialogHeader>
                            <div className="mt-6 flex gap-3">
                              <Input
                                type="email"
                                placeholder="Your email"
                                className="flex-1 rounded-full"
                              />
                              <Button className="bg-[var(--color-primary)] text-white rounded-full px-6">
                                Join
                              </Button>
                            </div>
                          </motion.div>
                        </DialogContent>
                      </Dialog> */}
          {/* <Button
                        className="bg-amber-600 hover:bg-amber-800 text-white text-lg font-medium px-8 py-4 rounded-full hover:shadow-lg transition-shadow"
                        onClick={() => {
                          const message = encodeURIComponent(
                            "Hi, I'd love to order some home-cooked goodness!"
                          );
                          window.open(
                            `https://wa.me/919304531876?text=${message}`,
                            "_blank"
                          );
                        }}
                      >
                        Order now
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section> */}
          <MealSpecialsSection />
          <FrequentOrders />

          {/* Referral Section - Enhanced with share buttons and animation */}
          <section className="py-6 sm:py-8 bg-gradient-to-b from-[var(--color-light)] to-white">
            <div className="container mx-auto px-4 sm:px-6">
              <motion.div
                className="bg-gradient-to-b from-amber-50 to-white dark:from-amber-900/80 dark:to-amber-800/80 border-t border-amber-200 dark:border-amber-700 p-6 sm:p-10 rounded-2xl text-center shadow-inner"
                variants={containerVariants}
                initial="hidden"
                viewport={{ once: true }}
                whileInView="visible"
              >
                <h2 className="text-2xl sm:text-4xl font-['Playfair_Display'] text-[var(--color-new)] mb-4 sm:mb-6 flex items-center justify-center gap-2 sm:gap-3">
                  <Share2 className="w-6 h-6 sm:w-8 sm:h-8 text-[var(--color-primary)]" />
                  Spread the Love
                </h2>
                <p className="text-base sm:text-xl text-gray-600 mb-3 sm:mb-4 max-w-2xl mx-auto">
                  Invite a talented mom to join or refer a friend – earn rewards
                  wrapped in warmth.
                </p>
                <p className="text-base sm:text-xl text-gray-600 mb-6 sm:mb-8">
                  Friends get ₹250 OFF, moms get a platform to shine!
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center">
                  <motion.div
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="w-full sm:w-auto"
                  >
                    <Button className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white rounded-full px-7 sm:px-10 py-3 sm:py-4 text-base sm:text-lg">
                      Refer Now
                    </Button>
                  </motion.div>
                  <motion.div
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="w-full sm:w-auto"
                  >
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto border-2 border-[var(--color-primary)] text-[var(--color-primary)] rounded-full px-7 sm:px-10 py-3 sm:py-4 text-base sm:text-lg"
                      onClick={() => setJoinOpen(true)}
                    >
                      Join as Mom
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>
          <JoinAsMomDialog open={joinOpen} onOpenChange={setJoinOpen} />
          {/* Community Reviews Section - Enhanced carousel with auto-play and quotes */}
          <section className="py-8 sm:py-12 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-['Playfair_Display'] font-bold text-[var(--color-new)] text-center mb-6 sm:mb-8"
                variants={containerVariants}
                initial="hidden"
                viewport={{ once: true }}
                whileInView="visible"
              >
                Voices from Our Table
              </motion.h2>

              <Carousel
                className="max-w-5xl mx-auto"
                opts={{ loop: true, dragFree: true }}
              >
                <CarouselContent className="-ml-2 sm:-ml-4">
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem
                      key={index}
                      className="basis-[85%] sm:basis-1/2 lg:basis-1/3 pl-2 sm:pl-4 pt-2 sm:pt-4 mb-4 sm:mb-8"
                    >
                      <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="rounded-2xl h-full"
                      >
                        <Card className="bg-[var(--color-light)] rounded-2xl shadow-lg h-full">
                          <CardContent className="p-5 sm:p-8 flex flex-col h-full min-h-[280px] sm:h-96">
                            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                              <div>
                                <p className="font-['Playfair_Display'] text-lg sm:text-xl text-[var(--color-new)]">
                                  {testimonial.name}
                                </p>
                                <p className="text-xs sm:text-sm text-gray-500">
                                  {testimonial.designation} at{" "}
                                  <span className="font-medium text-[var(--color-primary)]">
                                    {testimonial.company}
                                  </span>
                                </p>
                                <div className="flex text-[var(--color-primary)] mt-1">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className="w-4 h-4 sm:w-5 sm:h-5"
                                      fill={
                                        i < testimonial.rating
                                          ? "currentColor"
                                          : "none"
                                      }
                                      stroke="currentColor"
                                    />
                                  ))}
                                </div>
                              </div>
                            </div>
                            <p className="text-gray-600 text-base sm:text-lg italic flex-grow">
                              "{testimonial.text}"
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {/* Show arrows on md+ only, mobile relies on swipe */}
                <CarouselPrevious className="hidden md:flex bg-[var(--color-primary)] text-white rounded-full" />
                <CarouselNext className="hidden md:flex bg-[var(--color-primary)] text-white rounded-full" />
              </Carousel>

              {/* Mobile swipe hint */}
              <p className="text-center text-xs text-gray-400 mt-2 sm:hidden">
                Swipe to see more ›
              </p>
            </div>
          </section>

          {/* Social Proof Metrics Section - Innovative: Animated counters with icons pulsing */}
          <section className="py-12 sm:py-20 bg-gradient-to-b from-amber-50 to-white dark:from-amber-900/80 dark:to-amber-800/80 border-t border-amber-200 dark:border-amber-700">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="grid grid-cols-3 gap-4 sm:gap-12 md:grid-cols-3 text-center">
                {[
                  { icon: Users, number: 500, label: "Happy Families" },
                  { icon: Package, number: 1000, label: "Meals Shared" },
                  { icon: Award, number: 100, label: "Loving Moms" },
                ].map((metric, index) => (
                  <motion.div
                    key={index}
                    variants={counterVariants}
                    initial="hidden"
                    viewport={{ once: true }}
                    whileInView="visible"
                  >
                    <metric.icon className="mx-auto h-8 w-8 sm:h-16 sm:w-16 text-[var(--color-primary)] mb-2 sm:mb-4 animate-pulse" />
                    <h3 className="text-2xl sm:text-5xl font-['Playfair_Display'] font-bold text-[var(--color-new)]">
                      <CountUp
                        end={metric.number}
                        duration={2.5}
                        separator=","
                      />
                      +
                    </h3>
                    <p className="text-xs sm:text-xl text-gray-600 mt-1 sm:mt-2 leading-tight">
                      {metric.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Sticky CTA - Enhanced with gradient and pulse */}
          <AnimatePresence>
            {visible && (
              <motion.div
                className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-new)] px-4 py-3 sm:p-4 rounded-2xl sm:rounded-full shadow-2xl z-50 w-[calc(100%-2rem)] sm:max-w-lg mx-0"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-white gap-2 sm:gap-0">
                  <p className="font-['Playfair_Display'] text-sm sm:text-lg leading-snug">
                    Craving mom's touch? Let's get cooking!
                  </p>
                  <div className="flex items-center gap-2 sm:gap-3 self-end sm:self-auto">
                    <Button
                      variant="ghost"
                      className="text-white hover:bg-white/20 rounded-full text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 h-auto"
                    >
                      Order
                    </Button>
                    <Button
                      variant="ghost"
                      className="text-white hover:bg-white/20 rounded-full text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 h-auto"
                    >
                      Waitlist
                    </Button>
                    <button
                      onClick={() => setVisible(false)}
                      className="hover:opacity-70 p-1 flex-shrink-0"
                      aria-label="Dismiss"
                    >
                      <X className="w-4 h-4 sm:w-5 sm:h-5" />
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
