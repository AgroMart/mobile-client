import React from 'react';
import { View } from 'react-native';
import MyCarousel from '../../components/Carousel';

const Homescreen: React.FunctionComponent = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <MyCarousel />
    </View>
  );
};

export default Homescreen;
