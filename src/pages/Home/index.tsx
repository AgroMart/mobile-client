import React, { useEffect, useCallback } from 'react';
import { ScrollView, Alert } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import util from 'util';
import { useAuth } from '../../hooks/AuthProvider';
import { useStores } from '../../hooks/StoresProvider';

import initializeApi from '../../services/api';

import UserHeader from '../../components/UserHeader';
import Carousel from '../../components/Carousel';
import StoreCard from '../../components/StoreCard';

import { Container, CarouselContainer, StoresContainer } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

function appendBaseUrlToImageUrls(data: any, baseUrl: string) {
  data.forEach((loja: any) => {
    if (loja?.cestas?.length) {
      for (let cesta of loja.cestas) {
        cesta.url = baseUrl + cesta?.imagem[0]?.url;
      }
    }

    if (loja?.planos?.length) {
      for (let plano of loja.planos) {
        if (plano?.imagem?.length) {
          plano.url = baseUrl + plano.imagem[0]?.url;
        } else {
          plano.url = baseUrl + plano?.imagem?.url;
        }
      }
    }

    if (loja?.produto_avulsos?.length) {
      for (let produto of loja.produto_avulsos) {
        if (produto?.imagem?.length) {
          produto.url = baseUrl + produto.imagem[0]?.url;
        } else {
          produto.url = baseUrl + produto?.imagem?.url;
        }
      }
    }

    if (loja.banner && loja.banner.url) {
      loja.banner.url = baseUrl + loja.banner.url;
    }

    if (loja.banner && loja.banner.formats) {
      for (let format in loja.banner.formats) {
        if (loja.banner.formats[format].url) {
          loja.banner.formats[format].url =
            baseUrl + loja.banner.formats[format].url;
        }
      }
    }
  });
}

const Home: React.FC = () => {
  const navigation = useNavigation();

  const { user } = useAuth();
  const { stores, updateStores } = useStores();

  const loadStores = useCallback(() => {
    async function load() {
      const baseUrl = await AsyncStorage.getItem('@BaseUrlChosen');

      try {
        // Only try to load stores at home if Url has been chosen.
        // The api should be a singleton with an public attribute that tells if its Url is already defined
        // Do this in a future refactor
        if (baseUrl?.length) {
          const api = await initializeApi();

          const response = await api.get('lojas');
          appendBaseUrlToImageUrls(response.data, baseUrl);
          console.log('response =====> ', response.data);

          updateStores(response.data);
        }
      } catch (err) {
        console.dir('AQUI ERRO LOJA' + err, { depth: null });
        console.log('ERROLOJA');
        // console.log(util.inspect(err, { depth: null, colors: true }));
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
