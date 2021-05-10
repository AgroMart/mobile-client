import styled from 'styled-components/native';

import { metrics, fonts, colors } from '../../styles';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: ${metrics.PADDING_SCREEN * 1.5}px;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: ${metrics.PADDING_SCREEN * 6}px;
  height: ${metrics.PADDING_SCREEN * 7}px;
  margin-bottom: ${metrics.PADDING_SCREEN * 0.7}px;
`;

export const AppName = styled.Text`
  font-size: ${fonts.EXTRA_BIG * 1.5}px;
  margin-bottom: ${metrics.PADDING_SCREEN * 2}px;
  font-family: ${fonts.REGULAR};
`;

export const AnimationCircule = styled.ActivityIndicator.attrs({
  size: 'small',
  color: `${colors.secondary}`,
})`
  align-self: center;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  padding: 25px 0;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CreateAccountButtonText = styled.Text`
  color: ${colors.secondary};
  font-size: 18px;
  font-family: ${fonts.REGULAR};
  margin-left: 8px;
`;
