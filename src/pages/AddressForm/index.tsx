import React, { useCallback, useEffect, useRef, useState } from 'react';
import { TextInput, Alert } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

import Input from '../../components/Input';
import Button from '../../components/Button';
import BackHeader from '../../components/BackHeader';
import Select from '../../components/Select';
import neighborhoods from '../../utils/mockCitys';

import api from '../../services/api';
import { useAuth } from '../../hooks/AuthProvider';

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
  const { user, updateAddress } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleSubmit = useCallback(
    async data => {
      try {
        setLoading(true);

        const body = {
          cidade: data.city,
          numero: data.number,
          complemento: data.complement,
          rua: data.street,
          cep: data.cep,
          bairro: data.neighborhood,
          user: user.id,
        };

        let response;

        if (user.endereco) {
          response = await api.put(`/enderecos/${user.endereco.id}`, body);
          Alert.alert('Deu tudo certo :)', 'Endereço editado com sucesso');
        } else {
          response = await api.post('/enderecos', body);
          Alert.alert('Endereço criado com sucesso');
        }

        await updateAddress(response.data);
        navigation.goBack();
      } catch (error) {
        Alert.alert('Erro ao cadastrar usuario');
      }
      setLoading(false);
    },
    [navigation, user, updateAddress],
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
    initialValues: user.endereco
      ? {
          cep: user.endereco.cep,
          city: user.endereco.cidade,
          neighborhood: user.endereco.bairro,
          street: user.endereco.rua,
          number: String(user.endereco.numero),
          complement: user.endereco.complemento,
        }
      : {
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

          <Select
            placeholder={{
              label: 'Bairro',
              value: null,
            }}
            onValueChange={(value: string) =>
              formik.setFieldValue('neighborhood', value)
            }
            value={formik.values.neighborhood}
            items={neighborhoods.map(item => ({
              label: item.city,
              value: item.key,
            }))}
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
