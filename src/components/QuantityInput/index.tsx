import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import * as S from './styles';

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
    <S.Container>
      <S.RemoveItemButton onPress={removeItemHandler}>
        <Feather name="minus" color="#F80505" size={20} />
      </S.RemoveItemButton>
      <S.QuantityItems editable={false} value={quantity.toString()} />
      <S.AddItemButton onPress={addItemHandler}>
        <Feather name="plus" color="#00CC76" size={20} />
      </S.AddItemButton>
    </S.Container>
  );
};

export default QuantityInput;
