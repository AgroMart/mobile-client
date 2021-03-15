import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import _default from '../../@types/MaterialCommunityIcons';

import { colors } from '../../styles';

import {
  Container,
  Content,
  TextContainer,
  Title,
  Subtitle,
  ArrowContainer,
} from './styles';

interface ProfileItemAccessProps {
  icon: typeof _default;
  title: string;
  subtitle: string;
  disabled?: boolean;
  onPress(): void;
}

const ProfileItemAccess: React.FC<ProfileItemAccessProps> = ({
  icon,
  title,
  subtitle,
  disabled,
  onPress,
}) => {
  return (
    <Container onPress={onPress} disabled={disabled}>
      <Content>
        <MaterialCommunityIcons
          name={icon}
          size={30}
          color={`${colors.secondary}`}
        />
        <TextContainer>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </TextContainer>
        <ArrowContainer>
          <MaterialCommunityIcons
            name="chevron-right"
            size={30}
            color={`${colors.secondary}`}
          />
        </ArrowContainer>
      </Content>
    </Container>
  );
};

export default ProfileItemAccess;
