import React, { useCallback, useRef, useState } from 'react';
import { TextInput, Alert } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import LogoAgromart from '../../assets/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Logo,
  AnimationCircule,
  AppName,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';

const SignIn: React.FC = () => {
  // const passwordRef = useRef<TextInput | any>();
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleSubmit = useCallback(
    async data => {
      try {
        setLoading(true);
        console.log(data);
        navigation.goBack();
      } catch (error) {
        Alert.alert('Erro ao fazer login');
      }
      setLoading(false);
    },
    [navigation],
  );

  const SCHEMA = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    enableReinitialize: true,
    validationSchema: SCHEMA,
    onSubmit: handleSubmit,
  });

  return (
    <Container>
      <Logo source={LogoAgromart} />
      <AppName>AgroMart</AppName>
      <Input
        placeholder="E-mail"
        autoCorrect={false}
        returnKeyType="next"
        // onSubmitEditing={() => passwordRef.current.focus()}
        value={formik.values.email}
        onChangeText={formik.handleChange('email')}
        icon="email"
        error={formik.touched.email && !!formik.errors.email}
      />

      <Input
        placeholder="Senha"
        // ref={passwordRef}
        autoCorrect={false}
        returnKeyType="send"
        secureTextEntry
        autoCapitalize="none"
        onSubmitEditing={formik.submitForm}
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        icon="lock"
        error={formik.touched.email && !!formik.errors.password}
      />
      <Button onPress={formik.submitForm}>
        {loading ? <AnimationCircule /> : 'Logar'}
      </Button>
      <CreateAccountButton
        onPress={() => {
          navigation.navigate('SignUp');
        }}
      >
        <Feather name="log-in" size={20} color="#00AA95" />
        <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
      </CreateAccountButton>
    </Container>
  );
};

export default SignIn;
