import React from 'react';
import { View } from 'react-native';

import Input from '../../components/Input';

const Search: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        width: '80%',
        justifyContent: 'center',
        alignSelf: 'center',
      }}
    >
      <Input placeholder="oi" label="Nome" />
    </View>
  );
};

export default Search;
