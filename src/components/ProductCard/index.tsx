/* eslint-disable camelcase */
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {
  Container,
  ProductInfo,
  ImageView,
  ProductImage,
  ProductName,
  ProductQuantity,
  ProductPrice,
} from './styles';

type ProductCardProps = {
  nome?: string;
  quantidade?: number;
  valor?: number;
  imagem?: string;
  unidade_medida?: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  nome = 'Alface Roxo',
  quantidade = 100,
  valor = '1.80',
  unidade_medida = 'unidade',
  imagem = 'https://cdn.awsli.com.br/600x450/1552/1552869/produto/58429742/136797bb1d.jpg',
}) => {
  return (
    <TouchableOpacity>
      <Container>
        <ProductInfo>
          <ProductName>{nome}</ProductName>
          <ProductQuantity>{`Qtd disponível: ${quantidade}`}</ProductQuantity>
          <ProductPrice>
            {`Valor por ${unidade_medida.slice(0, 3)} : R$ ${valor}`}
          </ProductPrice>
        </ProductInfo>
        <ImageView>
          <ProductImage source={{ uri: imagem }} />
        </ImageView>
      </Container>
    </TouchableOpacity>
  );
};

export default ProductCard;