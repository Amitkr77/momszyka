import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Utensils, Clock, ShieldCheck } from "lucide-react";

const AboutMomszyka = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="about" className="py-12 relative overflow-hidden bg-white">
      {/* Background*/}
      <div className="absolute inset-0 bg-pattern-home opacity-5" />

      {/* Decorative Background Elements*/}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-tiffin-gold/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-tiffin-red/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-9xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Header Section */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold text-[var(--color-new)] mb-4">
            About Momszyka
          </h2>

          <div className="w-28 h-1.5 bg-gradient-to-r from-[#f25c41] to-[#f79e33] mx-auto mb-4"></div>

          <p className="text-lg text-muted-foreground leading-relaxed">
            At Momszyka, we believe food is more than just a meal — it’s a
            feeling of care, comfort, and home.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-center">
          {/* Left Side: Main Feature Card */}
          <motion.div
            className="lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <div className="relative">
              <div className="absolute -left-6 -top-6 w-72 h-72 rounded-[1.5rem] bg-[#fdf2e9] -z-10 shadow-sm border border-[#d0a582]"></div>
              <div className="absolute -left-18 -top-10 w-80 h-80 rounded-full bg-tiffin-gold/15 blur-3xl -z-20"></div>

              <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-50 p-8 md:p-10 transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)]">
                <div className="relative h-90 w-full mb-8 overflow-hidden rounded-[1.5rem] shadow-sm">
                  <Image
                    src="/about_img.png"
                    alt="Home-style meal tray"
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="text-xl leading-relaxed text-gray-700 mb-4 font-medium">
                  Our mission is simple: to bring real home-style food to
                  students, working professionals, and families who miss the
                  warmth of{" "}
                  <strong className="font-semibold text-gray-800">
                    ghar ka khana
                  </strong>
                  .
                </p>

                <div className="relative my-4 p-6 bg-[#E5E7EB]/50 backdrop-blur-sm rounded-[1.5rem] border-l-4 border-[#2D3A3A] italic shadow-sm">
                  <p className="text-lg text-[#2D3A3A] font-['Yatra_One',_cursive] font-medium leading-relaxed">
                    "Every meal is prepared using fresh ingredients and
                    traditional recipes, ensuring taste that feels familiar —
                    just like food cooked by a mom."
                  </p>
                </div>

                <p className="text-xl font-['Playfair_Display'] font-bold text-[var(--color-new)]">
                  Balanced nutrition and soulful flavors for your daily routine.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Feature List */}
          <motion.div
            className="lg:w-1/2 space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">
              What Makes Momszyka Special?
            </h3>

            {/* Feature 1 */}
            <motion.div
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: {
                  duration: 0.5,
                  ease: [0.175, 0.885, 0.32, 1.275],
                },
              }}
              className="flex gap-4 p-5 bg-white shadow-sm border border-gray-100 rounded-2xl hover:shadow-md transition-shadow duration-300 cursor-default"
            >
              <div className="w-16 h-16 flex-shrink-0 bg-gradient-to-br from-[#f25c41] to-[#f79e33] rounded-2xl flex items-center justify-center text-white shadow-lg">
                <Utensils size={32} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold mb-1 text-gray-800 text-left">
                  Truly Home-Style Meals
                </h3>
                <p className="text-muted-foreground text-left leading-relaxed">
                  Inspired by everyday Indian kitchens — simple, soulful, and
                  satisfying. No restaurant-style heaviness, only honest
                  flavors.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: {
                  duration: 0.5,
                  ease: [0.175, 0.885, 0.32, 1.275],
                },
              }}
              className="flex gap-4 p-5 bg-white shadow-sm border border-gray-100 rounded-2xl hover:shadow-md transition-shadow duration-300 lg:ml-12 cursor-default"
            >
              <div className="w-16 h-16 flex-shrink-0 bg-gradient-to-br from-[#f25c41] to-[#f79e33] rounded-2xl flex items-center justify-center text-white shadow-lg">
                <Clock size={32} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold mb-1 text-gray-800 text-left">
                  Reliable Daily Delivery
                </h3>
                <p className="text-muted-foreground text-left leading-relaxed">
                  We understand your routine. We ensure on-time delivery so your
                  meals fit perfectly into your day without stress.
                </p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: {
                  duration: 0.5,
                  ease: [0.175, 0.885, 0.32, 1.275],
                },
              }}
              className="flex gap-4 p-5 bg-white shadow-sm border border-gray-100 rounded-2xl hover:shadow-md transition-shadow duration-300 lg:ml-6 cursor-default"
            >
              <div className="w-16 h-16 flex-shrink-0 bg-gradient-to-br from-[#f25c41] to-[#f79e33] rounded-2xl flex items-center justify-center text-white shadow-lg">
                <ShieldCheck size={32} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold mb-1 text-gray-800 text-left">
                  Clean & Safe Packaging
                </h3>
                <p className="text-muted-foreground text-left leading-relaxed">
                  Hygiene is non-negotiable. Every tiffin is packed in
                  food-grade, sealed containers to maintain freshness and
                  safety.
                </p>
              </div>
            </motion.div>

            {/* Why Choose*/}
            <motion.div
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                transition: {
                  duration: 0.5,
                  ease: [0.175, 0.885, 0.32, 1.275],
                },
              }}
              className="p-4 bg-white/40 backdrop-blur-sm rounded-xl border border-dashed border-tiffin-gold/30 lg:ml-12 cursor-default"
            >
              <h3 className="text-xl font-serif font-bold mb-2 text-gray-1000">
                Why Choose Momszyka?
              </h3>
              <ul className="grid grid-cols-1 gap-2">
                {[
                  "Nourishing and light for everyday eating",
                  "Sealed freshness in every box",
                  "Thoughtfully prepared for health & taste",
                  "The closest thing to home, away from home",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-tiffin-gold mr-3">●</span>
                    <span className="text-gray-700 font-medium leading-tight">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMomszyka;
