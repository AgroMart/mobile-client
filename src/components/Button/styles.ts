import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { metrics, fonts, colors } from '../../styles';

export const LinearGradientButton = styled(LinearGradient).attrs({
  colors: [`${colors.secondary}`, `${colors.primary}`],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
})`
  height: ${metrics.PADDING_SCREEN * 2.5}px;
  width: 100%;
  border-radius: 10px;
  margin-top: ${metrics.PADDING_SCREEN}px;
`;

export const Container = styled(RectButton)`
  height: 100%;
  width: 100%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
  font-size: ${fonts.EXTRA_MEDIUM}px;
  font-weight: bold;
`;
