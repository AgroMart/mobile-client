import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import UserHeader from '../../components/UserHeader';
import Carousel from '../../components/Carousel';
import StoreCard, { StoreCardProps } from '../../components/StoreCard';

import { Container, CarouselContainer, StoresContainer } from './styles';

const storeMock = [
  {
    image:
      'https://comps.canstockphoto.com.br/fazenda-alface-filas-banco-de-fotos_csp5956244.jpg',
    name: 'Agrostore',
    city: 'Ceilandia',
  },
  {
    image:
      'https://comps.canstockphoto.com.br/fazenda-alface-filas-banco-de-fotos_csp5956244.jpg',
    name: 'Colheita feliz',
    city: 'Cruzeiro',
  },
  {
    image:
      'https://comps.canstockphoto.com.br/fazenda-alface-filas-banco-de-fotos_csp5956244.jpg',
    name: 'Fazendinha',
    city: 'Asa Norte',
  },
];

type Stores = Omit<StoreCardProps, 'onPress'>;

const History: React.FC = () => {
  const [stores, setStores] = useState<Stores[]>([]);

  const navigation = useNavigation();

  useFocusEffect(() => {
    setStores(storeMock);
  });

  return (
    <Container>
      <UserHeader />
      <ScrollView>
        <CarouselContainer>
          <Carousel />
        </CarouselContainer>
        <StoresContainer>
          {stores.map(store => (
            <StoreCard
              key={store.name}
              name={store.name}
              city={store.city}
              image={store.image}
              onPress={() => navigation.navigate('StoreDetail')}
            />
          ))}
        </StoresContainer>
      </ScrollView>
    </Container>
  );
};

export default History;
