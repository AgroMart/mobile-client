import styled from 'styled-components/native';

import { colors } from '../../styles';

export const ViewDisable = styled.View`
  height: 17px;
  width: 17px;
  border-width: 1px;
  border-color: ${colors.shadow};
  align-items: center;
  border-radius: 9px;
  justify-content: center;
`;

export const ViewEnable = styled.View`
  height: 11px;
  width: 11px;
  border-radius: 6px;
  background: ${colors.primary};
`;
