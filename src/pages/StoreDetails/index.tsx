/* eslint-disable camelcase */
import React, { useRef, useState, useCallback, useEffect } from 'react';
import { SectionList, View, FlatList, Linking, Alert } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useCart, TypeItem } from '../../hooks/CartProvider';
import { useAuth } from '../../hooks/AuthProvider';

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
  IconView,
} from './styles';
import { StackNavigationProp } from '@react-navigation/stack';

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
    contato: string;
    descricao: string;
    banner: {
      url: string;
    };
    produto_avulsos: any[];
    cestas: any[];
    planos: any[];
    endereco: {
      bairro: string;
    };
  };
};

type NavigationProps = {
  ProductPage: undefined, 
  Cart: undefined
}

const StoreDetails: React.FC = () => {
  const flatListRef = useRef<any>(null);
  const selectListRef = useRef<any>(null);
  const [selecedMenu, setSelectedMenu] = useState(0);
  const navigation = useNavigation<StackNavigationProp<NavigationProps>>();

  const [data, setData] = useState<Category[]>([]);
  console.log({ data });
  const { addItemToCart, cart } = useCart();
  const { user } = useAuth();

  const {
    params: {
      id,
      nome,
      contato,
      descricao,
      banner,
      produto_avulsos,
      cestas,
      planos,
      endereco,
    },
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
          image: item.url ?? '',
          quantity: item.quantidade,
          value: item.valor,
          unity: 'unidade',
          description: item.descricao,
          storeId: id,
        })),
      },
      {
        id: 2,
        title: 'Planos',
        data: planos.map(item => ({
          id: item.id,
          type: 'plano',
          name: item.nome,
          image: item.url ?? '',
          quantity: item.quantidade,
          value: item.valor,
          unity: 'unidade',
          description: item.descricao,
          storeId: id,
        })),
      },
      {
        id: 3,
        title: 'Produtos',
        data: produto_avulsos.map(item => ({
          id: item.id,
          type: 'produto',
          name: item.nome,
          image: item.url ?? '',
          quantity: item.quantidade,
          value: item.valor,
          unity: item.unidade_medida,
          description: item.descricao,
          storeId: id,
        })),
      },
    ]);
  }, [cestas, planos, produto_avulsos, id]);

  const handleWhatsAppMessage = useCallback(
    async (phoneNumber: string): Promise<void> => {
      await Linking.openURL(`https://wa.me/55${phoneNumber}`).catch(err =>
        console.log(err),
      );
    },
    [],
  );

  const selectMenu = useCallback((index: React.SetStateAction<number>) => {
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
              // uri: `${baseURL}${banner.url}`,
              uri: `${banner.url}`,
            }}
          />
        )}
        <HeaderContent>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <View>
              <Title>{nome}</Title>
              <StoreRA>{endereco.bairro}</StoreRA>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <IconView
                onPress={() => {
                  if (!cart.length) {
                    if (!user) {
                      return Alert.alert(
                        'Ops...',
                        'Você deve estar logado para acessar o carrinho.',
                      );
                    }
                    return Alert.alert('Ops...', 'Seu carrinho está vazio');
                  }
                  return navigation.navigate('Cart');
                }}
              >
                <MaterialCommunityIcons name="cart" size={23} color="#fff" />
              </IconView>
              <IconView onPress={() => handleWhatsAppMessage(contato)}>
                <MaterialCommunityIcons
                  name="whatsapp"
                  size={23}
                  color="#fff"
                />
              </IconView>
            </View>
          </View>

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
                  if (!user) {
                    return Alert.alert(
                      'Ops...',
                      'Você deve estar logado para adicionar um plano ao carrinho.',
                    );
                  }
                  const plan = {
                    id: item.id,
                    name: item.name,
                    quantity: 1,
                    stock: item.quantity,
                    image: item.image,
                    value: item.value,
                    type: 'plano' as TypeItem,
                  };

                  addItemToCart(plan, id);
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
