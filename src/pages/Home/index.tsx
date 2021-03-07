import React from 'react';
import { View, Text } from 'react-native';

const Home: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        alignSelf: 'center',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Home</Text>
    </View>
  );
};

export default Home;
