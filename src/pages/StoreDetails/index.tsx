import React, { useRef, useState, useCallback } from 'react';
import { SectionList, View, FlatList } from 'react-native';
import { navigation, useNavigation } from '@react-navigation/native';

import BackHeader from '../../components/BackHeader';
import ProductCard from '../../components/ProductCard';

import {
  Container,
  BackHeaderContainer,
  Header,
  StoreBanner,
  HeaderContent,
  Title,
  StoreRA,
  SubTitle,
  Separator,
  Content,
  Touchable,
  ContainerItem,
  MenuItem,
  TitleContainer,
  TitleMenu,
} from './styles';

const DATA = [
  {
    id: 1,
    title: 'Cestas',
    data: [
      {
        id: 1,
        name: 'Cesta 1',
        quantity: 2,
        value: 159.9,
        image:
          'https://comps.canstockphoto.com.br/fazenda-alface-filas-banco-de-fotos_csp5956244.jpg',
        unity: 'não sei',
      },
      {
        id: 2,
        name: 'Cesta 1',
        quantity: 2,
        value: 159.9,
        image:
          'https://comps.canstockphoto.com.br/fazenda-alface-filas-banco-de-fotos_csp5956244.jpg',
        unity: 'não sei',
      },
      {
        id: 3,
        name: 'Cesta 1',
        quantity: 2,
        value: 159.9,
        image:
          'https://comps.canstockphoto.com.br/fazenda-alface-filas-banco-de-fotos_csp5956244.jpg',
        unity: 'não sei',
      },
    ],
  },
  {
    id: 2,
    title: 'Planos',
    data: [
      {
        id: 1,
        name: 'Cesta 1',
        quantity: 2,
        value: 159.9,
        image:
          'https://comps.canstockphoto.com.br/fazenda-alface-filas-banco-de-fotos_csp5956244.jpg',
        unity: 'não sei',
      },
      {
        id: 2,
        name: 'Cesta 1',
        quantity: 2,
        value: 159.9,
        image:
          'https://comps.canstockphoto.com.br/fazenda-alface-filas-banco-de-fotos_csp5956244.jpg',
        unity: 'não sei',
      },
      {
        id: 3,
        name: 'Cesta 1',
        quantity: 2,
        value: 159.9,
        image:
          'https://comps.canstockphoto.com.br/fazenda-alface-filas-banco-de-fotos_csp5956244.jpg',
        unity: 'não sei',
      },
    ],
  },
  {
    id: 3,
    title: 'Produtos',
    data: [
      {
        id: 1,
        name: 'Cesta 1',
        quantity: 2,
        value: 159.9,
        image:
          'https://comps.canstockphoto.com.br/fazenda-alface-filas-banco-de-fotos_csp5956244.jpg',
        unity: 'não sei',
      },
      {
        id: 2,
        name: 'Cesta 1',
        quantity: 2,
        value: 159.9,
        image:
          'https://comps.canstockphoto.com.br/fazenda-alface-filas-banco-de-fotos_csp5956244.jpg',
        unity: 'não sei',
      },
      {
        id: 3,
        name: 'Cesta 1',
        quantity: 2,
        value: 159.9,
        image:
          'https://comps.canstockphoto.com.br/fazenda-alface-filas-banco-de-fotos_csp5956244.jpg',
        unity: 'não sei',
      },
    ],
  },
];

const StoreDetails: React.FC = () => {
  const flatListRef = useRef(null);
  const selectListRef = useRef(null);
  const [selecedMenu, setSelectedMenu] = useState(0);
  const navigation = useNavigation();

  const selectMenu = useCallback(index => {
    setSelectedMenu(index);
    if (flatListRef.current) {
      flatListRef.current?.scrollToIndex({
        animated: true,
        index,
        viewPosition: 0.5,
      });
    }

    if (selectListRef.current) {
      selectListRef.current?.scrollToLocation({
        sectionIndex: index,
        itemIndex: 0,
        // viewPosition: 0,
        viewOffset: 0,
        animated: true,
      });
    }
  }, []);

  return (
    <Container>
      <BackHeaderContainer>
        <BackHeader />
      </BackHeaderContainer>
      <Header>
        <StoreBanner
          source={{
            uri:
              'https://comps.canstockphoto.com.br/fazenda-alface-filas-banco-de-fotos_csp5956244.jpg',
          }}
        />
        <HeaderContent>
          <Title>Fazenda do alface roxo</Title>
          <StoreRA>Brazlandia</StoreRA>

          <Separator />

          <Title>Descrição:</Title>
          <SubTitle>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s,
          </SubTitle>

          <Separator />
        </HeaderContent>
      </Header>

      <Content>
        <View>
          <FlatList
            ref={flatListRef}
            data={DATA}
            keyExtractor={item => String(item.id)}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <Touchable onPress={() => selectMenu(index)}>
                <ContainerItem selected={index === selecedMenu}>
                  <MenuItem selected={index === selecedMenu}>
                    {item.title}
                  </MenuItem>
                </ContainerItem>
              </Touchable>
            )}
            horizontal
          />
        </View>

        <SectionList
          ref={selectListRef}
          sections={DATA}
          keyExtractor={(item, index) => item.id}
          renderItem={({ item }) => (
            <ProductCard
              image={item.image}
              name={item.name}
              quantity={item.quantity}
              value={item.value}
              key={item.id}
              onPress={() => navigation.navigate('ProductPage')}
            />
          )}
          stickySectionHeadersEnabled={false}
          renderSectionHeader={({ section: { title } }) => (
            <TitleContainer>
              <TitleMenu>{title}</TitleMenu>
            </TitleContainer>
          )}
        />
      </Content>
    </Container>
  );
};

export default StoreDetails;
