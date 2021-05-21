import styled from 'styled-components/native';

import { fonts, colors } from '../../styles';
import { iPhoneHelper } from '../../utils';

export const Container = styled.ScrollView`
  flex: 1;
  padding-top: ${iPhoneHelper.getStatusBarHeight(true)}px;
`;

export const Content = styled.View`
  align-items: center;
  flex: 1;
  height: 100%;
`;

export const ItemList = styled.View`
  width: 90%;
  margin-bottom: 20px;
`;

export const Footer = styled.View`
  flex-direction: row;
  width: 90%;
  align-items: center;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  margin-left: 30px;
`;

export const TotalContainer = styled.View`
  margin-top: 10px;
`;

export const TotalText = styled.Text`
  font-size: ${fonts.MEDIUM};
  font-family: ${fonts.BOLD};
`;

export const TotalValue = styled.Text`
  font-size: ${fonts.MEDIUM};
  font-family: ${fonts.BOLD};
  color: ${colors.lightGray};
`;
