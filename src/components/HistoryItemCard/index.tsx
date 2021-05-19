import React, { useCallback, useState } from 'react';
import { format } from 'date-fns';

import TextButton from '../TextButton';
import ExtractModal from '../ExtractModal';

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
import { priceFormat } from '../../utils';

export type HistoryCardProps = {
  seller: string;
  date: string;
  value: number;
  extract: object;
  onPress(): void;
};

const HistoryItemCard: React.FC<HistoryCardProps> = ({
  seller,
  date,
  value,
  extract,
  onPress,
}) => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const handleModal = useCallback(() => {
    setIsVisibleModal(!isVisibleModal);
  }, [isVisibleModal]);

  return (
    <Container onPress={handleModal}>
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
            <GreenInfo>{value.toLocaleString('pt-BR', priceFormat)}</GreenInfo>
          </InfoView>
        </HistoryInfo>
        <TextButtonView>
          <TextButton onPress={handleModal}>Ver Detalhes</TextButton>
        </TextButtonView>
      </Content>
      <ExtractModal
        extract={extract}
        handleModal={handleModal}
        isVisibleModal={isVisibleModal}
      />
    </Container>
  );
};

export default HistoryItemCard;
