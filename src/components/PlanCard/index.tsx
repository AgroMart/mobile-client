import React, { useState, useCallback } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

import SwitchButton from '../SwitchButton';
import RadioButton from '../RadioButton';

import {
  Card,
  Image,
  InfoTitle,
  Info,
  InfoView,
  InfoContainer,
} from './styles';

interface StoreCardProps {
  store: string;
  contact: string;
  acquisitionDate: string;
  avaliableBasket: string;
  recievedBasket: string;
  image: string;
}

const PlanCard: React.FC<StoreCardProps> = ({
  image,
  store,
  contact,
  acquisitionDate,
  avaliableBasket,
  recievedBasket,
}) => {
  const [switchValue, setSwitchValue] = useState(false);
  const [radioValue, setRadioValue] = useState(false);

  const changeRadioValue = useCallback(() => {
    setRadioValue(state => !state);
  }, []);

  return (
    <Card>
      <Image
        source={{
          uri: image,
        }}
      />
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
          <Info>{acquisitionDate}</Info>
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
          <SwitchButton
            value={switchValue}
            enable={() => {
              setSwitchValue(state => !state);
            }}
          />
        </InfoView>
        <TouchableOpacity onPress={changeRadioValue} disabled={!radioValue}>
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
        </TouchableOpacity>
      </InfoContainer>
    </Card>
  );
};

export default PlanCard;
