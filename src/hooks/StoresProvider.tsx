import React, { createContext, useState, useContext, useCallback } from 'react';

import { Store } from '../interfaces';

interface StoresContextData {
  stores: Store[];
  updateStores(newStores: Store[]): void;
}

const StoresContext = createContext<StoresContextData>({} as StoresContextData);

const StoresProvider: React.FC = ({ children }) => {
  const [stores, setStores] = useState<Store[]>([]);

  const updateStores = useCallback((newStores: Store[]) => {
    setStores(newStores);
  }, []);

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
