"use client";

import React, { useState } from "react";
import { Loader2, ArrowRight } from "lucide-react";
import toast from "react-hot-toast";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    const toastId = toast.loading("Subscribing…");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to subscribe");

      toast.success("Successfully subscribed!", { id: toastId });
      setEmail("");
    } catch (err) {
      toast.error(err.message, { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubscribe}
      className="relative mt-4 flex items-center"
    >
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={loading}
        className="w-full bg-white dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 rounded-full pl-5 pr-32 py-3 text-sm placeholder:text-gray-400 dark:placeholder:text-gray-500 shadow-sm transition-all outline-none disabled:opacity-60"
      />
      <button
        type="submit"
        disabled={loading}
        className="absolute right-1 top-1 bottom-1 bg-amber-600 hover:bg-amber-700 active:scale-95 text-white rounded-full px-5 text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-all duration-200 disabled:opacity-70 disabled:hover:bg-amber-600"
      >
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <>
            Subscribe <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
