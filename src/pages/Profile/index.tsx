import React from 'react';
import { useNavigation } from '@react-navigation/native';

import ProfileItemAccess from '../../components/ProfileItemAccess';
import UserHeader from '../../components/UserHeader';

import { Container } from './styles';

const Profile: React.FC = () => {
  const navigation = useNavigation();

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
        onPress={() => console.log('entrega')}
      />
      <ProfileItemAccess
        icon="basket"
        title="Meus planos"
        subtitle="Planos assinados"
        onPress={() => navigation.navigate('Plan')}
      />
      <ProfileItemAccess
        icon="logout"
        title="Sair"
        subtitle="Fazer logout do app"
        onPress={() => console.log('logout')}
      />
    </Container>
  );
};

export default Profile;
