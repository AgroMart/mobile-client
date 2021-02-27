import React from 'react';
import { Feather } from '@expo/vector-icons';
import {
  Container,
  RemoveItemButton,
  QuantityItems,
  AddItemButton,
} from './styles';

type QuantityInputProps = {
  initialState: number;
  addFunction: () => void;
  subFunction: () => void;
};

const QuantityInput: React.FC<QuantityInputProps> = ({
  initialState,
  addFunction,
  subFunction,
}) => {
  return (
    <Container>
      <RemoveItemButton onPress={subFunction}>
        <Feather name="minus" color="#F80505" size={20} />
      </RemoveItemButton>
      <QuantityItems editable={false} value={initialState.toString()} />
      <AddItemButton onPress={addFunction}>
        <Feather name="plus" color="#00CC76" size={20} />
      </AddItemButton>
    </Container>
  );
};

export default QuantityInput;
