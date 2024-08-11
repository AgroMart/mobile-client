import React, { useCallback, useEffect, useRef, useState } from 'react';
import { TextInput, Alert } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

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
  CSAChosen,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

type CSAObj = {
  urlBase: string;
  nomeCSA: string;
  responsavelCSA: string;
  emailCSA: string;
};
const SignIn: React.FC = () => {
  const passwordRef = useRef<TextInput | any>();
  const navigation = useNavigation();

  const [csa, setcsa] = useState<CSAObj | null>(null);
  const [urlcsa, seturl] = useState<string | null>('');

  const getCSA = async () => {
    const url = await AsyncStorage.getItem('@csaChosen');
    const urls = await AsyncStorage.getItem('@BaseUrlChosen');
    seturl(urls);
    if (url) {
      const jsonparsed = JSON.parse(url ? url : '');
      setcsa(jsonparsed as unknown as CSAObj);
    } else {
      navigation.navigate('SelectCSA');
    }
  };
  useEffect(() => {
    getCSA();
  }, []);
  const [loading, setLoading] = useState(false);

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async data => {
      setLoading(true);

      try {
        await signIn({ username: data.email, password: data.password });
        navigation.navigate('Home');
      } catch (error) {
        Alert.alert('Erro ao fazer login');
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
    [navigation, signIn],
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
    <>
      <BackHeader />
      <Container>
        <Logo source={LogoAgromart} />
        <AppName>AgroMart</AppName>
        <CSAChosen>{`utilizando CSA: "${csa?.nomeCSA}"`}</CSAChosen>
        <CSAChosen>{`utilizando CSA: "${urlcsa}"`}</CSAChosen>
        <Input
          placeholder="E-mail"
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
    </>
  );
};

export default SignIn;
