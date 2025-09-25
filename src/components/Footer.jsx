import { Facebook, Twitter, Instagram } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary/5 dark:bg-primary/10 border-t border-primary/20 dark:border-primary/30">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="/">
            <div className="flex items-center gap-3">
              <img
                src="./logo.png"
                alt="Momszyka Logo"
                className="w-12 h-12 md:w-16 md:h-16"
              />
            </div>
          </Link>
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link
              className="text-sm font-medium text-[#1b140d]/70 dark:text-background-light/70 hover:text-primary dark:hover:text-primary transition-colors"
              href="/our-story"
            >
              About Us
            </Link>
            <Link
              className="text-sm font-medium text-[#1b140d]/70 dark:text-background-light/70 hover:text-primary dark:hover:text-primary transition-colors"
              href="/contact"
            >
              Contact
            </Link>
            <a
              className="text-sm font-medium text-[#1b140d]/70 dark:text-background-light/70 hover:text-primary dark:hover:text-primary transition-colors"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="text-sm font-medium text-[#1b140d]/70 dark:text-background-light/70 hover:text-primary dark:hover:text-primary transition-colors"
              href="#"
            >
              Privacy Policy
            </a>
          </nav>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-[#1b140d]/70 dark:text-background-light/70 hover:text-primary"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-[#1b140d]/70 dark:text-background-light/70 hover:text-primary"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-[#1b140d]/70 dark:text-background-light/70 hover:text-primary"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-[#1b140d]/50 dark:text-background-light/50">
          © 2025 Momszyka. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
