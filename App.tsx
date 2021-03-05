import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar backgroundColor="#fff" barStyle="dark-content" />
    <Routes />
  </NavigationContainer>
);

export default App;
