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

const CartScreen: React.FC = () => {
  const [userRA, setUserRA] = useState('');
  const [loading, setLoading] = useState(false);

  // Context
  const { user } = useAuth();
  const { cart, removeItemToCart, getTotal } = useCart();
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

  const handleFinish = async () => {
    setLoading(true);
    try {
      navigation.navigate('BillingAddress');
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
                navigation.navigate('StoreDetail');
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
                <Button onPress={handleFinish}>Realizar Pagamento</Button>
              </ButtonContainer>
            </Footer>
          </Content>
        </>
      )}
    </Container>
  );
};

export default CartScreen;
