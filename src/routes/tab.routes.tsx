import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import Home from '../pages/Home';
import Search from '../pages/Search';
import Profile from '../pages/Profile';
import History from '../pages/History';

const Tab = createBottomTabNavigator();

const TabRoutes: React.FC = () => (
  <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      activeTintColor: '#00AA95',
      inactiveTintColor: '#292929',
      showLabel: false,
    }}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Feather name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={Search}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Feather name="search" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Feather name="user" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Info"
      component={History}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Feather name="list" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default TabRoutes;
