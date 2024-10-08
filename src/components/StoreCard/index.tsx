import React from 'react';

import { Container, Card, Image, Title, Location } from './styles';

export interface StoreCardProps {
  image: string;
  name: string;
  city: string;
  onPress(): void;
}

const StoreCard: React.FC<StoreCardProps> = ({
  image,
  name,
  city,
  onPress,
}) => {
  return (
    <Container onPress={onPress}>
      <Card>
        <Image
          source={{
            // uri: `${baseURL}${image}`,
            uri: `${image}`,
          }}
        />
        <Title>{name}</Title>
        <Location>{city}</Location>
      </Card>
    </Container>
  );
};

export default StoreCard;
