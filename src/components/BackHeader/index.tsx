import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Container, HeaderText } from './styles';

interface BackHeaderProps {
  text?: string;
  disabled?: boolean;
}

const BackHeader: React.FC<BackHeaderProps> = ({ text, disabled }) => {
  const navigation = useNavigation();

  return (
    <Container onPress={() => navigation.goBack()} disabled={disabled}>
      <MaterialCommunityIcons name="arrow-left" size={30} color="black" />
      {!!text && <HeaderText>{text}</HeaderText>}
    </Container>
  );
};

export default BackHeader;
