import React from "react";
import { View, Switch } from "react-native";

type SwitchButtonProps = {
  value: boolean;
  enable: () => void;
};

const SwitchButton: React.FC<SwitchButtonProps> = ({value, enable}) => {
  return (
    <View >
      <Switch
        trackColor={{ false: "#BFC6C3", true: "#00AA95" }}
        thumbColor={value ? "#00AA95" : "#00AA95"}
        ios_backgroundColor="#BFC6C3"
        onValueChange={enable}
        value={value}
      />
    </View>
  );
}

export default SwitchButton;
