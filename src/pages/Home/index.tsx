import React from 'react';
import { View } from 'react-native';

import StoreDetails from '../StoreDetails';

const Home: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <StoreDetails />
    </View>
  );
};

export default Home;
