import styled from 'styled-components/native';
import { metrics, fonts, colors } from '../../styles';

export const CardCity = styled.TouchableOpacity`
  position: relative;
  background: rgba(0, 0, 0, 0.5);
  margin: ${metrics.PADDING_SCREEN * 0.6}px;
  justify-content: center;
`;

export const CityText = styled.Text`
  position: absolute;
  align-self: center;
  font-family: ${fonts.REGULAR};
  color: ${colors.white};
  font-size: ${fonts.MEDIUM}px;
`;

export const CardMask = styled.View`
  position: absolute;
  justify-content: center;
  width: ${metrics.SCREEN_WIDTH * 0.41}px;
  height: ${metrics.SCREEN_WIDTH * 0.41}px;
  z-index: 1;
  background: rgba(0, 0, 0, 0.35);
`;

export const CityImage = styled.Image`
  width: ${metrics.SCREEN_WIDTH * 0.41}px;
  height: ${metrics.SCREEN_WIDTH * 0.41}px;
`;
