"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MessageCircle,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const MomszykaContact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-amber-50 to-white dark:from-amber-900 dark:to-amber-800 font-display text-amber-800 dark:text-amber-100">
      <main className="max-w-7xl flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="space-y-6" variants={itemVariants}>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              We’re Here for You
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Have questions or ideas? Connect with our friendly team for 24/7
              support or join our community to share your love for home-cooked
              meals.
            </p>
            <div className="space-y-4 pt-4">
              <motion.div
                className="flex items-center gap-4"
                variants={itemVariants}
              >
                <div className="bg-amber-100 dark:bg-amber-800 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <a
                    className="text-amber-600 hover:underline underline-offset-4"
                    href="mailto:momszyka@gmail.com"
                  >
                    momszyka@gmail.com
                  </a>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center gap-4"
                variants={itemVariants}
              >
                <div className="bg-amber-100 dark:bg-amber-800 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Call Us</h3>
                  <a
                    className="text-amber-600 hover:underline underline-offset-4"
                    href="tel:9304531876"
                  >
                    +91 9304531876
                  </a>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center gap-4"
                variants={itemVariants}
              >
                <div className="bg-amber-100 dark:bg-amber-800 p-3 rounded-full">
                  <MessageCircle className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Live Chat</h3>
                  <Button
                    className="text-amber-600 hover:underline bg-transparent p-0"
                    variant="link"
                  >
                    Start a Chat
                  </Button>
                </div>
              </motion.div>
            </div>
            <motion.div className="flex gap-4 pt-4" variants={itemVariants}>
              <a href="#" className="text-amber-600 hover:text-amber-700">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-amber-600 hover:text-amber-700">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-amber-600 hover:text-amber-700">
                <Instagram className="h-6 w-6" />
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            className="bg-amber-50 dark:bg-amber-900 p-8 rounded-xl border border-amber-200 dark:border-amber-700"
            variants={itemVariants}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  className="block text-sm font-medium text-amber-700 dark:text-amber-200"
                  htmlFor="name"
                >
                  Your Name
                </label>
                <div className="mt-1">
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Tell us your name"
                    className="block w-full bg-transparent border-amber-300 dark:border-amber-700 focus:ring-amber-500 focus:border-amber-500 rounded-full"
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-amber-700 dark:text-amber-200"
                  htmlFor="email"
                >
                  Your Email
                </label>
                <div className="mt-1">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Share your email"
                    className="block w-full bg-transparent border-amber-300 dark:border-amber-700 focus:ring-amber-500 focus:border-amber-500 rounded-full"
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-amber-700 dark:text-amber-200"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <div className="mt-1">
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What's on your mind?"
                    className="block w-full bg-transparent border-amber-300 dark:border-amber-700 focus:ring-amber-500 focus:border-amber-500 rounded-full"
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-amber-700 dark:text-amber-200"
                  htmlFor="message"
                >
                  Message
                </label>
                <div className="mt-1">
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us how we can delight you!"
                    rows={4}
                    className="block w-full bg-transparent border-amber-300 dark:border-amber-700 focus:ring-amber-500 focus:border-amber-500 rounded-lg"
                  />
                </div>
              </div>
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 rounded-full text-sm font-bold text-white bg-amber-600 hover:bg-amber-700 focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors"
                >
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </main>

      {/* Success Dialog */}
      <Dialog open={formSubmitted} onOpenChange={setFormSubmitted}>
        <DialogContent className="bg-amber-50 dark:bg-amber-900 rounded-lg">
          <DialogHeader>
            <DialogTitle className="text-amber-800 dark:text-amber-100">
              Thank You for Reaching Out!
            </DialogTitle>
            <DialogDescription className="text-gray-600 dark:text-gray-300">
              We've received your message and will get back to you within 24
              hours. In the meantime, explore our delicious meals or join our
              community!
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-4">
            <Button
              className="bg-amber-600 hover:bg-amber-700 text-white rounded-full"
              onClick={() => setFormSubmitted(false)}
            >
              Close
            </Button>
            <Button
              className="bg-amber-100 text-amber-800 hover:bg-amber-200 dark:bg-amber-800 dark:text-amber-100 dark:hover:bg-amber-700 rounded-full"
              asChild
            >
              <a href="/how-it-works">Explore Meals</a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MomszykaContact;
