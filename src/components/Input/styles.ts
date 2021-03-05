import styled from 'styled-components/native';
import { colors, fonts } from '../../styles';

type ViewProps = { error: boolean };

export const Container = styled.View<ViewProps>`
  padding: 0 4%;
  border-color: ${props =>
    props.error ? `${colors.error}` : `${colors.lightGray}`};
  border-width: 1px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
`;

export const StyledInput = styled.TextInput`
  margin-left: 8px;
  height: 48px;
`;

export const TextErrorInput = styled.Text`
  font-family: Helvetica;
  text-align: left;
  padding-left: 5px;
  align-self: stretch;
  color: ${colors.error};
`;

export const TextLabel = styled.Text`
  font-size: ${fonts.MEDIUM}px;
  padding: 5px;
`;
