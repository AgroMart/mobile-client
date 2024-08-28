import React, { createContext, useState, useContext, useCallback, ReactNode } from 'react';

import { useCart } from './CartProvider';

import { Store } from '../interfaces';

interface StoresContextData {
  stores: Store[];
  updateStores(newStores: Store[]): void;
}

const StoresContext = createContext<StoresContextData>({} as StoresContextData);

interface StoresProps {
  children: ReactNode;
}

const StoresProvider: React.FC<StoresProps> = ({ children }) => {
  const [stores, setStores] = useState<Store[]>([]);

  const { cleanUpCart } = useCart();

  const updateStores = useCallback(
    (newStores: Store[]) => {
      setStores(newStores);
      cleanUpCart();
    },
    [cleanUpCart],
  );

  return (
    <StoresContext.Provider value={{ stores, updateStores }}>
      {children}
    </StoresContext.Provider>
  );
};

function useStores(): StoresContextData {
  const context = useContext(StoresContext);

  if (!context) {
    throw new Error('useStores must be used within an StoresProvider');
  }

  return context;
}

export { StoresProvider, useStores };
