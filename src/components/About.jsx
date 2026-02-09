import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChefHat, Truck, PackageCheck } from "lucide-react";

export const AboutMomszyka = () => {
  const features = [
    {
      icon: ChefHat,
      title: "Truly Home-Style Meals",
      description:
        "Inspired by everyday Indian kitchens — simple, soulful, and satisfying. No restaurant-style heaviness, only honest flavors.",
      gradient: "from-[#f25c41] to-[#f79e33]",
    },
    {
      icon: Truck,
      title: "Reliable Daily Delivery",
      description:
        "We understand your routine. We ensure on-time delivery so your meals fit perfectly into your day without stress.",
      gradient: "from-[#f79e33] to-[#f25c41]",
    },
    {
      icon: PackageCheck,
      title: "Clean & Safe Packaging",
      description:
        "Hygiene is non-negotiable. Every tiffin is packed in food-grade, sealed containers to maintain freshness and safety.",
      gradient: "from-[#f25c41] to-[#f79e33]",
    },
  ];

  const values = [
    {
      emoji: "❤️",
      text: "Made with love, just like home",
    },
    {
      emoji: "🌿",
      text: "Fresh ingredients, every single day",
    },
    {
      emoji: "🧑‍🍳",
      text: "FSSAI certified",
    },
  ];

  return (
    <section
      id="about"
      className="py-4 md:py-6 relative overflow-hidden bg-[#F9FAFB]"
    >
      <div className="max-w-[1350px] mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-['Playfair_Display'] font-bold text-[var(--color-new)] mb-4">
            About Momszyka
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At Momszyka, we believe food is more than just a meal — it's a
            feeling of care, comfort, and home.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-8">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-[#f25c41]/30 to-[#f79e33]/30 rounded-[3rem] blur-2xl"></div>
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/about_img.png"
                alt="Home-style meal"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-4xl font-['Playfair_Display'] font-bold text-gray-900">
              Our Mission
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed">
              Our mission is simple: to bring real home-style food to students,
              working professionals, and families who miss the warmth of{" "}
              <strong className="font-bold text-[#f25c41]">
                ghar ka khana
              </strong>
              .
            </p>
            <div className="bg-gradient-to-r from-[#f25c41]/10 to-[#f79e33]/10 rounded-2xl p-5 border-l-4 border-[#f25c41]">
              <p className="text-lg text-[#2D3A3A] font-['Yatra_One',_cursive] italic">
                "Every meal is prepared using fresh ingredients and traditional
                recipes, ensuring taste that feels familiar — just like food
                cooked by a mom."
              </p>
            </div>
            <p className="text-2xl font-['Playfair_Display'] font-bold text-[var(--color-new)]">
              Balanced nutrition and soulful flavors for your daily routine.
            </p>

            {/* Values Pills */}
            <div className="flex flex-nowrap gap-2.5 pt-1 overflow-x-auto">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-2 bg-white px-3 py-2.5 rounded-full shadow-md border border-gray-200 hover:border-[#f25c41]/30 hover:shadow-lg transition-all whitespace-nowrap"
                >
                  <span className="text-xl">{value.emoji}</span>
                  <span className="text-gray-700 text-xs font-medium">
                    {value.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Features - Stacked Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h3 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-center text-gray-900 mb-4">
            What Makes Momszyka Special?
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center text-white mb-4`}
                >
                  <feature.icon size={32} />
                </div>
                <h4 className="text-2xl font-['Playfair_Display'] font-bold mb-3 text-gray-900">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
