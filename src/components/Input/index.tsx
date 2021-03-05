import React from 'react';
import { TextInputProps } from 'react-native';
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

const Input: React.FC<InputProps> = ({
  placeholder,
  label,
  type = 'default',
  icon,
  error = false,
  ...rest
}) => {
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

export default Input;
