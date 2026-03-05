import React, { useState, useRef } from "react";
import OrderCard from "./OrderCard";
import OrderModal from "./OrderModal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { frequentOrders } from "@/components/data/freqOrderData";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

// Only these categories get their own tab
const SPECIAL_CATEGORIES = [
  { key: "Noodles", emoji: "🍜" },
  { key: "Shakes & Cold Beverages", emoji: "🥤" },
  { key: "Cooler & Refreshers", emoji: "🍹" },
];

const TABS = [{ key: "All", emoji: "🍽️" }, ...SPECIAL_CATEGORIES];

const FrequentOrders = ({ variant = "default" }) => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const tabsRef = useRef(null);

  const isMenuVariant = variant === "menu";
  const sectionBg = isMenuVariant ? "bg-white" : "bg-[#F5F5F0]";

  const specialKeys = SPECIAL_CATEGORIES.map((c) => c.key);

  const displayedOrders = (() => {
    if (!isMenuVariant) return frequentOrders.slice(0, 8);
    if (selectedCategory === "All") {
      return frequentOrders.filter((o) => !specialKeys.includes(o.category));
    }
    return frequentOrders.filter((o) => o.category === selectedCategory);
  })();

  const scrollTabs = (dir) => {
    if (tabsRef.current) {
      tabsRef.current.scrollBy({ left: dir * 160, behavior: "smooth" });
    }
  };

  return (
    <section className={`py-10 sm:py-16 px-3 sm:px-8 ${sectionBg}`}>
      <div className="max-w-[1400px] mx-auto">
        {/* HEADER */}
        {isMenuVariant ? (
          <div className="mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 leading-tight">
              Browse Popular Orders
            </h2>
            <span className="block w-10 sm:w-12 h-1 bg-amber-400 mt-2 mb-2 rounded-full" />
            <p className="text-xs sm:text-sm text-gray-500">
              Your frequently ordered meals, freshly prepared and easy to
              reorder anytime.
            </p>
          </div>
        ) : (
          <div className="text-center mb-6 sm:mb-10">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4 text-[#FF8F00] relative inline-block">
              Popular Orders
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                <span className="w-10 sm:w-16 h-1 rounded-full bg-primary" />
                <span className="w-10 sm:w-16 h-1 bg-gray-800 rounded-full" />
              </span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mt-4">
              Your frequently ordered meals, freshly prepared and easy to
              reorder anytime.
            </p>
          </div>
        )}

        {/* CATEGORY TABS — Menu page only */}
        {isMenuVariant && (
          <div className="relative mb-6 sm:mb-8">
            <button
              onClick={() => scrollTabs(-1)}
              aria-label="Scroll left"
              className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10
                         items-center justify-center w-8 h-8 rounded-full
                         bg-white shadow-md border border-gray-100
                         text-gray-500 hover:text-orange-500 hover:border-orange-200
                         transition-all duration-150"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div
              ref={tabsRef}
              className="flex gap-2 sm:gap-2.5 overflow-x-auto sm:mx-10 pb-1 scrollbar-hide scroll-smooth"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              {TABS.map(({ key, emoji }) => {
                const isActive = selectedCategory === key;
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedCategory(key)}
                    className={`
                      flex items-center gap-1.5
                      px-3.5 sm:px-4 py-2 sm:py-2.5
                      rounded-full text-xs sm:text-sm font-semibold
                      whitespace-nowrap flex-shrink-0
                      border transition-all duration-200
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400
                      active:scale-95
                      ${
                        isActive
                          ? "bg-orange-500 text-white border-orange-500 shadow-md shadow-orange-200"
                          : "bg-white text-gray-600 border-gray-200 hover:border-orange-300 hover:text-orange-500 hover:bg-orange-50"
                      }
                    `}
                  >
                    <span className="text-sm leading-none">{emoji}</span>
                    <span>{key}</span>
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => scrollTabs(1)}
              aria-label="Scroll right"
              className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10
                         items-center justify-center w-8 h-8 rounded-full
                         bg-white shadow-md border border-gray-100
                         text-gray-500 hover:text-orange-500 hover:border-orange-200
                         transition-all duration-150"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <div
              className="pointer-events-none absolute left-0 top-0 bottom-0 w-6
                            bg-gradient-to-r from-white to-transparent sm:hidden"
            />
            <div
              className="pointer-events-none absolute right-0 top-0 bottom-0 w-6
                            bg-gradient-to-l from-white to-transparent sm:hidden"
            />
          </div>
        )}

        {/* CAROUSEL */}
        <Carousel
          opts={{ align: "start", loop: false, dragFree: true }}
          className="relative px-0 sm:px-4"
        >
          <CarouselContent className="cursor-grab active:cursor-grabbing py-3 sm:py-4">
            {displayedOrders.length > 0 ? (
              displayedOrders.map((order) => (
                <CarouselItem
                  key={order.id}
                  className="basis-[80%] xs:basis-[75%] sm:basis-[48%] lg:basis-[32%] xl:basis-[24%]"
                >
                  <OrderCard order={order} onOrderClick={setSelectedOrder} />
                </CarouselItem>
              ))
            ) : (
              <div className="w-full flex flex-col items-center justify-center py-16 text-gray-400 px-4">
                <span className="text-4xl mb-3">🍽️</span>
                <p className="text-sm font-medium">No items found</p>
                <p className="text-xs mt-1">Try a different category</p>
              </div>
            )}
          </CarouselContent>

          <CarouselPrevious className="left-1 sm:-left-4 z-10 bg-white/90 shadow-md hover:bg-white w-8 h-8 sm:w-10 sm:h-10" />
          <CarouselNext className="right-1 sm:-right-4 z-10 bg-white/90 shadow-md hover:bg-white w-8 h-8 sm:w-10 sm:h-10" />
        </Carousel>

        {/* VIEW ALL — home page only */}
        {!isMenuVariant && (
          <div className="flex justify-center mt-6 sm:mt-8">
            <Link href="/subscribe">
              <button
                className="group flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3
                                 rounded-full font-bold text-xs sm:text-sm
                                 bg-gray-900 text-white hover:bg-orange-500
                                 shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
              >
                View All Items
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </Link>
          </div>
        )}
      </div>

      {/* MODAL */}
      {selectedOrder && (
        <OrderModal
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
        />
      )}
    </section>
  );
};

export default React.memo(FrequentOrders);
