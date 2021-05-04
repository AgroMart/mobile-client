import styled from 'styled-components/native';

import RegularText from '../../components/RegularText';
import { fonts, colors } from '../../styles';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Heading = styled(RegularText)`
  align-self: center;
  font-size: ${fonts.BIG}px;
  font-family: ${fonts.SEMIBOLD};
  color: ${colors.secondary};
  margin: 10px 0;
`;

export const HistoryContainer = styled.View`
  width: 90%;
  align-self: center;
`;
