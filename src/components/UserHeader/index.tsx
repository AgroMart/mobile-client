import React from 'react';
import { useNavigation } from '@react-navigation/native';

import DefaultProfile from '../../assets/defaultAvatar.png';

import DropdownComponent from '../DropdownComponent';

import { Container, Img, Text } from './styles';

interface UserHeaderProps {
  photo?: string;
  name?: string;
  disabled?: boolean;
}

const UserHeader: React.FC<UserHeaderProps> = ({ photo, name, disabled }) => {
  const navigation = useNavigation();

  return (
    <Container
      onPress={() => navigation.navigate('SignIn')}
      disabled={disabled}
    >
      <Img source={photo ? { uri: photo } : DefaultProfile} />
      <DropdownComponent />
      <Text>
        Olá,{' '}
        {name ? (
          <Text logged={!!name}>{name}.</Text>
        ) : (
          'faça login ou cadastro.'
        )}
      </Text>
    </Container>
  );
};

export default UserHeader;
