import React, { useEffect } from 'react';
import { StatusBar, View } from 'react-native';
// import * as Notifications from 'expo-notifications';
// import * as Permissions from 'expo-permissions';
import { NavigationContainer } from '@react-navigation/native';
// import * as Updates from 'expo-updates';
import * as SplashScreen from 'expo-splash-screen';

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_300Light,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import AppProvider from './src/hooks';
import { colors } from './src/styles';
import Routes from './src/routes';

SplashScreen.preventAutoHideAsync(); // Prevent auto-hiding the splash screen

const App: React.FC = () => {
  // const updateApp = async () => {
  //   if (!__DEV__) {
  //     const { isAvailable } = await Updates.checkForUpdateAsync();

  //     if (isAvailable) {
  //       await Updates.fetchUpdateAsync();
  //       await Updates.reloadAsync();
  //     }
  //   }
  // };

  // useEffect(() => {
  //   // registerForPushNotifications();
  //   updateApp();
  // }, []);

  // const registerForPushNotifications = async () => {
  //   const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);

  //   if (status !== 'granted') {
  //     await Permissions.getAsync(Permissions.NOTIFICATIONS);
  //   }

  //   if (status !== 'granted') {
  //     console.log('Permission denied for push notification');
  //     return;
  //   }

  //   const token = (await Notifications.getExpoPushTokenAsync()).data;
  //   const pushToken = token;

  //   await AsyncStorage.setItem('@Agromart:push_token', pushToken);
  // };

  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_300Light,
    Montserrat_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync(); // Hide the splash screen once fonts are loaded
    }
  }, [fontsLoaded]);

  const TopBar = () => (
    <>
      <View style={{ height: 25, backgroundColor: colors.secondary }} />
      <View style={{ height: 2, backgroundColor: colors.border }} />
    </>
  );

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <AppProvider>
        <TopBar />
        <StatusBar backgroundColor="#EAEAEA" barStyle="dark-content" />
        <Routes />
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
