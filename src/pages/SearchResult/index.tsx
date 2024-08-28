import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import { Store } from '../../interfaces';
import { useStores } from '../../hooks/StoresProvider';
import BackHeader from '../../components/BackHeader';
import StoreCard from '../../components/StoreCard';

import { Container, StoresContainer } from './styles';
import { StackNavigationProp } from '@react-navigation/stack';

type ParamList = {
  RA: {
    key: string;
  };
};

type NavigationProps = {
  StoreDetail: Store
}

const SearchResult: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<NavigationProps>>();
  const { stores } = useStores();
  const {
    params: { key },
  } = useRoute<RouteProp<ParamList, 'RA'>>();

  const [result, setResult] = useState<Store[]>([]);

  useEffect(() => {
    const foundStores = stores.filter(store => store.endereco?.bairro === key);
    setResult(foundStores);
  }, [key, stores]);

  return (
    <Container>
      <BackHeader />
      {result.length ? (
        <ScrollView>
          <StoresContainer>
            {result.map(store => (
              <StoreCard
                key={store.id}
                name={store.nome}
                city={store.endereco.bairro}
                image={store.banner ? store.banner.url : ''}
                onPress={() => navigation.navigate('StoreDetail', store)}
              />
            ))}
          </StoresContainer>
        </ScrollView>
      ) : (
        <Text style={{ alignSelf: 'center' }}>
          Nenhum resultado encontrado!
        </Text>
      )}
    </Container>
  );
};

export default SearchResult;
