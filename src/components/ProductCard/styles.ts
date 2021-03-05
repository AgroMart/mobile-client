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
  padding: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0px;
  background: ${colors.white};
  border-bottom-width: 0px;
`;

export const ProductInfo = styled.View``;

export const ProductName = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
export const InfoView = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;

export const InfoTitle = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;

export const ProductData = styled.Text`
  font-size: 17px;
  color: ${colors.shadow};
`;

export const GreenText = styled(ProductData)`
  color: ${colors.secondary};
`;

export const ImageView = styled.View``;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;
