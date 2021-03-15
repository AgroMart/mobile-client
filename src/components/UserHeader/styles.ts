import styled from 'styled-components/native';

import { colors, metrics, fonts } from '../../styles';

export const Container = styled.TouchableOpacity`
  width: 100%;
  padding-bottom: ${metrics.PADDING_SCREEN * 0.5}px;
  padding-top: ${metrics.PADDING_SCREEN * 0.5}px;
  padding-left: ${metrics.PADDING_SCREEN}px;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.white};
  border-bottom-width: 2px;
  border-bottom-color: ${colors.border};
`;

export const Img = styled.Image`
  border: solid 2px ${colors.shadow};
  height: ${metrics.PADDING_SCREEN * 2.8}px;
  width: ${metrics.PADDING_SCREEN * 2.8}px;
  border-radius: ${metrics.PADDING_SCREEN * 1.5}px;
  margin-right: ${metrics.PADDING_SCREEN * 0.5}px;
`;

interface TextProps {
  logged?: boolean;
}

export const Text = styled.Text<TextProps>`
  color: ${colors.shadow};
  font-size: ${fonts.MEDIUM}px;
  font-family: ${fonts.REGULAR};
  color: ${({ logged }) =>
    logged ? `${colors.secondary}` : `${colors.shadow}`};
`;
