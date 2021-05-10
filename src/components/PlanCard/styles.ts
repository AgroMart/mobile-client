import styled from 'styled-components/native';
import { colors, fonts } from '../../styles';

export const Card = styled.View.attrs({
  shadowOffset: { height: 0, width: 0 },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,
  elevation: 3,
})`
  height: 400px;
  max-height: 441px;
  flex-direction: column;
  border-bottom-width: 0px;
  background-color: ${colors.white};
  border-radius: 4px;
  border-width: 0px;
  margin-bottom: 20px;
`;

export const Image = styled.Image`
  height: 150px;
  width: 100%;
`;

export const Info = styled.Text`
  font-size: ${fonts.EXTRA_MEDIUM}px;
  font-family: ${fonts.REGULAR};
`;
export const InfoView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const InfoTitle = styled.Text`
  font-size: ${fonts.EXTRA_MEDIUM}px;
  font-weight: bold;
  font-family: ${fonts.SEMIBOLD};
`;

export const InfoContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 10px 10px 40px 10px;
`;
