"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger ,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Menu } from "lucide-react";

const WaitlistFormDialog = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to submit the form data, e.g., to an API
    console.log("Submitted:", { name, email });
    alert("Thank you for joining the waitlist!");
    setOpen(false);
    setName("");
    setEmail("");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-primary text-white text-sm font-bold hover:opacity-90 transition-opacity">
          Join Waitlist
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Join the Waitlist</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <DialogFooter>
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-primary/20 dark:border-primary/30">
      <div className="container mx-auto px-6  flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-3">
            <img
              src="./logo.png"
              alt="Momszyka Logo"
              className="w-12 h-12 md:w-16 md:h-16"
            />
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            className="text-sm font-medium hover:text-primary dark:hover:text-primary transition-colors"
            href="/how-it-works"
          >
            How it Works
          </Link>
          <Link
            className="text-sm font-medium hover:text-primary dark:hover:text-primary transition-colors"
            href="/cook-corner"
          >
            Cooks&apos; Corner
          </Link>
          <Link
            href="/our-story"
            className="text-sm font-medium hover:text-primary dark:hover:text-primary transition-colors"
          >
            Our story
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:text-primary dark:hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden p-2">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  className="text-sm font-medium hover:text-primary transition-colors"
                  href="/how-it-works"
                >
                  How it Works
                </Link>
                <Link
                  className="text-sm font-medium hover:text-primary transition-colors"
                  href="/cook-corner"
                >
                  Cooks&apos; Corner
                </Link>
                <Link
                  href="/our-story"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Our story
                </Link>
                <Link
                  href="/contact"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <WaitlistFormDialog />
        </div>
      </div>
    </header>
  );
}
