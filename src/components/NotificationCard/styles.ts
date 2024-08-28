import styled from 'styled-components/native';

import { colors, fonts, metrics } from '../../styles';

export const Container = styled.TouchableOpacity``;

export const Card = styled.View.attrs({
  shadowColor: `${colors.shadow}`,
  shadowOffset: { height: 0, width: 0 },
  shadowOpacity: 0.5,
  shadowRadius: 3,
  elevation: 7,
})`
  align-self: stretch;
  padding: 1%;
  align-items: center;
  background-color: white;
  border-radius: 2px;
  margin-bottom: ${metrics.PADDING_SCREEN * 0.9}px;
`;

export const Title = styled.Text`
  color: ${colors.primary};
  font-size: ${fonts.MEDIUM}px;
  font-family: ${fonts.SEMIBOLD};
  align-self: stretch;
  margin-left: 2%;
`;

export const Text = styled.Text`
  color: ${colors.shadow};
  font-size: ${fonts.SMALL}px;
  font-family: ${fonts.REGULAR};
  align-self: stretch;
  margin-left: 2%;
  margin-bottom: 2%;
`;
