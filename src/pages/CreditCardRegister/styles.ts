import styled from 'styled-components/native';
import { colors } from '../../styles';

export const Container = styled.View`
  flex: 1;
  margin-horizontal: 20px;
`;

export const ViewSpacer = styled.View`
  margin-bottom: 20px;
`;

export const AnimationCircule = styled.ActivityIndicator.attrs({
  size: 'small',
  color: `${colors.secondary}`,
})`
  align-self: center;
`;
