import React, { createContext, useState, useContext, useCallback } from 'react';

interface CartItem {
  id: number;
  type: 'produto' | 'cesta' | 'plano';
  name: string;
  quantity: number;
  image: string;
  value: number;
}

interface CartContextData {
  cart: CartItem[];
  addItemToCart(item: CartItem): void;
  removeItemToCart(id: number): void;
  cleanUpCart(): void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

const CartProvider: React.FC = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const removeItemToCart = useCallback((id: number) => {
    setCart(prevState => prevState.filter(cartItem => cartItem.id !== id));
  }, []);

  const addItemToCart = useCallback(
    (item: CartItem) => {
      if (item.quantity === 0) {
        return removeItemToCart(item.id);
      }

      if (!cart.some(cartItem => cartItem.id === item.id)) {
        return setCart(prevState => [...prevState, item]);
      }

      return setCart(prevState =>
        prevState.map(cartItem => (cartItem.id === item.id ? item : cartItem)),
      );
    },
    [cart, removeItemToCart],
  );

  const cleanUpCart = useCallback(() => setCart([]), []);

  return (
    <CartContext.Provider
      value={{ cart, addItemToCart, removeItemToCart, cleanUpCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

function useCart(): CartContextData {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within an CartProvider');
  }

  return context;
}

export { CartProvider, useCart };
