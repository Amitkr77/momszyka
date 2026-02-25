import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const AboutMomszyka = () => {
  return (
    <section className="py-10 md:py-16 bg-light overflow-hidden">
      <div className="max-w-[1350px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image — smaller, with decorative quote */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="absolute -inset-3 bg-gradient-to-br from-new/20 to-primary/20 rounded-3xl blur-xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-xl w-[75%] aspect-[4/3]">
              <Image
                src="/about/about_img.jpeg"
                alt="Home-style meal by Momszyka"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating quote badge */}
            <div className="absolute -bottom-4 -right-2 md:right-8 bg-white rounded-2xl shadow-lg px-4 py-3 max-w-[200px] border-l-4 border-new">
              <p className="text-xs text-gray-600 italic font-medium leading-snug">
                "Just like food cooked by a mom."
              </p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5 pb-6"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-['Playfair_Display'] font-bold text-new">
              About Momszyka
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              At Momszyka, we believe food is more than just a meal — it's a
              feeling of{" "}
              <strong className="text-new">care, comfort, and home</strong>.
            </p>
            <p className="text-base text-gray-500 leading-relaxed">
              We bring real <strong className="text-new">ghar ka khana</strong>{" "}
              to students, working professionals, and families — fresh,
              homestyle meals prepared with traditional recipes and delivered
              daily with love.
            </p>

            {/* 3 quick values */}
            <div className="flex flex-col gap-2 text-sm text-gray-600">
              <span>❤️ Made with love, just like home</span>
              <span>🌿 Fresh ingredients, every single day</span>
              <span>🧑‍🍳 FSSAI certified kitchen</span>
            </div>

            <Link href="/our-story" className="inline-block">
              <button className="group flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm bg-gray-900 text-white hover:bg-orange-500 shadow-md transition-all duration-200 active:scale-95 mt-2">
                More About Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
