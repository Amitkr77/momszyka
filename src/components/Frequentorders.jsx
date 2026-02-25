import React, { useState } from "react";
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
import { ArrowRight } from "lucide-react";

const FrequentOrders = ({ variant = "default" }) => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const isMenuVariant = variant === "menu";
  const sectionBg = isMenuVariant ? "bg-white" : "bg-[#F5F5F0]";

  // Show only 8 items on home page, all on menu page
  const displayedOrders = isMenuVariant
    ? frequentOrders
    : frequentOrders.slice(0, 8);

  return (
    <section className={`py-10 sm:py-16 px-3 sm:px-8 ${sectionBg}`}>
      <div className="max-w-[1400px] mx-auto">
        {/* CONDITIONAL HEADER */}
        {isMenuVariant ? (
          /* Menu Page Header */
          <div className="mb-5 sm:mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">
              Browse Popular Orders
              <span className="block w-10 sm:w-12 h-1 bg-amber-400 mt-2 rounded-full" />
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              Your frequently ordered meals, freshly prepared and easy to
              reorder anytime.
            </p>
          </div>
        ) : (
          /* Original Home Page Header */
          <div className="text-center mb-6 sm:mb-8">
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

        <Carousel
          opts={{
            align: "start",
            loop: false,
            dragFree: true,
          }}
          className="relative px-0 sm:px-4"
        >
          <CarouselContent className="cursor-grab active:cursor-grabbing py-3 sm:py-4">
            {displayedOrders.map((order) => (
              <CarouselItem
                key={order.id}
                className="basis-[80%] xs:basis-[75%] sm:basis-[48%] lg:basis-[32%] xl:basis-[24%]"
              >
                <OrderCard order={order} onOrderClick={setSelectedOrder} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-1 sm:-left-4 z-10 bg-white/90 shadow-md hover:bg-white w-8 h-8 sm:w-10 sm:h-10" />
          <CarouselNext className="right-1 sm:-right-4 z-10 bg-white/90 shadow-md hover:bg-white w-8 h-8 sm:w-10 sm:h-10" />
        </Carousel>

        {/* View More Button — only on home page */}
        {!isMenuVariant && (
          <div className="flex justify-center mt-6 sm:mt-8">
            <Link href="/subscribe">
              <button className="group flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm bg-gray-900 text-white hover:bg-orange-500 shadow-md hover:shadow-lg transition-all duration-200 active:scale-95">
                View All Items
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </Link>
          </div>
        )}
      </div>

      {/* Modal */}
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
