import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { colors } from '../../styles';

import {
  Container,
  Img,
  RemoveItemButton,
  IternalContainerLeft,
  ProductName,
  IternalContainerRight,
  PriceText,
  InfoLabel,
  ButtonText,
} from './styles';

interface CartItemCardProps {
  photo: string;
  name: string;
  quantity: string;
  price: string;
  handleDelete(): void;
}

const CartItemCard: React.FC<CartItemCardProps> = ({
  photo,
  name,
  quantity,
  price,
  handleDelete,
}) => {
  return (
    <Container>
      <IternalContainerLeft>
        <ProductName>{name}</ProductName>
        <InfoLabel>{`Quantidade: ${quantity}`}</InfoLabel>
        <RemoveItemButton onPress={handleDelete}>
          <MaterialIcons
            name="delete-forever"
            size={18}
            color={`${colors.red}`}
          />
          <ButtonText>Remover</ButtonText>
        </RemoveItemButton>
      </IternalContainerLeft>
      <IternalContainerRight>
        <Img source={{ uri: photo }} />
        <PriceText>R$ {price}</PriceText>
      </IternalContainerRight>
    </Container>
  );
};

export default CartItemCard;
