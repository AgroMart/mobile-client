import React, { useCallback, useState, useEffect } from 'react';
import { Alert, ScrollView, Text } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/AuthProvider';
import api from '../../services/api';

import UserHeader from '../../components/UserHeader';
import Carousel from '../../components/Carousel';
import StoreCard, { StoreCardProps } from '../../components/StoreCard';

import { Container, CarouselContainer, StoresContainer } from './styles';

const storeMock = [
  {
    id: 1,
    banner:
      'https://comps.canstockphoto.com.br/fazenda-alface-filas-banco-de-fotos_csp5956244.jpg',
    nome: 'Agrostore',
    descricao: 'Ceilandia',
  },
  {
    id: 2,
    banner:
      'https://comps.canstockphoto.com.br/fazenda-alface-filas-banco-de-fotos_csp5956244.jpg',
    nome: 'Colheita feliz',
    descricao: 'Cruzeiro',
  },
  {
    id: 3,
    banner:
      'https://comps.canstockphoto.com.br/fazenda-alface-filas-banco-de-fotos_csp5956244.jpg',
    nome: 'Fazendinha',
    descricao: 'Asa Norte',
  },
];

interface Store {
  id: number;
  banner: {
    url: string;
  };
  nome: string;
  descricao: string;
}

const History: React.FC = () => {
  const [stores, setStores] = useState<Store[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  const { user } = useAuth();

  const loadStores = useCallback(async () => {
    try {
      const response = await api.get('lojas');
      setStores(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      Alert.alert('Ops', 'Não foi possivel carregar as lojas');
    }
  }, []);

  useEffect(() => {
    loadStores();
  }, [loadStores]);

  if (loading) return <Text>Carregando</Text>;

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
              city={store.descricao}
              image={store.banner ? store.banner.url : ''}
              onPress={() => navigation.navigate('StoreDetail', store)}
            />
          ))}
        </StoresContainer>
      </ScrollView>
    </Container>
  );
};

export default History;
