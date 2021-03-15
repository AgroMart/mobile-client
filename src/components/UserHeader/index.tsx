import React from 'react';

import DefaultProfile from '../../assets/defaultAvatar.png';

import { Container, Img, Text } from './styles';

interface UserHeaderProps {
  photo?: string;
  name?: string;
  disabled?: boolean;
}

const UserHeader: React.FC<UserHeaderProps> = ({ photo, name, disabled }) => {
  return (
    <Container onPress={() => console.log('profile')} disabled={disabled}>
      {console.log(photo)}
      <Img source={photo ? { uri: photo } : DefaultProfile} />
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
