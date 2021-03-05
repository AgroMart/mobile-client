import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {
  Container,
  ProductInfo,
  ImageView,
  ProductImage,
  ProductDesc,
  InfoView,
  ProductPrice,
  InfoContainer,
} from './styles';

type ProductViewCardProps = {
  description: string;
  value: string;
  image: string;
};

const ProductViewCard: React.FC<ProductViewCardProps> = ({
  description,
  value,
  image,
}) => {
  return (
    <TouchableOpacity>
      <Container>
        <ProductImage source={{ uri: image }} />
        <InfoContainer>
          <ProductInfo>
            <ProductDesc>{description}</ProductDesc>
            <InfoView>
              <ProductPrice>{`Valor: R$ ${value}`}</ProductPrice>
            </InfoView>
          </ProductInfo>
          <ImageView />
        </InfoContainer>
      </Container>
    </TouchableOpacity>
  );
};

export default ProductViewCard;
