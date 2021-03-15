import React from 'react';

import ProfileItemAccess from '../../components/ProfileItemAccess';
import UserHeader from '../../components/UserHeader';

import { Container } from './styles';

const Profile: React.FC = () => {
  return (
    <Container>
      <UserHeader />
      <ProfileItemAccess
        icon="account"
        title="Meus dados"
        subtitle="Alterar meus dados de perfil"
        onPress={() => console.log('dados')}
      />
    </Container>
  );
};

export default Profile;
