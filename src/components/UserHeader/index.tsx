import React from 'react';

import DefaultProfile from '../../assets/defaultAvatar.png';

import { Container, Img, Text } from './styles';

interface UserHeaderProps {
  photo?: string;
  name?: string;
}

const UserHeader: React.FC<UserHeaderProps> = ({
  photo = DefaultProfile,
  name,
}) => {
  return (
    <Container onPress={() => console.log('profile')}>
      <Img source={{ uri: photo }} />
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
