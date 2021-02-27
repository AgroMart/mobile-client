import React, { useState, useCallback } from 'react';
import { View } from 'react-native';
import ProductCard from '../../components/ProductCard';
import QuantityInput from '../../components/QuantityInput';
import StoreDetails from '../StoreDetails';

const Homescreen: React.FunctionComponent = () => {
  return (
    <View style={{ flex: 1 }}>
      <StoreDetails />
    </View>
  );
};

export default Homescreen;
