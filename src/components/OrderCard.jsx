import React, { useState } from "react";
import { useCart } from "@/services/Cartcontext";
import { Plus, Minus } from "lucide-react";

const OrderCard = ({ order, onOrderClick }) => {
  const { addToCart, updateQty, cartItems } = useCart();
  const [added, setAdded] = useState(false);

  const simpleCartItem =
    !order.hasVariants && !order.hasPortions
      ? cartItems.find((i) => i.cartKey === `${order.id}`)
      : null;
  const totalQtyInCart = cartItems
    .filter((i) => i.id === order.id)
    .reduce((s, i) => s + i.qty, 0);

  // For items with variants/portions, open modal to pick; otherwise add directly
  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (order.hasVariants || order.hasPortions) {
      // Open modal so user can pick variant/portion first
      onOrderClick(order);
      return;
    }
    addToCart(order);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const renderPrice = () => {
    if (order.hasVariants) {
      return (
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 font-medium">Veg</span>
            <span className="text-base font-bold text-gray-800">
              ₹{order.price.veg}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 font-medium">Non-Veg</span>
            <span className="text-base font-bold text-gray-800">
              ₹{order.price.nonVeg}
            </span>
          </div>
        </div>
      );
    }

    return (
      <div className="flex items-baseline gap-1 flex-wrap">
        <span className="text-3xl font-bold text-gray-800">₹{order.price}</span>
        <span className="text-sm text-gray-500 font-medium">per order</span>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full flex flex-col">
      {/* Image Container */}
      <div
        className="relative mb-4 rounded-xl overflow-hidden bg-gray-100 h-48 group shrink-0"
        onClick={() => onOrderClick(order)}
      >
        {order.imageUrl ? (
          <img
            src={order.imageUrl}
            alt={order.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-7xl">
            {order.image}
          </div>
        )}

        {/* Veg / Non-Veg Indicator */}
        {order.isVeg !== undefined && (
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-1 rounded-md shadow-sm">
            <div
              className={`w-4 h-4 rounded-sm border-2 flex items-center justify-center ${
                order.isVeg ? "border-green-600" : "border-red-600"
              }`}
            >
              <div
                className={`w-1.5 h-1.5 rounded-full ${
                  order.isVeg ? "bg-green-600" : "bg-red-600"
                }`}
              />
            </div>
          </div>
        )}

        {/* Pieces Badge */}
        {order.pieces && (
          <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full">
            {order.pieces} pcs
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-grow">
        <h3
          className="text-xl font-bold text-gray-800 mb-2 cursor-pointer"
          onClick={() => onOrderClick(order)}
        >
          {order.name}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-2 mb-4">
          {order.description}
        </p>

        {/* Footer: Price + Button */}
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-end justify-between gap-3">
          {/* Price Block */}
          <div className="flex-1 min-w-0">{renderPrice()}</div>

          {(order.hasVariants || order.hasPortions) && (
            <button
              onClick={handleAddToCart}
              className="relative shrink-0 whitespace-nowrap px-5 py-2.5 rounded-full font-bold text-sm text-white bg-gray-900 hover:bg-orange-500 shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
            >
              Choose
              {totalQtyInCart > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-orange-500 text-white text-xs font-extrabold flex items-center justify-center border-2 border-white">
                  {totalQtyInCart}
                </span>
              )}
            </button>
          )}

          {/* Simple items: show +/- once added, else "Add to Cart" */}
          {!order.hasVariants &&
            !order.hasPortions &&
            (simpleCartItem ? (
              <div className="flex items-center gap-2 shrink-0 bg-gray-900 rounded-full px-1 py-1">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    updateQty(simpleCartItem.cartKey, -1);
                  }}
                  className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="text-white font-bold text-sm w-4 text-center">
                  {simpleCartItem.qty}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    updateQty(simpleCartItem.cartKey, 1);
                  }}
                  className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={handleAddToCart}
                className={`shrink-0 whitespace-nowrap px-5 py-2.5 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 ${
                  added
                    ? "bg-green-500 text-white"
                    : "text-white bg-gray-900 hover:bg-orange-500"
                }`}
              >
                {added ? "✓ Added" : "Add to Cart"}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(OrderCard);
