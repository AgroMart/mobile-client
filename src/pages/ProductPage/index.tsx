import React, { useState, useEffect } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import { Alert } from 'react-native';
import { useCart, TypeItem } from '../../hooks/CartProvider';
import { useAuth } from '../../hooks/AuthProvider';

import BackHeader from '../../components/BackHeader';
import ProductViewCard from '../../components/ProductViewCard';
import QuantityInput from '../../components/QuantityInput';
import Button from '../../components/Button';

import { colors } from '../../styles';

import {
  Container,
  ProductContainer,
  RowView,
  ButtonContainer,
} from './styles';
import { StackNavigationProp } from '@react-navigation/stack';

type ParamList = {
  ProductPage: {
    id: number;
    type: TypeItem;
    name: string;
    quantity: number;
    value: number;
    image: string;
    description: string;
    storeId: number;
  };
};

const Product: React.FC = () => {
  const { cart, addItemToCart, removeItemToCart } = useCart();
  const { user } = useAuth();
  const [hasOnCart, setHasOnCart] = useState(false);
  const [wishQuantity, setWishQuantity] = useState(0);

type NavigationProp = {
  Cart: undefined
}

  const navigation = useNavigation<StackNavigationProp<NavigationProp>>();
  const {
    params: { id, name, type, quantity, value, image, description, storeId },
  } = useRoute<RouteProp<ParamList, 'ProductPage'>>();

  useEffect(() => {
    const foundItem = cart.find(item => item.id === id && item.type === type);

    if (foundItem) {
      setHasOnCart(true);
      setWishQuantity(foundItem.quantity);
    } else {
      setHasOnCart(false);
    }
  }, [cart, id, type]);

  const incrementQuantity = () => {
    if (wishQuantity === quantity) return;

    setWishQuantity(prevState => prevState + 1);
  };

  const decrementQuantity = () => {
    if (wishQuantity <= 0) return;

    setWishQuantity(prevState => prevState - 1);
  };

  const handleAddItem = () => {
    if (!user) {
      return Alert.alert('Ops..', 'Você deve estar logado para fazer pedidos');
    }

    const item = {
      id,
      name,
      quantity: wishQuantity,
      stock: quantity,
      image,
      value,
      type,
    };

    addItemToCart(item, storeId);
    return item.quantity !== 0 && navigation.navigate('Cart');
  };

  return (
    <Container>
      <BackHeader text={name} />
      <ProductContainer>
        <ProductViewCard
          description={description}
          value={value}
          image={image || ''}
        />
      </ProductContainer>

      <RowView>
        <QuantityInput
          value={wishQuantity}
          addFunction={() => incrementQuantity()}
          subFunction={() => decrementQuantity()}
        />
        <ButtonContainer>
          <Button onPress={handleAddItem}>
            {hasOnCart ? 'Atualizar' : 'Adicionar'}
          </Button>
        </ButtonContainer>
        {hasOnCart && (
          <ButtonContainer>
            <Button
              onPress={() => removeItemToCart(id, type)}
              style={{ backgroundColor: `${colors.red}` }}
            >
              Remover
            </Button>
          </ButtonContainer>
        )}
      </RowView>
    </Container>
  );
};

export default Product;
