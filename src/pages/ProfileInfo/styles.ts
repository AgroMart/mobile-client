import styled from 'styled-components/native';
import { colors } from '../../styles';

export const Container = styled.View`
  flex: 1;
`;

export const Img = styled.Image`
  align-self: center;
  border: solid 2px ${colors.shadow};
  height: 150px;
  width: 150px;
  border-radius: 75px;
  margin: 40px 0;
`;

export const Form = styled.View`
  align-self: center;
  width: 90%;
`;
