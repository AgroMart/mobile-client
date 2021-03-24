import styled from 'styled-components/native';

import { colors, fonts } from '../../styles';

export const Container = styled.TouchableOpacity``;

export const Content = styled.View`
  flex-direction: row;
  padding: 28px 20px;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.border};
  background: ${colors.white};
`;

export const TextContainer = styled.View`
  margin-left: 20px;
`;

export const Title = styled.Text`
  font-family: ${fonts.SEMIBOLD};
  font-size: ${fonts.MEDIUM}px;
`;

export const Subtitle = styled.Text`
  font-family: ${fonts.LIGHT};
  font-size: ${fonts.SMALL}px;
  color: ${colors.gray};
`;

export const ArrowContainer = styled.View`
  flex: 1;
  align-items: flex-end;
`;
