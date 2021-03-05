import React from 'react';

import TextButton from '../TextButton';

import {
  Container,
  HistoryInfo,
  InfoText,
  InfoView,
  InfoTitle,
  TextButtonView,
  GreenText,
} from './styles';

type HistoryCardProps = {
  seller: string;
  date: Date;
  value: number;
  buttonText?: string;
};

const HistoryItemCard: React.FC<HistoryCardProps> = ({
  seller,
  date,
  value,
  buttonText = 'Ver Detalhes',
}) => {
  return (
    <Container>
      <HistoryInfo>
        <InfoView>
          <InfoTitle>Vendedor: </InfoTitle>
          <InfoText>{seller}</InfoText>
        </InfoView>
        <InfoView>
          <InfoTitle>Data da compra: </InfoTitle>
          <InfoText>{`${date}`}</InfoText>
        </InfoView>
        <InfoView>
          <GreenText>Valor : {` R$ ${value}`}</GreenText>
        </InfoView>
      </HistoryInfo>
      <TextButtonView>
        <TextButton>{buttonText}</TextButton>
      </TextButtonView>
    </Container>
  );
};

export default HistoryItemCard;
