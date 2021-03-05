import React from 'react';
import ProductCard, { ProductCardProps } from '../ProductCard';

import { Container } from './styles';

interface ProductListProps {
  items: ProductCardProps[];
}

const ProductList: React.FC<ProductListProps> = ({ items }) => {
  return (
    <Container
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      {items.map(({ image, name, quantity, value, unity }) => (
        <ProductCard
          key={name}
          name={name}
          quantity={quantity}
          value={value}
          unity={unity}
          image={image}
        />
      ))}
    </Container>
  );
};

export default ProductList;
