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
    style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"space-between"}}
      onPress={() => navigation.navigate('SelectCSA')}
      disabled={disabled}
    >
      <Img source={photo ? { uri: photo } : DefaultProfile} />
      <Text>
        Olá,{' '}
        {name ? (
          <Text logged={!!name}>{name}.</Text>
        ) : (
          'faça login ou cadastro.'
        )}
      </Text>
      <DropdownComponent />
      
    </Container>
  );
};

export default UserHeader;
