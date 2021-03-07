import React from 'react';
import { CardCity, CardMask, CityText, CityImage } from './styles';

interface RACardProps {
  photo?: string;
  name: string;
}

const RACard: React.FC<RACardProps> = ({
  photo = 'https://super.abril.com.br/wp-content/uploads/2018/09/cidade.png',
  name,
}) => {
  return (
    <CardCity onPress={() => console.log(name)}>
      <CardMask>
        <CityText>{name}</CityText>
      </CardMask>
      <CityImage source={{ uri: photo }} />
    </CardCity>
  );
};

export default RACard;
