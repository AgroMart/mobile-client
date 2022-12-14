import apiDicionario from '../../services/api-dicionario';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import LogoAgromart from '../../assets/logo.png';
import * as Yup from 'yup';

import DropdownComponent from '../../components/DropdownComponent';
import BackHeader from '../../components/BackHeader';
import Input from '../../components/Input';
import { Logo, AppName, Container } from '../SignIn/styles';
import { useFormik } from 'formik';
import { Alert } from 'react-native';
import Button from '../../components/Button';
import { ButtonText, Text, Row } from './styles';
import { parseISO } from 'date-fns';
import axios from 'axios';
type CSAObj = {
  urlBase: string;
  nomeCSA: string;
  responsavelCSA: string;
  emailCSA: string;
};
const SelectCSA: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [chosenCsa, setChosenCsa] = useState<CSAObj | null>(null);

  const SCHEMA = Yup.object().shape({
    CsaCode: Yup.string().required(),
  });

  const handleSubmit = useCallback(async data => {
    setLoading(true);

    try {
      console.log('logante');
      const resp = await apiDicionario.get(`csa/${parseInt(data.CsaCode)}`);
      console.log(resp.data);
      if (resp.data) {
        setChosenCsa(resp.data);
      }
    } catch (error) {
      Alert.alert('CSA não encontrada!');
      console.log(JSON.stringify(error));
    } finally {
      setLoading(false);
    }
  }, []);
 const navigation = useNavigation();
 const setAssyncCSA =()=>{
   
  navigation.navigate('SignIn');
 }
  const formik = useFormik({
    initialValues: {
      CsaCode: '',
    },
    enableReinitialize: true,
    validationSchema: SCHEMA,
    onSubmit: handleSubmit,
  });

  const [rows, setRows] = useState([]);

  return (
    <>
      <BackHeader />
      <Container
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {chosenCsa ? (
          <Container>
            <Text>CSA escolhida:</Text>
            <AppName>{chosenCsa.nomeCSA}</AppName>
            <Text>Responsável</Text>
            <AppName>{chosenCsa.responsavelCSA}</AppName>
            <Button onPress={()=>{setAssyncCSA()}} underlayColor="red">
              <ButtonText>Utilizar esta CSA</ButtonText>
            </Button>
            <Button onPress={() => setChosenCsa(null)}>
              <ButtonText>Procurar outra CSA</ButtonText>
            </Button>
          </Container>
        ) : (
          <Container>
            <Logo source={LogoAgromart} />
            <AppName>AgroMart</AppName>
            <Input
              placeholder="Código CSA"
              keyboardType="numeric"
              autoCorrect={false}
              value={formik.values.CsaCode}
              returnKeyType="send"
              onSubmitEditing={formik.submitForm}
              onChangeText={formik.handleChange('CsaCode')}
              style={{ fontSize: 30, textAlign: 'right' }}
              error={formik.touched.CsaCode && !!formik.errors.CsaCode}
            />
            <Button
              style={{ width: '100%', minWidth: '100%' }}
              onPress={formik.submitForm}
            >
              <ButtonText>Procurar CSA</ButtonText>
            </Button>
          </Container>
        )}
      </Container>
    </>
  );
};

export default SelectCSA;
