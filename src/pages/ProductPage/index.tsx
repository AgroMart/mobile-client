import React from 'react';
import { View } from 'react-native';

import BackHeader from '../../components/BackHeader';
import ProductViewCard from '../../components/ProductViewCard';
import QuantityInput from '../../components/QuantityInput';
import Button from '../../components/Button';

import { Container, ProductContainer, RowView } from './styles';

const Product: React.FC = () => {
  return (
    <Container>
      <BackHeader text="Cesta 1" />
      <ProductContainer>
        <ProductViewCard
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          value="159.9"
          image="https://comps.canstockphoto.com.br/fazenda-alface-filas-banco-de-fotos_csp5956244.jpg"
        />
      </ProductContainer>

      <RowView>
        <View style={{ marginRight: 10 }}>
          <QuantityInput
            value={1}
            addFunction={() => {}}
            subFunction={() => {}}
          />
        </View>
        <Button>Adicionar</Button>
      </RowView>
    </Container>
  );
};

export default Product;
