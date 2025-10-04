"use client"
import { Button } from "@/components/ui/button";
import React from "react";
import { Utensils, Salad, Drumstick, Share2, Clock } from "lucide-react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

export default function Page() {
  // Animation variants for sections
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Animation variants for buttons
  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Animation variants for dialog
  const dialogVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-4xl font-bold text-amber-800 mb-4 flex items-center justify-center gap-2">
            <Utensils className="w-8 h-8 text-amber-600" />
            Create Your Meal Subscription
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Build your perfect meal plan in a few easy steps. Fresh, authentic, and made with love.
          </p>
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Button className="mt-6 bg-amber-600 hover:bg-amber-700 text-white rounded-full px-8 py-3 text-lg">
              Create Your Order
            </Button>
          </motion.div>
        </motion.div>

        {/* Specials Section */}
        <motion.div
          className="mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-semibold text-amber-800 mb-6 text-center">
            Don't Miss Our Specials!
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Perfect for a single meal or trying us out.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <h3 className="text-xl font-semibold text-amber-700 flex items-center gap-2">
                <Salad className="w-6 h-6 text-green-500" />
                Trial Meal - Veg
              </h3>
              <p className="text-2xl font-bold text-gray-800 my-2">₹180</p>
              <Dialog>
                <DialogTrigger asChild>
                  <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white rounded-full">
                      Add to Cart
                    </Button>
                  </motion.div>
                </DialogTrigger>
                <DialogContent className="bg-amber-50 rounded-lg">
                  <motion.div
                    variants={dialogVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <DialogHeader>
                      <DialogTitle className="text-2xl text-amber-800 flex items-center gap-2">
                        <Clock className="w-6 h-6 text-amber-600" />
                        Thank You for Choosing Us!
                      </DialogTitle>
                      <DialogDescription className="text-gray-600">
                        Our delicious Trial Meal - Veg is coming soon! We're putting the final touches on our menu to ensure a delightful experience. Join our waitlist to be the first to savor it!
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-4">
                      <p className="text-gray-700 mb-4">
                        Sign up below to get notified as soon as it's available, plus receive an exclusive <span className="font-bold text-amber-600">10% OFF</span> your first order!
                      </p>
                      <div className="flex gap-4">
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="flex-1 p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                        <Button className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-6">
                          Join Waitlist
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </DialogContent>
              </Dialog>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <h3 className="text-xl font-semibold text-amber-700 flex items-center gap-2">
                <Drumstick className="w-6 h-6 text-red-500" />
                Trial Meal - Non Veg
              </h3>
              <p className="text-2xl font-bold text-gray-800 my-2">₹220</p>
              <Dialog>
                <DialogTrigger asChild>
                  <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                    <Button className="w-full bg-red-500 hover:bg-red-600 text-white rounded-full">
                      Add to Cart
                    </Button>
                  </motion.div>
                </DialogTrigger>
                <DialogContent className="bg-amber-50 rounded-lg">
                  <motion.div
                    variants={dialogVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <DialogHeader>
                      <DialogTitle className="text-2xl text-amber-800 flex items-center gap-2">
                        <Clock className="w-6 h-6 text-amber-600" />
                        Thank You for Choosing Us!
                      </DialogTitle>
                      <DialogDescription className="text-gray-600">
                        Our flavorful Trial Meal - Non Veg is almost ready! We're perfecting the recipe for you. Join our waitlist to get early access and enjoy it fresh!
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-4">
                      <p className="text-gray-700 mb-4">
                        Sign up below to get notified as soon as it's available, plus receive an exclusive <span className="font-bold text-amber-600">10% OFF</span> your first order!
                      </p>
                      <div className="flex gap-4">
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="flex-1 p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                        <Button className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-6">
                          Join Waitlist
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </DialogContent>
              </Dialog>
            </motion.div>
          </div>
        </motion.div>

        {/* Referral Section */}
        <motion.div
          className="bg-amber-100 p-8 rounded-lg text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl font-semibold text-amber-800 mb-4 flex items-center justify-center gap-2">
            <Share2 className="w-7 h-7 text-amber-600" />
            Share & Save Big!
          </h2>
          <p className="text-lg text-gray-700 mb-2">
            Refer a friend for a monthly meal and get <span className="font-bold text-amber-600">₹250 OFF</span> your next order!
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Even better: Refer 10 friends and get your <span className="font-bold">1-month meal FREE!</span>
          </p>
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-8 py-3">
              Share the Love
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}