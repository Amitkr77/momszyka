// "use client";

// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// import { Menu } from "lucide-react";
// import { motion } from "framer-motion";
// import Form from "./Form";

// export default function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);

//   React.useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const buttonVariants = {
//     hover: { scale: 1.05, transition: { duration: 0.2 } },
//     tap: { scale: 0.95 },
//   };

//   return (
//     <motion.header
//       className={`sticky top-0 z-50 bg-amber-50/80 dark:bg-amber-900/80 backdrop-blur-sm border-b border-amber-200 dark:border-amber-700 transition-shadow ${
//         isScrolled ? "shadow-md" : ""
//       }`}
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="container mx-auto px-6 flex items-center justify-between py-2">
//         <Link href="/">
//           <div className="flex items-center gap-3">
//             <img
//               src="./logo.png"
//               alt="Momszyka Logo"
//               className="w-12 h-12 md:w-16 md:h-16"
//             />
//           </div>
//         </Link>
//         <nav className="hidden md:flex items-center gap-8">
//           {/* <motion.div variants={buttonVariants} whileHover="hover">
//             <Link
//               className="text-sm font-medium text-amber-800 dark:text-amber-100 hover:text-amber-600 dark:hover:text-amber-500 transition-colors"
//               href="/how-it-works"
//             >
//               How It Works
//             </Link>
//           </motion.div> */}
//           <motion.div variants={buttonVariants} whileHover="hover">
//             <Link
//               className="text-sm font-medium text-amber-800 dark:text-amber-100 hover:text-amber-600 dark:hover:text-amber-500 transition-colors"
//               href="/meet-cooks"
//             >
//               Meet Our Cooks
//             </Link>
//           </motion.div>
//           <motion.div variants={buttonVariants} whileHover="hover">
//             <Link
//               className="text-sm font-medium text-amber-800 dark:text-amber-100 hover:text-amber-600 dark:hover:text-amber-500 transition-colors"
//               href="/subscribe"
//             >
//               Subscribe
//             </Link>
//           </motion.div>
//           <motion.div variants={buttonVariants} whileHover="hover">
//             <Link
//               className="text-sm font-medium text-amber-800 dark:text-amber-100 hover:text-amber-600 dark:hover:text-amber-500 transition-colors"
//               href="/our-story"
//             >
//               Our Story
//             </Link>
//           </motion.div>
//           <motion.div variants={buttonVariants} whileHover="hover">
//             <Link
//               className="text-sm font-medium text-amber-800 dark:text-amber-100 hover:text-amber-600 dark:hover:text-amber-500 transition-colors"
//               href="/contact"
//             >
//               Contact
//             </Link>
//           </motion.div>
//         </nav>
//         <div className="flex items-center gap-4">
//           <Sheet>
//             <SheetTrigger asChild>
//               <Button
//                 variant="ghost"
//                 className="md:hidden p-2"
//                 aria-label="Open menu"
//               >
//                 <Menu className="h-6 w-6 text-amber-800 dark:text-amber-100" />
//               </Button>
//             </SheetTrigger>
//             <SheetContent
//               side="right"
//               className="w-[300px] sm:w-[400px] bg-amber-50 dark:bg-amber-900"
//             >
//               <nav className="flex flex-col gap-4 mt-8">
//                 <Link
//                   className="text-sm font-medium text-amber-800 dark:text-amber-100 hover:text-amber-600 dark:hover:text-amber-500 transition-colors"
//                   href="/how-it-works"
//                 >
//                   How It Works
//                 </Link>
//                 <Link
//                   className="text-sm font-medium text-amber-800 dark:text-amber-100 hover:text-amber-600 dark:hover:text-amber-500 transition-colors"
//                   href="/meet-cooks"
//                 >
//                   Meet Our Cooks
//                 </Link>
//                 <Link
//                   className="text-sm font-medium text-amber-800 dark:text-amber-100 hover:text-amber-600 dark:hover:text-amber-500 transition-colors"
//                   href="/subscribe"
//                 >
//                   Subscribe
//                 </Link>
//                 <Link
//                   className="text-sm font-medium text-amber-800 dark:text-amber-100 hover:text-amber-600 dark:hover:text-amber-500 transition-colors"
//                   href="/our-story"
//                 >
//                   Our Story
//                 </Link>
//                 <Link
//                   className="text-sm font-medium text-amber-800 dark:text-amber-100 hover:text-amber-600 dark:hover:text-amber-500 transition-colors"
//                   href="/contact"
//                 >
//                   Contact
//                 </Link>
//               </nav>
//             </SheetContent>
//           </Sheet>
//           <motion.div
//             variants={buttonVariants}
//             whileHover="hover"
//             whileTap="tap"
//           >
//             <Form />
//           </motion.div>
//         </div>
//       </div>
//     </motion.header>
//   );
// }

"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Form from "./Form";

// ── Nav links defined once – edit here to update both desktop & mobile ──
const navLinks = [
  { href: "/our-story", label: "About Us" },
  { href: "/subscribe", label: "Menu" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  const isActive = (href) => pathname === href;
  const isHome = pathname === "/";

  // Prepend Home link only when not on the home page
  const visibleLinks = isHome
    ? navLinks
    : [{ href: "/", label: "Home" }, ...navLinks];

  return (
    <motion.header
      className={`sticky top-0 z-50 bg-amber-50/90 dark:bg-amber-900/90 backdrop-blur-md border-b border-amber-200 dark:border-amber-700 transition-shadow ${
        isScrolled ? "shadow-lg" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between py-2">
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
                    : "text-amber-800 dark:text-amber-100 hover:text-[#FF8F00] dark:hover:text-amber-400"
                }`}
              >
                {label}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* ── Right side: CTA + mobile menu ── */}
        <div className="flex items-center gap-4">
          {/* CTA / Form button */}
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Form />
          </motion.div>

          {/* Mobile hamburger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="md:hidden p-2 rounded-full hover:bg-amber-100 dark:hover:bg-amber-800"
                aria-label="Open menu"
              >
                <Menu className="h-7 w-7 text-amber-800 dark:text-amber-100" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[280px] sm:w-[340px] bg-amber-50 dark:bg-amber-900 p-0 border-l border-amber-200 dark:border-amber-700"
            >
              {/* Sheet header with logo + close button */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-amber-200 dark:border-amber-700">
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

              {/* Nav links with stagger animation */}
              <nav className="flex flex-col px-4 py-6 gap-1">
                {visibleLinks.map(({ href, label }, index) => (
                  <SheetClose asChild key={href}>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.07, duration: 0.3 }}
                    >
                      <Link
                        href={href}
                        className={`flex items-center w-full text-base font-semibold px-4 py-3 rounded-xl transition-all ${
                          isActive(href)
                            ? "bg-[#FF8F00]/10 text-[#FF8F00] border-l-4 border-[#FF8F00] pl-3"
                            : "text-amber-800 dark:text-amber-100 hover:bg-amber-100 dark:hover:bg-amber-800 hover:text-[#FF8F00]"
                        }`}
                      >
                        {label}
                      </Link>
                    </motion.div>
                  </SheetClose>
                ))}
              </nav>

              {/* Bottom contact strip */}
              <div className="absolute bottom-0 left-0 right-0 px-6 py-5 border-t border-amber-200 dark:border-amber-700 bg-amber-100/60 dark:bg-amber-950/60">
                <p className="text-xs text-amber-600 dark:text-amber-400 font-medium mb-1">
                  Need help?
                </p>
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
