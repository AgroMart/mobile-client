import React from 'react';
import { CardCity, CardMask, CityText, CityImage } from './styles';

interface RACardProps {
  photo?: string;
  name: string;
  onPress(): void;
}

const RACard: React.FC<RACardProps> = ({
  photo = 'https://super.abril.com.br/wp-content/uploads/2018/09/cidade.png',
  name,
  onPress,
}) => {
  return (
    <CardCity onPress={onPress}>
      <CardMask>
        <CityText>{name}</CityText>
      </CardMask>
      <CityImage source={{ uri: photo }} />
    </CardCity>
  );
};

export default RACard;
