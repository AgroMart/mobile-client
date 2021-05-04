import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { Feather } from '@expo/vector-icons';

import { View } from 'react-native';
import Styles, { Container, LabelText } from './styles';
import { colors } from '../../styles';

interface SelectButtonProps {
  style: any;
  label?: string;
}

const SelectButton: React.FC<SelectButtonProps> = ({
  style,
  label,
  ...rest
}) => {
  return (
    <View style={{ width: '100%' }}>
      {label && <LabelText>{label}</LabelText>}
      <Container style={style}>
        <RNPickerSelect
          style={{ ...Styles }}
          useNativeAndroidPickerStyle={false}
          Icon={() => (
            <Feather name="chevron-down" size={22} color={colors.lightGray} />
          )}
          {...rest}
        />
      </Container>
    </View>
  );
};

export default SelectButton;
