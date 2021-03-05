import React from 'react';
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
            value={false}
            enable={() => {
              console.log('pular');
            }}
          />
        </InfoView>
        <InfoView>
          <InfoTitle>Receber cesta </InfoTitle>
          <RadioButton
            value
            enable={() => {
              console.log('receber');
            }}
          />
        </InfoView>
        <InfoView>
          <InfoTitle>Buscar </InfoTitle>
          <RadioButton
            value={false}
            enable={() => {
              console.log('buscar');
            }}
          />
        </InfoView>
      </InfoContainer>
    </Card>
  );
};

export default PlanCard;
