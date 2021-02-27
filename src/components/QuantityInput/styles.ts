import { TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-width: 1px;
  border-radius: 10px;
  border-color: #c9c9c9;
  height: 6.5%;
  width: 27%;
`;

export const RemoveItemButton = styled(TouchableOpacity)`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 40px;
`;

export const AddItemButton = styled(TouchableOpacity)`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 40px;
`;

export const QuantityItems = styled(TextInput)`
  text-align: center;
  color: #000;
`;
