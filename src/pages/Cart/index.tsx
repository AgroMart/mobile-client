/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RAs from '../../utils/mockCitys';
import { colors } from '../../styles';
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
import { priceFormat } from '../../utils';

// Components imports
import AddressShortView from '../../components/AddressShortView';
import BackHeader from '../../components/BackHeader';
import CartItemCard from '../../components/CartItemCard';
import TextButton from '../../components/TextButton';
import Button from '../../components/Button';

// Context imports
import { useAuth } from '../../hooks/AuthProvider';
import { useCart } from '../../hooks/CartProvider';
import initializeApi from '../../services/api';

interface StockParams {
  id: number;
  quantity: number;
  stock: number;
}

const CartScreen: React.FC = () => {
  const [userRA, setUserRA] = useState('');
  const [loading, setLoading] = useState(false);

  // Context
  const { user } = useAuth();
  const { cart, removeItemToCart, getTotal, storeId, cleanUpCart } = useCart();
  const navigation = useNavigation();

  useEffect(() => {
    const foundRA = RAs.find(RA => RA.key === user.endereco?.bairro);

    foundRA && setUserRA(foundRA?.city);
  }, [user]);

  useEffect(() => {
    if (!cart.length) {
      // navigation.navigate('StoreDetail');
    }
  }, [cart, navigation]);

  const sendSubscriberData = async () => {
    const updateStockRequestModifier = {
      produto: async (item: StockParams) => {
        try {
          const api = await initializeApi();

          const body = {
            quantidade: item.stock - item.quantity,
          };
          await api.put(`produtos-avulsos/${item.id}`, body);
        } catch (err) {
          console.log(err);
        }
      },
      cesta: async (item: StockParams) => {
        try {
          const body = {
            quantidade: item.stock - item.quantity,
          };
          const api = await initializeApi();

          await api.put(`cestas/${item.id}`, body);
        } catch (err) {
          console.log(err);
        }
      },
      plano: async (item: StockParams) => {
        try {
          const body = {
            quantidade: item.stock - item.quantity,
          };

          const api = await initializeApi();

          const response = await api.put(`planos/${item.id}`, body);

          const { id, quantidade_de_cestas } = response.data;

          const subscriberBody = {
            nome: user.username,
            cestas_disponiveis: quantidade_de_cestas,
            planos: item.id,
            usuario: user.id,
            loja: storeId,
          };

          await api.post('assinantes', subscriberBody);
        } catch (err) {
          console.log(err);
        }
      },
    };
    const extractBody = {
      valor: getTotal(),
      user: user.id,
      loja: storeId,
      itens: {
        produtos: [] as any,
      },
      pagamento_realizado: false,
    };
    cart.forEach(item => {
      console.log('type', item.type);
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
      const api = await initializeApi();

      await api.post('extratoes', extractBody);
      cleanUpCart();
    } catch (error) {
      console.log('Erro', error);
    }
  };

  const handleFinish = async () => {
    setLoading(true);
    try {
      await sendSubscriberData();
      navigation.navigate('History');

      // VOLTAR PARA BILLING ADDRESS QUANDO ARRUMAR PAGAMENTO POR CARTÃO
      // navigation.navigate('BillingAddress');
    } catch {
      Alert.alert('Ops...', 'Não foi possível prosseguir para o pagamento.');
    }
    setLoading(false);
  };

  return (
    <Container>
      <BackHeader text="Pedidos" disabled={loading} />
      {loading ? (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" color={`${colors.secondary}`} />
        </View>
      ) : (
        <>
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
                // navigation.navigate('StoreDetail');
              }}
            >
              Adicionar mais itens
            </TextButton>

            <Footer>
              <TotalContainer>
                <TotalText>Total</TotalText>
                <TotalValue>{priceFormat(getTotal())}</TotalValue>
              </TotalContainer>
              <ButtonContainer>
                <Button onPress={handleFinish}>Realizar Pedido</Button>
              </ButtonContainer>
            </Footer>
          </Content>
        </>
      )}
    </Container>
  );
};

export default CartScreen;
