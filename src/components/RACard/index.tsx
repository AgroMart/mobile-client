import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, Img, Text, Button } from './styles';

interface Props {
  photo?: string;
  name: string;
}

const RACard: React.FC<Props> = props => {
  const { photo, name } = props;
  return (
    <Button>
      <Container>
        <Img source={{ uri: photo }} />
        <Text>{name}</Text>
      </Container>
    </Button>
  );
};

RACard.defaultProps = {
  photo: 'https://super.abril.com.br/wp-content/uploads/2018/09/cidade.png',
};
export default RACard;
