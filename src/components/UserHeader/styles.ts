import styled from 'styled-components/native';

import { colors, metrics, fonts } from '../../styles';

export const Container = styled.TouchableOpacity`
  width: 100%;
  padding-bottom: ${metrics.PADDING_SCREEN * 0.5}px;
  padding-top: ${metrics.PADDING_SCREEN * 0.5}px;
  padding-left: ${metrics.PADDING_SCREEN}px;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  border-bottom-width: 2px;
  border-bottom-color: #b4b4b4;
`;

export const Img = styled.Image`
  border-radius: 5px;
  border: 2px #000;
  height: ${metrics.PADDING_SCREEN * 2.8}px;
  width: ${metrics.PADDING_SCREEN * 2.8}px;
  border-radius: ${metrics.PADDING_SCREEN * 1.5}px;
  margin-right: ${metrics.PADDING_SCREEN * 0.5}px;
`;

interface TextProps {
  logged?: boolean;
}

export const Text = styled.Text<TextProps>`
  color: #000;
  font-size: ${fonts.MEDIUM}px;
  font-family: ${fonts.REGULAR};
  color: ${({ logged }) =>
    logged ? `${colors.secondary}` : `${colors.shadow}`};
`;
