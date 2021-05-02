import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/AuthProvider';

import ProfileItemAccess from '../../components/ProfileItemAccess';
import UserHeader from '../../components/UserHeader';

import { Container } from './styles';

const Profile: React.FC = () => {
  const navigation = useNavigation();

  const { user, signOut } = useAuth();

  return (
    <Container>
      <UserHeader name={user?.username} disabled={!!user} />

      <ProfileItemAccess
        icon="account"
        title="Meus dados"
        subtitle="Alterar meus dados de perfil"
        onPress={() => navigation.navigate('ProfileInfo')}
      />
      <ProfileItemAccess
        icon="map-marker"
        title="Meus endereços"
        subtitle="Meus endereços de entrega"
        onPress={() => navigation.navigate('AddressForm')}
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
        onPress={signOut}
      />
    </Container>
  );
};

export default Profile;
