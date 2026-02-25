"use client";
import React, { useState, useCallback } from "react";
import { X, ChevronDown, HelpCircle } from "lucide-react";
import { faq } from "@/components/data/faqData";

/* ── Optimized FAQ Item ── */
const FAQItem = React.memo(function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false);

  const handleClick = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const iconClass = `flex-shrink-0 w-4 h-4 text-amber-500 transition-transform duration-300 ${
    open ? "rotate-180" : ""
  }`;

  return (
    <div
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
        open
          ? "border-amber-400 dark:border-amber-500 shadow-md shadow-amber-100 dark:shadow-amber-900/40"
          : "border-amber-200 dark:border-amber-800 hover:border-amber-300 dark:hover:border-amber-700"
      } bg-white dark:bg-amber-950/50`}
    >
      <button
        onClick={handleClick}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left group"
        aria-expanded={open}
      >
        <div className="flex items-center gap-3">
          <span className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-100 dark:bg-amber-800 text-amber-700 dark:text-amber-300 text-xs font-bold flex items-center justify-center">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-sm sm:text-base font-semibold text-gray-800 dark:text-amber-100 group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors">
            {item.q}
          </span>
        </div>

        <ChevronDown className={iconClass} />
      </button>

      {/* Optimized animation */}
      <div
        style={{ willChange: "max-height, opacity" }}
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-5 pb-5 pl-[3.75rem] text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
          {item.a}
        </p>
      </div>
    </div>
  );
});

/* ── Popup Version ── */
export function FAQPopup({ open, onClose }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="FAQ"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative w-full max-w-lg max-h-[85vh] flex flex-col rounded-3xl bg-gradient-to-b from-amber-50 to-white dark:from-amber-950 dark:to-amber-900 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-amber-200 dark:border-amber-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-amber-100 dark:bg-amber-800 flex items-center justify-center">
              <HelpCircle className="w-4 h-4 text-amber-600 dark:text-amber-300" />
            </div>
            <div>
              <h2 className="text-lg font-extrabold text-amber-800 dark:text-amber-100">
                Help Center
              </h2>
              <p className="text-xs text-gray-400 dark:text-gray-500">
                Frequently asked questions
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-amber-100 dark:hover:bg-amber-800 text-gray-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto flex-1 px-6 py-5 space-y-3">
          {faq.map((item, i) => (
            <FAQItem key={item.q} item={item} index={i} />
          ))}

          <div className="mt-4 rounded-2xl bg-amber-50 dark:bg-amber-900/60 border border-amber-200 dark:border-amber-800 p-4 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Still have questions?{" "}
              <a
                href="/contact"
                className="text-amber-600 dark:text-amber-400 font-semibold hover:underline"
              >
                Contact support →
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Page Version ── */
export default function FAQPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white dark:from-amber-950 dark:to-amber-900">
      {/* Header */}
      <div className="text-center py-16">
        <h1 className="text-4xl font-extrabold text-amber-800 dark:text-amber-100">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-500 mt-2">
          Everything you need to know about Momszyka
        </p>
      </div>

      {/* FAQ List */}
      <div className="max-w-2xl mx-auto px-4 space-y-3">
        {faq.map((item, i) => (
          <FAQItem key={item.q} item={item} index={i} />
        ))}
      </div>
    </main>
  );
}

/* ── Demo ── */
export function Demo() {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <>
      <FAQPage />

      <button
        onClick={() => setPopupOpen(true)}
        className="fixed bottom-6 right-6 px-5 py-3 rounded-full bg-amber-600 text-white"
      >
        Open FAQ
      </button>

      <FAQPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
    </>
  );
}
