/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { StatusBar, Platform } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
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

  useEffect(() => {
    registerForPushNotifications()
    .then(token => console.log('Push Notification', token))
    .catch(err => console.log('Error ', err))
  }, []);

  const registerForPushNotifications = async () => {
     const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);

     if(status !== 'granted') {
       const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
     }

     if(status !== 'granted') {
      console.log("Permission denied for push notification");
      return;
    }

    const token = (await Notifications.getExpoPushTokenAsync()).data;
    return token;
  }
  // const registerForPushNotificationsAsync = async () => {
  //   if (Device.isDevice) {
  //     const { status: existingStatus } = await Notifications.getPermissionsAsync();
  //     let finalStatus = existingStatus;
  //     if (existingStatus !== 'granted') {
  //       const { status } = await Notifications.requestPermissionsAsync();
  //       finalStatus = status;
  //     }
  //     if (finalStatus !== 'granted') {
  //       alert('Failed to get push token for push notification!');
  //       return;
  //     }
  //     const token = (await Notifications.getExpoPushTokenAsync()).data;
  //     console.log(token);
  //   } else {
  //     alert('Must use physical device for Push Notifications');
  //   }

  //   if (Platform.OS === 'android') {
  //     Notifications.setNotificationChannelAsync('default', {
  //       name: 'default',
  //       importance: Notifications.AndroidImportance.MAX,
  //       vibrationPattern: [0, 250, 250, 250],
  //       lightColor: '#FF231F7C',
  //     });
  //   }
  //   };

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
