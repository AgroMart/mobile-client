import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText, LinearGradientButton } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: React.ReactNode | string;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <LinearGradientButton>
    <Container {...rest}>
      {typeof children === 'string' ? (
        <ButtonText>{children}</ButtonText>
      ) : (
        children
      )}
    </Container>
  </LinearGradientButton>
);

export default Button;
