import React, { useCallback, useRef, useState } from 'react';
import { TextInput, Alert } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

import Input from '../../components/Input';
import Button from '../../components/Button';
import BackHeader from '../../components/BackHeader';

import {
  Container,
  AnimationCircule,
  GroupStreetNumber,
  StreetContainer,
  NumberContainer,
} from './styles';

const AddressForm: React.FC = () => {
  const cityRef = useRef<TextInput | any>();
  const neighborhoodRef = useRef<TextInput | any>();
  const streetRef = useRef<TextInput | any>();
  const numberRef = useRef<TextInput | any>();
  const complementRef = useRef<TextInput | any>();
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleSubmit = useCallback(
    async data => {
      try {
        setLoading(true);

        console.log(data);
        navigation.goBack();
      } catch (error) {
        Alert.alert('Erro ao cadastrar usuario');
      }
      setLoading(false);
    },
    [navigation],
  );

  const SCHEMA = Yup.object().shape({
    cep: Yup.string().required(),
    city: Yup.string().required(),
    neighborhood: Yup.string().required(),
    street: Yup.string().required(),
    number: Yup.string().required(),
    complement: Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      cep: '',
      city: '',
      neighborhood: '',
      street: '',
      number: '',
      complement: '',
    },
    enableReinitialize: true,
    validationSchema: SCHEMA,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <BackHeader text="Endereço de envio" />
      <ScrollView>
        <Container>
          <Input
            placeholder="CEP"
            autoCorrect={false}
            returnKeyType="next"
            onSubmitEditing={() => cityRef.current.focus()}
            value={formik.values.cep}
            onChangeText={formik.handleChange('cep')}
            error={formik.touched.cep && !!formik.errors.cep}
          />
          <Input
            placeholder="Cidade"
            ref={cityRef}
            autoCorrect={false}
            returnKeyType="next"
            onSubmitEditing={() => neighborhoodRef.current.focus()}
            value={formik.values.city}
            onChangeText={formik.handleChange('city')}
            error={formik.touched.city && !!formik.errors.city}
          />
          <Input
            placeholder="Bairro"
            ref={neighborhoodRef}
            autoCorrect={false}
            returnKeyType="next"
            onSubmitEditing={() => streetRef.current.focus()}
            value={formik.values.neighborhood}
            onChangeText={formik.handleChange('neighborhood')}
            error={formik.touched.neighborhood && !!formik.errors.neighborhood}
          />
          <GroupStreetNumber>
            <StreetContainer>
              <Input
                placeholder="Rua/Avenida"
                ref={streetRef}
                autoCorrect={false}
                returnKeyType="next"
                onSubmitEditing={() => numberRef.current.focus()}
                value={formik.values.street}
                onChangeText={formik.handleChange('street')}
                error={formik.touched.street && !!formik.errors.street}
              />
            </StreetContainer>

            <NumberContainer>
              <Input
                placeholder="Número"
                ref={numberRef}
                autoCorrect={false}
                returnKeyType="next"
                onSubmitEditing={() => complementRef.current.focus()}
                value={formik.values.number}
                onChangeText={formik.handleChange('number')}
                error={formik.touched.number && !!formik.errors.number}
              />
            </NumberContainer>
          </GroupStreetNumber>
          <Input
            placeholder="Complemento"
            ref={complementRef}
            autoCorrect={false}
            returnKeyType="next"
            onSubmitEditing={formik.submitForm}
            value={formik.values.complement}
            onChangeText={formik.handleChange('complement')}
            error={formik.touched.complement && !!formik.errors.complement}
          />

          <Button onPress={formik.submitForm}>
            {loading ? <AnimationCircule /> : 'Salvar'}
          </Button>
        </Container>
      </ScrollView>
    </>
  );
};

export default AddressForm;
