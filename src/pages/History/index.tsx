import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';

import HistoryItemCard, {
  HistoryCardProps,
} from '../../components/HistoryItemCard';

import { Container, Heading, HistoryContainer } from './styles';

type History = Omit<HistoryCardProps, 'onPress'>;

const historyMock = [
  {
    seller: 'Vendedor 1',
    date: '14/03/2021',
    value: 120,
  },
  {
    seller: 'Vendedor 2',
    date: '14/03/2021',
    value: 130,
  },
  {
    seller: 'Vendedor 3',
    date: '14/03/2021',
    value: 140,
  },
  {
    seller: 'Vendedor 4',
    date: '14/03/2021',
    value: 150,
  },
  {
    seller: 'Vendedor 5',
    date: '14/03/2021',
    value: 160,
  },
];

const Info: React.FC = () => {
  const [history, setHistory] = useState<History[]>([]);

  useFocusEffect(() => {
    setHistory(historyMock);
  });

  return (
    <Container>
      <Heading>Histórico</Heading>
      <ScrollView>
        <HistoryContainer>
          {history.map((item, idx) => (
            <HistoryItemCard
              key={`${item.seller}-${idx}`}
              date={item.date}
              seller={item.seller}
              value={item.value}
              onPress={() => console.log(item.seller)}
            />
          ))}
        </HistoryContainer>
      </ScrollView>
    </Container>
  );
};

export default Info;
