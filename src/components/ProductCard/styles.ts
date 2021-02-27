import { View, Image, Text } from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  padding: 18px 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-width: 0.5px;
  border-color: gray;
  border-radius: 5px;
  margin: 10px 0;
`;

export const ProductInfo = styled(View)``;

export const ProductName = styled(Text)`
  font-size: 20px;
  font-weight: bold;
`;

export const ProductQuantity = styled(Text)`
  font-size: 17px;
`;

export const ProductPrice = styled(Text)`
  font-size: 17px;
`;

export const ImageView = styled(View)``;

export const ProductImage = styled(Image)`
  width: 80px;
  height: 80px;
`;
