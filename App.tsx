/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import * as Updates from 'expo-updates';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_300Light,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import AppProvider from './src/hooks';

import Routes from './src/routes';

const App: React.FC = () => {
  const updateApp = async () => {
    if (!__DEV__) {
      const { isAvailable } = await Updates.checkForUpdateAsync();

      if (isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    }
  };

  useEffect(() => {
    updateApp();
  }, []);

  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_300Light,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <AppProvider>
        <StatusBar backgroundColor="#EAEAEA" barStyle="dark-content" />
        <Routes />
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
