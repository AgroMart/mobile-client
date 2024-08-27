import React, { useCallback, useRef, useState } from 'react';
import { TextInput, Alert } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

import { useAuth } from '../../hooks/AuthProvider';

import LogoAgromart from '../../assets/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import BackHeader from '../../components/BackHeader';

import {
  Container,
  Logo,
  AnimationCircule,
  AppName,
  BackLoginButton,
  BackLoginButtonText,
} from './styles';

const SignUp: React.FC = () => {
  const emailRef = useRef<TextInput | any>();
  const passwordRef = useRef<TextInput | any>();
  const confirmPasswordRef = useRef<TextInput | any>();
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const { signUp } = useAuth();

  const handleSubmit = useCallback(
    async (data: { name: string; email: string; password: string; }) => {
      setLoading(true);

      try {
        const body = {
          username: data.name,
          email: data.email,
          password: data.password,
        };
        await signUp(body);
        navigation.navigate('Home');
      } catch (error) {
        Alert.alert('Erro ao cadastrar usuario');
      } finally {
        setLoading(false);
      }
    },
    [navigation, signUp],
  );

  const SCHEMA = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().required(),
    confirmPassword: Yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    enableReinitialize: true,
    validationSchema: SCHEMA,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <BackHeader />
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <Container>
          <Logo source={LogoAgromart} />
          <AppName>AgroMart</AppName>
          <Input
            placeholder="Name"
            autoCorrect={false}
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={formik.values.name}
            onChangeText={formik.handleChange('name')}
            icon="account"
            error={formik.touched.name && !!formik.errors.name}
          />
          <Input
            placeholder="E-mail"
            ref={emailRef}
            autoCorrect={false}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={formik.values.email}
            onChangeText={formik.handleChange('email')}
            icon="email"
            error={formik.touched.email && !!formik.errors.email}
          />
          <Input
            placeholder="Senha"
            ref={passwordRef}
            autoCorrect={false}
            returnKeyType="send"
            secureTextEntry
            autoCapitalize="none"
            onSubmitEditing={() => confirmPasswordRef.current.focus()}
            value={formik.values.password}
            onChangeText={formik.handleChange('password')}
            icon="lock"
            error={formik.touched.password && !!formik.errors.password}
          />
          <Input
            placeholder="Confirmar Senha"
            ref={confirmPasswordRef}
            autoCorrect={false}
            returnKeyType="send"
            secureTextEntry
            autoCapitalize="none"
            onSubmitEditing={formik.submitForm}
            value={formik.values.confirmPassword}
            onChangeText={formik.handleChange('confirmPassword')}
            icon="lock"
            error={
              formik.touched.confirmPassword && !!formik.errors.confirmPassword
            }
          />
          <Button onPress={formik.submitForm}>
            {loading ? <AnimationCircule /> : 'Cadastrar'}
          </Button>
          <BackLoginButton
            onPress={() => {
              navigation.goBack();
            }}
          >
            <BackLoginButtonText>Voltar para o Login</BackLoginButtonText>
          </BackLoginButton>
        </Container>
      </ScrollView>
    </>
  );
};

export default SignUp;
