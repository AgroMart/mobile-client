import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import Homescreen from '../../pages/Home';
import InfoScreen from '../../pages/Info';
import ProfileScreen from '../../pages/Profile';
import SearchScreen from '../../pages/Search';

const Tab = createBottomTabNavigator();

const BottomTabNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          // eslint-disable-next-line consistent-return
          tabBarIcon: ({ color, size }) => {
            if (route.name === 'Home') {
              return <Feather name="home" size={size} color={color} />;
            }

            if (route.name === 'Pesquisa') {
              return <Feather name="search" size={size} color={color} />;
            }

            if (route.name === 'Perfil') {
              return <Feather name="user" size={size} color={color} />;
            }

            if (route.name === 'Info') {
              return <Feather name="info" size={size} color={color} />;
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: '#00AA95',
          inactiveTintColor: 'black',
          showLabel: false,
        }}
      >
        <Tab.Screen name="Home" component={Homescreen} />
        <Tab.Screen name="Pesquisa" component={SearchScreen} />
        <Tab.Screen name="Perfil" component={ProfileScreen} />
        <Tab.Screen name="Info" component={InfoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigation;
