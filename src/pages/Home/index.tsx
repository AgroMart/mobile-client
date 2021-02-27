import React, { useState, useCallback } from 'react';
import { View } from 'react-native';
import QuantityInput from '../../components/QuantityInput';

const Homescreen: React.FunctionComponent = () => {
  const [quantity, setQuantity] = useState(1);

  const addItemHandler = useCallback(() => {
    setQuantity(quantity + 1);
  }, [quantity]);

  const subItemHandler = useCallback(() => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }, [quantity]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <QuantityInput
        initialState={quantity}
        addFunction={addItemHandler}
        subFunction={subItemHandler}
      />
    </View>
  );
};

export default Homescreen;
