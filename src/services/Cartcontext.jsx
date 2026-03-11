"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";

const CartContext = createContext(null);

const CART_KEY = "momszyka_cart";

export const CartProvider = ({ children }) => {
  // Always start empty on server — load from localStorage after mount
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Load from localStorage only on client after mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(CART_KEY);
      if (saved) setCartItems(JSON.parse(saved));
    } catch {
      // ignore
    }
    setHydrated(true);
  }, []);

  // Persist to localStorage on every cart change (only after hydration)
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cartItems));
    } catch {
      // ignore
    }
  }, [cartItems, hydrated]);

  const addToCart = useCallback((order, selectedVariant = null) => {
    setCartItems((prev) => {
      const key = selectedVariant
        ? `${order.id}_${selectedVariant.key}`
        : `${order.id}`;

      const existing = prev.find((i) => i.cartKey === key);
      if (existing) {
        return prev.map((i) =>
          i.cartKey === key ? { ...i, qty: i.qty + 1 } : i,
        );
      }

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

  const removeFromCart = useCallback((cartKey) => {
    setCartItems((prev) => prev.filter((i) => i.cartKey !== cartKey));
  }, []);

  const updateQty = useCallback((cartKey, delta) => {
    setCartItems((prev) =>
      prev
        .map((i) => (i.cartKey === cartKey ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0),
    );
  }, []);

  const clearCart = useCallback(() => setCartItems([]), []);

  const totalItems = cartItems.reduce((s, i) => s + i.qty, 0);
  const totalPrice = cartItems.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
        totalItems,
        totalPrice,
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
