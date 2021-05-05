import React, { useState } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';

import { useCart } from '../../hooks/CartProvider';

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

type ParamList = {
  ProductPage: {
    id: number;
    type: 'produto' | 'cesta' | 'plano';
    name: string;
    quantity: number;
    value: number;
    image: string;
    description: string;
  };
};

const Product: React.FC = () => {
  const [wishQuantity, setWishQuantity] = useState(0);

  const { cart, addItemToCart, removeItemToCart } = useCart();
  const {
    params: { id, name, type, quantity, value, image, description },
  } = useRoute<RouteProp<ParamList, 'ProductPage'>>();

  const hasOnCart = cart.find(item => item.id === id);

  const incrementQuantity = () => {
    if (wishQuantity === quantity) return;

    setWishQuantity(prevState => prevState + 1);
  };

  const decrementQuantity = () => {
    if (wishQuantity <= 0) return;

    setWishQuantity(prevState => prevState - 1);
  };

  const handleAddItem = () => {
    const item = {
      id,
      name,
      quantity: wishQuantity,
      image,
      value,
      type,
    };

    addItemToCart(item);
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
              onPress={() => removeItemToCart(id)}
              style={{ backgroundColor: `${colors.red}` }}
            >
              remover
            </Button>
          </ButtonContainer>
        )}
      </RowView>
    </Container>
  );
};

export default Product;
