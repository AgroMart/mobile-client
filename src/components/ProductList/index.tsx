import React from 'react';
import ProductCard from '../ProductCard';

import { Container } from './styles';

const ProductList: React.FC = () => {
  return (
    <Container
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Container>
  );
};

export default ProductList;
