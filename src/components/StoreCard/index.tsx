import React from 'react';

import { Card, Image, Title, Location } from './styles';

interface StoreCardProps {
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
    <Card onPress={onPress}>
      <Image
        source={{
          uri: image,
        }}
      />
      <Title>{name}</Title>
      <Location>{city}</Location>
    </Card>
  );
};

export default StoreCard;
