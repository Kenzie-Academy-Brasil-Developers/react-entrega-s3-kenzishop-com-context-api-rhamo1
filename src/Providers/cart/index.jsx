import { createContext, useState } from "react";
import toast from "react-hot-toast";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    toast(`${product.name}`, {
      icon: "🛒",
    });
  };

  const removeFromCart = (actualIndex, product) => {
    setCart(
      cart.filter((product, index) => {
        return actualIndex !== index;
      })
    );
    toast(`${product.name}`, {
      icon: "🗑️",
    });
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
