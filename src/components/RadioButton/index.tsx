import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ViewDisable,ViewEnable } from './styles';


const RadioButton: React.FC = () => {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggle = () => setIsEnabled(previousState => !previousState);

  return (
    <TouchableOpacity onPress={toggle}>
      <ViewDisable>
        {isEnabled ? <ViewEnable/>: null}
      </ViewDisable>
    </TouchableOpacity>
  );
}

export default RadioButton;



