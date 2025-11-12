"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Utensils,
  ChefHat,
  Truck,
  UserCheck,
  Menu,
  DollarSign,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Form from "@/components/Form";

const MomszykaHowItWorks = () => {
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

  return (
    <div className="bg-gradient-to-b from-amber-50 to-white dark:from-amber-900 dark:to-amber-800 font-display text-amber-800 dark:text-amber-100">
      <main className="container max-w-7xl mx-auto px-6 py-16 sm:py-24 lg:py-32">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            How Momszyka Works
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
            Savor the taste of home with Momszyka. We make it easy to enjoy
            authentic, home-cooked meals or share your culinary talents with
            your community.
          </p>
        </motion.div>
        <motion.div
          className="mt-20 grid gap-16 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <section>
            <h2 className="text-3xl font-bold">For Customers</h2>
            <div className="relative mt-8">
              <motion.div
                className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-amber-600/30"
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{ duration: 1, ease: "easeInOut" }}
                aria-hidden="true"
              ></motion.div>
              <div className="relative space-y-12">
                <motion.div
                  className="flex items-start gap-6"
                  variants={itemVariants}
                >
                  <div className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-600">
                    <Utensils className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Discover & Order</h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">
                      Browse a diverse selection of home-cooked meals from local
                      cooks, with interactive menus and real-time availability.
                    </p>
                    <Dialog>
                      <DialogTrigger asChild>
                        <motion.div
                          variants={buttonVariants}
                          whileHover="hover"
                          whileTap="tap"
                        >
                          <Button className="mt-4 bg-amber-600 hover:bg-amber-700 text-white rounded-full">
                            Browse Meals
                          </Button>
                        </motion.div>
                      </DialogTrigger>
                      <DialogContent className="bg-amber-50 dark:bg-amber-900 rounded-lg">
                        <DialogHeader>
                          <DialogTitle className="text-amber-800 dark:text-amber-100">
                            Explore Our Menus
                          </DialogTitle>
                          <DialogDescription className="text-gray-600 dark:text-gray-300">
                            Discover a variety of dishes, from Italian pastas to
                            spicy Indian curries, all crafted by passionate home
                            cooks. Start exploring now!
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-start gap-6"
                  variants={itemVariants}
                >
                  <div className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-600">
                    <ChefHat className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Freshly Prepared</h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">
                      Your chosen cook crafts your meal with fresh, high-quality
                      ingredients, tailored to your preferences.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-start gap-6"
                  variants={itemVariants}
                >
                  <div className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-600">
                    <Truck className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Swift Delivery</h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">
                      Enjoy contactless delivery at your scheduled time, with
                      real-time tracking for peace of mind.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-3xl font-bold">For Cooks</h2>
            <div className="relative mt-8">
              <motion.div
                className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-amber-600/30"
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{ duration: 1, ease: "easeInOut" }}
                aria-hidden="true"
              ></motion.div>
              <div className="relative space-y-12">
                <motion.div
                  className="flex items-start gap-6"
                  variants={itemVariants}
                >
                  <div className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-600">
                    <UserCheck className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Easy Onboarding</h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">
                      Join our community with a streamlined verification process
                      to start sharing your culinary creations.
                    </p>
                    <Dialog>
                      <DialogTrigger asChild>
                        <motion.div
                          variants={buttonVariants}
                          whileHover="hover"
                          whileTap="tap"
                        >
                          <Button className="mt-4 bg-amber-600 hover:bg-amber-700 text-white rounded-full">
                            Become a Cook
                          </Button>
                        </motion.div>
                      </DialogTrigger>
                      <DialogContent className="bg-amber-50 dark:bg-amber-900 rounded-lg">
                        <DialogHeader>
                          <DialogTitle className="text-amber-800 dark:text-amber-100">
                            Join Our Culinary Community
                          </DialogTitle>
                          <DialogDescription className="text-gray-600 dark:text-gray-300">
                            Sign up as a cook and share your passion for food
                            with your community. Our onboarding process is quick
                            and supportive!
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-start gap-6"
                  variants={itemVariants}
                >
                  <div className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-600">
                    <Menu className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Create Your Menu</h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">
                      Design a personalized menu, set your prices, and manage
                      availability with our easy-to-use platform.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-start gap-6"
                  variants={itemVariants}
                >
                  <div className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-600">
                    <DollarSign className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Earn with Ease</h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">
                      Receive secure payments for your dishes, with transparent
                      earnings tracking and flexible payout options.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </motion.div>
        <motion.section
          className="py-16 sm:py-24 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Savor or Share?
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Join Momszyka today as a customer to enjoy delicious meals or as a
            cook to share your culinary talents with the world.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              {/* <Button className="rounded-full bg-amber-100 px-6 py-3 text-sm font-bold text-amber-800 hover:bg-amber-200 dark:bg-amber-800 dark:text-amber-100 dark:hover:bg-amber-700">
                Sign Up as a Cook
              </Button> */}
              <Form/>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default MomszykaHowItWorks;
