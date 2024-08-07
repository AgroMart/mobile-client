import React, { useState, useCallback } from 'react';
import { ActivityIndicator, Alert, View } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { format } from 'date-fns';

import initializeApi from '../../services/api';

import SwitchButton from '../SwitchButton';
// import RadioButton from '../RadioButton';

import { colors } from '../../styles';

import {
  Card,
  Image,
  InfoTitle,
  Info,
  InfoView,
  InfoContainer,
} from './styles';

interface StoreCardProps {
  id: number;
  store: string;
  contact: string;
  acquisitionDate: string;
  avaliableBasket: number;
  recievedBasket: number;
  image: string;
  switchInitialValue: boolean;
}

const PlanCard: React.FC<StoreCardProps> = ({
  id,
  image,
  store,
  contact,
  acquisitionDate,
  avaliableBasket,
  recievedBasket,
  switchInitialValue,
}) => {
  const [switchValue, setSwitchValue] = useState(switchInitialValue);
  const [loading, setLoading] = useState(false);
  // const [radioValue, setRadioValue] = useState(false);

  // const changeRadioValue = useCallback(() => {
  //   setRadioValue(state => !state);
  // }, []);

  const handleEnable = async () => {
    setSwitchValue(state => !state);
    setLoading(true);

    const api = await initializeApi();
    try {
      await api.put(`assinantes/${id}`, {
        pular_cesta: !switchValue,
      });
    } catch (error) {
      Alert.alert('Ops', 'Não foi possivel atualizar as informações');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      {loading ? (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" color={`${colors.secondary}`} />
        </View>
      ) : (
        <>
          {/* <Image source={{ uri: `${baseURL}${image}` }} /> */}
          <Image source={{ uri: `${image}` }} />
          <InfoContainer>
            <InfoView>
              <InfoTitle>Loja: </InfoTitle>
              <Info>{store}</Info>
            </InfoView>
            <InfoView>
              <InfoTitle>Contato: </InfoTitle>
              <Info>{contact}</Info>
            </InfoView>
            <InfoView>
              <InfoTitle>Data de aquisição: </InfoTitle>
              <Info>{format(new Date(acquisitionDate), 'dd/MM/yyyy')}</Info>
            </InfoView>
            <InfoView>
              <InfoTitle>Cesta(s) disponíveis: </InfoTitle>
              <Info>{avaliableBasket}</Info>
            </InfoView>
            <InfoView>
              <InfoTitle>Cesta(s) recebidas: </InfoTitle>
              <Info>{recievedBasket}</Info>
            </InfoView>
            <InfoView>
              <InfoTitle>Pular cesta da semana </InfoTitle>
              <SwitchButton value={switchValue} enable={() => handleEnable()} />
            </InfoView>
            {/* <TouchableOpacity onPress={changeRadioValue} disabled={!radioValue}>
          <InfoView>
            <InfoTitle>Receber cesta </InfoTitle>
            <RadioButton value={!radioValue} />
          </InfoView>
        </TouchableOpacity>
        <TouchableOpacity onPress={changeRadioValue} disabled={!!radioValue}>
          <InfoView>
            <InfoTitle>Buscar </InfoTitle>
            <RadioButton value={radioValue} />
          </InfoView>
        </TouchableOpacity> */}
          </InfoContainer>
        </>
      )}
    </Card>
  );
};

export default PlanCard;
