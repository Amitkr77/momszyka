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

const WhatsAppOrderPopup = ({
  isOpen,
  onClose,
  orderDetails,
  showCookingInstructions = true,
}) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    // Two separate address fields — just like Zomato
    detailAddress: "", // Flat no., Floor, Tower, Landmark (user types)
  });
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState("form"); // "form" | "success"

  // Location
  const [locationState, setLocationState] = useState("idle"); // idle | loading | success | denied | error
  const [coords, setCoords] = useState(null); // { lat, lng }

  const scrollRef = useRef(null);

  // ── Prevent body scroll on iOS ──────────────────────────────────────────────
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

  // ── Get live GPS location ───────────────────────────────────────────────────
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

        // Try to auto-fill the detailed address field using Nominatim
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

          // Deduplicate
          const seen = new Set();
          const unique = parts.filter((p) => {
            const k = p.toLowerCase().trim();
            if (seen.has(k)) return false;
            seen.add(k);
            return true;
          });

          if (unique.length > 0) {
            setForm((p) => ({
              ...p,
              // Only auto-fill if user hasn't already typed something
              detailAddress: p.detailAddress.trim()
                ? p.detailAddress
                : unique.join(", "),
            }));
          }
        } catch {
          // Geocoding failed silently — user can type manually
        }
      },
      (err) => {
        setLocationState(err.code === 1 ? "denied" : "error");
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 },
    );
  };

  // ── Validation ── at least one of location OR detailAddress is required ───────
  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!/^[6-9]\d{9}$/.test(form.phone.trim()))
      e.phone = "Enter a valid 10-digit number";
    if (locationState !== "success" && !form.detailAddress.trim())
      e.location = "Please share your location or enter a delivery address";
    return e;
  };

  const handleChange = (field) => (ev) =>
    setForm((p) => ({ ...p, [field]: ev.target.value })) ||
    setErrors((p) => ({ ...p, [field]: undefined }));

  // ── Build & send WhatsApp message ───────────────────────────────────────────
  const handleCompleteOrder = () => {
    const e = validate();
    if (Object.keys(e).length) return setErrors(e);

    const orderLine = orderDetails
      ? `*Order:* ${orderDetails.name}${orderDetails.price ? ` - Rs. ${orderDetails.price}` : ""}`
      : "*Order:* (see above)";

    const mapsUrl = coords
      ? `https://maps.google.com/?q=${coords.lat},${coords.lng}`
      : null;

    const msg = [
      "*New Order Request*",
      "",
      `_"Good food is the foundation of genuine happiness."_`,
      "",
      orderLine,
      "",
      `*Name:* ${form.name.trim()}`,
      `*Phone:* +91 ${form.phone.trim()}`,
      "",
      form.detailAddress.trim()
        ? `*Delivery Address:* ${form.detailAddress.trim()}`
        : null,
      mapsUrl ? `*Live Location:* ${mapsUrl}` : null,
      "",
      form.instructions?.trim()
        ? `*Cooking Instructions:* ${form.instructions.trim()}`
        : null,
      "_Thank you for ordering with us! We will confirm your order shortly._",
    ]
      .filter((l) => l !== null)
      .join("\n");

    // window.location.href is more reliable than window.open on mobile browsers
    window.location.href = `https://wa.me/919304531876?text=${encodeURIComponent(msg)}`;
    setStep("success");
  };

  // ── Reset & close ────────────────────────────────────────────────────────────
  const handleClose = () => {
    setStep("form");
    setForm({ name: "", phone: "", detailAddress: "" });
    setErrors({});
    setLocationState("idle");
    setCoords(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 z-[9998]"
        style={{
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
        }}
        onClick={handleClose}
      />

      {/* Bottom sheet on mobile / centered card on desktop */}
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
        {/* Drag handle — mobile only */}
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
            className="absolute top-3.5 right-4 w-9 h-9 rounded-full bg-white/20
              flex items-center justify-center text-white"
            style={{ WebkitTapHighlightColor: "transparent" }}
            aria-label="Close"
          >
            <X className="w-4 h-4" strokeWidth={2.5} />
          </button>
        </div>

        {/* Scrollable content */}
        <div
          ref={scrollRef}
          className="overflow-y-auto flex-1"
          style={{
            WebkitOverflowScrolling: "touch",
            overscrollBehavior: "contain",
          }}
        >
          {step === "success" ? (
            /* ── Success screen ── */
            <div className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-9 h-9 text-[#25D366]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                WhatsApp Opened!
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Your order details have been pre-filled in the chat. Just tap{" "}
                <strong>Send</strong> to confirm your order.
              </p>
              <div className="mt-4 bg-green-50 border border-green-100 rounded-xl px-4 py-3">
                <p className="text-green-700 text-sm font-medium text-center">
                  Thank you for your order! It will be delivered to you shortly.
                </p>
              </div>
              <button
                onClick={handleClose}
                className="mt-6 w-full py-4 rounded-xl bg-gray-100 text-gray-700
                  font-semibold text-base active:bg-gray-200"
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                Close
              </button>
            </div>
          ) : (
            /* ── Order form ── */
            <div className="p-5 space-y-4">
              {/* Order summary pill */}
              {orderDetails && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
                  <p className="font-semibold text-gray-800 text-sm truncate">
                    {orderDetails.name}
                  </p>
                  {orderDetails.price && (
                    <p className="text-amber-600 text-xs font-bold mt-0.5">
                      Rs. {orderDetails.price}
                    </p>
                  )}
                </div>
              )}

              {/* Name */}
              <Field
                icon={<User className="w-4 h-4" />}
                label="Full Name"
                placeholder="e.g. Rahul Sharma"
                value={form.name}
                onChange={handleChange("name")}
                error={errors.name}
                autoComplete="name"
              />

              {/* Phone */}
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

              {/* ── Location Section (like Zomato) ── */}
              <div className="rounded-2xl border border-gray-200 overflow-hidden">
                {/* Step 1 — Share live location */}
                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-semibold text-gray-700">
                          Share Live Location{" "}
                          <span className="font-normal text-gray-400">
                            (optional)
                          </span>
                        </p>
                        <p className="text-xs text-gray-400 mt-0.5">
                          For most accurate delivery — or type address below
                        </p>
                      </div>
                    </div>

                    {/* Location button */}
                    {locationState === "success" ? (
                      <div
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full
                        bg-green-50 border border-green-300 text-green-700 text-xs font-semibold flex-shrink-0"
                      >
                        <CheckCircle className="w-3.5 h-3.5" />
                        Shared
                      </div>
                    ) : (
                      <button
                        onClick={handleShareLocation}
                        disabled={locationState === "loading"}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full
                          bg-blue-50 border border-blue-200 text-blue-600 text-xs font-semibold
                          active:bg-blue-100 flex-shrink-0 disabled:opacity-60"
                        style={{ WebkitTapHighlightColor: "transparent" }}
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

                  {/* Location success — verify pin link */}
                  {locationState === "success" && coords && (
                    <div
                      className="mt-3 flex items-center justify-between bg-green-50
                      border border-green-100 rounded-xl px-3 py-2"
                    >
                      <p className="text-green-700 text-xs">
                        Location captured! Address auto-filled below — please
                        verify &amp; add flat/floor/landmark.
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

                  {/* Error states */}
                  {locationState === "denied" && (
                    <p className="mt-2 text-xs text-red-500">
                      Location permission denied. Please enable it in your
                      browser settings and try again.
                    </p>
                  )}
                  {locationState === "error" && (
                    <p className="mt-2 text-xs text-red-500">
                      Could not detect location. Please try again or enter
                      address manually.
                    </p>
                  )}
                  {errors.location && (
                    <p className="mt-2 text-xs text-red-500">
                      {errors.location}
                    </p>
                  )}
                </div>

                {/* Step 2 — Type detailed address */}
                <div className="p-4 bg-gray-50/50">
                  <div className="flex items-start gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-gray-700">
                        Delivery Address{" "}
                        <span className="font-normal text-gray-400">
                          (optional if location shared)
                        </span>
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {locationState === "success"
                          ? "Auto-filled — edit & add flat no., floor, landmark"
                          : "Enter your full address if not sharing location"}
                      </p>
                    </div>
                  </div>
                  <textarea
                    rows={3}
                    placeholder="e.g. Flat 3B, 2nd Floor, Shanti Tower, Near City Mall..."
                    value={form.detailAddress}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, detailAddress: e.target.value }))
                    }
                    autoComplete="street-address"
                    className="w-full px-3.5 py-3 rounded-xl border border-gray-200 text-gray-800
                      placeholder:text-gray-400 resize-none bg-white
                      focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-green-400 transition-all"
                    style={{ fontSize: "16px" }}
                  />
                </div>
              </div>

              {/* Cooking Instructions — hidden for subscription orders */}
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
                    className="w-full px-3.5 py-3 rounded-xl border border-gray-200 bg-gray-50
                    text-gray-800 placeholder:text-gray-400 resize-none
                    focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-green-400"
                    style={{ fontSize: "16px" }}
                  />
                </div>
              )}

              {/* CTA */}
              <button
                onClick={handleCompleteOrder}
                className="w-full bg-[#25D366] text-white font-bold rounded-xl
                  flex items-center justify-center gap-2 active:opacity-90"
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
                Share location, type address, or both — at least one is
                required.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

/* Reusable input field */
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
      className={`w-full px-3.5 py-3 rounded-xl border text-gray-800
        placeholder:text-gray-400 bg-gray-50
        focus:outline-none focus:ring-2 transition-all
        ${
          error
            ? "border-red-400 focus:ring-red-200"
            : "border-gray-200 focus:ring-green-300 focus:border-green-400"
        }`}
      style={{ fontSize: "16px" }}
    />
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

export default WhatsAppOrderPopup;
