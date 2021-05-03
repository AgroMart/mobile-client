import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/AuthProvider';
import { useStores } from '../../hooks/StoresProvider';

import UserHeader from '../../components/UserHeader';
import Carousel from '../../components/Carousel';
import StoreCard from '../../components/StoreCard';

import { Container, CarouselContainer, StoresContainer } from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();

  const { user } = useAuth();
  const { stores, loadStores } = useStores();

  useEffect(() => {
    loadStores();
  }, [loadStores]);

  return (
    <Container>
      <UserHeader name={user?.username} disabled={!!user} />
      <ScrollView>
        <CarouselContainer>
          <Carousel />
        </CarouselContainer>
        <StoresContainer>
          {stores.map(store => (
            <StoreCard
              key={store.id}
              name={store.nome}
              city={store.endereco?.bairro}
              image={store.banner ? store.banner.url : ''}
              onPress={() => navigation.navigate('StoreDetail', store)}
            />
          ))}
        </StoresContainer>
      </ScrollView>
    </Container>
  );
};

export default Home;
