import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { useStores } from '../../hooks/StoresProvider';
import { Store } from '../../interfaces';
import Input from '../../components/Input';
import RACard from '../../components/RACard';
import StoreCard from '../../components/StoreCard';

import data from './mockCitys';

import { Container, InputContainer, StoresContainer } from './styles';

const Search: React.FC = () => {
  const navigation = useNavigation();
  const { stores } = useStores();

  const [search, setSearch] = useState('');
  const [result, setResult] = useState<Store[]>([]);

  useEffect(() => {
    if (!search) return setResult([]);
    const foundStores = stores.filter(store =>
      store.nome.toUpperCase().includes(search.toUpperCase()),
    );

    return setResult(foundStores);
  }, [search, stores]);

  return (
    <Container>
      <InputContainer>
        <Input
          placeholder="Pesquisar loja"
          autoCorrect={false}
          value={search}
          onChangeText={setSearch}
          icon="magnify"
        />
      </InputContainer>

      {result.length > 0 && search ? (
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
        <FlatList
          contentContainerStyle={{
            alignItems: 'center',
          }}
          data={data}
          renderItem={({ item }) => (
            <RACard
              name={item.city}
              photo={item.urlImage}
              onPress={() => navigation.navigate('SearchResult', item)}
            />
          )}
          horizontal={false}
          keyExtractor={item => item.city}
          numColumns={2}
          key={data.length}
          showsVerticalScrollIndicator={false}
        />
      )}
    </Container>
  );
};

export default Search;
