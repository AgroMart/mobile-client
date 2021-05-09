/* eslint-disable camelcase */
import React, { useRef, useState, useCallback, useEffect } from 'react';
import { SectionList, View, FlatList } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import { baseURL } from '../../services/api';
import { useCart, TypeItem } from '../../hooks/CartProvider';

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

interface Category {
  id: number;
  title: string;
  data: Item[];
}

interface Item {
  id: number;
  type: string;
  name: string;
  quantity: number;
  value: number;
  image: string;
  unity: string;
}

type ParamList = {
  StoreDetails: {
    id: number;
    nome: string;
    descricao: string;
    banner: {
      url: string;
    };
    produtos_avulsos: any[];
    cestas: any[];
    planos: any[];
  };
};

const StoreDetails: React.FC = () => {
  const flatListRef = useRef<any>(null);
  const selectListRef = useRef<any>(null);
  const [selecedMenu, setSelectedMenu] = useState(0);
  const navigation = useNavigation();

  const [data, setData] = useState<Category[]>([]);
  const { addItemToCart } = useCart();

  const {
    params: { id, nome, descricao, banner, produtos_avulsos, cestas, planos },
  } = useRoute<RouteProp<ParamList, 'StoreDetails'>>();

  useEffect(() => {
    setData([
      {
        id: 1,
        title: 'Cestas',
        data: cestas.map(item => ({
          id: item.id,
          name: `Cesta ${item.id}`,
          type: 'cesta',
          image: item.imagem ? item.imagem.url : '',
          quantity: item.quantidade,
          value: item.valor,
          unity: 'unidade',
          description: item.descricao,
        })),
      },
      {
        id: 2,
        title: 'Planos',
        data: planos.map(item => ({
          id: item.id,
          type: 'plano',
          name: item.nome,
          image: item.imagem ? item.imagem.url : '',
          quantity: item.quantidade,
          value: item.valor,
          unity: 'unidade',
          description: item.descricao,
        })),
      },
      {
        id: 3,
        title: 'Produtos',
        data: produtos_avulsos.map(item => ({
          id: item.id,
          type: 'produto',
          name: item.nome,
          image: item.imagem ? item.imagem.url : '',
          quantity: item.quantidade,
          value: item.valor,
          unity: item.unidade_medida,
          description: item.descricao,
        })),
      },
    ]);
  }, [cestas, planos, produtos_avulsos]);

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
        {banner && (
          <StoreBanner
            source={{
              uri: `${baseURL}${banner.url}`,
            }}
          />
        )}
        <HeaderContent>
          <Title>{nome}</Title>
          <StoreRA>Brazlandia</StoreRA>

          <Separator />

          <Title>Descrição:</Title>
          <SubTitle>{descricao}</SubTitle>

          <Separator />
        </HeaderContent>
      </Header>

      <Content>
        <View>
          <FlatList
            ref={flatListRef}
            data={data}
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
          sections={data}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <ProductCard
              image={item.image}
              name={item.name}
              quantity={item.quantity}
              value={item.value}
              key={item.id}
              onPress={() => {
                if (item.type !== 'plano') {
                  navigation.navigate('ProductPage', item);
                } else {
                  const plan = {
                    id: item.id,
                    name: item.name,
                    quantity: 1,
                    stock: item.quantity,
                    image: item.image,
                    value: item.value,
                    type: 'plano' as TypeItem,
                  };

                  addItemToCart(plan);
                  item.quantity !== 0 && navigation.navigate('Cart');
                }
              }}
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
