import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

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

const Home: React.FC = () => {
  const [stores, setStores] = useState<Stores[]>([]);

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
          {stores.map((store, idx) => (
            <StoreCard
              // eslint-disable-next-line react/no-array-index-key
              key={idx}
              name={store.name}
              city={store.city}
              image={store.image}
              onPress={() => console.log(store.name)}
            />
          ))}
        </StoresContainer>
      </ScrollView>
    </Container>
  );
};

export default Home;
