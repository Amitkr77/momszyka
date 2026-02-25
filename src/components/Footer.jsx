// "use client";
// import { Facebook, Instagram, Mail, X } from "lucide-react";
// import Link from "next/link";
// import React, { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";
// import toast from "react-hot-toast"; // <-- NEW

// export default function Footer() {
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(false);

//   const buttonVariants = {
//     hover: { scale: 1.05, transition: { duration: 0.2 } },
//     tap: { scale: 0.95 },
//   };

//   const iconVariants = {
//     hover: { scale: 1.2, rotate: 5, transition: { duration: 0.2 } },
//   };

//   const sectionVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, staggerChildren: 0.1 },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, x: -10 },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
//   };

//   const handleSubscribe = async (e) => {
//     e.preventDefault();
//     if (!email.trim()) return;

//     setLoading(true);
//     const toastId = toast.loading("Subscribing…");

//     try {
//       const res = await fetch("/api/subscribe", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       });

//       const data = await res.json();

//       if (!res.ok) throw new Error(data.message);

//       toast.success(data.message, { id: toastId });
//       setEmail("");
//     } catch (err) {
//       toast.error(err.message, { id: toastId });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <footer className="bg-gradient-to-b from-amber-50 to-white dark:from-amber-900/80 dark:to-amber-800/80 border-t border-amber-200 dark:border-amber-700 shadow-lg">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 border-b border-amber-200 dark:border-amber-700 pb-12"
//           variants={sectionVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.1 }}
//         >
//           {/* ────── Column 1 ────── */}
//           <motion.div className="space-y-6" variants={itemVariants}>
//             <Link href="/">
//               <div className="flex items-center gap-3">
//                 <img
//                   src="./logo.png"
//                   alt="Momszyka Logo"
//                   className="w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg ring-2 ring-amber-300 dark:ring-amber-600"
//                 />
//                 <h3 className="text-xl sm:text-2xl font-extrabold text-amber-800 dark:text-amber-100 tracking-tight">
//                   Momszyka
//                 </h3>
//               </div>
//             </Link>
//             <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-prose">
//               Delivering the heartwarming essence of home-cooked meals straight
//               to your doorstep. Connect with our vibrant community of culinary
//               enthusiasts and home chefs.
//             </p>
//             <div className="flex gap-4 sm:gap-6">
//               <motion.a
//                 href="https://facebook.com/momszyka"
//                 className="text-amber-600 hover:text-amber-800 dark:hover:text-amber-400 transition-colors border border-amber-600 p-2 rounded-4xl"
//                 variants={iconVariants}
//                 whileHover="hover"
//                 aria-label="Facebook"
//               >
//                 <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
//               </motion.a>
//               <motion.a
//                 href="https://x.com/momszyka"
//                 className="text-amber-600 hover:text-amber-800 dark:hover:text-amber-400 transition-colors border border-amber-600 p-2 rounded-4xl"
//                 variants={iconVariants}
//                 whileHover="hover"
//                 aria-label="X (formerly Twitter)"
//               >
//                 <X className="h-5 w-5 sm:h-6 sm:w-6" />
//               </motion.a>
//               <motion.a
//                 href="https://instagram.com/momszyka"
//                 className="text-amber-600 hover:text-amber-800 dark:hover:text-amber-400 transition-colors border border-amber-600 p-2 rounded-4xl"
//                 variants={iconVariants}
//                 whileHover="hover"
//                 aria-label="Instagram"
//               >
//                 <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
//               </motion.a>
//             </div>
//           </motion.div>

//           {/* ────── Column 2 – Explore ────── */}
//           <motion.nav className="space-y-6" variants={itemVariants}>
//             <h4 className="text-lg sm:text-xl font-semibold text-amber-800 dark:text-amber-100 tracking-wide">
//               Explore
//             </h4>
//             <ul className="space-y-3">
//               {["About Us", "How It Works", "Recipes", "Blog"].map((txt, i) => (
//                 <motion.li key={i} variants={itemVariants}>
//                   <Link
//                     className="text-sm sm:text-base text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium"
//                     href={
//                       txt === "About Us"
//                         ? "/our-story"
//                         : txt === "How It Works"
//                         ? "/how-it-works"
//                         : txt === "Recipes"
//                         ? "/recipes"
//                         : "/blog"
//                     }
//                   >
//                     {txt}
//                   </Link>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.nav>

//           {/* ────── Column 3 – Support ────── */}
//           <motion.nav className="space-y-6" variants={itemVariants}>
//             <h4 className="text-lg sm:text-xl font-semibold text-amber-800 dark:text-amber-100 tracking-wide">
//               Support
//             </h4>
//             <ul className="space-y-3">
//               {["FAQ", "Contact Us", "Terms of Service", "Privacy Policy"].map(
//                 (txt, i) => (
//                   <motion.li key={i} variants={itemVariants}>
//                     <Link
//                       className="text-sm sm:text-base text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium"
//                       href={
//                         txt === "FAQ"
//                           ? "/faq"
//                           : txt === "Contact Us"
//                           ? "/contact"
//                           : txt === "Terms of Service"
//                           ? "/terms"
//                           : "/privacy"
//                       }
//                     >
//                       {txt}
//                     </Link>
//                   </motion.li>
//                 )
//               )}
//             </ul>
//           </motion.nav>

//           {/* ────── Column 4 – Subscribe ────── */}
//           <motion.div className="space-y-6" variants={itemVariants}>
//             <h4 className="text-lg sm:text-xl font-semibold text-amber-800 dark:text-amber-100 tracking-wide">
//               Stay Connected
//             </h4>
//             <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
//               Join our newsletter for mouthwatering recipes, special promotions,
//               and the latest updates.
//             </p>

//             <form
//               onSubmit={handleSubscribe}
//               className="flex flex-col sm:flex-row gap-3"
//             >
//               <Input
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 disabled={loading}
//                 className="flex-1 bg-white dark:bg-amber-900/50 border-amber-300 dark:border-amber-600 focus:ring-amber-500 focus:border-amber-500 rounded-full text-sm sm:text-base placeholder:text-gray-400 dark:placeholder:text-gray-500 shadow-inner"
//               />
//               <motion.div
//                 variants={buttonVariants}
//                 whileHover="hover"
//                 whileTap="tap"
//               >
//                 <Button
//                   type="submit"
//                   disabled={loading}
//                   className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-4 sm:px-6 py-2 text-sm sm:text-base font-medium flex items-center justify-center w-full sm:w-auto shadow-md disabled:opacity-70"
//                 >
//                   {loading ? (
//                     <>
//                       <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
//                       Subscribing…
//                     </>
//                   ) : (
//                     <>
//                       <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
//                       Subscribe
//                     </>
//                   )}
//                 </Button>
//               </motion.div>
//             </form>
//           </motion.div>
//         </motion.div>

//         <motion.p
//           className="mt-6 text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400"
//           variants={itemVariants}
//         >
//           © {new Date().getFullYear()} Momszyka. All rights reserved.
//         </motion.p>
//       </div>
//     </footer>
//   );
// }

import { Facebook, Instagram, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import NewsletterForm from "./NewsletterForm";

const NAV = {
  Explore: [
    { label: "About Us", href: "/our-story" },
    { label: "Home", href: "/" },
    { label: "Menu", href: "/subscribe" },
  ],
  Support: [
    { label: "FAQ", href: "/faq" },
    { label: "Contact Us", href: "/contact" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
};

const SOCIALS = [
  { Icon: Facebook, href: "https://facebook.com/momszyka", label: "Facebook" },
  // { Icon: X, href: "https://x.com/momszyka", label: "X" },
  {
    Icon: Instagram,
    href: "https://instagram.com/momszyka",
    label: "Instagram",
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-amber-50/50 to-white dark:from-amber-950/50 dark:to-amber-900/80 border-t border-amber-100 dark:border-amber-900/50 overflow-hidden">
      {/* Decorative Top Line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 pb-6 sm:pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 pb-8 border-b border-amber-100 dark:border-amber-800/50">
          {/* ── Brand Column ── */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-4 sm:space-y-6">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden shadow-sm ring-2 ring-amber-200 dark:ring-amber-700 group-hover:ring-amber-400 transition-all duration-300 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Momszyka Logo"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <span className="text-xl sm:text-2xl font-extrabold text-amber-900 dark:text-amber-50 tracking-tight">
                Momszyka
              </span>
            </Link>

            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm">
              Delivering the heartwarming essence of home-cooked meals straight
              to your doorstep. Connecting you with a vibrant culinary
              community.
            </p>

            <div className="flex gap-3 sm:gap-4">
              {SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-full bg-amber-100/50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 hover:bg-amber-200 dark:hover:bg-amber-800 hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* ── Navigation Columns ── */}
          <div className="lg:col-span-4 flex flex-row gap-8 sm:gap-16">
            {Object.entries(NAV).map(([heading, links]) => (
              <nav key={heading} className="space-y-4 sm:space-y-6 flex-1">
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-900 dark:text-amber-200">
                  {heading}
                </h4>
                <ul className="space-y-2.5 sm:space-y-3">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200 font-medium"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          {/* ── Newsletter Column ── */}
          <div className="sm:col-span-2 lg:col-span-4 lg:pl-8">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-900 dark:text-amber-200 mb-2 sm:mb-3">
              Stay Connected
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3 sm:mb-4">
              Get our latest recipes, exclusive promos, and weekly updates
              straight to your inbox.
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Momszyka | Developed by Alomonx
            Technology Pvt Ltd.
          </p>
          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              href="/terms"
              className="hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
