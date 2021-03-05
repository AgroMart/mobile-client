import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {
  Container,
  ProductInfo,
  ImageView,
  ProductImage,
  ProductName,
  InfoView,
  InfoTitle,
  ProductData,
  GreenText,
} from './styles';

export type ProductCardProps = {
  name: string;
  quantity: number;
  value: number;
  image: string;
  unity?: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  quantity,
  value,
  unity = 'Unidade',
  image,
}) => {
  return (
    <TouchableOpacity>
      <Container>
        <ProductInfo>
          <ProductName>{name}</ProductName>
          <InfoView>
            <InfoTitle>Qtd disponível: </InfoTitle>
            <ProductData>{`${quantity}`}</ProductData>
          </InfoView>
          <InfoView>
            <InfoTitle>{`Valor por ${unity.slice(0, 3)} :`}</InfoTitle>
            <GreenText>{` R$ ${value}`}</GreenText>
          </InfoView>
        </ProductInfo>
        <ImageView>
          <ProductImage source={{ uri: image }} />
        </ImageView>
      </Container>
    </TouchableOpacity>
  );
};

export default ProductCard;
