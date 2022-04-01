import styled from 'styled-components/native';
import { colors, fonts } from '../../styles';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const NotificationsContainer = styled.View`
  flex: 1;
  width: 90%;
  align-self: center;
`;

export const NoNotificationText = styled.Text`
  font-size: ${fonts.MEDIUM}px;
  color: ${colors.shadow};
  font-family: ${fonts.REGULAR};
  margin-top: 30px;
`;

export const Spacing = styled.View`
margin-top: 10px;
`;
