import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { ViewDisable, ViewEnable } from './styles';

type RadioButtonProps = {
  value: boolean;
  enable?: () => void;
};

const RadioButton: React.FC<RadioButtonProps> = ({ value, enable }) => {
  return (
    <TouchableOpacity onPress={enable}>
      <ViewDisable>{value ? <ViewEnable /> : null}</ViewDisable>
    </TouchableOpacity>
  );
};

export default RadioButton;
