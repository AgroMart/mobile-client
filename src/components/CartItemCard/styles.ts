import styled from 'styled-components/native';

import { colors, fonts } from '../../styles';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: 111px;
  width: 100%;
  border: 2px;
  border-color: #ddd;
  background: ${colors.white};
  padding: 15px;
  border-radius: 4px;
`;

export const IternalContainerLeft = styled.View`
  height: 100%;
  max-width: 70%;
  justify-content: space-between;
`;

export const IternalContainerRight = styled.View`
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Img = styled.Image`
  width: 60px;
  height: 60px;
`;

export const ProductName = styled.Text`
  font-size: ${fonts.MEDIUM}px;
  font-family: ${fonts.BOLD};
`;

export const InfoLabel = styled.Text`
  font-size: ${fonts.SMALL}px;
  color: ${colors.gray};
  font-family: ${fonts.SEMIBOLD};
`;

export const ButtonText = styled.Text`
  font-size: ${fonts.SMALL}px;
  color: ${colors.red};
  font-family: ${fonts.SEMIBOLD};
`;

export const PriceText = styled.Text`
  font-size: ${fonts.SMALL}px;
  color: ${colors.secondary};
  font-family: ${fonts.SEMIBOLD};
`;

export const RemoveItemButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;
