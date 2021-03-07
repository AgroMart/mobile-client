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
  width: 100%;
  border-radius: 4px;
  border-bottom-width: 0px;
`;

export const ProductInfo = styled.View`
  margin-bottom: 10px;
`;

export const ProductDesc = styled.Text`
  font-size: ${fonts.EXTRA_MEDIUM}px;
  font-family: ${fonts.REGULAR};
  margin-top: 10px;
  color: ${colors.gray};
`;

export const InfoView = styled.View`
  flex-direction: row;
  align-items: baseline;
`;

export const ProductPrice = styled.Text`
  font-size: ${fonts.EXTRA_MEDIUM}px;
  font-family: ${fonts.REGULAR};
  margin-top: 10px;
  color: ${colors.secondary};
`;

export const ProductImage = styled.Image`
  width: 100%;
  height: 190px;
`;

export const InfoContainer = styled.View`
  width: 100%;
  background: ${colors.white};
  padding: 10px 20px;
  border-top-width: 0.7px;
  border-color: ${colors.lightGray};
`;
