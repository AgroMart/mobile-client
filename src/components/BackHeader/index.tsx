import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Container, HeaderText } from './styles';

interface BackHeaderProps {
  text?: string;
}

const BackHeader: React.FC<BackHeaderProps> = ({ text }) => {
  const navigation = useNavigation();

  return (
    <Container onPress={() => navigation.goBack()}>
      <MaterialCommunityIcons name="arrow-left" size={30} color="black" />
      {!!text && <HeaderText>{text}</HeaderText>}
    </Container>
  );
};

export default BackHeader;
