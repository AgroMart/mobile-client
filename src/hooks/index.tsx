import React from 'react';

import { AuthProvider } from './AuthProvider';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
);

export default AppProvider;
