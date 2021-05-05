import React, { useState } from 'react';
import { View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

import { useCart } from '../../hooks/CartProvider';

import BackHeader from '../../components/BackHeader';
import ProductViewCard from '../../components/ProductViewCard';
import QuantityInput from '../../components/QuantityInput';
import Button from '../../components/Button';

import {
  Container,
  ProductContainer,
  RowView,
  ButtonContainer,
} from './styles';

type ParamList = {
  ProductPage: {
    id: number;
    name: string;
    quantity: number;
    value: number;
    image: string;
    description: string;
  };
};

const Product: React.FC = () => {
  const [wishQuantity, setWishQuantity] = useState(1);

  const { cart, addItemToCart } = useCart();
  const {
    params: { id, name, quantity, value, image, description },
  } = useRoute<RouteProp<ParamList, 'ProductPage'>>();

  const incrementQuantity = () => {
    if (wishQuantity < 1) return;

    if (wishQuantity === quantity) return;

    setWishQuantity(prevState => prevState + 1);
  };

  const decrementQuantity = () => {
    if (wishQuantity === 1) return;

    setWishQuantity(prevState => prevState - 1);
  };

  const handleAddItem = () => {
    const item = {
      id,
      name,
      quantity: wishQuantity,
      image,
      value,
    };

    addItemToCart(item);

    console.log(cart);
  };

  return (
    <Container>
      <BackHeader text="Cesta 1" />
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
          <Button onPress={handleAddItem}>Adicionar</Button>
        </ButtonContainer>
      </RowView>
    </Container>
  );
};

export default Product;
