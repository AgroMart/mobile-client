/* eslint-disable camelcase */
import moment from 'moment';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TextButton from '../TextButton';
import {
  Container,
  HistoryInfo,
  SellerName,
  InfoView,
  InfoTitle,
  ProductData,
  TextButtonView,
} from './styles';

type HistoryCardProps = {
  vendedor?: string;
  dataCompra?: Date;
  valor?: number;
  children: string;
};

const HistoryItemCard: React.FC<HistoryCardProps> = ({
  vendedor = 'Moacir',
  dataCompra = moment(new Date()).format('DD/MM/YYYY'),
  valor = '1.80',
  children,
}) => {
  return (
    <Container>
      <HistoryInfo>
        <InfoView>
          <InfoTitle>Vendedor: </InfoTitle>
          <SellerName>{vendedor}</SellerName>
        </InfoView>
        <InfoView>
          <InfoTitle>Data da compra: </InfoTitle>
          <ProductData>{`${dataCompra}`}</ProductData>
        </InfoView>
        <InfoView>
          <InfoTitle>Valor :</InfoTitle>
          <ProductData>{` R$ ${valor}`}</ProductData>
        </InfoView>
      </HistoryInfo>
      <TextButtonView>
        <TextButton>{children}</TextButton>
      </TextButtonView>
    </Container>
  );
};

export default HistoryItemCard;
