import React from 'react';

import DefaultProfile from '../../assets/defaultAvatar.png';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Img, Form } from './styles';

const ProfileInfo: React.FC = () => {
  return (
    <Container>
      <Img source={DefaultProfile} />
      <Form>
        <Input label="Nome" placeholder="Nome" />
        <Input label="Email" placeholder="Email" />
        <Button onPress={() => console.log('salvar')}>Salvar</Button>
      </Form>
    </Container>
  );
};

export default ProfileInfo;
