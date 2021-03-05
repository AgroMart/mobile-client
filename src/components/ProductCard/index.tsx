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

type ProductCardProps = {
  name?: string;
  quantity?: number;
  value?: number;
  image?: string;
  unity?: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  name = 'Alface Roxo',
  quantity = 100,
  value = '1.80',
  unity = 'unidade',
  image = 'https://cdn.awsli.com.br/600x450/1552/1552869/produto/58429742/136797bb1d.jpg',
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
