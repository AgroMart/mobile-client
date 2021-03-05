import React from 'react';
import { Feather } from '@expo/vector-icons';

import { colors } from '../../styles';

import {
  Container,
  RemoveItemButton,
  QuantityItems,
  AddItemButton,
} from './styles';

type QuantityInputProps = {
  value: number;
  addFunction: () => void;
  subFunction: () => void;
};

const QuantityInput: React.FC<QuantityInputProps> = ({
  value,
  addFunction,
  subFunction,
}) => {
  return (
    <Container>
      <RemoveItemButton onPress={subFunction}>
        <Feather name="minus" color={`${colors.error}`} size={20} />
      </RemoveItemButton>
      <QuantityItems editable={false} value={value.toString()} />
      <AddItemButton onPress={addFunction}>
        <Feather name="plus" color={`${colors.secondary}`} size={20} />
      </AddItemButton>
    </Container>
  );
};

export default QuantityInput;
