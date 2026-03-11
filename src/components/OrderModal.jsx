import React, { useState } from "react";
import { useCart } from "@/services/Cartcontext";

const OrderModal = ({ order, onClose }) => {
  const { addToCart, setIsCartOpen } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddVariant = (variantKey, variantLabel, price) => {
    addToCart(order, { key: variantKey, label: variantLabel, price });
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
      setIsCartOpen(true); // slide open cart after adding
    }, 800);
  };

  const handleAddSimple = () => {
    addToCart(order);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
      setIsCartOpen(true);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
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

          {/* Portions — each gets its own Add button */}
          {order.hasPortions && (
            <div>
              <h3 className="text-sm font-semibold mb-3 text-gray-800">
                Choose Portion
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {["half", "full"].map((p) => (
                  <button
                    key={p}
                    onClick={() =>
                      handleAddVariant(
                        p,
                        p.charAt(0).toUpperCase() + p.slice(1),
                        order.price[p],
                      )
                    }
                    className="px-5 py-4 rounded-xl border bg-gray-50 hover:bg-orange-50 hover:border-orange-400 text-center transition-all duration-150 active:scale-95"
                  >
                    <div className="text-xs mb-1 text-gray-500 capitalize">
                      {p}
                    </div>
                    <div className="text-lg font-bold text-gray-800 mb-2">
                      ₹{order.price[p]}
                    </div>
                    <div className="text-xs font-semibold text-orange-500">
                      + Add to Cart
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Variants — each gets its own Add button */}
          {order.hasVariants && (
            <div>
              <h3 className="text-sm font-semibold mb-3 text-gray-800">
                Choose Variant
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { key: "veg", label: "Veg" },
                  { key: "nonVeg", label: "Non-Veg" },
                ].map((v) => (
                  <button
                    key={v.key}
                    onClick={() =>
                      handleAddVariant(v.key, v.label, order.price[v.key])
                    }
                    className="px-5 py-4 rounded-xl border bg-gray-50 hover:bg-orange-50 hover:border-orange-400 text-center transition-all duration-150 active:scale-95"
                  >
                    <div className="text-xs mb-1 text-gray-500">{v.label}</div>
                    <div className="text-lg font-bold text-gray-800 mb-2">
                      ₹{order.price[v.key]}
                    </div>
                    <div className="text-xs font-semibold text-orange-500">
                      + Add to Cart
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Simple price — single Add to Cart */}
          {!order.hasPortions && !order.hasVariants && (
            <div className="rounded-xl p-4 bg-gray-50 border flex justify-between items-center">
              <span className="font-semibold text-gray-800">Price</span>
              <span className="text-xl font-bold text-primary">
                ₹{order.price}
              </span>
            </div>
          )}

          <div className="border-t" />

          <div className="space-y-2 text-sm text-gray-500">
            <p>📍 Delivery in Patna Layout & nearby</p>
            <p>📞 +91 9304531876</p>
          </div>

          {/* Single Add to Cart for simple items */}
          {!order.hasPortions && !order.hasVariants && (
            <button
              onClick={handleAddSimple}
              className={`w-full py-3 rounded-full font-bold text-white transition-all duration-200 active:scale-95 ${
                added ? "bg-green-500" : "bg-gray-900 hover:bg-orange-500"
              }`}
            >
              {added ? "✓ Added to Cart!" : "Add to Cart"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(OrderModal);
