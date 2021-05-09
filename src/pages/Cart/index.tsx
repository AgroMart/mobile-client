import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/AuthProvider';
import { useCart } from '../../hooks/CartProvider';
import api from '../../services/api';
import RAs from '../../utils/mockCitys';

import AddressShortView from '../../components/AddressShortView';
import BackHeader from '../../components/BackHeader';
import CartItemCard from '../../components/CartItemCard';
import TextButton from '../../components/TextButton';
import Button from '../../components/Button';

import {
  Container,
  Content,
  ItemList,
  ButtonContainer,
  Footer,
  TotalContainer,
  TotalText,
  TotalValue,
} from './styles';

interface StockParams {
  id: number;
  quantity: number;
  stock: number;
}

const CartScreen: React.FC = () => {
  const [userRA, setUserRA] = useState('');

  const { user } = useAuth();
  const { cart, removeItemToCart, getTotal, cleanUpCart } = useCart();
  const navigation = useNavigation();

  useEffect(() => {
    const foundRA = RAs.find(RA => RA.key === user.endereco?.bairro);

    foundRA && setUserRA(foundRA?.city);
  }, [user]);

  useEffect(() => {
    if (!cart.length) {
      navigation.navigate('StoreDetail');
    }
  }, [cart, navigation]);

  const updateStockRequestModifier = {
    produto: async (item: StockParams) => {
      try {
        const body = {
          quantidade: item.stock - item.quantity,
        };
        await api.put(`/produtos-avulsos/${item.id}`, body);
      } catch (err) {
        console.log(err);
      }
    },
    cesta: async (item: StockParams) => {
      try {
        const body = {
          quantidade: item.stock - item.quantity,
        };
        await api.put(`/cestas/${item.id}`, body);
      } catch (err) {
        console.log(err);
      }
    },
    plano: async (item: StockParams) => {
      try {
        const body = {
          quantidade: item.stock - item.quantity,
        };
        await api.put(`/planos/${item.id}`, body);
      } catch (err) {
        console.log(err);
      }
    },
  };

  const handleFinish = async () => {
    const extractBody = {
      valor: getTotal(),
      user: user.id,
      loja: 21,
      itens: {
        produtos: [] as any,
      },
    };
    cart.forEach(item => {
      updateStockRequestModifier[item.type](item);

      extractBody.itens = {
        produtos: [
          ...extractBody.itens.produtos,
          {
            produto: item.name,
            quantidade: item.quantity,
            valor: item.value,
          },
        ],
      };
    });

    try {
      await api.post('/extratoes', extractBody);
      cleanUpCart();
      Alert.alert('Deu tudo certo :)', 'Pedido realizado com sucesso');
      navigation.navigate('History');
    } catch {
      Alert.alert('Ops', 'Não foi possível realizar o seu pedido');
    }
  };

  return (
    <Container>
      <BackHeader text="Pedidos" />
      <AddressShortView
        RA={userRA}
        address={user.endereco ? user.endereco?.rua : ''}
        onPress={() => {
          navigation.navigate('AddressForm');
        }}
      />
      <Content>
        <ItemList>
          {cart.map(item => (
            <CartItemCard
              name={item.name}
              photo={item.image}
              price={item.value * item.quantity}
              quantity={item.quantity}
              key={`${item.id}-${item.type}`}
              handleDelete={() => removeItemToCart(item.id, item.type)}
            />
          ))}
        </ItemList>
        <TextButton
          onPress={() => {
            navigation.navigate('StoreDetail');
          }}
        >
          Adicionar mais itens
        </TextButton>

        <Footer>
          <TotalContainer>
            <TotalText>Total</TotalText>
            <TotalValue>{`R$ ${getTotal()}`}</TotalValue>
          </TotalContainer>
          <ButtonContainer>
            <Button onPress={handleFinish}>Finalizar Pedido</Button>
          </ButtonContainer>
        </Footer>
      </Content>
    </Container>
  );
};

export default CartScreen;
