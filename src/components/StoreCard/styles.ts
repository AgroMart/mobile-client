import styled from 'styled-components/native';

import { colors, fonts } from '../../styles';

export const Card = styled.TouchableOpacity.attrs({
  shadowOffset: { height: 0, width: 0 },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,
  elevation: 1,
})`
  width: 100%;
  height: 198px;
  flex-direction: column;
  border-bottom-width: 0px;
  background-color: ${colors.white};
  border-radius: 4px;
  border-width: 0px;
  align-items: center;
  align-self: stretch;
`;

export const Image = styled.Image`
  align-self: stretch;
  height: 70%;
  margin-bottom: 8px;
`;
export const Title = styled.Text`
  color: ${colors.shadow};
  font-size: ${fonts.MEDIUM}px;
  font-family: ${fonts.SEMIBOLD};
  align-self: stretch;
  margin-left: 8px;
`;

export const Location = styled.Text`
  color: ${colors.shadow};
  font-size: ${fonts.SMALL}px;
  font-family: ${fonts.REGULAR};
  align-self: stretch;
  margin-left: 3%;
`;
