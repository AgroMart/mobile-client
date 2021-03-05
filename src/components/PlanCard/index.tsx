import React from "react";
import { Card, Image, InfoTitle, Info, InfoView} from "./styles";
import SwitchButton from '../SwitchButton';
import RadioButton from '../RadioButton';

interface StoreCardProps {
  loja: string;
  contato: string;
  dataAquisicao: string;
  cestasDisponiveis: string;
  cestasRecebidas: string;
  imagem: string;
}

const PlanCard: React.FC<StoreCardProps> = ({
  imagem,
  loja,
  contato,
  dataAquisicao,
  cestasDisponiveis,
  cestasRecebidas}) => {
  return (
      <Card>
        <Image
        source={{
          uri: imagem,
        }}/>
        <InfoView>
            <InfoTitle>Loja: </InfoTitle>
            <Info>{loja}</Info>
        </InfoView>
        <InfoView>
            <InfoTitle>Contato: </InfoTitle>
            <Info>{contato}</Info>
        </InfoView>
        <InfoView>
            <InfoTitle>Data de aquisição: </InfoTitle>
            <Info>{dataAquisicao}</Info>
        </InfoView>
        <InfoView>
            <InfoTitle>Cesta(s) disponíveis: </InfoTitle>
            <Info>{cestasDisponiveis}</Info>
        </InfoView>
        <InfoView>
            <InfoTitle>Cesta(s) recebidas: </InfoTitle>
            <Info>{cestasRecebidas}</Info>
        </InfoView>
        <InfoView>
            <InfoTitle>Pular cesta da semana </InfoTitle>
            <SwitchButton value={false} enable={()=>{}}/>
        </InfoView>
        <InfoView>
            <InfoTitle>Receber cesta  </InfoTitle>
            <RadioButton value={false} enable={()=>{}}/>
        </InfoView>
        <InfoView>
            <InfoTitle>Buscar  </InfoTitle>
            <RadioButton value={false} enable={()=>{}}/>
        </InfoView>
      </Card>
  );
}

export default PlanCard;
