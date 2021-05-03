import React from 'react';

import { AuthProvider } from './AuthProvider';
import { StoresProvider } from './StoresProvider';

const AppProvider: React.FC = ({ children }) => (
  <StoresProvider>
    <AuthProvider>{children}</AuthProvider>
  </StoresProvider>
);

export default AppProvider;
