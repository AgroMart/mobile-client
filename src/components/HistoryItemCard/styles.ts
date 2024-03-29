import styled from 'styled-components/native';

import { colors, fonts } from '../../styles';

export const Container = styled.TouchableOpacity`
  flex: 1;
`;

export const Content = styled.View.attrs({
  shadowColor: `${colors.white}`,
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,

  elevation: 3,
})`
  padding: 15px;
  height: 138px;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  border-bottom-width: 0px;
  background: ${colors.white};
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const TextButtonView = styled.View`
  align-items: center;
`;

export const HistoryInfo = styled.View``;

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
