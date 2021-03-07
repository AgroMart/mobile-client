import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import _default from '../../@types/MaterialCommunityIcons';

import { colors } from '../../styles';

import { Container, TextStyled } from './styles';

interface TextButtonProps extends TouchableOpacityProps {
  icon?: typeof _default;
  children?: string;
}

const TextButton: React.FC<TextButtonProps> = ({ icon, children, ...rest }) => {
  return (
    <Container {...rest}>
      {icon ? (
        <MaterialCommunityIcons
          name={icon}
          size={24}
          color={`${colors.primary}`}
        />
      ) : null}
      <TextStyled>{children}</TextStyled>
    </Container>
  );
};

export default TextButton;
