import React, { createContext, useState, useContext, useCallback, ReactNode } from 'react';

export type TypeItem = 'produto' | 'cesta' | 'plano';

interface CartItem {
  id: number;
  type: TypeItem;
  name: string;
  quantity: number;
  stock: number;
  image: string;
  value: number;
}

interface CartContextData {
  cart: CartItem[];
  storeId: number | undefined;
  addItemToCart(item: CartItem, storeId?: number): void;
  removeItemToCart(id: number, type: string): void;
  cleanUpCart(): void;
  getTotal(): number;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

interface CartProviderProps {
  children: ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [storeId, setStoreId] = useState<number>();

  const removeItemToCart = useCallback((id: number, type: string) => {
    setCart(prevState =>
      prevState.filter(cartItem =>
        cartItem.type === type ? cartItem.id !== id : cartItem,
      ),
    );
  }, []);

  const addItemToCart = useCallback(
    (item: CartItem, idStore?: number) => {
      if (idStore) {
        setStoreId(idStore);
      }

      if (item.quantity === 0) {
        return removeItemToCart(item.id, item.type);
      }

      if (
        !cart.some(
          cartItem => cartItem.id === item.id && cartItem.type === item.type,
        )
      ) {
        return setCart(prevState => [...prevState, item]);
      }

      return setCart(prevState =>
        prevState.map(cartItem =>
          cartItem.id === item.id && cartItem.type === item.type
            ? item
            : cartItem,
        ),
      );
    },
    [cart, removeItemToCart],
  );

  const cleanUpCart = useCallback(() => setCart([]), []);

  const getTotal = useCallback(() => {
    let total = 0;
    cart.forEach(item => {
      total = item.value * item.quantity + total;
    });
    return total;
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        removeItemToCart,
        cleanUpCart,
        getTotal,
        storeId,
      }}
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
