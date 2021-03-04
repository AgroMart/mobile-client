import styled from 'styled-components/native';
import { metrics, fonts } from '../../styles';

type ViewProps = { error: boolean };

export const Container = styled.View<ViewProps>`
  padding: 0 4%;
  border-color: ${props => (props.error ? 'red' : '#c9c9c9')};
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
  color: red;
`;

export const TextLabel = styled.Text`
  font-size: 20px;
  padding: 5px;
`;
