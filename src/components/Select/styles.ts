import { StyleSheet } from 'react-native';

import styled from 'styled-components/native';
import { fonts, colors } from '../../styles';

export const Container = styled.View`
  border-radius: 10px;
  width: 100%;
  background-color: ${colors.white};
  padding: 0px 17px;
  border: 1px solid ${colors.lightGray};
  margin-top: 10px;
`;

export const LabelText = styled.Text`
  color: ${colors.shadow};
  font-family: MontserratBold;
  font-size: ${fonts.EXTRA_SMALL}px;
  margin: 12px 5px;
  text-align: left;
`;

export default StyleSheet.create({
  inputAndroid: {
    backgroundColor: colors.white,
    fontSize: fonts.EXTRA_SMALL,
    color: colors.shadow,
    paddingVertical: 10,
    width: '100%',
  },
  inputIOS: {
    backgroundColor: colors.white,
    fontSize: fonts.EXTRA_SMALL,
    color: colors.shadow,
    width: '100%',
    paddingVertical: 10,
  },
  iconContainer: {
    top: 12,
  },
  placeholder: {
    color: colors.gray,
  },
});
