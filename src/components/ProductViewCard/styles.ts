import styled from 'styled-components/native';

import { colors, fonts } from '../../styles';

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
  border-radius: 4px;
  border-bottom-width: 0px;
`;

export const ProductInfo = styled.View`
  margin-bottom: 10px;
`;

export const ProductDesc = styled.Text`
  font-size: ${fonts.EXTRA_MEDIUM}px;
  font-family: Montserrat_700Bold;
  margin-top: 10px;
`;

export const InfoView = styled.View`
  flex-direction: row;
  align-items: baseline;
`;

export const ProductPrice = styled.Text`
  font-size: ${fonts.MEDIUM}px;
  font-family: Montserrat_400Regular;
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
