import React from "react";
import { X, Clock, MapPin, Phone } from "lucide-react";
import Image from "next/image";

const SubscriptionPopup = ({ meal, isOpen, onClose }) => {
  if (!isOpen || !meal) return null;

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(
      `Hi, I'd like to subscribe to the ${meal.type} - ${meal.planType} plan!`,
    );
    window.open(`https://wa.me/919304531876?text=${message}`, "_blank");
  };

  const handleCallOrder = () => {
    window.location.href = "tel:+919304531876";
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
        onClick={onClose}
      />

      {/* Popup Container */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[95%] max-w-2xl bg-white rounded-2xl shadow-xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/90 backdrop-blur-sm shadow-md border border-gray-100 text-gray-600 hover:text-gray-900 hover:bg-white transition-all duration-200"
          aria-label="Close popup"
        >
          <X className="w-5 h-5" strokeWidth={2.5} />
        </button>

        <div className="relative h-64 w-full overflow-hidden rounded-t-2xl bg-gray-100">
          <Image
            src={meal.image}
            alt={`${meal.type} Meal`}
            fill
            sizes="(max-width: 768px) 100vw, 672px"
            className="object-cover"
            priority
          />
        </div>

        {/* Header */}
        <div className="border-b border-gray-200 p-5">
          <h2 className="text-3xl font-serif font-bold text-gray-800 mb-2">
            {meal.type}
          </h2>
          <div className="flex items-center flex-wrap gap-3 text-gray-600">
            <span className="text-xl font-semibold text-gray-900">
              ₹{meal.price}
            </span>
            <span className="text-sm">(₹{meal.pricePerMeal} per meal)</span>
            <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
              {meal.planType} Plan
            </span>
          </div>
        </div>

        {/* Meal Includes */}
        <div className="p-5 border-b border-gray-200">
          <h3 className="text-lg font-bold text-gray-800 mb-2">
            Meal Includes:
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            {meal.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {meal.badges.map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 text-sm text-gray-700 font-medium"
              >
                <div className="w-2 h-2 rounded-full bg-amber-500" />
                {badge}
              </div>
            ))}
          </div>
        </div>

        {/* Delivery */}
        <div className="p-5 border-b border-gray-200">
          <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
            <Clock className="w-5 h-5 text-amber-500" />
            Delivery Schedule
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-amber-50/50 rounded-xl p-4 border border-amber-100">
              <h4 className="font-bold text-gray-800 mb-1">Lunch</h4>
              <p className="text-gray-600 text-sm">11:30 PM - 2:00 PM</p>
            </div>

            <div className="bg-amber-50/50 rounded-xl p-4 border border-amber-100">
              <h4 className="font-bold text-gray-800 mb-1">Dinner</h4>
              <p className="text-gray-600 text-sm">6:30 PM - 9:00 PM</p>
            </div>
          </div>

          <div className="mt-5 space-y-3 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gray-400 shrink-0" />
              <span>Delivery available in Patna Layout and nearby areas</span>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-gray-400 shrink-0" />
              {/* Updated visible text to match new number */}
              <span className="font-medium text-gray-800">+91 9304531876</span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="p-5 flex flex-col sm:flex-row gap-4 bg-gray-50/50 rounded-b-2xl">
          <button
            onClick={handleCallOrder}
            className="flex-1 bg-white border-2 border-amber-500 text-amber-600 font-bold py-3.5 rounded-xl hover:bg-amber-50 transition-colors shadow-sm"
          >
            Call to Order
          </button>

          <button
            onClick={handleWhatsAppOrder}
            className="flex-1 bg-[#25D366] text-white font-bold py-3.5 rounded-xl hover:bg-[#20bd5a] transition-colors shadow-sm"
          >
            WhatsApp Now
          </button>
        </div>
      </div>
    </>
  );
};

export default React.memo(SubscriptionPopup);
