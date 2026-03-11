"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Form from "./Form";
import { useCart } from "@/services/Cartcontext";

const navLinks = [
  { href: "/our-story", label: "About Us" },
  { href: "/subscribe", label: "Menu" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [emptyTooltip, setEmptyTooltip] = useState(false);
  const tooltipTimer = useRef(null);
  const pathname = usePathname();
  const { totalItems, totalPrice, setIsCartOpen } = useCart();

  useEffect(() => {
    if (pathname === "/") {
      window.scrollTo(0, 0);
      setIsScrolled(false);
    } else {
      setIsScrolled(window.scrollY > 0);
    }
    setIsHovered(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCartClick = () => {
    if (totalItems === 0) {
      setEmptyTooltip(true);
      clearTimeout(tooltipTimer.current);
      tooltipTimer.current = setTimeout(() => setEmptyTooltip(false), 2500);
    } else {
      setIsCartOpen(true);
    }
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  const isActive = (href) => pathname === href;
  const isHome = pathname === "/";

  const visibleLinks = isHome
    ? navLinks
    : [{ href: "/", label: "Home" }, ...navLinks];

  const showBackground = !isHome || isHovered || isScrolled || mobileOpen;

  return (
    <motion.header
      className={`${isHome ? "fixed" : "sticky"} top-0 left-0 right-0 w-full z-50 border-b transition-all duration-300 ${
        showBackground
          ? "bg-amber-50/90 dark:bg-amber-900/90 backdrop-blur-md border-amber-200 dark:border-amber-700 shadow-lg"
          : "bg-transparent border-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto pl-0 pr-4 sm:px-6 flex items-center justify-between py-2">
        {/* ── Logo ── */}
        <Link href="/">
          <div className="flex items-center gap-3">
            <img
              src="./logo.png"
              alt="Momszyka Logo"
              className="w-32 h-14 object-contain scale-150 drop-shadow-sm"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden md:flex items-center gap-8">
          {visibleLinks.map(({ href, label }) => (
            <motion.div
              key={href}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                href={href}
                className={`text-base font-semibold transition-colors relative pb-0.5 ${
                  isActive(href)
                    ? "text-[#FF8F00] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#FF8F00] after:rounded-full"
                    : showBackground
                      ? "text-amber-800 dark:text-amber-100 hover:text-[#FF8F00] dark:hover:text-amber-400"
                      : "text-white drop-shadow hover:text-[#FF8F00]"
                }`}
              >
                {label}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* ── Right side: Cart + CTA + mobile menu ── */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* ── Cart Button ── */}
          <motion.button
            onClick={handleCartClick}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className={`relative flex items-center gap-2 px-3 py-2 rounded-xl font-semibold text-sm transition-all duration-200 ${
              showBackground
                ? "bg-amber-100 hover:bg-amber-200 text-amber-800"
                : "bg-white/15 hover:bg-white/25 text-white backdrop-blur-sm"
            }`}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            {totalItems > 0 && (
              <span className="hidden sm:inline font-bold text-[#FF8F00]">
                ₹{totalPrice}
              </span>
            )}
            {totalItems > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#FF8F00] text-white text-[10px] font-extrabold flex items-center justify-center"
              >
                {totalItems}
              </motion.span>
            )}
          </motion.button>

          {/* ── Empty Cart Tooltip ── */}
          <AnimatePresence>
            {emptyTooltip && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                style={{
                  position: "fixed",
                  top: 68,
                  right: 16,
                  width: 220,
                  zIndex: 9999,
                }}
              >
                <Link
                  href="/subscribe#popular-orders"
                  onClick={() => setEmptyTooltip(false)}
                  className="block rounded-2xl overflow-hidden no-underline"
                  style={{
                    background: "linear-gradient(135deg, #FF6B35, #FF9A3C)",
                    boxShadow: "0 8px 24px rgba(255,107,53,0.4)",
                    textDecoration: "none",
                  }}
                >
                  <div className="px-4 py-3 flex items-center justify-between">
                    <div>
                      <p className="text-white font-bold text-sm m-0">
                        Your cart is empty 🍽️
                      </p>
                      <p className="text-white/85 font-semibold text-xs mt-0.5">
                        Hungry? Check out our menu →
                      </p>
                    </div>
                    <span className="text-white/70 text-lg ml-3">›</span>
                  </div>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── CTA ── */}
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="[&>*]:text-xs [&>*]:px-2 [&>*]:py-1.5 sm:[&>*]:text-sm sm:[&>*]:px-4 sm:[&>*]:py-2"
          >
            <Form />
          </motion.div>

          {/* ── Mobile hamburger ── */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="md:hidden p-2 rounded-full hover:bg-white/20"
                aria-label="Open menu"
              >
                <Menu
                  className={`h-6 w-6 transition-colors ${
                    showBackground
                      ? "text-amber-800 dark:text-amber-100"
                      : "text-white drop-shadow"
                  }`}
                />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[280px] sm:w-[340px] bg-amber-50 dark:bg-amber-900 p-0 border-l border-amber-200 dark:border-amber-700 [&>button:first-of-type]:hidden"
            >
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <SheetDescription className="sr-only">
                Site navigation links and contact information
              </SheetDescription>

              <div className="flex items-center justify-between px-6 py-4 border-b border-amber-200 dark:border-amber-700">
                <Link href="/" onClick={() => setMobileOpen(false)}>
                  <img
                    src="./logo.png"
                    alt="Momszyka Logo"
                    className="w-14 h-14 object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </Link>
                <Button
                  variant="ghost"
                  className="p-2 rounded-full hover:bg-amber-100 dark:hover:bg-amber-800"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6 text-amber-800 dark:text-amber-100" />
                </Button>
              </div>

              <nav className="flex flex-col px-4 py-6 gap-1">
                {visibleLinks.map(({ href, label }, index) => (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.07, duration: 0.3 }}
                  >
                    <Link
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center w-full text-base font-semibold px-4 py-3 rounded-xl transition-all ${
                        isActive(href)
                          ? "bg-[#FF8F00]/10 text-[#FF8F00] border-l-4 border-[#FF8F00] pl-3"
                          : "text-amber-800 dark:text-amber-100 hover:bg-amber-100 dark:hover:bg-amber-800 hover:text-[#FF8F00]"
                      }`}
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="absolute bottom-0 left-0 right-0 px-6 py-5 border-t border-amber-200 dark:border-amber-700 bg-amber-100/60 dark:bg-amber-950/60">
                <Link href="/contact">
                  <p className="text-xs text-amber-600 dark:text-amber-400 font-medium mb-1">
                    Need help?
                  </p>
                </Link>
                <a
                  href="mailto:momszyka@gmail.com"
                  className="text-sm font-semibold text-amber-800 dark:text-amber-100 hover:text-[#FF8F00] transition-colors"
                >
                  momszyka@gmail.com
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
