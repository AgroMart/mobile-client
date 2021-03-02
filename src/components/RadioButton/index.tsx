import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ViewDisable,ViewEnable } from './styles';


const RadioButton = () => {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <TouchableOpacity onPress={toggleSwitch}>
      <ViewDisable>
        {isEnabled ? <ViewEnable/>: null}
      </ViewDisable>
    </TouchableOpacity>
  );
}

export default RadioButton;



