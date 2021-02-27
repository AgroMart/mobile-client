import React from 'react';
import { Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';

import {
  Container,
  Banner,
  FarmName,
  Content,
  City,
  MessageIcon,
  ContactView,
  DescriptionTitle,
  DescriptionText,
} from './styles';

import ProductList from '../../components/ProductList';

export type StoreDetailsProps = {
  image?: string;
  nome: string;
  cidade: string;
  descricao: string;
};

const FirstRoute: React.FC = () => <View />;

const SecondRoute: React.FC = () => <View />;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderTabBar: React.FC<any> = props => (
  <TabBar
    {...props}
    renderLabel={({ route, focused }) => (
      <Text style={{ color: focused ? '#00AA95' : 'gray', margin: 8 }}>
        {route.title}
      </Text>
    )}
    indicatorStyle={{ color: '#00AA95', backgroundColor: '#00AA95' }}
    style={{ backgroundColor: 'white' }}
  />
);

const StoreDetails: React.FC<StoreDetailsProps> = ({
  image = 'https://i.pinimg.com/originals/db/fc/e7/dbfce7091d1dca3d3e1b7b846fb55e3a.jpg',
  nome = 'Fazenda Bonita',
  cidade = 'Brazlandia',
  descricao = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
}) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'cesta', title: 'Cestas' },
    { key: 'planos', title: 'Planos' },
    { key: 'produtos', title: 'Produtos' },
  ]);

  const renderScene = SceneMap({
    cesta: FirstRoute,
    planos: SecondRoute,
    produtos: ProductList,
  });
  return (
    <Container>
      <Banner
        source={{
          uri: image,
        }}
      />
      <Content>
        <FarmName>{nome}</FarmName>
        <ContactView>
          <City>{cidade}</City>
          <MessageIcon>
            <FontAwesome name="whatsapp" color="#00AA95" size={32} />
          </MessageIcon>
        </ContactView>
        <DescriptionTitle>Descrição:</DescriptionTitle>
        <DescriptionText numberOfLines={2}>{descricao}</DescriptionText>
      </Content>
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
      />
    </Container>
  );
};

export default StoreDetails;
