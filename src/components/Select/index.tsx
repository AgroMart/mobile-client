import React from 'react';
import RNPickerSelect, { PickerSelectProps } from 'react-native-picker-select';
import { Feather } from '@expo/vector-icons';

import { View } from 'react-native';
import Styles, { Container, LabelText } from './styles';
import { colors } from '../../styles';

interface SelectProps extends PickerSelectProps {
  style?: any;
  label?: string;
  placeholder: {
    label: string;
    value: null | string;
  };
}

const Select: React.FC<SelectProps> = ({
  style,
  label,
  placeholder,
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
          placeholder={placeholder}
          {...rest}
        />
      </Container>
    </View>
  );
};

export default Select;
