"use client";
import { Facebook, Instagram, Mail, X } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Footer() {
  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  const iconVariants = {
    hover: { scale: 1.2, rotate: 5, transition: { duration: 0.2 } },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <footer className="bg-gradient-to-b from-amber-50 to-white dark:from-amber-900/80 dark:to-amber-800/80 border-t border-amber-200 dark:border-amber-700 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 border-b border-amber-200 dark:border-amber-700 pb-12"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className="space-y-6" variants={itemVariants}>
            <Link href="/">
              <div className="flex items-center gap-3">
                <img
                  src="./logo.png"
                  alt="Momszyka Logo"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg ring-2 ring-amber-300 dark:ring-amber-600"
                />
                <h3 className="text-xl sm:text-2xl font-extrabold text-amber-800 dark:text-amber-100 tracking-tight">
                  Momszyka
                </h3>
              </div>
            </Link>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-prose">
              Delivering the heartwarming essence of home-cooked meals straight to your doorstep. Connect with our vibrant community of culinary enthusiasts and home chefs.
            </p>
            <div className="flex gap-4 sm:gap-6">
              <motion.a
                href="https://facebook.com/momszyka"
                className="text-amber-600 hover:text-amber-800 dark:hover:text-amber-400 transition-colors border border-amber-600 p-2 rounded-4xl"
                variants={iconVariants}
                whileHover="hover"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
              </motion.a>
              <motion.a
                href="https://x.com/momszyka"
                className="text-amber-600 hover:text-amber-800 dark:hover:text-amber-400 transition-colors border border-amber-600 p-2 rounded-4xl"
                variants={iconVariants}
                whileHover="hover"
                aria-label="X (formerly Twitter)"
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              </motion.a>
              <motion.a
                href="https://instagram.com/momszyka"
                className="text-amber-600 hover:text-amber-800 dark:hover:text-amber-400 transition-colors border border-amber-600 p-2 rounded-4xl "
                variants={iconVariants}
                whileHover="hover"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
              </motion.a>
            </div>
          </motion.div>
          <motion.nav className="space-y-6" variants={itemVariants}>
            <h4 className="text-lg sm:text-xl font-semibold text-amber-800 dark:text-amber-100 tracking-wide">
              Explore
            </h4>
            <ul className="space-y-3">
              <motion.li variants={itemVariants}>
                <Link
                  className="text-sm sm:text-base text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium"
                  href="/our-story"
                >
                  About Us
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link
                  className="text-sm sm:text-base text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium"
                  href="/how-it-works"
                >
                  How It Works
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link
                  className="text-sm sm:text-base text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium"
                  href="/recipes"
                >
                  Recipes
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link
                  className="text-sm sm:text-base text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium"
                  href="/blog"
                >
                  Blog
                </Link>
              </motion.li>
            </ul>
          </motion.nav>
          <motion.nav className="space-y-6" variants={itemVariants}>
            <h4 className="text-lg sm:text-xl font-semibold text-amber-800 dark:text-amber-100 tracking-wide">
              Support
            </h4>
            <ul className="space-y-3">
              <motion.li variants={itemVariants}>
                <Link
                  className="text-sm sm:text-base text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium"
                  href="/faq"
                >
                  FAQ
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link
                  className="text-sm sm:text-base text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium"
                  href="/contact"
                >
                  Contact Us
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a
                  className="text-sm sm:text-base text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium"
                  href="/terms"
                >
                  Terms of Service
                </a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a
                  className="text-sm sm:text-base text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium"
                  href="/privacy"
                >
                  Privacy Policy
                </a>
              </motion.li>
            </ul>
          </motion.nav>
          <motion.div className="space-y-6" variants={itemVariants}>
            <h4 className="text-lg sm:text-xl font-semibold text-amber-800 dark:text-amber-100 tracking-wide">
              Stay Connected
            </h4>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              Join our newsletter for mouthwatering recipes, special promotions, and the latest updates from our app.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white dark:bg-amber-900/50 border-amber-300 dark:border-amber-600 focus:ring-amber-500 focus:border-amber-500 rounded-full text-sm sm:text-base placeholder:text-gray-400 dark:placeholder:text-gray-500 shadow-inner"
              />
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-4 sm:px-6 py-2 text-sm sm:text-base font-medium flex items-center justify-center w-full sm:w-auto shadow-md">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Subscribe
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        <motion.p
          className="mt-6 text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400"
          variants={itemVariants}
        >
          © {new Date().getFullYear()} Momszyka. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}