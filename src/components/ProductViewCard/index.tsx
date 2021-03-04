/* eslint-disable camelcase */
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  Container,
  ProductInfo,
  ImageView,
  ProductImage,
  ProductName,
  InfoView,
  ProductData,
} from './styles';

type ProductViewCardProps = {
  description?: string;
  valor?: number;
  imagem?: string;
};

const ProductViewCard: React.FC<ProductViewCardProps> = ({
  description = 'Cesta produzida em brazlândia, contem arroz, batata e etc ',
  valor = '1.80',
  imagem = 'https://http2.mlstatic.com/D_NQ_NP_2X_914388-MLB31366464206_072019-F.webp',
}) => {
  return (
    <TouchableOpacity>
      <Container>
        <ProductImage source={{ uri: imagem }} />
        <ProductInfo>
          <ProductName>{description}</ProductName>
          <InfoView>
            <ProductData>{`Valor: R$ ${valor}`}</ProductData>
          </InfoView>
        </ProductInfo>
        <ImageView />
      </Container>
    </TouchableOpacity>
  );
};

export default ProductViewCard;
