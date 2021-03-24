import React, { useCallback, useRef, useState } from 'react';
import { TextInput, Alert } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

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

  const handleSubmit = useCallback(
    async data => {
      try {
        setLoading(true);
        const body = {
          name: data.name,
          email: data.email,
          password: data.password,
        };
        console.log(body);
        navigation.goBack();
      } catch (error) {
        Alert.alert('Erro ao cadastrar usuario');
      }
      setLoading(false);
    },
    [navigation],
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
