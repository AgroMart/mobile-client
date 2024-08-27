import React, { ReactNode } from 'react'; // Importar ReactNode para tipar children

import { AuthProvider } from './AuthProvider';
import { CartProvider } from './CartProvider';
import { StoresProvider } from './StoresProvider';

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => (
  <CartProvider>
    <StoresProvider>
      <AuthProvider>{children}</AuthProvider>
    </StoresProvider>
  </CartProvider>
);

export default AppProvider;
