import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import {
  Container,
  Img,
  RemoveItemButton,
  IternalContainerLeft,
  ProductName,
  IternalContainerRight,
  PriceText,
  InfoLabel,
  InternalText,
  ButtonText,
} from './styles';

interface Props {
  photo?: string;
  name: string;
  quantity: number;
  price: number;
  id: number;
}

const CartItemCard: React.FC<Props> = props => {
  const { photo, name, quantity, price, id } = props;

  return (
    <Container>
      <IternalContainerLeft>
        <ProductName>{name}</ProductName>
        <InfoLabel>
          Quantidade: <InternalText>{quantity}</InternalText>
        </InfoLabel>
        <RemoveItemButton onPress={() => {}}>
          <MaterialIcons name="delete-forever" size={24} color="red" />
          <ButtonText style={{ color: 'red' }}>Remover</ButtonText>
        </RemoveItemButton>
      </IternalContainerLeft>
      <IternalContainerRight>
        <Img source={{ uri: photo }} />
        <PriceText>R$ {price}</PriceText>
      </IternalContainerRight>
    </Container>
  );
};

CartItemCard.defaultProps = {
  photo:
    'https://thumbs.web.sapo.io/?W=800&H=0&delay_optim=1&epic=NGNl88jzGknot26JMojOuazXgJK7LxXKMWes/sScQk5fBN0SWv2+xq8Og5AdjwcYXZJl2CwN0AY5Ofv1E2o6thyTdQ==',
  name: '',
  quantity: 1,
  price: 0.0,
};
export default CartItemCard;
