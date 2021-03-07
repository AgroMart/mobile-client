import React from 'react';
import { Container, Img, Text } from './styles';

interface Props {
  photo?: string;
  name: string;
  logged?: boolean;
}

const UserHeader: React.FC<Props> = props => {
  const { photo, name, logged } = props;
  return (
    <Container>
      <Img source={{ uri: photo }} />
      <Text>
        Olá, <Text logged={logged}>{name}</Text>
      </Text>
    </Container>
  );
};

UserHeader.defaultProps = {
  photo:
    'https://avatars.githubusercontent.com/u/19879482?s=460&u=1d5013de9c596079541d855a8eb7b06ba570b4d8&v=4',
  name: 'faça login ou cadastro',
};
export default UserHeader;
