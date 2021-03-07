import React from 'react';

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
  value: string;
  image: string;
};

const ProductViewCard: React.FC<ProductViewCardProps> = ({
  description,
  value,
  image,
}) => {
  return (
    <Container>
      <ProductImage source={{ uri: image }} />
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
