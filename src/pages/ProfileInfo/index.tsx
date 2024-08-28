import React, { useState } from 'react';

import { Alert } from 'react-native';
import initializeApi from '../../services/api';
import { useAuth } from '../../hooks/AuthProvider';

import DefaultProfile from '../../assets/defaultAvatar.png';
import BackHeader from '../../components/BackHeader';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Img, Form } from './styles';

const ProfileInfo: React.FC = () => {
  const { user, updateUser } = useAuth();

  const [name, setName] = useState(user.username);
  const [email, setEmail] = useState(user.email);

  const handleSave = async () => {
    try {
      const api = await initializeApi();
      const { data } = await api.put(`users/${user.id}`, {
        ...user,
        username: name,
        email,
      });

      await updateUser(data);

      Alert.alert('Tudo certo :)', 'Dados atualizados com sucesso!');
    } catch (err) {
      Alert.alert('Ops :(', 'Não foi possivel atualizar seus dados');
    }
  };

  return (
    <Container>
      <BackHeader text="Meus Dados" />
      <Img source={DefaultProfile} />
      <Form>
        <Input
          label="Nome"
          placeholder="Nome"
          onChangeText={setName}
          value={name}
        />
        <Input
          label="Email"
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
        />
        <Button onPress={() => handleSave()}>Salvar</Button>
      </Form>
    </Container>
  );
};

export default ProfileInfo;
