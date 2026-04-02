import React, { useState, useEffect, useRef } from "react";
import {
  X,
  User,
  MapPin,
  Phone,
  ChefHat,
  MessageCircle,
  CheckCircle,
  Navigation,
  Loader,
} from "lucide-react";
import { useCart } from "@/services/Cartcontext";
import { getDeliveryInfo, DELIVERY_CHARGE } from "@/utils/Distanceutils";

const WhatsAppOrderPopup = ({
  isOpen,
  onClose,
  onOrderComplete,
  orderDetails,
  showCookingInstructions = true,
  prefillCoords = null, // ← passed from CartDrawer if already captured
  prefillDeliveryInfo = null, // ← passed from CartDrawer if already calculated
}) => {
  const { setDeliveryCharge } = useCart();

  const [form, setForm] = useState({ name: "", phone: "", detailAddress: "" });
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState("form");

  // Initialise from CartDrawer's data if available
  const [locationState, setLocationState] = useState(
    prefillCoords ? "success" : "idle",
  );
  const [coords, setCoords] = useState(prefillCoords);
  const [deliveryInfo, setDeliveryInfo] = useState(prefillDeliveryInfo);

  const scrollRef = useRef(null);

  // Sync if parent re-opens popup with updated prefill
  useEffect(() => {
    if (prefillCoords) {
      setCoords(prefillCoords);
      setLocationState("success");
    }
    if (prefillDeliveryInfo) {
      setDeliveryInfo(prefillDeliveryInfo);
    }
  }, [prefillCoords, prefillDeliveryInfo, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.style.overflowY = "scroll";
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";
      window.scrollTo(0, scrollY);
    };
  }, [isOpen]);

  // Allow re-detection inside popup if needed
  const handleShareLocation = () => {
    if (!navigator.geolocation) {
      setLocationState("error");
      return;
    }
    setLocationState("loading");
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        setCoords({ lat: latitude, lng: longitude });
        setLocationState("success");

        const info = getDeliveryInfo(latitude, longitude);
        setDeliveryInfo(info);
        setDeliveryCharge(info.deliveryCharge);

        // Auto-fill address via reverse geocoding
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&zoom=18&addressdetails=1`,
            { headers: { "Accept-Language": "en" } },
          );
          const data = await res.json();
          const a = data.address || {};
          const parts = [
            a.amenity || a.building || a.shop || a.office,
            [a.house_number, a.road || a.pedestrian || a.footway || a.path]
              .filter(Boolean)
              .join(" "),
            a.neighbourhood ||
              a.quarter ||
              a.suburb ||
              a.hamlet ||
              a.residential,
            a.village || a.city_district || a.town || a.city,
            a.state,
            a.postcode,
          ].filter(Boolean);
          const seen = new Set();
          const unique = parts.filter((p) => {
            const k = p.toLowerCase().trim();
            if (seen.has(k)) return false;
            seen.add(k);
            return true;
          });
          if (unique.length > 0)
            setForm((p) => ({
              ...p,
              detailAddress: p.detailAddress.trim()
                ? p.detailAddress
                : unique.join(", "),
            }));
        } catch {}
      },
      (err) => setLocationState(err.code === 1 ? "denied" : "error"),
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 },
    );
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!/^[6-9]\d{9}$/.test(form.phone.trim()))
      e.phone = "Enter a valid 10-digit number";
    if (locationState !== "success" && !form.detailAddress.trim())
      e.location = "Please share your location or enter a delivery address";
    return e;
  };

  const handleChange = (field) => (ev) => {
    setForm((p) => ({ ...p, [field]: ev.target.value }));
    setErrors((p) => ({ ...p, [field]: undefined }));
  };

  const handleCompleteOrder = () => {
    const e = validate();
    if (Object.keys(e).length) return setErrors(e);

    let orderBlock = "";
    if (orderDetails?.isCart && orderDetails?.items?.length) {
      const itemLines = orderDetails.items
        .map((item) => {
          const variant = item.variantLabel ? ` (${item.variantLabel})` : "";
          return `  • ${item.name}${variant}  ×${item.qty}  —  ₹${item.price * item.qty}`;
        })
        .join("\n");
      const deliveryLine = deliveryInfo
        ? deliveryInfo.isFree
          ? `  • Delivery  —  FREE 🎉`
          : `  • Delivery charge  —  ₹${deliveryInfo.deliveryCharge} (${deliveryInfo.distanceKm} km)`
        : `  • Delivery  —  Charge to be calculated based on your location.\n    Free (≤1.5 km)  |  ₹30 (≤5 km)  |  ₹50 (≤9 km)  |  Not deliverable beyond 9 km`;
      orderBlock = `*Order Summary:*\n${itemLines}${deliveryLine ? "\n" + deliveryLine : ""}\n\n*Total: ₹${orderDetails.price}*`;
    } else if (orderDetails) {
      orderBlock = `*Order:* ${orderDetails.name}${orderDetails.price ? `  —  ₹${orderDetails.price}` : ""}`;
    } else {
      orderBlock = "*Order:* (see above)";
    }

    const mapsUrl = coords
      ? `https://maps.google.com/?q=${coords.lat},${coords.lng}`
      : null;

    const msg = [
      "*New Order Request*",
      "─────────────────────",
      orderBlock,
      "─────────────────────",
      `*Name:* ${form.name.trim()}`,
      `*Phone:* +91 ${form.phone.trim()}`,
      form.detailAddress.trim()
        ? `*Delivery Address:* ${form.detailAddress.trim()}`
        : null,
      mapsUrl ? `*Live Location:* ${mapsUrl}` : null,
      form.instructions?.trim()
        ? `\n*Cooking Instructions:* ${form.instructions.trim()}`
        : null,
      "─────────────────────",
      "_Thank you for ordering with Momszyka! We will confirm your order shortly._",
    ]
      .filter((l) => l !== null)
      .join("\n");

    window.location.href = `https://wa.me/919304531876?text=${encodeURIComponent(msg)}`;
    setStep("success");
    if (onOrderComplete) onOrderComplete();
  };

  const handleClose = () => {
    setStep("form");
    setForm({ name: "", phone: "", detailAddress: "" });
    setErrors({});
    // Don't reset location — it came from CartDrawer, keep it
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/60 z-[9998]"
        style={{
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
        }}
        onClick={handleClose}
      />

      <div
        className="fixed z-[9999] bg-white shadow-2xl
          bottom-0 left-0 right-0 rounded-t-2xl
          sm:bottom-auto sm:top-1/2 sm:left-1/2
          sm:-translate-x-1/2 sm:-translate-y-1/2
          sm:w-full sm:max-w-md sm:rounded-2xl"
        style={{
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          maxHeight: "92dvh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="flex justify-center pt-3 pb-1 sm:hidden flex-shrink-0">
          <div className="w-10 h-1 rounded-full bg-gray-300" />
        </div>

        {/* Green header */}
        <div className="bg-[#25D366] px-5 py-4 relative flex-shrink-0 sm:rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-5 h-5 text-white" strokeWidth={2} />
            </div>
            <div>
              <h2 className="text-white font-bold text-base leading-tight">
                Complete Your Order
              </h2>
              <p className="text-green-100 text-xs mt-0.5">
                via WhatsApp — takes 30 seconds
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="absolute top-3.5 right-4 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white"
            aria-label="Close"
          >
            <X className="w-4 h-4" strokeWidth={2.5} />
          </button>
        </div>

        <div
          ref={scrollRef}
          className="overflow-y-auto flex-1"
          style={{
            WebkitOverflowScrolling: "touch",
            overscrollBehavior: "contain",
          }}
        >
          {step === "success" ? (
            <div className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-9 h-9 text-[#25D366]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                WhatsApp Opened!
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Your order details have been pre-filled. Just tap{" "}
                <strong>Send</strong> to confirm.
              </p>
              <div className="mt-4 bg-green-50 border border-green-100 rounded-xl px-4 py-3">
                <p className="text-green-700 text-sm font-medium text-center">
                  Thank you! Your order will be delivered shortly.
                </p>
              </div>
              <button
                onClick={handleClose}
                className="mt-6 w-full py-4 rounded-xl bg-gray-100 text-gray-700 font-semibold text-base active:bg-gray-200"
              >
                Close
              </button>
            </div>
          ) : (
            <div className="p-5 space-y-4">
              {/* Order + delivery summary */}
              {orderDetails && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 space-y-1.5">
                  {orderDetails.isCart && orderDetails.items?.length ? (
                    <>
                      {orderDetails.items.map((item) => (
                        <div
                          key={item.cartKey}
                          className="flex justify-between items-center text-sm"
                        >
                          <span className="text-gray-700 font-medium">
                            {item.name}
                            {item.variantLabel && (
                              <span className="text-gray-400 font-normal text-xs ml-1">
                                ({item.variantLabel})
                              </span>
                            )}
                            <span className="text-gray-400 font-normal ml-1">
                              ×{item.qty}
                            </span>
                          </span>
                          <span className="text-gray-800 font-semibold ml-4 flex-shrink-0">
                            ₹{item.price * item.qty}
                          </span>
                        </div>
                      ))}

                      {/* Delivery row — shown if location already known */}
                      {deliveryInfo && (
                        <div className="flex justify-between items-center text-sm pt-0.5">
                          <span className="text-gray-600 flex items-center gap-1">
                            🛵 Delivery
                            <span className="text-xs text-gray-400 ml-1">
                              ({deliveryInfo.distanceKm} km)
                            </span>
                          </span>
                          {deliveryInfo.isFree ? (
                            <span className="text-green-600 font-bold text-xs">
                              FREE 🎉
                            </span>
                          ) : (
                            <span className="text-gray-800 font-semibold">
                              ₹{deliveryInfo.deliveryCharge}
                            </span>
                          )}
                        </div>
                      )}

                      <div className="border-t border-amber-200 pt-1.5 mt-1 flex justify-between items-center">
                        <span className="text-sm font-bold text-gray-800">
                          Total
                        </span>
                        <span className="text-amber-600 font-extrabold text-base">
                          ₹{orderDetails.price}
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="font-semibold text-gray-800 text-sm">
                        {orderDetails.name}
                      </p>
                      {orderDetails.price && (
                        <p className="text-amber-600 text-xs font-bold">
                          ₹{orderDetails.price}
                        </p>
                      )}
                    </>
                  )}
                </div>
              )}

              <Field
                icon={<User className="w-4 h-4" />}
                label="Full Name"
                placeholder="e.g. Rahul Sharma"
                value={form.name}
                onChange={handleChange("name")}
                error={errors.name}
                autoComplete="name"
              />
              <Field
                icon={<Phone className="w-4 h-4" />}
                label="Phone Number"
                placeholder="10-digit mobile number"
                value={form.phone}
                onChange={handleChange("phone")}
                error={errors.phone}
                type="tel"
                inputMode="numeric"
                maxLength={10}
                autoComplete="tel"
              />

              {/* Location section */}
              <div className="rounded-2xl border border-gray-200 overflow-hidden">
                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-semibold text-gray-700">
                          Live Location
                          {locationState === "success" && (
                            <span className="ml-1 font-normal text-gray-400">
                              (captured in cart)
                            </span>
                          )}
                        </p>
                        <p className="text-xs text-gray-400 mt-0.5">
                          Used for delivery &amp; charge calculation
                        </p>
                      </div>
                    </div>

                    {locationState === "success" ? (
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-50 border border-green-300 text-green-700 text-xs font-semibold flex-shrink-0">
                        <CheckCircle className="w-3.5 h-3.5" /> Captured
                      </div>
                    ) : (
                      <button
                        onClick={handleShareLocation}
                        disabled={locationState === "loading"}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-semibold active:bg-blue-100 flex-shrink-0 disabled:opacity-60"
                      >
                        {locationState === "loading" ? (
                          <>
                            <Loader className="w-3.5 h-3.5 animate-spin" />{" "}
                            Detecting...
                          </>
                        ) : (
                          <>
                            <Navigation className="w-3.5 h-3.5" /> Share
                            Location
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  {locationState === "success" && coords && (
                    <div className="mt-3 flex items-center justify-between bg-green-50 border border-green-100 rounded-xl px-3 py-2">
                      <p className="text-green-700 text-xs">
                        Location ready — add flat/floor/landmark below if
                        needed.
                      </p>
                      <a
                        href={`https://maps.google.com/?q=${coords.lat},${coords.lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-600 font-semibold underline whitespace-nowrap ml-2 flex-shrink-0"
                      >
                        Verify Pin
                      </a>
                    </div>
                  )}
                  {locationState === "denied" && (
                    <p className="mt-2 text-xs text-red-500">
                      Location denied. Enable it in browser settings.
                    </p>
                  )}
                  {locationState === "error" && (
                    <p className="mt-2 text-xs text-red-500">
                      Could not detect location. Enter address manually.
                    </p>
                  )}
                  {errors.location && (
                    <p className="mt-2 text-xs text-red-500">
                      {errors.location}
                    </p>
                  )}
                </div>

                <div className="p-4 bg-gray-50/50">
                  <div className="flex items-start gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                    <p className="text-xs font-semibold text-gray-700">
                      Delivery Address{" "}
                      <span className="font-normal text-gray-400">
                        (flat, floor, landmark)
                      </span>
                    </p>
                  </div>
                  <textarea
                    rows={3}
                    placeholder="e.g. Flat 3B, 2nd Floor, Shanti Tower, Near City Mall..."
                    value={form.detailAddress}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, detailAddress: e.target.value }))
                    }
                    autoComplete="street-address"
                    className="w-full px-3.5 py-3 rounded-xl border border-gray-200 text-gray-800 placeholder:text-gray-400 resize-none bg-white focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-green-400 transition-all"
                    style={{ fontSize: "16px" }}
                  />
                </div>
              </div>

              {showCookingInstructions && (
                <div>
                  <label className="text-xs font-semibold text-gray-500 flex items-center gap-1.5 mb-1.5">
                    <ChefHat className="w-4 h-4 text-gray-400" />
                    Cooking Instructions{" "}
                    <span className="font-normal text-gray-400">
                      (optional)
                    </span>
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Less spicy, no onion, extra gravy..."
                    value={form.instructions || ""}
                    onChange={handleChange("instructions")}
                    className="w-full px-3.5 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-green-400"
                    style={{ fontSize: "16px" }}
                  />
                </div>
              )}

              <button
                onClick={handleCompleteOrder}
                className="w-full bg-[#25D366] text-white font-bold rounded-xl flex items-center justify-center gap-2 active:opacity-90"
                style={{
                  WebkitTapHighlightColor: "transparent",
                  fontSize: "16px",
                  paddingTop: "16px",
                  paddingBottom: "16px",
                  minHeight: "54px",
                }}
              >
                <MessageCircle className="w-5 h-5 flex-shrink-0" />
                Complete Order on WhatsApp
              </button>

              <p
                className="text-center text-xs text-gray-400"
                style={{ paddingBottom: "env(safe-area-inset-bottom, 12px)" }}
              >
                Location shared in cart · just add your flat/landmark above
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const Field = ({
  icon,
  label,
  placeholder,
  value,
  onChange,
  error,
  type = "text",
  maxLength,
  inputMode,
  autoComplete,
}) => (
  <div>
    <label className="text-xs font-semibold text-gray-500 flex items-center gap-1.5 mb-1.5">
      <span className="text-gray-400">{icon}</span>
      {label}
    </label>
    <input
      type={type}
      inputMode={inputMode}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
      autoComplete={autoComplete}
      className={`w-full px-3.5 py-3 rounded-xl border text-gray-800 placeholder:text-gray-400 bg-gray-50 focus:outline-none focus:ring-2 transition-all ${error ? "border-red-400 focus:ring-red-200" : "border-gray-200 focus:ring-green-300 focus:border-green-400"}`}
      style={{ fontSize: "16px" }}
    />
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

export default WhatsAppOrderPopup;
