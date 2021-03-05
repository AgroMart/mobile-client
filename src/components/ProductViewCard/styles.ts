import styled from 'styled-components/native';

import { colors } from '../../styles';

export const Container = styled.View.attrs({
  shadowColor: `${colors.shadow}`,
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,

  elevation: 3,
})`
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0;
  border-bottom-width: 0px;
`;

export const ProductInfo = styled.View`
  margin-bottom: 10px;
`;

export const ProductName = styled.Text`
  font-size: 18px;
  margin-top: 10px;
`;

export const InfoView = styled.View`
  flex-direction: row;
  align-items: baseline;
`;

export const ProductData = styled.Text`
  font-size: 16px;
  margin-top: 10px;
  color: ${colors.secondary};
`;

export const ImageView = styled.View``;

export const ProductImage = styled.Image`
  width: 348px;
  height: 190px;
`;

export const InfoContainer = styled.View`
  background: ${colors.white};
  padding: 10px;
  border-top-width: 0.7px;
  border-color: ${colors.lightGray};
`;
