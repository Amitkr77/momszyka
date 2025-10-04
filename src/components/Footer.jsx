"use client";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";
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
    <footer className="bg-gradient-to-b from-amber-50 to-white dark:from-amber-900 dark:to-amber-800 border-t border-amber-200 dark:border-amber-700">
      <div className="container  mx-auto px-6 py-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="space-y-6" variants={itemVariants}>
            <Link href="/">
              <div className="flex items-center gap-4">
                <img
                  src="./logo.png"
                  alt="Momszyka Logo"
                  className="w-12 h-12 lg:w-16 lg:h-16 rounded-full shadow-md"
                />
                <h3 className="text-2xl font-extrabold text-amber-800 dark:text-amber-100 tracking-tight">
                  Momszyka
                </h3>
              </div>
            </Link>
            <p className="text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Bringing the warmth of home-cooked meals to your table with love
              and care. Join our community of passionate cooks and food lovers.
            </p>
            <div className="flex gap-6">
              <motion.a
                href="#"
                className="text-amber-600 hover:text-amber-700"
                variants={iconVariants}
                whileHover="hover"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="#"
                className="text-amber-600 hover:text-amber-700"
                variants={iconVariants}
                whileHover="hover"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="#"
                className="text-amber-600 hover:text-amber-700"
                variants={iconVariants}
                whileHover="hover"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </motion.a>
            </div>
          </motion.div>
          <motion.nav className="space-y-6" variants={itemVariants}>
            <h4 className="text-xl font-semibold text-amber-800 dark:text-amber-100 tracking-wide">
              Explore
            </h4>
            <ul className="space-y-3">
              <motion.li variants={itemVariants}>
                <Link
                  className="text-base text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-500 transition-colors font-medium"
                  href="/our-story"
                >
                  About Us
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link
                  className="text-base text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-500 transition-colors font-medium"
                  href="/how-it-works"
                >
                  How It Works
                </Link>
              </motion.li>
              {/* <motion.li variants={itemVariants}>
                <Link
                  className="text-base text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-500 transition-colors font-medium"
                  href="/recipes"
                >
                  Recipes
                </Link>
              </motion.li> */}
              <motion.li variants={itemVariants}>
                <Link
                  className="text-base text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-500 transition-colors font-medium"
                  href="/contact"
                >
                  Contact
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a
                  className="text-base text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-500 transition-colors font-medium"
                  href="#"
                >
                  Terms of Service
                </a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a
                  className="text-base text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-500 transition-colors font-medium"
                  href="#"
                >
                  Privacy Policy
                </a>
              </motion.li>
            </ul>
          </motion.nav>
          <motion.div className="space-y-6" variants={itemVariants}>
            <h4 className="text-xl font-semibold text-amber-800 dark:text-amber-100 tracking-wide">
              Stay Connected
            </h4>
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              Subscribe for delicious recipes, exclusive offers, and exciting
              app updates.
            </p>
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent border-amber-300 dark:border-amber-700 focus:ring-amber-500 focus:border-amber-500 rounded-full text-base placeholder:text-gray-400 dark:placeholder:text-gray-500"
              />
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-6 text-base font-medium">
                  <Mail className="w-5 h-5 mr-2" />
                  Subscribe
                </Button>
              </motion.div>
            </div>
           
          </motion.div>
        </motion.div>
        <motion.p
          className="mt-12 text-center text-sm text-gray-600 dark:text-gray-300"
          variants={itemVariants}
        >
          © {new Date().getFullYear()} Momszyka. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
