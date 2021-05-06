import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/AuthProvider';
import { useCart } from '../../hooks/CartProvider';
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

const CartScreen: React.FC = () => {
  const [userRA, setUserRA] = useState('');

  const { user } = useAuth();
  const { cart, removeItemToCart, getTotal } = useCart();
  const navigation = useNavigation();

  useEffect(() => {
    const foundRA = RAs.find(RA => RA.key === user.endereco?.bairro);

    foundRA && setUserRA(foundRA?.city);
  }, [user]);

  useEffect(() => {
    if (!cart.length) {
      navigation.goBack();
      navigation.goBack();
    }
  }, [cart, navigation]);

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
              key={item.id}
              handleDelete={() => removeItemToCart(item.id)}
            />
          ))}
        </ItemList>
        <TextButton
          onPress={() => {
            navigation.goBack();
            navigation.goBack();
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
            <Button
              onPress={() => {
                console.log('opa');
              }}
            >
              Finalizar Pedido
            </Button>
          </ButtonContainer>
        </Footer>
      </Content>
    </Container>
  );
};

export default CartScreen;
