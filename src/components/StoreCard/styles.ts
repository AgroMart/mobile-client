import styled from 'styled-components/native';

import { colors, fonts, metrics } from '../../styles';

export const Container = styled.TouchableOpacity`
  flex: 1;
`;

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
  margin-bottom: ${metrics.PADDING_SCREEN * 0.7}px;
`;

export const Image = styled.Image`
  align-self: stretch;
  height: ${metrics.PADDING_SCREEN * 6}px;
  margin-bottom: ${metrics.PADDING_SCREEN * 0.2}px;
  border-radius: 2px;
`;
export const Title = styled.Text`
  color: ${colors.shadow};
  font-size: ${fonts.MEDIUM}px;
  font-family: ${fonts.SEMIBOLD};
  align-self: stretch;
  margin-left: 2%;
`;

export const Location = styled.Text`
  color: ${colors.shadow};
  font-size: ${fonts.SMALL}px;
  font-family: ${fonts.REGULAR};
  align-self: stretch;
  margin-left: 3%;
  margin-bottom: 2%;
`;
