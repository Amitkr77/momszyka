"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import Image from "next/image";

// ─────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────
const USE_CASES = [
  {
    id: "01",
    title: "Office Lunches & Corporate Meetings",
    tag: "Corporate",
    src: "/bulk/office.jpeg",
    alt: "Office lunch catering",
    tagBg: "bg-orange-100",
    tagText: "text-orange-800",
    linkColor: "text-orange-700",
  },
  {
    id: "02",
    title: "Birthday Parties & Family Functions",
    tag: "Celebrations",
    src: "/bulk/party.jpeg",
    alt: "Birthday party food spread",
    tagBg: "bg-rose-100",
    tagText: "text-rose-800",
    linkColor: "text-rose-700",
  },
  {
    id: "03",
    title: "School & College Events",
    tag: "Institutions",
    src: "/bulk/school.jpeg",
    alt: "School event catering",
    tagBg: "bg-blue-100",
    tagText: "text-blue-800",
    linkColor: "text-blue-700",
  },
  {
    id: "04",
    title: "House Parties & Gatherings",
    tag: "Social",
    src: "/bulk/house.jpeg",
    alt: "House party food",
    tagBg: "bg-emerald-100",
    tagText: "text-emerald-800",
    linkColor: "text-emerald-700",
  },
];

const WHATSAPP_NUMBER = "919304531876";

const UseCaseCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{
      duration: 0.5,
      delay: index * 0.08,
      ease: [0.25, 0.1, 0.25, 1],
    }}
    className="group rounded-2xl overflow-hidden bg-white border border-stone-100 active:scale-[0.98] sm:hover:shadow-xl sm:hover:-translate-y-1 transition-all duration-300 cursor-pointer touch-manipulation"
  >
    {/* Image */}
    <div className="relative aspect-[4/5] overflow-hidden">
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className="object-cover sm:group-hover:scale-105 transition-transform duration-700 ease-out"
        sizes="(max-width: 480px) 50vw, (max-width: 768px) 50vw, 25vw"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      {/* Tag — top left */}
      <span
        className={`absolute top-2.5 left-2.5 sm:top-3 sm:left-3 text-[9px] sm:text-[10px] font-bold tracking-wider uppercase px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full ${item.tagBg} ${item.tagText}`}
      >
        {item.tag}
      </span>

      {/* Number — top right */}
      <span className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white text-[9px] sm:text-[10px] font-black">
        {item.id}
      </span>

      {/* Title over image */}
      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
        <h3 className="text-white font-extrabold text-xs sm:text-sm leading-snug tracking-tight">
          {item.title}
        </h3>
      </div>
    </div>
  </motion.div>
);

// ─────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────
const BulkOrders = () => {
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Momszyka!%20I'm%20interested%20in%20placing%20a%20bulk%20order.`;

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-amber-50/60 to-white">
      <div className="container max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 sm:gap-8 mb-6 sm:mb-10"
        >
          <div className="min-w-0">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-amber-100 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 mb-3 sm:mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
              <span className="text-amber-700 text-[10px] sm:text-[11px] font-bold tracking-[0.15em] uppercase">
                Perfect for every occasion
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-stone-900 leading-tight tracking-tight mb-2 sm:mb-4">
              Bulk Orders —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                Ghar Jaisa Khana,
              </span>{" "}
              Sabke Liye
            </h2>

            <p className="text-stone-500 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md">
              Planning food for many people? Make it easy, hygienic, and
              delicious. Experience the warmth of home-cooked meals at your next
              big event.
            </p>
          </div>

          {/* WhatsApp CTA */}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] active:scale-95 text-white font-semibold text-sm px-5 sm:px-6 py-3.5 sm:py-4 rounded-2xl shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 w-fit flex-shrink-0 touch-manipulation"
          >
            <MessageCircle
              size={20}
              fill="currentColor"
              className="group-hover:rotate-12 transition-transform duration-300 flex-shrink-0"
            />
            <div className="flex flex-col text-left">
              <span className="leading-none mb-1 text-sm">
                Get Custom Quote on WhatsApp
              </span>
              <span className="text-white/75 text-[10px] font-normal tracking-wide">
                +91 93045 31876
              </span>
            </div>
          </a>
        </motion.div>

        {/* ── DIVIDER ── */}
        <div className="h-px bg-amber-100 mb-6 sm:mb-10" />

        {/* ── CARDS ── */}
        {/* 2-col on mobile, 4-col on lg+ */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {USE_CASES.map((item, index) => (
            <UseCaseCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BulkOrders;
