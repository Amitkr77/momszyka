import React from 'react';
import { Button } from '@/components/ui/button';
import { Search, Soup, Truck, UserCheck, Menu, DollarSign } from 'lucide-react';

const MomszykaHowItWorks = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
    
      <main className="container mx-auto px-6 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">How Momszyka Works</h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">Connecting talented home cooks with hungry customers. Simple, transparent, and delicious.</p>
        </div>
        <div className="mt-20 grid gap-16 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-20">
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">For Customers</h2>
            <div className="relative mt-8">
              <div aria-hidden="true" className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-primary/20"></div>
              <div className="relative space-y-12">
                <div className="flex items-start gap-6">
                  <div className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                    <Search className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Browse and Order</h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">Explore a variety of home-cooked meals from local cooks.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                    <Soup className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Meal Preparation</h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">Your chosen cook prepares your meal with fresh ingredients.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                    <Truck className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Delivery</h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">Your meal is delivered to your doorstep at the scheduled time.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">For Cooks</h2>
            <div className="relative mt-8">
              <div aria-hidden="true" className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-primary/20"></div>
              <div className="relative space-y-12">
                <div className="flex items-start gap-6">
                  <div className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                    <UserCheck className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Onboarding</h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">Complete the onboarding process to become a verified cook on Momszyka.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                    <Menu className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Set Your Menu</h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">Set your menu, prices, and availability, then prepare meals for customers.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                    <DollarSign className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Get Paid</h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">Receive payments for your culinary creations through our secure platform.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="py-16 sm:py-24 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">Ready to Get Started?</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Join Momszyka today as a customer or a cook and experience the joy of home-cooked meals.</p>
          <div className="mt-8 flex justify-center gap-4">
            <Button className="rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white hover:bg-opacity-90">
              Sign Up as a Customer
            </Button>
            <Button className="rounded-lg bg-primary/20 px-6 py-3 text-sm font-bold text-primary hover:bg-primary/30 dark:bg-primary/30 dark:hover:bg-primary/40">
              Sign Up as a Cook
            </Button>
          </div>
        </section>
      </main>
     
    </div>
  );
};

export default MomszykaHowItWorks;