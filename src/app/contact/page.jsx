// "use client";
// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Mail,
//   Phone,
//   MessageCircle,
//   Facebook,
//   Twitter,
//   Instagram,
//   X,
// } from "lucide-react";
// import { motion } from "framer-motion";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
//   DialogFooter,
// } from "@/components/ui/dialog";
// import { toast } from "react-hot-toast"; // optional toast (install if you want)

// // ──────────────────────────────────────────────────────────────
// // 1. Google Apps Script Web-App URL (replace with yours)
// // ──────────────────────────────────────────────────────────────
// const GOOGLE_SCRIPT_URL =
//   "https://script.google.com/macros/s/AKfycbzg1y8BI5_rgXziK7fawWtjHob8hSFbwUQrtN6F0M29weYAb3zJvy10P065LCxc62ve-Q/exec";

// // ──────────────────────────────────────────────────────────────
// // 2. Live-Chat FAQ data
// // ──────────────────────────────────────────────────────────────
// const faq = [
//   {
//     q: "How do I place an order?",
//     a: "Select a meal category, choose the dish, add to cart, and checkout. You’ll receive a confirmation email instantly.",
//   },
//   {
//     q: "What are the delivery timings?",
//     a: "We deliver between 11 AM – 9 PM. You can pick a slot while checking out.",
//   },
//   {
//     q: "Can I customize a meal?",
//     a: "Yes! During checkout there’s a “Special instructions” box where you can mention any changes.",
//   },
//   {
//     q: "I have food allergies – what should I do?",
//     a: "Please mention the allergy in the order notes. Our cooks will prepare a safe version or suggest an alternative.",
//   },
//   {
//     q: "How do I cancel an order?",
//     a: "Orders can be cancelled up to 2 hours before the selected delivery slot. Contact support via email or live chat.",
//   },
// ];

// export default function MomszykaContact() {
//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const [chatOpen, setChatOpen] = useState(false);
//   const [selectedQ, setSelectedQ] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // ────── Animation variants (unchanged) ──────
//   const containerVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 },
//     },
//   };
//   const itemVariants = {
//     hidden: { opacity: 0, x: -20 },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
//   };
//   const buttonVariants = {
//     hover: { scale: 1.05 },
//     tap: { scale: 0.95 },
//   };

//   // ────── Form submit → Google Sheet ──────
//  const handleSubmit = async (e) => {
//   e.preventDefault();
//   setLoading(true);

//   const form = e.currentTarget;
//   const formData = new FormData(form);
//   const payload = {
//     name: formData.get('name') ,
//     email: formData.get('email') ,
//     subject: formData.get('subject') ,
//     message: formData.get('message') ,
//   };

//   try {
//     const res = await fetch('/api/contact', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(payload),
//     });

//     const data = await res.json();

//     if (!res.ok) throw new Error(data.message || 'Failed to send');

//     setFormSubmitted(true);
//     form.reset();
//     toast?.success?.('Message sent! We’ll get back within 24 hours.');
//   } catch (err) {
//     console.error(err);
//     toast?.error?.(err.message || 'Something went wrong. Try again.');
//   } finally {
//     setLoading(false);
//   }
// };

//   // ────── Render ──────
//   return (
//     <div className="flex flex-col min-h-screen bg-gradient-to-b from-amber-50 to-white dark:from-amber-900 dark:to-amber-800 font-display text-amber-800 dark:text-amber-100">
//       <main className="max-w-7xl flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
//         <motion.div
//           className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           {/* ── Left column ── */}
//           <motion.div className="space-y-6" variants={itemVariants}>
//             <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
//               We’re Here for You
//             </h2>
//             <p className="text-lg text-gray-600 dark:text-gray-300">
//               Have questions or ideas? Connect with our friendly team for 24/7
//               support or join our community to share your love for home-cooked
//               meals.
//             </p>

//             {/* Contact icons */}
//             <div className="space-y-4 pt-4">
//               {/* Email */}
//               <motion.div
//                 className="flex items-center gap-4"
//                 variants={itemVariants}
//               >
//                 <div className="bg-amber-100 dark:bg-amber-800 p-3 rounded-full">
//                   <Mail className="w-6 h-6 text-amber-600" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">Email Us</h3>
//                   <a
//                     className="text-amber-600 hover:underline underline-offset-4"
//                     href="mailto:momszyka@gmail.com"
//                   >
//                     momszyka@gmail.com
//                   </a>
//                 </div>
//               </motion.div>

//               {/* Phone */}
//               <motion.div
//                 className="flex items-center gap-4"
//                 variants={itemVariants}
//               >
//                 <div className="bg-amber-100 dark:bg-amber-800 p-3 rounded-full">
//                   <Phone className="w-6 h-6 text-amber-600" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">Call Us</h3>
//                   <a
//                     className="text-amber-600 hover:underline underline-offset-4"
//                     href="tel:9304531876"
//                   >
//                     +91 9304531876
//                   </a>
//                 </div>
//               </motion.div>

//               {/* Live Chat */}
//               <motion.div
//                 className="flex items-center gap-4"
//                 variants={itemVariants}
//               >
//                 <div className="bg-amber-100 dark:bg-amber-800 p-3 rounded-full">
//                   <MessageCircle className="w-6 h-6 text-amber-600" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">Live Chat</h3>
//                   <Button
//                     variant="link"
//                     className="p-0 h-auto text-amber-600 hover:underline"
//                     onClick={() => setChatOpen(true)}
//                   >
//                     Start a Chat
//                   </Button>
//                 </div>
//               </motion.div>
//             </div>

//             {/* Social icons */}
//             <motion.div className="flex gap-4 pt-4" variants={itemVariants}>
//               <a href="https://www.facebook.com/momszyka/" className="text-amber-600 hover:text-amber-700">
//                 <Facebook className="h-6 w-6" />
//               </a>
//               <a href="https://x.com/momszyka" className="text-amber-600 hover:text-amber-700">
//                 <Twitter className="h-6 w-6" />
//               </a>
//               <a href="https://www.instagram.com/momszyka" className="text-amber-600 hover:text-amber-700">
//                 <Instagram className="h-6 w-6" />
//               </a>
//             </motion.div>
//           </motion.div>

//           {/* ── Right column – Form ── */}
//           <motion.div
//             className="bg-amber-50 dark:bg-amber-900 p-8 rounded-xl border border-amber-200 dark:border-amber-700"
//             variants={itemVariants}
//           >
//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* Name */}
//               <div>
//                 <label
//                   className="block text-sm font-medium text-amber-700 dark:text-amber-200"
//                   htmlFor="name"
//                 >
//                   Your Name
//                 </label>
//                 <div className="mt-1">
//                   <Input
//                     id="name"
//                     name="name"
//                     type="text"
//                     required
//                     placeholder="Tell us your name"
//                     className="block w-full bg-transparent border-amber-300 dark:border-amber-700 focus:ring-amber-500 focus:border-amber-500 rounded-full"
//                   />
//                 </div>
//               </div>

//               {/* Email */}
//               <div>
//                 <label
//                   className="block text-sm font-medium text-amber-700 dark:text-amber-200"
//                   htmlFor="email"
//                 >
//                   Your Email
//                 </label>
//                 <div className="mt-1">
//                   <Input
//                     id="email"
//                     name="email"
//                     type="email"
//                     required
//                     placeholder="Share your email"
//                     className="block w-full bg-transparent border-amber-300 dark:border-amber-700 focus:ring-amber-500 focus:border-amber-500 rounded-full"
//                   />
//                 </div>
//               </div>

//               {/* Subject */}
//               <div>
//                 <label
//                   className="block text-sm font-medium text-amber-700 dark:text-amber-200"
//                   htmlFor="subject"
//                 >
//                   Subject
//                 </label>
//                 <div className="mt-1">
//                   <Input
//                     id="subject"
//                     name="subject"
//                     type="text"
//                     required
//                     placeholder="What's on your mind?"
//                     className="block w-full bg-transparent border-amber-300 dark:border-amber-700 focus:ring-amber-500 focus:border-amber-500 rounded-full"
//                   />
//                 </div>
//               </div>

//               {/* Message */}
//               <div>
//                 <label
//                   className="block text-sm font-medium text-amber-700 dark:text-amber-200"
//                   htmlFor="message"
//                 >
//                   Message
//                 </label>
//                 <div className="mt-1">
//                   <Textarea
//                     id="message"
//                     name="message"
//                     required
//                     rows={4}
//                     placeholder="Tell us how we can delight you!"
//                     className="block w-full bg-transparent border-amber-300 dark:border-amber-700 focus:ring-amber-500 focus:border-amber-500 rounded-lg"
//                   />
//                 </div>
//               </div>

//               {/* Submit */}
//               <motion.div
//                 variants={buttonVariants}
//                 whileHover="hover"
//                 whileTap="tap"
//               >
//                 <Button
//                   type="submit"
//                   disabled={loading}
//                   className="w-full flex justify-center py-3 px-4 rounded-full text-sm font-bold text-white bg-amber-600 hover:bg-amber-700 focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors"
//                 >
//                   {loading ? "Sending…" : "Send Message"}
//                 </Button>
//               </motion.div>
//             </form>
//           </motion.div>
//         </motion.div>
//       </main>

//       {/* ────── Success Dialog ────── */}
//       <Dialog open={formSubmitted} onOpenChange={setFormSubmitted}>
//         <DialogContent className="bg-amber-50 dark:bg-amber-900 rounded-lg">
//           <DialogHeader>
//             <DialogTitle className="text-amber-800 dark:text-amber-100">
//               Thank You for Reaching Out!
//             </DialogTitle>
//             <DialogDescription className="text-gray-600 dark:text-gray-300">
//               We've received your message and will get back to you within 24
//               hours.
//             </DialogDescription>
//           </DialogHeader>
//           <DialogFooter className="flex gap-4">
//             <Button
//               className="bg-amber-600 hover:bg-amber-700 text-white rounded-full"
//               onClick={() => setFormSubmitted(false)}
//             >
//               Close
//             </Button>
//             <Button
//               className="bg-amber-100 text-amber-800 hover:bg-amber-200 dark:bg-amber-800 dark:text-amber-100 dark:hover:bg-amber-700 rounded-full"
//               asChild
//             >
//               <a href="/how-it-works">Explore Meals</a>
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>

//       {/* ────── Live-Chat Modal ────── */}
//       <Dialog open={chatOpen} onOpenChange={setChatOpen}>
//         <DialogContent className="max-w-lg bg-amber-50 dark:bg-amber-900 rounded-lg">
//           <DialogHeader>
//             <DialogTitle className="flex items-center gap-2 text-amber-800 dark:text-amber-100">
//               <MessageCircle className="w-5 h-5" />
//               Quick Support
//             </DialogTitle>
//             <DialogDescription className="text-gray-600 dark:text-gray-300">
//               Choose a common question or type your own.
//             </DialogDescription>
//           </DialogHeader>

//           <div className="space-y-3 max-h-96 overflow-y-auto">
//             {faq.map((item, i) => (
//               <div
//                 key={i}
//                 className={`p-3 rounded-lg cursor-pointer transition-all ${
//                   selectedQ === i
//                     ? "bg-amber-200 dark:bg-amber-800"
//                     : "bg-white dark:bg-amber-950 hover:bg-amber-100 dark:hover:bg-amber-800"
//                 }`}
//                 onClick={() => setSelectedQ(i)}
//               >
//                 <p className="font-medium text-amber-800 dark:text-amber-200">
//                   {item.q}
//                 </p>
//                 {selectedQ === i && (
//                   <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
//                     {item.a}
//                   </p>
//                 )}
//               </div>
//             ))}
//           </div>

//           <DialogFooter className="flex gap-2">
//             <Button
//               variant="outline"
//               className="rounded-full"
//               onClick={() => {
//                 setSelectedQ(null);
//                 setChatOpen(false);
//               }}
//             >
//               Close
//             </Button>
//             <Button
//               className="bg-amber-600 hover:bg-amber-700 text-white rounded-full"
//               onClick={() => {
//                 // optional: open email with pre-filled subject
//                 window.location.href =
//                   "mailto:momszyka@gmail.com?subject=Live%20Chat%20Support";
//               }}
//             >
//               Still Need Help? Email Us
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }

"use client";
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  HelpCircle,
  Facebook,
  Twitter,
  Instagram,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-hot-toast";
import { FAQPopup } from "@/components/FAQPage";

export default function MomszykaContact() {
  const [formState, setFormState] = useState("idle"); // idle | loading | success
  const [faqOpen, setFaqOpen] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const formRef = useRef(null);
  const MAX_CHARS = 500;

  const containerVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut", staggerChildren: 0.15 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, x: -16 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.45 } },
  };

  const isSubmitting = formState === "loading";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState("loading");

    const formData = new FormData(formRef.current);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to send");
      setFormState("success");
      setCharCount(0);
    } catch (err) {
      toast?.error?.(err.message || "Something went wrong. Please try again.");
      setFormState("idle");
    }
  };

  const inputCls =
    "block w-full bg-white dark:bg-amber-950 border-amber-300 dark:border-amber-700 focus:ring-amber-500 focus:border-amber-500 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-amber-50 to-white dark:from-amber-900 dark:to-amber-800 font-display text-amber-800 dark:text-amber-100">
      <main className="max-w-7xl flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* ════════ LEFT COLUMN ════════ */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div className="space-y-3">
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                We're Here for You
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Have questions or ideas? Connect with our friendly team — we
                reply within 24 hours.
              </p>
            </div>

            {/* Contact methods */}
            <div className="space-y-4">
              <motion.div
                className="flex items-center gap-4"
                variants={itemVariants}
              >
                <div className="bg-amber-100 dark:bg-amber-800 p-3 rounded-full shrink-0">
                  <Mail className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <a
                    className="text-amber-600 hover:underline underline-offset-4"
                    href="mailto:momszyka@gmail.com"
                  >
                    momszyka@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4"
                variants={itemVariants}
              >
                <div className="bg-amber-100 dark:bg-amber-800 p-3 rounded-full shrink-0">
                  <Phone className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Call Us</h3>
                  <a
                    className="text-amber-600 hover:underline underline-offset-4"
                    href="tel:9304531876"
                  >
                    +91 9304531876
                  </a>
                </div>
              </motion.div>

              {/* Quick FAQ — opens FAQPopup */}
              <motion.div
                className="flex items-center gap-4"
                variants={itemVariants}
              >
                <div className="bg-amber-100 dark:bg-amber-800 p-3 rounded-full shrink-0">
                  <HelpCircle className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Quick FAQ</h3>
                  <button
                    type="button"
                    className="text-amber-600 hover:underline underline-offset-4 text-sm"
                    onClick={() => setFaqOpen(true)}
                  >
                    Browse common questions
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Socials */}
            <motion.div className="flex gap-4 pt-2" variants={itemVariants}>
              <a
                href="https://www.facebook.com/momszyka/"
                aria-label="Follow us on Facebook"
                className="bg-amber-100 dark:bg-amber-800 p-2.5 rounded-full text-amber-600 hover:bg-amber-200 dark:hover:bg-amber-700 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/momszyka"
                aria-label="Follow us on X (Twitter)"
                className="bg-amber-100 dark:bg-amber-800 p-2.5 rounded-full text-amber-600 hover:bg-amber-200 dark:hover:bg-amber-700 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/momszyka"
                aria-label="Follow us on Instagram"
                className="bg-amber-100 dark:bg-amber-800 p-2.5 rounded-full text-amber-600 hover:bg-amber-200 dark:hover:bg-amber-700 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* ════════ RIGHT COLUMN — Form / Success ════════ */}
          <motion.div
            className="bg-amber-50 dark:bg-amber-900 p-8 rounded-2xl border border-amber-200 dark:border-amber-700 shadow-sm"
            variants={itemVariants}
          >
            <AnimatePresence mode="wait">
              {formState === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-col items-center justify-center text-center gap-5 py-12"
                >
                  <div className="bg-green-100 dark:bg-green-900/40 p-4 rounded-full">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-amber-800 dark:text-amber-100">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 max-w-xs">
                      Thanks for reaching out. We'll get back to you within{" "}
                      <span className="font-semibold text-amber-600">
                        24 hours
                      </span>
                      .
                    </p>
                  </div>
                  <div className="flex gap-3 pt-2">
                    <Button
                      className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-6"
                      onClick={() => setFormState("idle")}
                    >
                      Send Another
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-full border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-200 hover:bg-amber-100 dark:hover:bg-amber-800 px-6"
                      asChild
                    >
                      <a href="/how-it-works">Explore Meals</a>
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="space-y-1">
                    <label
                      className="block text-sm font-medium text-amber-700 dark:text-amber-200"
                      htmlFor="name"
                    >
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      disabled={isSubmitting}
                      placeholder="Tell us your name"
                      className={inputCls}
                    />
                  </div>

                  <div className="space-y-1">
                    <label
                      className="block text-sm font-medium text-amber-700 dark:text-amber-200"
                      htmlFor="email"
                    >
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      disabled={isSubmitting}
                      placeholder="Share your email"
                      className={inputCls}
                    />
                  </div>

                  <div className="space-y-1">
                    <label
                      className="block text-sm font-medium text-amber-700 dark:text-amber-200"
                      htmlFor="subject"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      disabled={isSubmitting}
                      placeholder="What's on your mind?"
                      className={inputCls}
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <label
                        className="block text-sm font-medium text-amber-700 dark:text-amber-200"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <span
                        className={`text-xs tabular-nums ${charCount > MAX_CHARS ? "text-red-500 font-semibold" : "text-gray-400"}`}
                      >
                        {charCount}/{MAX_CHARS}
                      </span>
                    </div>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      disabled={isSubmitting}
                      rows={4}
                      maxLength={MAX_CHARS}
                      placeholder="Tell us how we can delight you!"
                      className={inputCls}
                      onChange={(e) => setCharCount(e.target.value.length)}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting || charCount > MAX_CHARS}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full text-sm font-bold text-white bg-amber-600 hover:bg-amber-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </main>

      {/* ════════ FAQPopup ════════ */}
      <FAQPopup open={faqOpen} onClose={() => setFaqOpen(false)} />
    </div>
  );
}
