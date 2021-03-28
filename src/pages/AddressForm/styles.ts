import styled from 'styled-components/native';
import Input from '../../components/Input';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 10px 30px;
  justify-content: center;
`;

export const AnimationCircule = styled.ActivityIndicator.attrs({
  size: 'small',
  color: 'white',
})`
  align-self: center;
`;

export const GroupStreetNumber = styled.View`
  flex-direction: row;
  width: 100%;
`;

export const StreetContainer = styled.View`
  width: 70%;
  margin-right: 10px;
`;

export const NumberContainer = styled.View`
  flex: 1;
`;
