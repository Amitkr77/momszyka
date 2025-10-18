"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import Form from "./Form";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  return (
    <motion.header
      className={`sticky top-0 z-50 bg-amber-50/80 dark:bg-amber-900/80 backdrop-blur-sm border-b border-amber-200 dark:border-amber-700 transition-shadow ${
        isScrolled ? "shadow-md" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between py-2">
        <Link href="/">
          <div className="flex items-center gap-3">
            <img
              src="./logo.png"
              alt="Momszyka Logo"
              className="w-12 h-12 md:w-16 md:h-16"
            />
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <motion.div variants={buttonVariants} whileHover="hover">
            <Link
              className="text-sm font-medium text-amber-800 dark:text-amber-100 hover:text-amber-600 dark:hover:text-amber-500 transition-colors"
              href="/how-it-works"
            >
              How It Works
            </Link>
          </motion.div>
          <motion.div variants={buttonVariants} whileHover="hover">
            <Link
              className="text-sm font-medium text-amber-800 dark:text-amber-100 hover:text-amber-600 dark:hover:text-amber-500 transition-colors"
              href="/meet-cooks"
            >
              Meet Our Cooks
            </Link>
          </motion.div>
          <motion.div variants={buttonVariants} whileHover="hover">
            <Link
              className="text-sm font-medium text-amber-800 dark:text-amber-100 hover:text-amber-600 dark:hover:text-amber-500 transition-colors"
              href="/subscribe"
            >
              Subscribe
            </Link>
          </motion.div>
          <motion.div variants={buttonVariants} whileHover="hover">
            <Link
              className="text-sm font-medium text-amber-800 dark:text-amber-100 hover:text-amber-600 dark:hover:text-amber-500 transition-colors"
              href="/our-story"
            >
              Our Story
            </Link>
          </motion.div>
          <motion.div variants={buttonVariants} whileHover="hover">
            <Link
              className="text-sm font-medium text-amber-800 dark:text-amber-100 hover:text-amber-600 dark:hover:text-amber-500 transition-colors"
              href="/contact"
            >
              Contact
            </Link>
          </motion.div>
        </nav>
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="md:hidden p-2"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6 text-amber-800 dark:text-amber-100" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] bg-amber-50 dark:bg-amber-900"
            >
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  className="text-sm font-medium text-amber-800 dark:text-amber-100 hover:text-amber-600 dark:hover:text-amber-500 transition-colors"
                  href="/how-it-works"
                >
                  How It Works
                </Link>
                <Link
                  className="text-sm font-medium text-amber-800 dark:text-amber-100 hover:text-amber-600 dark:hover:text-amber-500 transition-colors"
                  href="/meet-cooks"
                >
                  Meet Our Cooks
                </Link>
                <Link
                  className="text-sm font-medium text-amber-800 dark:text-amber-100 hover:text-amber-600 dark:hover:text-amber-500 transition-colors"
                  href="/subscribe"
                >
                  Subscribe
                </Link>
                <Link
                  className="text-sm font-medium text-amber-800 dark:text-amber-100 hover:text-amber-600 dark:hover:text-amber-500 transition-colors"
                  href="/our-story"
                >
                  Our Story
                </Link>
                <Link
                  className="text-sm font-medium text-amber-800 dark:text-amber-100 hover:text-amber-600 dark:hover:text-amber-500 transition-colors"
                  href="/contact"
                >
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Form />
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
