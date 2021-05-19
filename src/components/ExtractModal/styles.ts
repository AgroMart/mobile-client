import RNModal from 'react-native-modal';

import styled from 'styled-components/native';
import { colors, fonts } from '../../styles';

export const Modal = styled(RNModal)`
  justify-content: center;
  align-items: center;
  margin: 0;
`;

export const ContainerClose = styled.View`
  align-self: stretch;
  align-items: flex-end;
  margin-right: 20px;
  margin-top: 10px;
`;

export const ButtonClose = styled.TouchableOpacity``;

export const Container = styled.View`
  align-self: stretch;
  background-color: white;
  border-radius: 5px;
  padding: 30px 20px;
  margin: 5%;
  max-height: 85%;
  align-items: center;
`;

export const InfoText = styled.Text`
  font-size: ${fonts.MEDIUM}px;
  font-family: ${fonts.REGULAR};
  flex: 1;
`;

export const InfoView = styled.View`
  flex-direction: row;
`;

export const InfoTitle = styled.Text`
  font-size: ${fonts.MEDIUM}px;
  font-family: ${fonts.BOLD};
`;

export const GreenTitle = styled(InfoTitle)`
  color: ${colors.secondary};
`;

export const GreenInfo = styled(InfoText)`
  color: ${colors.secondary};
`;
