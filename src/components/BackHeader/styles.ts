import styled from 'styled-components/native';
import RegularText from '../RegularText';

import { fonts } from '../../styles';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px;
  align-items: center;
`;

export const HeaderText = styled(RegularText)`
  font-size: ${fonts.BIG}px;
  margin-left: 10px;
`;
