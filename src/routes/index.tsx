import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TabRoutes from './tab.routes';
import {
  StoreDetails,
  Plan,
  ProfileInfo,
  SignIn,
  SignUp,
  AddressForm,
  ProductPage,
  SearchResult,
} from '../pages';

const App = createStackNavigator();

const routes: React.FC = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#fff' },
      }}
    >
      <App.Screen name="Home" component={TabRoutes} />
      <App.Screen name="StoreDetail" component={StoreDetails} />
      <App.Screen name="Plan" component={Plan} />
      <App.Screen name="ProfileInfo" component={ProfileInfo} />
      <App.Screen name="AddressForm" component={AddressForm} />
      <App.Screen name="SignIn" component={SignIn} />
      <App.Screen name="SignUp" component={SignUp} />
      <App.Screen name="ProductPage" component={ProductPage} />
      <App.Screen name="SearchResult" component={SearchResult} />
    </App.Navigator>
  );
};

export default routes;
