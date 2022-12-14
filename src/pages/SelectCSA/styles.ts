import styled from 'styled-components/native';
import { colors, fonts } from '../../styles';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ButtonText = styled.Text`
  font-size: ${fonts.SMALL}px;
  color: ${colors.shadow};
  font-family: ${fonts.SEMIBOLD};
  padding: 5px 20px
`;

export const Text = styled.Text`
  font-size: ${fonts.MEDIUM}px;
  font-family: ${fonts.REGULAR};
`;

export const Row = styled.SafeAreaView`
  flex: 1;
  display: flex;
  flex-direction:row
`;
