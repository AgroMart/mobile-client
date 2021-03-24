import styled from 'styled-components/native';

import { colors, fonts } from '../../styles';
import { iPhoneHelper } from '../../utils';
import { RegularText } from '../../components';

export const Container = styled.View`
  flex: 1;
  background: ${colors.white};
`;

export const Header = styled.View`
  width: 100%;
`;

export const StoreBanner = styled.Image`
  width: 100%;
  height: 100px;
`;

export const HeaderContent = styled.View`
  padding: 5%;
  align-items: flex-start;
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${colors.lightGray};
  margin: 5px 0;
`;

export const Title = styled(RegularText)`
  margin-bottom: 5px;
`;

export const SubTitle = styled(RegularText)`
  font-size: ${fonts.SMALL}px;
`;

export const StoreRA = styled(RegularText)`
  color: ${colors.gray};
`;

export const Content = styled.View`
  flex: 1;
  margin-bottom: ${iPhoneHelper.getBottomSpace()}px;
`;

export const BackHeaderContainer = styled.View`
  position: absolute;
  top: 0;
  z-index: 10;
`;
