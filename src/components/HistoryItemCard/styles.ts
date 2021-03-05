import styled from 'styled-components/native';
import { colors } from '../../styles';

export const Container = styled.View.attrs({
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
  flex-direction: column;
  justify-content: space-between;
  border-bottom-width: 0px;
  background: ${colors.white};
  border-radius: 4px;
`;

export const TextButtonView = styled.View`
  align-items: center;
`;

export const HistoryInfo = styled.View``;

export const InfoText = styled.Text`
  font-size: 17px;
`;
export const InfoView = styled.View`
  flex-direction: row;
`;

export const InfoTitle = styled.Text`
  font-size: 17px;
  font-weight: bold;
`;

export const GreenText = styled(InfoTitle)`
  color: ${colors.secondary};
`;
