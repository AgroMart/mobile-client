import React from 'react';

import ProfileItemAccess from '../../components/ProfileItemAccess';
import UserHeader from '../../components/UserHeader';

import { Container } from './styles';

const Profile: React.FC = () => {
  return (
    <Container>
      <UserHeader disabled />
      <ProfileItemAccess
        icon="account"
        title="Meus dados"
        subtitle="Alterar meus dados de perfil"
        onPress={() => console.log('dados')}
      />
      <ProfileItemAccess
        icon="map-marker"
        title="Meus endereços"
        subtitle="Meus endereços de entrega"
        onPress={() => console.log('dados')}
      />
      <ProfileItemAccess
        icon="logout"
        title="Sair"
        subtitle="Fazer logout do app"
        onPress={() => console.log('dados')}
      />
    </Container>
  );
};

export default Profile;
