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
  InfoContainer,
} from './styles';

type ProductViewCardProps = {
  description?: string;
  value?: number;
  image?: string;
};

const ProductViewCard: React.FC<ProductViewCardProps> = ({
  description = 'Cesta produzida em brazlândia, contem arroz, batata e etc ',
  value = '1.80',
  image = 'https://http2.mlstatic.com/D_NQ_NP_2X_914388-MLB31366464206_072019-F.webp',
}) => {
  return (
    <TouchableOpacity>
      <Container>
        <ProductImage source={{ uri: image }} />
        <InfoContainer>
          <ProductInfo>
            <ProductName>{description}</ProductName>
            <InfoView>
              <ProductData>{`Valor: R$ ${value}`}</ProductData>
            </InfoView>
          </ProductInfo>
          <ImageView />
        </InfoContainer>
      </Container>
    </TouchableOpacity>
  );
};

export default ProductViewCard;
