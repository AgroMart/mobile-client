import styled from 'styled-components/native';

import { colors } from '../../styles';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-width: 1px;
  border-radius: 10px;
  border-color: ${colors.gray};
  height: 30px;
  width: 80px;
`;

export const RemoveItemButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 40px;
`;

export const AddItemButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 40px;
`;

export const QuantityItems = styled.TextInput`
  text-align: center;
  color: ${colors.shadow};
`;
