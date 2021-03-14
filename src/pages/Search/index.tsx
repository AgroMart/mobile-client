import React from 'react';

import { FlatList } from 'react-native';

import Input from '../../components/Input';
import RACard from '../../components/RACard';
import data from './mockCitys';

import { Container, InputContainer } from './styles';

const Search: React.FC = () => {
  return (
    <Container>
      <InputContainer>
        <Input
          placeholder="Pesquisar loja"
          autoCorrect={false}
          icon="magnify"
        />
      </InputContainer>
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
    </Container>
  );
};

export default Search;
