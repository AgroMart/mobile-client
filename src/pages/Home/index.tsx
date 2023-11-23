import React, { useEffect, useCallback } from 'react';
import { ScrollView, Alert } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { useAuth } from '../../hooks/AuthProvider';
import { useStores } from '../../hooks/StoresProvider';

import api from '../../services/api';

import UserHeader from '../../components/UserHeader';
import Carousel from '../../components/Carousel';
import StoreCard from '../../components/StoreCard';

import { Container, CarouselContainer, StoresContainer } from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();

  const { user } = useAuth();
  const { stores, updateStores } = useStores();

  const loadStores = useCallback(() => {
    async function load() {
      try {
        const response = await api.get('lojas');
        console.log('response =====> ', response.data);
        updateStores(response.data);
      } catch (err) {
        Alert.alert('Ops', 'Não foi possivel carregar as lojas');
      }
    }

    load();
  }, [updateStores]);

  useEffect(() => {
    loadStores();
  }, [loadStores]);

  useFocusEffect(loadStores);

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
