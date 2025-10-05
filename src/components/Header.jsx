"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Menu, User } from "lucide-react";
import { motion } from "framer-motion";
import Form from "./Form";

const WaitlistFormDialog = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", { name, email });
    alert("Thank you for joining the waitlist!");
    setOpen(false);
    setName("");
    setEmail("");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-amber-600 text-white text-sm font-bold hover:bg-amber-700 transition-colors rounded-full">
          Become a Food Angel
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-amber-50 dark:bg-amber-900 rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-amber-800 dark:text-amber-100">
            Join Our Culinary Community
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label
              htmlFor="name"
              className="text-amber-700 dark:text-amber-200"
            >
              Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
              className="bg-transparent border-amber-300 dark:border-amber-700 focus:ring-amber-500 focus:border-amber-500 rounded-full"
            />
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-amber-700 dark:text-amber-200"
            >
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="bg-transparent border-amber-300 dark:border-amber-700 focus:ring-amber-500 focus:border-amber-500 rounded-full"
            />
          </div>
          <DialogFooter>
            <Button
              type="submit"
              className="bg-amber-600 hover:bg-amber-700 text-white rounded-full"
            >
              Submit
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

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
            {/* <h1 className="text-lg font-bold text-amber-800 dark:text-amber-100">
              Momszyka
            </h1> */}
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
          {/* <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Button
              variant="ghost"
              className="p-2 text-amber-800 dark:text-amber-100 hover:text-amber-600 dark:hover:text-amber-500"
              aria-label="User profile"
            >
              <User className="h-6 w-6" />
            </Button>
          </motion.div> */}
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
            {/* <WaitlistFormDialog /> */}
            <Form />
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
