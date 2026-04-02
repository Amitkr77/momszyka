"use client";

import React, { useState } from "react";
import { Navigation, Loader } from "lucide-react";
import { useCart } from "@/services/Cartcontext";
import WhatsAppOrderPopup from "./Whatsapporderpopup";
import { getDeliveryInfo, DELIVERY_CHARGE } from "@/utils/Distanceutils";

const CartDrawer = () => {
  const {
    cartItems,
    updateQty,
    clearCart,
    totalItems,
    subtotal,
    totalPrice,
    deliveryCharge,
    setDeliveryCharge,
    isCartOpen,
    setIsCartOpen,
    isServiceable,
    setIsServiceable,
    locationConfirmed,
    setLocationConfirmed,
  } = useCart();

  const [whatsappOpen, setWhatsappOpen] = useState(false);

  // Location state lives here now
  const [locationState, setLocationState] = useState("idle"); // idle | loading | success | denied | error
  const [coords, setCoords] = useState(null);
  const [deliveryInfo, setDeliveryInfo] = useState(null);

  const handleShareLocation = () => {
    if (!navigator.geolocation) {
      setLocationState("error");
      return;
    }
    setLocationState("loading");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setCoords({ lat: latitude, lng: longitude });
        setLocationState("success");
        const info = getDeliveryInfo(latitude, longitude);
        setDeliveryInfo(info);
        setDeliveryCharge(info.deliveryCharge);
        setIsServiceable(info.isServiceable);
        setLocationConfirmed(true);
      },
      (err) => setLocationState(err.code === 1 ? "denied" : "error"),
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 },
    );
  };

  const getCartOrderDetails = () => {
    if (cartItems.length === 0) return null;
    return {
      name: cartItems
        .map(
          (i) =>
            `${i.name}${i.variantLabel ? ` (${i.variantLabel})` : ""} x${i.qty}`,
        )
        .join(", "),
      price: totalPrice,
      emoji: "🛒",
      isCart: true,
      items: cartItems,
    };
  };

  return (
    <>
      {/* Floating Cart Button */}
      {totalItems > 0 && !isCartOpen && (
        <button
          onClick={() => setIsCartOpen(true)}
          style={{
            position: "fixed",
            bottom: 24,
            right: 20,
            zIndex: 40,
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "10px 14px 10px 12px",
            borderRadius: 16,
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(15,15,15,0.88)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow:
              "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)",
            cursor: "pointer",
            fontFamily: "inherit",
            minWidth: 210,
          }}
        >
          <div style={{ position: "relative" }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 12,
                background: "linear-gradient(135deg, #FF9A3C, #FF6B35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 12px rgba(255,107,53,0.4)",
                flexShrink: 0,
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            </div>
            <span
              style={{
                position: "absolute",
                top: -4,
                right: -4,
                width: 18,
                height: 18,
                borderRadius: "50%",
                background: "#FF6B35",
                color: "white",
                fontSize: 9,
                fontWeight: 900,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid #0f0f0f",
              }}
            >
              {totalItems}
            </span>
          </div>
          <div style={{ flex: 1 }}>
            <div
              style={{
                color: "rgba(255,255,255,0.45)",
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: 1.5,
                textTransform: "uppercase",
              }}
            >
              Your Order
            </div>
            <div
              style={{
                color: "white",
                fontSize: 13,
                fontWeight: 800,
                marginTop: 1,
              }}
            >
              {totalItems} item{totalItems > 1 ? "s" : ""}{" "}
              <span style={{ color: "#FF9A3C" }}>· ₹{totalPrice}</span>
            </div>
          </div>
          <div
            style={{
              background: "linear-gradient(135deg, #FF9A3C, #FF6B35)",
              borderRadius: 10,
              padding: "6px 10px",
              color: "white",
              fontSize: 11,
              fontWeight: 800,
              boxShadow: "0 2px 8px rgba(255,107,53,0.35)",
              whiteSpace: "nowrap",
            }}
          >
            Order →
          </div>
        </button>
      )}

      {isCartOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      <div
        className={`fixed z-50 bg-white shadow-2xl flex flex-col transition-transform duration-300
          bottom-0 left-0 right-0 h-[75vh] rounded-t-3xl
          sm:top-0 sm:bottom-0 sm:left-auto sm:right-0 sm:h-full sm:w-[420px] sm:rounded-none
          ${isCartOpen ? "translate-y-0 sm:translate-x-0" : "translate-y-full sm:translate-y-0 sm:translate-x-full"}`}
      >
        {/* Drag handle */}
        <div className="flex justify-center pt-3 pb-1 sm:hidden flex-shrink-0">
          <div className="w-10 h-1 rounded-full bg-gray-300" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b flex-shrink-0">
          <div>
            <h2 className="text-xl font-bold text-gray-800">Your Cart 🛒</h2>
            <p className="text-xs text-gray-400 mt-0.5">
              {totalItems === 0
                ? "Empty cart"
                : `${totalItems} item${totalItems > 1 ? "s" : ""} added`}
            </p>
          </div>
          <div className="flex items-center gap-3">
            {cartItems.length > 0 && (
              <button
                onClick={clearCart}
                className="text-xs text-red-400 hover:text-red-600 font-semibold transition-colors"
              >
                Clear all
              </button>
            )}
            <button
              onClick={() => setIsCartOpen(false)}
              className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-300 gap-3">
              <span className="text-6xl">🍽️</span>
              <p className="font-semibold text-gray-400">Your cart is empty</p>
              <p className="text-sm text-gray-300">
                Add items from the menu to get started
              </p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.cartKey}
                className="flex items-center gap-3 bg-gray-50 rounded-2xl p-3"
              >
                <div className="w-14 h-14 rounded-xl overflow-hidden bg-gray-200 flex-shrink-0">
                  {item.imageUrl ? (
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-2xl">
                      {item.image}
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-800 text-sm truncate">
                    {item.name}
                    {item.variantLabel && (
                      <span className="text-xs text-gray-400 ml-1">
                        ({item.variantLabel})
                      </span>
                    )}
                  </p>
                  <p className="text-sm font-bold text-orange-500 mt-0.5">
                    ₹{item.price * item.qty}
                  </p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    onClick={() => updateQty(item.cartKey, -1)}
                    className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-red-50 hover:border-red-300 hover:text-red-500 transition-colors font-bold text-lg leading-none"
                  >
                    −
                  </button>
                  <span className="w-5 text-center font-bold text-gray-800 text-sm">
                    {item.qty}
                  </span>
                  <button
                    onClick={() => updateQty(item.cartKey, 1)}
                    className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-green-50 hover:border-green-300 hover:text-green-500 transition-colors font-bold text-lg leading-none"
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="px-6 pb-8 pt-4 border-t flex-shrink-0 space-y-3">
            {/* ── Delivery Charge Card ── */}
            <div
              className={`rounded-2xl border overflow-hidden transition-colors duration-300 ${
                locationState === "success" && deliveryInfo?.isFree
                  ? "border-green-200 bg-green-50"
                  : locationState === "success" && !deliveryInfo?.isServiceable
                    ? "border-red-200 bg-red-50" // ← red card for out-of-zone
                    : locationState === "success"
                      ? "border-orange-200 bg-orange-50"
                      : "border-dashed border-gray-300 bg-gray-50"
              }`}
            >
              {/* idle / loading / error — show prompt */}
              {locationState !== "success" && (
                <div className="px-4 py-3 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold text-gray-700">
                      🛵 Check Delivery Charge
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      📍 Free (≤1.5 km) · ₹30 (≤5 km) · ₹50 (≤9 km)
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Share location to see your exact charge
                    </p>
                    {locationState === "denied" && (
                      <p className="text-xs text-red-500 mt-1">
                        Location denied — enable in browser settings
                      </p>
                    )}
                    {locationState === "error" && (
                      <p className="text-xs text-red-500 mt-1">
                        Could not detect — try again
                      </p>
                    )}
                  </div>
                  <button
                    onClick={handleShareLocation}
                    disabled={locationState === "loading"}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-blue-500 text-white text-xs font-bold active:opacity-80 disabled:opacity-60 flex-shrink-0 shadow-sm whitespace-nowrap"
                    style={{ WebkitTapHighlightColor: "transparent" }}
                  >
                    {locationState === "loading" ? (
                      <>
                        <Loader className="w-3 h-3 animate-spin" /> Detecting...
                      </>
                    ) : (
                      <>
                        <Navigation className="w-3 h-3" /> Share Location
                      </>
                    )}
                  </button>
                </div>
              )}

              {/* success — show result */}
              {locationState === "success" && deliveryInfo && (
                <div className="px-4 py-3">
                  {/* Top row — emoji + retry */}
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-2xl leading-none">
                      {deliveryInfo.isFree
                        ? "🎉"
                        : deliveryInfo.isServiceable
                          ? "🛵"
                          : "❌"}
                    </span>
                    <button
                      onClick={handleShareLocation}
                      className="text-xs text-gray-400 hover:text-blue-500 underline flex-shrink-0 transition-colors"
                    >
                      Retry
                    </button>
                  </div>
                  {/* Content — full width, no squishing */}
                  <div className="w-full">
                    {deliveryInfo.isFree ? (
                      <>
                        <p className="text-green-700 font-bold text-sm">
                          Free Delivery!
                        </p>
                        <p className="text-green-600 text-xs mt-0.5">
                          {deliveryInfo.distanceKm} km away — delivery is on us
                          🙌
                        </p>
                      </>
                    ) : !deliveryInfo.isServiceable ? (
                      <div className="flex flex-col gap-1.5">
                        <p className="text-red-600 font-bold text-sm">
                          Sorry, we don't deliver this far
                        </p>
                        <p className="text-red-500 text-xs">
                          {deliveryInfo.distanceKm} km away — outside our
                          delivery zone.
                        </p>
                        <a
                          href="/subscribe#bulk-orders"
                          onClick={() => setIsCartOpen(false)}
                          className="inline-flex items-center gap-1.5 mt-1 px-3 py-2 rounded-full bg-orange-500 text-white text-xs font-bold shadow-sm hover:bg-orange-600 transition-colors w-full justify-center"
                        >
                          📦 Place a Bulk Order instead →
                        </a>
                      </div>
                    ) : (
                      <>
                        <p className="text-orange-700 font-bold text-sm">
                          Delivery Charge: ₹{deliveryCharge}
                        </p>
                        <p className="text-orange-500 text-xs mt-0.5">
                          {deliveryInfo.distanceKm} km away
                        </p>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Price Breakdown */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Subtotal</span>
                <span className="font-semibold text-gray-700">₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Delivery</span>
                <span
                  className={`font-semibold ${locationState === "success" && deliveryCharge === 0 ? "text-green-600" : "text-gray-700"}`}
                >
                  {locationState !== "success" ? (
                    <span className="text-gray-400 italic text-xs">
                      Share location
                    </span>
                  ) : !isServiceable ? (
                    <span className="text-red-500 font-semibold">N/A</span>
                  ) : deliveryCharge === 0 ? (
                    "FREE"
                  ) : (
                    `₹${deliveryCharge}`
                  )}
                </span>
              </div>
              <div className="flex justify-between font-bold text-gray-800 text-base border-t pt-2 mt-1">
                <span>Total</span>
                <span>₹{totalPrice}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="tel:+919304531876"
                className="flex justify-center items-center py-3 rounded-full font-semibold border border-gray-300 text-gray-700 hover:bg-gray-50 text-sm transition-colors"
              >
                📞 Call
              </a>
              <button
                onClick={() => setWhatsappOpen(true)}
                disabled={locationState === "success" && !isServiceable}
                className={`flex justify-center items-center py-3 rounded-full font-bold text-white text-sm shadow-md transition-all active:scale-95
    ${
      locationState === "success" && !isServiceable
        ? "bg-gray-300 text-gray-500 shadow-none cursor-not-allowed"
        : "bg-green-500 hover:bg-green-600"
    }`}
              >
                {locationState === "success" && !isServiceable
                  ? "Not Deliverable"
                  : "WhatsApp Order"}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* WhatsApp Popup — coords already known, no re-ask needed */}
      <WhatsAppOrderPopup
        isOpen={whatsappOpen}
        onClose={() => setWhatsappOpen(false)}
        onOrderComplete={() => {
          clearCart();
          setIsCartOpen(false);
        }}
        orderDetails={getCartOrderDetails()}
        prefillCoords={coords}
        prefillDeliveryInfo={deliveryInfo}
      />
    </>
  );
};

export default CartDrawer;
