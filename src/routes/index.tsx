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
    </App.Navigator>
  );
};

export default routes;
