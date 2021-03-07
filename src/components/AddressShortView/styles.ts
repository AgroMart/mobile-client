import styled from 'styled-components/native';

import { fonts } from '../../styles';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Address = styled.View`
  margin-left: 20px;
`;

export const Text = styled.Text`
  font-size: ${fonts.MEDIUM}px;
  font-family: ${fonts.REGULAR};
`;

export const BoldText = styled.Text`
  font-size: ${fonts.MEDIUM}px;
  font-family: ${fonts.BOLD};
`;
