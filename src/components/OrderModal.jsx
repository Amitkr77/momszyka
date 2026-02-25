import React from "react";

const OrderModal = ({ order, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      {/* Modal */}
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-md">
        {/* Image */}
        <div className="relative">
          {order.imageUrl ? (
            <div className="relative w-full h-56 overflow-hidden rounded-t-2xl bg-gray-100">
              <img
                src={order.imageUrl}
                alt={order.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          ) : (
            <div className="relative w-full h-56 rounded-t-2xl bg-gray-100 flex items-center justify-center text-8xl">
              {order.image}
            </div>
          )}

          {/* Veg Badge */}
          {order.isVeg !== undefined && (
            <div className="absolute bottom-3 left-4">
              <div
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border-2 ${
                  order.isVeg
                    ? "border-green-500 text-green-600"
                    : "border-red-500 text-red-600"
                }`}
              >
                <div
                  className={`w-2.5 h-2.5 rounded-full ${
                    order.isVeg ? "bg-green-500" : "bg-red-500"
                  }`}
                />
                <span className="text-xs font-semibold">
                  {order.isVeg ? "Pure Veg" : "Non-Veg"}
                </span>
              </div>
            </div>
          )}

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center bg-white border"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          <div>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">
              {order.name}
            </h2>
            <p className="text-sm text-gray-500">{order.description}</p>
          </div>

          {/* Portions */}
          {order.hasPortions && (
            <div>
              <h3 className="text-sm font-semibold mb-3 text-gray-800">
                Portions
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {["half", "full"].map((p) => (
                  <div
                    key={p}
                    className="px-5 py-3 rounded-xl border bg-gray-50 text-center"
                  >
                    <div className="text-xs mb-1 text-gray-500">{p}</div>
                    <div className="text-lg font-bold text-gray-800">
                      ₹{order.price[p]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Variants */}
          {order.hasVariants && (
            <div>
              <h3 className="text-sm font-semibold mb-3 text-gray-800">
                Variants
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { key: "veg", label: "Veg" },
                  { key: "nonVeg", label: "Non-Veg" },
                ].map((v) => (
                  <div
                    key={v.key}
                    className="px-5 py-3 rounded-xl border bg-gray-50 text-center"
                  >
                    <div className="text-xs mb-1 text-gray-500">{v.label}</div>
                    <div className="text-lg font-bold text-gray-800">
                      ₹{order.price[v.key]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Single price */}
          {!order.hasPortions && !order.hasVariants && (
            <div className="rounded-xl p-4 bg-gray-50 border flex justify-between">
              <span className="font-semibold text-gray-800">Price</span>
              <span className="text-xl font-bold text-primary">
                ₹{order.price}
              </span>
            </div>
          )}

          <div className="border-t" />

          {/* Info */}
          <div className="space-y-2 text-sm text-gray-500">
            <p>📍 Delivery in Patna Layout & nearby</p>
            {/* Updated visible phone number */}
            <p>📞 +91 9304531876</p>
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href="tel:+919304531876"
              className="flex justify-center py-3 rounded-full font-semibold border border-primary text-primary hover:bg-primary/5"
            >
              Call
            </a>

            <a
              href="https://wa.me/919304531876"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center py-3 rounded-full font-semibold text-white bg-green-500 hover:bg-green-600"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(OrderModal);
