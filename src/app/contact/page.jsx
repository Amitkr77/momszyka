import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Menu, Facebook, Twitter, Instagram } from "lucide-react";

const MomszykaContact = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display text-neutral-800 dark:text-neutral-200">
      <main className="max-w-7xl flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
              Get in Touch
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              We're here to help! Reach out to us with any questions or
              inquiries you may have. Our team is dedicated to providing prompt
              and helpful assistance.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white">
                    Email Us
                  </h3>
                  <a
                    className="text-primary hover:underline"
                    href="mailto:support@momszyka.com"
                  >
                    support@momszyka.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white">
                    Call Us
                  </h3>
                  <a
                    className="text-primary hover:underline"
                    href="tel:5551234567"
                  >
                    (555) 123-4567
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-background-light dark:bg-background-dark p-8 rounded-xl border border-primary/20 dark:border-primary/30">
            <form action="#" className="space-y-6">
              <div>
                <label
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                  htmlFor="name"
                >
                  Your Name
                </label>
                <div className="mt-1">
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your name"
                    className="block w-full bg-transparent border-neutral-300 dark:border-neutral-700 focus:ring-primary focus:border-primary rounded-lg"
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                  htmlFor="email"
                >
                  Your Email
                </label>
                <div className="mt-1">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Enter your email"
                    className="block w-full bg-transparent border-neutral-300 dark:border-neutral-700 focus:ring-primary focus:border-primary rounded-lg"
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <div className="mt-1">
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Enter the subject"
                    className="block w-full bg-transparent border-neutral-300 dark:border-neutral-700 focus:ring-primary focus:border-primary rounded-lg"
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                  htmlFor="message"
                >
                  Message
                </label>
                <div className="mt-1">
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    rows={4}
                    className="block w-full bg-transparent border-neutral-300 dark:border-neutral-700 focus:ring-primary focus:border-primary rounded-lg"
                  />
                </div>
              </div>
              <div>
                <Button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full text-sm font-bold text-white bg-primary hover:bg-primary/90 focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MomszykaContact;
