import React, { createContext, useState, useContext, useCallback } from 'react';
import { Alert } from 'react-native';

import { Store } from '../interfaces';

import api from '../services/api';

interface StoresContextData {
  stores: Store[];
  loadStores(): void;
}

const StoresContext = createContext<StoresContextData>({} as StoresContextData);

const StoresProvider: React.FC = ({ children }) => {
  const [stores, setStores] = useState<Store[]>([]);

  const loadStores = useCallback(async () => {
    try {
      const response = await api.get('lojas');
      setStores(response.data);
    } catch (err) {
      console.log(err);
      Alert.alert('Ops', 'Não foi possivel carregar as lojas');
    }
  }, []);

  return (
    <StoresContext.Provider value={{ stores, loadStores }}>
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
