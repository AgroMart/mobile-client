import React, { useState } from 'react';

import { FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Input from '../../components/Input';
import RACard from '../../components/RACard';
import StoreCard from '../../components/StoreCard';
import data from './mockCitys';

import { Container, InputContainer, StoresContainer } from './styles';

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

const Search: React.FC = () => {
  const [search, setSearch] = useState('');

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

      {search ? (
        <ScrollView>
          <StoresContainer>
            {storeMock.map(store => (
              <StoreCard
                key={store.name}
                name={store.name}
                city={store.city}
                image={store.image}
                onPress={() => console.log(store.name)}
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
              onPress={() => console.log(item.city)}
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
