/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { StatusBar, Platform } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import { NavigationContainer } from '@react-navigation/native';
import * as Updates from 'expo-updates';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    registerForPushNotifications();
    updateApp();
  }, []);

  const registerForPushNotifications = async () => {
    const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);

    if (status !== 'granted') {
      await Permissions.getAsync(Permissions.NOTIFICATIONS);
    }

    if (status !== 'granted') {
      console.log('Permission denied for push notification');
      return;
    }

    const token = (await Notifications.getExpoPushTokenAsync()).data;

    const pushToken = token;

    await AsyncStorage.setItem('@Agromart:push_token', pushToken);
  };

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
