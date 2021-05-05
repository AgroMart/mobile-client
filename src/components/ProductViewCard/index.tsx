import React from 'react';

import { baseURL } from '../../services/api';

import {
  Container,
  ProductInfo,
  ProductImage,
  ProductDesc,
  InfoView,
  ProductPrice,
  InfoContainer,
} from './styles';

type ProductViewCardProps = {
  description: string;
  value: number;
  image: string;
};

const ProductViewCard: React.FC<ProductViewCardProps> = ({
  description,
  value,
  image,
}) => {
  return (
    <Container>
      <ProductImage source={{ uri: `${baseURL}${image}` }} />
      <InfoContainer>
        <ProductInfo>
          <ProductDesc>{description}</ProductDesc>
          <InfoView>
            <ProductPrice>{`Valor: R$ ${value}`}</ProductPrice>
          </InfoView>
        </ProductInfo>
      </InfoContainer>
    </Container>
  );
};

export default ProductViewCard;
