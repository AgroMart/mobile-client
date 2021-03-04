import React from 'react';
import { TouchableOpacityProps, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import _default from '../../@types/MaterialCommunityIcons';
import { Container } from '../Button/styles';
import { TextStyled } from './styles';

interface TextButtonProps extends TouchableOpacityProps {
  icon?: typeof _default;
  children?: string;
}

const TextButton: React.FC<TextButtonProps> = ({ icon, children, ...rest }) => {
  return (
    <Container>
      <TouchableOpacity {...rest}>
        {icon ? (
          <MaterialCommunityIcons name={icon} size={24} color="#00CC76" />
        ) : null}
        <TextStyled>{children}</TextStyled>
      </TouchableOpacity>
    </Container>
  );
};

export default TextButton;
