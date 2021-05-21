import styled, { css } from 'styled-components/native';

import { colors, fonts } from '../../styles';
import { iPhoneHelper } from '../../utils';
import { RegularText } from '../../components';

interface MenuItemProps {
  selected: boolean;
}

export const Container = styled.View`
  flex: 1;
  background: ${colors.white};
  padding-bottom: 20px;
`;

export const Header = styled.View`
  width: 100%;
`;

export const StoreBanner = styled.Image`
  width: 100%;
  height: 150px;
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
  padding: 0 5%;
`;

export const BackHeaderContainer = styled.View`
  position: absolute;
  top: ${iPhoneHelper.getStatusBarHeight(false)}px;
  z-index: 10;
`;

export const Touchable = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})``;

export const ContainerItem = styled.View<MenuItemProps>`
  ${props =>
    props.selected &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${colors.primary};
    `}
`;

export const MenuItem = styled.Text<MenuItemProps>`
  font-size: ${fonts.MEDIUM}px;
  font-family: Montserrat-SemiBold;
  margin: 0px 15px 15px;
  color: ${props => (props.selected ? colors.primary : '#000')};
`;

export const TitleContainer = styled.View`
  border-top-width: 0.5px;
  border-top-color: #000;
`;

export const TitleMenu = styled.Text`
  font-size: ${fonts.MEDIUM}px;
  font-family: Montserrat-SemiBold;
  margin: 20px 0px;
`;

export const IconView = styled.TouchableOpacity`
  height: 38px;
  width: 38px;
  border-radius: 19px;
  background-color: ${colors.primary};
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`;
