import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import {
  Container,
  RemoveItemButton,
  QuantityItems,
  AddItemButton,
} from './styles';

const QuantityInput: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const removeItemHandler = (): void => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addItemHandler = (): void => {
    setQuantity(quantity + 1);
  };
  return (
    <Container>
      <RemoveItemButton onPress={removeItemHandler}>
        <Feather name="minus" color="#F80505" size={20} />
      </RemoveItemButton>
      <QuantityItems editable={false} value={quantity.toString()} />
      <AddItemButton onPress={addItemHandler}>
        <Feather name="plus" color="#00CC76" size={20} />
      </AddItemButton>
    </Container>
  );
};

export default QuantityInput;
