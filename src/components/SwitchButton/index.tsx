import React, { useState } from "react";
import { View, Switch } from "react-native";

const SwitchButton: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View >
      <Switch
        trackColor={{ false: "#BFC6C3", true: "#00AA95" }}
        thumbColor={isEnabled ? "#00AA95" : "#00AA95"}
        ios_backgroundColor="#BFC6C3"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

export default SwitchButton;
