import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Card, Image, Title, Location } from './styles';

interface StoreCardProps {
  id: string;
  image: string;
  name: string;
  city: string;
}

const StoreCard: React.FC<StoreCardProps> = ({ id, image, name, city }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
    // onPress={() => navigation.navigate('StoreDetail', { storeId: id })}
    >
      <Card>
        <Image
          source={{
            uri: image,
          }}
        />
        <Title>{name}</Title>
        <Location>{city}</Location>
      </Card>
    </TouchableOpacity>
  );
};

export default StoreCard;
