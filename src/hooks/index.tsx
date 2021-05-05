import React from 'react';

import { AuthProvider } from './AuthProvider';
import { CartProvider } from './CartProvider';
import { StoresProvider } from './StoresProvider';

const AppProvider: React.FC = ({ children }) => (
  <CartProvider>
    <StoresProvider>
      <AuthProvider>{children}</AuthProvider>
    </StoresProvider>
  </CartProvider>
);

export default AppProvider;
