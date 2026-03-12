"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";

import { DELIVERY_CHARGE } from "@/utils/Distanceutils";

const CartContext = createContext(null);
const CART_KEY = "momszyka_cart";

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [deliveryCharge, setDeliveryCharge] = useState(DELIVERY_CHARGE);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(CART_KEY);
      if (saved) setCartItems(JSON.parse(saved));
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cartItems));
    } catch {}
  }, [cartItems, hydrated]);

  const addToCart = useCallback((order, selectedVariant = null) => {
    setCartItems((prev) => {
      const key = selectedVariant
        ? `${order.id}_${selectedVariant.key}`
        : `${order.id}`;
      const existing = prev.find((i) => i.cartKey === key);
      if (existing)
        return prev.map((i) =>
          i.cartKey === key ? { ...i, qty: i.qty + 1 } : i,
        );
      const price = selectedVariant ? selectedVariant.price : order.price;
      return [
        ...prev,
        {
          cartKey: key,
          id: order.id,
          name: order.name,
          image: order.image,
          imageUrl: order.imageUrl,
          isVeg: order.isVeg,
          price,
          variantLabel: selectedVariant ? selectedVariant.label : null,
          qty: 1,
        },
      ];
    });
  }, []);

  const removeFromCart = useCallback(
    (cartKey) =>
      setCartItems((prev) => prev.filter((i) => i.cartKey !== cartKey)),
    [],
  );

  const updateQty = useCallback((cartKey, delta) => {
    setCartItems((prev) =>
      prev
        .map((i) => (i.cartKey === cartKey ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0),
    );
  }, []);

  const clearCart = useCallback(() => setCartItems([]), []);

  const totalItems = cartItems.reduce((s, i) => s + i.qty, 0);
  const subtotal = cartItems.reduce((s, i) => s + i.price * i.qty, 0);
  const totalPrice = subtotal + deliveryCharge; // ← includes delivery

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
        totalItems,
        subtotal, // ← food total only
        totalPrice, // ← food + delivery
        deliveryCharge, // ← NEW
        setDeliveryCharge, // ← NEW
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
};
