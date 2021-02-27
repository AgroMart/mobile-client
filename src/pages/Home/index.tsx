import React from 'react';
import { Text, View } from 'react-native';
import QuantityInput from '../../components/QuantityInput';

const Homescreen: React.FunctionComponent = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <QuantityInput />
    </View>
  );
};

export default Homescreen;
