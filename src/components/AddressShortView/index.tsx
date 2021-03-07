import React from 'react';
import { MaterialIcons, Foundation } from '@expo/vector-icons';

import { colors } from '../../styles';

import { Container, Content, Address, Text, BoldText } from './styles';

interface AddressShortViewProps {
  address: string;
  RA: string;
  onPress(): void;
}

const AddressShortView: React.FC<AddressShortViewProps> = ({
  address,
  RA,
  onPress,
}) => {
  return (
    <Container onPress={onPress}>
      <Content>
        <Foundation name="map" size={42} color={`${colors.secondary}`} />
        <Address>
          <Text>Entregar em:</Text>
          <BoldText>{address}</BoldText>
          <Text>{RA}</Text>
        </Address>
      </Content>
      <MaterialIcons
        name="keyboard-arrow-right"
        size={30}
        color={`${colors.secondary}`}
      />
    </Container>
  );
};

export default AddressShortView;
