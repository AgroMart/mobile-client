import * as React from 'react';
import { StatusBar } from 'react-native';
import BottomTabNavigation from './src/components/BottomTabNavigation/index';

const App: React.FunctionComponent = () => {
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <BottomTabNavigation />
    </>
  );
};

export default App;
