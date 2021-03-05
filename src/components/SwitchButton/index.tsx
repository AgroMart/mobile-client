import React from 'react';
import { View, Switch } from 'react-native';

import { colors } from '../../styles';

type SwitchButtonProps = {
  value: boolean;
  enable: () => void;
};

const SwitchButton: React.FC<SwitchButtonProps> = ({ value, enable }) => {
  return (
    <View>
      <Switch
        trackColor={{ false: `${colors.gray}`, true: `${colors.secondary}` }}
        thumbColor={`${colors.secondary}`}
        ios_backgroundColor={`${colors.gray}`}
        onValueChange={enable}
        value={value}
      />
    </View>
  );
};

export default SwitchButton;
