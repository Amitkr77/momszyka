"use client"
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Utensils, Users, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const MomszykaCooks = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-gradient-to-b from-amber-50 to-white dark:from-amber-900 dark:to-amber-800 font-display text-amber-800 dark:text-amber-100">
      <div className="layout-container flex h-full grow flex-col">
        <main className="flex flex-1 flex-col items-center">
          <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="py-16 sm:py-12"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div
                className="relative min-h-[80vh] flex flex-col items-center justify-center rounded-xl overflow-hidden p-6 text-center bg-cover bg-center"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuD9V9QGlRkcmYbJWvdOSJnc-Y-D4wr1rpIGh8HOx8gl1HUOc5mpL8Wmo_QfODVhmJJsgG0NQPNtGMv4hVvD6NqrY7GwM1Zn3wUYqKFdzCcwZndeNNiYjMuHZ4O5PO8uWb_prWyIncjt_csrI1Vxw7IUj4T_Tlne9es1FnIl0i9TUJXLbFw5NTgGr6_iSK5RKat-sx3OUZnQy-HNmhzFqLSOpW4cgd1V6xEK4zU_h_zsJtaAmoK0EyS6GPpdQ-2zuuScmRqfmLp2A54')",
                }}
              >
                <div className="flex flex-col gap-4 max-w-3xl">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tighter">
                    Become a Momszyka Cook
                  </h1>
                  <h2 className="text-base sm:text-lg text-white/90">
                    Share your love for cooking, earn a flexible income, and bring joy to your community with every delicious meal.
                  </h2>
                </div>
                <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                  <Button className="mt-8 flex min-w-[84px] max-w-[480px] items-center justify-center rounded-full h-12 px-8 bg-amber-600 text-white text-base font-bold shadow-lg hover:bg-amber-700 transition-all">
                    Start Cooking
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <motion.section
              className="py-16 sm:py-24"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tighter">
                  Why Cook with Momszyka?
                </h2>
                <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300">
                  Turn your passion for cooking into a rewarding experience with our supportive platform and vibrant community.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div variants={cardVariants} whileHover="hover">
                  <Card className="bg-amber-50 dark:bg-amber-900 border-amber-200 dark:border-amber-700">
                    <CardContent className="p-8 text-center">
                      <div className="p-4 bg-amber-100 dark:bg-amber-800 rounded-full text-amber-600">
                        <Utensils className="h-8 w-8" />
                      </div>
                      <CardTitle className="mt-6 text-xl font-bold">Cook on Your Schedule</CardTitle>
                      <CardDescription className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                        Enjoy the freedom to set your own hours and cook from your own kitchen, fitting perfectly into your lifestyle.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div variants={cardVariants} whileHover="hover">
                  <Card className="bg-amber-50 dark:bg-amber-900 border-amber-200 dark:border-amber-700">
                    <CardContent className="p-8 text-center">
                      <div className="p-4 bg-amber-100 dark:bg-amber-800 rounded-full text-amber-600">
                        <Users className="h-8 w-8" />
                      </div>
                      <CardTitle className="mt-6 text-xl font-bold">Build Your Community</CardTitle>
                      <CardDescription className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                        Connect with food lovers, share your story, and grow a loyal customer base in your local area.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div variants={cardVariants} whileHover="hover">
                  <Card className="bg-amber-50 dark:bg-amber-900 border-amber-200 dark:border-amber-700">
                    <CardContent className="p-8 text-center">
                      <div className="p-4 bg-amber-100 dark:bg-amber-800 rounded-full text-amber-600">
                        <DollarSign className="h-8 w-8" />
                      </div>
                      <CardTitle className="mt-6 text-xl font-bold">Earn a Steady Income</CardTitle>
                      <CardDescription className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                        Turn your culinary skills into a reliable source of income with secure payments and transparent earnings.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.section>

            <motion.section
              className="py-16 sm:py-24"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tighter">
                  Meet Our Talented Cooks
                </h2>
                <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300">
                  Discover the passionate cooks who bring authentic, home-cooked meals to your table.
                </p>
              </div>
              <div className="mt-12 grid gap-8 md:grid-cols-3">
                <motion.div variants={cardVariants} whileHover="hover">
                  <Card className="bg-amber-50 dark:bg-amber-900 border-amber-200 dark:border-amber-700">
                    <CardContent className="p-0">
                      <div
                        className="aspect-square bg-cover bg-center rounded-t-xl"
                        style={{
                          backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAOKgYrPh7MIEr6fCSlwdlCnJg-pffmSV0Q0m0FNBtDRozrbjqgvLoF8rTZgIAgo_IY8w08Yzq3A-tj3WgYOCX3cLpuVlYOZYJNuM-_lA18dEz4wDXThx9wRxGropkQIwwyjwnF6P1XAz0qU3E7pMqhVttRES0DHC8pR639jzM2CS752wtwalfaJhfwrNE4pB_VeqY5vE0AeSVDFMSAlTEQ1vzk_1TWjEZKo2ciKH_7eVuGOoQNMmN2ogDN_ak-59T5tjO3mb02k0s')",
                        }}
                      ></div>
                      <div className="p-4">
                        <CardTitle>Maria G.</CardTitle>
                        <CardDescription className="mt-2">
                          Specializing in authentic Italian cuisine. <br />
                          <span className="text-amber-600">★★★★★ (4.9/5)</span>
                        </CardDescription>
                        <div className="mt-4 flex justify-between items-center">
                          <span className="font-bold">Lasagna</span>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" className="rounded-full border-amber-300 hover:bg-amber-100 dark:hover:bg-amber-800">
                                View Menu
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="bg-amber-50 dark:bg-amber-900 rounded-lg">
                              <DialogHeader>
                                <DialogTitle className="text-amber-800 dark:text-amber-100">Maria G.'s Menu</DialogTitle>
                                <DialogDescription className="text-gray-600 dark:text-gray-300">
                                  Explore Maria's authentic Italian dishes, including her famous lasagna and tiramisu. Order now to enjoy a taste of Italy!
                                </DialogDescription>
                              </DialogHeader>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div variants={cardVariants} whileHover="hover">
                  <Card className="bg-amber-50 dark:bg-amber-900 border-amber-200 dark:border-amber-700">
                    <CardContent className="p-0">
                      <div
                        className="aspect-square bg-cover bg-center rounded-t-xl"
                        style={{
                          backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCORzqswqT2ia1SchrA2-ATJuauxtgxsm8a5WVzqQUrnfA7P_QRahwHMB_pa-u0MmK_JjrCDs_kMDv5NxgUGVm991_lUAIbuOLP8yeB6E6GZmekX7RpOkPQ608hceXpAfvyktNCvYyozvBAaO718h8mFsJe7N7ENYM_K4aiie5FHlU3KDsqEPAsV2lIFJtNJg56QW_AiXKVu9Igy4o-8SANjChzyJwBa73mkooCDhG6AT9ZIFApxpg1VM7HPOv1jFZ1ymav9hHaUQQ')",
                        }}
                      ></div>
                      <div className="p-4">
                        <CardTitle>Aisha K.</CardTitle>
                        <CardDescription className="mt-2">
                          Bringing vibrant Indian flavors to life. <br />
                          <span className="text-amber-600">★★★★★ (4.8/5)</span>
                        </CardDescription>
                        <div className="mt-4 flex justify-between items-center">
                          <span className="font-bold">Butter Chicken</span>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" className="rounded-full border-amber-300 hover:bg-amber-100 dark:hover:bg-amber-800">
                                View Menu
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="bg-amber-50 dark:bg-amber-900 rounded-lg">
                              <DialogHeader>
                                <DialogTitle className="text-amber-800 dark:text-amber-100">Aisha K.'s Menu</DialogTitle>
                                <DialogDescription className="text-gray-600 dark:text-gray-300">
                                  Dive into Aisha's flavorful Indian dishes, from butter chicken to spicy biryani. Order now for a culinary adventure!
                                </DialogDescription>
                              </DialogHeader>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div variants={cardVariants} whileHover="hover">
                  <Card className="bg-amber-50 dark:bg-amber-900 border-amber-200 dark:border-amber-700">
                    <CardContent className="p-0">
                      <div
                        className="aspect-square bg-cover bg-center rounded-t-xl"
                        style={{
                          backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA73bdZWoYPtbugHof2K_odtINA-Vs1X2nRcF8XC10HlMMVZwZ_xtZuEwi4-0qTC4BwSwAJCc8al3_yo7cZqYRhnmSop3ck_sp238uFNVXKAz3bvK5O7xRQMeSX6OfO2a7GpCIvX_Uhe_xlUYoytRBBw_5gxG0WJbIoRii_d_s1AhZZRJLSaZC8z1qQwpKcuYVLfr9ZL2zMvY6kdflVr2Toa391-1oBbttK8ycE6AqfShZc0Os8iAim-gcA6M87_MWU0Ub6rjWQUVU')",
                        }}
                      ></div>
                      <div className="p-4">
                        <CardTitle>Carlos M.</CardTitle>
                        <CardDescription className="mt-2">
                          Master of spicy Mexican dishes. <br />
                          <span className="text-amber-600">★★★★★ (4.7/5)</span>
                        </CardDescription>
                        <div className="mt-4 flex justify-between items-center">
                          <span className="font-bold">Tacos</span>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" className="rounded-full border-amber-300 hover:bg-amber-100 dark:hover:bg-amber-800">
                                View Menu
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="bg-amber-50 dark:bg-amber-900 rounded-lg">
                              <DialogHeader>
                                <DialogTitle className="text-amber-800 dark:text-amber-100">Carlos M.'s Menu</DialogTitle>
                                <DialogDescription className="text-gray-600 dark:text-gray-300">
                                  Savor Carlos's bold Mexican flavors, from tacos to enchiladas. Order now for a fiesta of taste!
                                </DialogDescription>
                              </DialogHeader>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.section>

            <motion.section
              className="py-16 sm:py-24"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tighter">
                  Frequently Asked Questions
                </h2>
                <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300">
                  Got questions? We’ve got answers to help you start your cooking journey with confidence.
                </p>
              </div>
              <div className="mt-12 max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full space-y-4">
                  <AccordionItem value="item-1" className="border border-amber-200 dark:border-amber-700 rounded-lg">
                    <AccordionTrigger className="px-4 py-2 flex items-center">
                      <span className="mr-2 text-amber-600">1.</span> How do I become a Momszyka cook?
                    </AccordionTrigger>
                    <AccordionContent className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">
                      Sign up on our platform, complete our streamlined onboarding process, and create your menu. We provide step-by-step guidance to get you started.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border border-amber-200 dark:border-amber-700 rounded-lg">
                    <AccordionTrigger className="px-4 py-2 flex items-center">
                      <span className="mr-2 text-amber-600">2.</span> What are the kitchen requirements?
                    </AccordionTrigger>
                    <AccordionContent className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">
                      You need a clean, safe kitchen and must comply with local food safety regulations. We offer resources to ensure you meet all standards.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="border border-amber-200 dark:border-amber-700 rounded-lg">
                    <AccordionTrigger className="px-4 py-2 flex items-center">
                      <span className="mr-2 text-amber-600">3.</span> How much can I earn?
                    </AccordionTrigger>
                    <AccordionContent className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">
                      Earnings depend on your menu and order volume, but our cooks typically earn competitive rates. Payments are securely processed weekly.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4" className="border border-amber-200 dark:border-amber-700 rounded-lg">
                    <AccordionTrigger className="px-4 py-2 flex items-center">
                      <span className="mr-2 text-amber-600">4.</span> Can I choose my menu?
                    </AccordionTrigger>
                    <AccordionContent className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">
                      Yes! You have full creative control to craft a menu that showcases your unique culinary style and signature dishes.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </motion.section>

            <motion.section
              className="py-16 sm:py-24 bg-amber-100 dark:bg-amber-800 rounded-xl mb-16"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tighter">
                  Ready to Share Your Culinary Passion?
                </h2>
                <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300">
                  Join our vibrant community of cooks and start creating delicious meals for your neighbors today.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                  <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                    <Button className="w-full sm:w-auto min-w-[84px] max-w-[480px] rounded-full h-12 px-8 bg-amber-600 text-white text-base font-bold shadow-lg hover:bg-amber-700 transition-all">
                      Sign Up as a Cook
                    </Button>
                  </motion.div>
                  <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                    <Button className="w-full sm:w-auto min-w-[84px] max-w-[480px] rounded-full h-12 px-8 bg-amber-50 text-amber-800 hover:bg-amber-100 dark:bg-amber-900 dark:text-amber-100 dark:hover:bg-amber-800 transition-all">
                      Explore Meals
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MomszykaCooks;