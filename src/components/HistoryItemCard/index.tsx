import React from 'react';
import { format } from 'date-fns';

import TextButton from '../TextButton';

import {
  Container,
  Content,
  HistoryInfo,
  InfoText,
  InfoView,
  InfoTitle,
  TextButtonView,
  GreenTitle,
  GreenInfo,
} from './styles';

export type HistoryCardProps = {
  seller: string;
  date: string;
  value: number;
  onPress(): void;
};

const HistoryItemCard: React.FC<HistoryCardProps> = ({
  seller,
  date,
  value,
  onPress,
}) => {
  return (
    <Container onPress={onPress}>
      <Content>
        <HistoryInfo>
          <InfoView>
            <InfoTitle>Vendedor: </InfoTitle>
            <InfoText numberOfLines={1}>{seller}</InfoText>
          </InfoView>
          <InfoView>
            <InfoTitle>Data da compra: </InfoTitle>
            <InfoText numberOfLines={1}>
              {format(new Date(date), 'dd/MM/yyyy')}
            </InfoText>
          </InfoView>
          <InfoView>
            <GreenTitle>Valor: </GreenTitle>
            <GreenInfo>{` R$ ${value}`}</GreenInfo>
          </InfoView>
        </HistoryInfo>
        <TextButtonView>
          <TextButton>Ver Detalhes</TextButton>
        </TextButtonView>
      </Content>
    </Container>
  );
};

export default HistoryItemCard;
