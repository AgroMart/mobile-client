import React, { forwardRef } from 'react';
import { TextInputProps, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Container, StyledInput, TextLabel } from './styles';
import _default from '../../@types/MaterialCommunityIcons';

import { colors } from '../../styles';

interface InputProps extends TextInputProps {
  icon?: typeof _default;
  placeholder: string;
  error?: boolean;
  label?: string;
  type?: 'password' | 'email' | 'numeric' | 'default';
}

const Input: React.ForwardRefRenderFunction<TextInput, InputProps> = (
  { placeholder, label, type = 'default', icon, error = false, ...rest },
  ref,
) => {
  return (
    <>
      {label && <TextLabel>{label}</TextLabel>}
      <Container error={error}>
        {icon ? (
          <MaterialCommunityIcons
            name={icon}
            size={20}
            color={`${colors.gray}`}
          />
        ) : null}
        <StyledInput
          placeholderTextColor={`${colors.gray}`}
          placeholder={placeholder}
          secureTextEntry={type === 'password'}
          ref={ref}
          keyboardType={
            type === 'email'
              ? 'email-address'
              : type === 'numeric'
              ? 'numeric'
              : 'default'
          }
          {...rest}
        />
      </Container>
    </>
  );
};

export default forwardRef(Input);
