import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Card, Image, TitleCard, LocationCard } from './styles';

interface StoreCardProps {
  id: string;
  image: string;
  nome: string;
  cidade: string;
}

const StoreCard: React.FC<StoreCardProps> = ({
  id,
  image,
  nome,
  cidade,}) => {
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
        <TitleCard>{nome}</TitleCard>
        <LocationCard>{cidade}</LocationCard>
      </Card>
    </TouchableOpacity>
  );
};

export default StoreCard;
