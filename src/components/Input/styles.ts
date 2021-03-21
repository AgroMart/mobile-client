import styled from 'styled-components/native';
import { colors, fonts } from '../../styles';

type ViewProps = { error: boolean };

export const Container = styled.View<ViewProps>`
  padding: 0 4%;
  border-color: ${props =>
    props.error ? `${colors.red}` : `${colors.lightGray}`};
  border-width: 1px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const StyledInput = styled.TextInput`
  width: 100%;
  margin-left: 8px;
  height: 48px;
`;

export const TextErrorInput = styled.Text`
  font-family: Helvetica;
  text-align: left;
  padding-left: 5px;
  align-self: stretch;
  color: ${colors.red};
`;

export const TextLabel = styled.Text`
  font-size: ${fonts.MEDIUM}px;
  padding: 5px;
  font-family: ${fonts.REGULAR};
`;
