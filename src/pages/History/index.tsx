/* eslint-disable camelcase */
import React, { useCallback, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';
import { Text, ActivityIndicator, Alert } from 'react-native';
import HistoryItemCard from '../../components/HistoryItemCard';

import { Container, Content, Heading, HistoryContainer } from './styles';
import { useAuth } from '../../hooks/AuthProvider';
import api from '../../services/api';

interface Register {
  id: number;
  valor: number;
  created_at: string;
  loja: {
    nome: string;
  };
}

const Info: React.FC = () => {
  const [history, setHistory] = useState<Register[]>([]);
  const [loading, setLoading] = useState(true);

  const { user } = useAuth();

  const loadHistory = useCallback(() => {
    async function load() {
      setLoading(true);

      try {
        const { data } = await api.get(`extratoes?user=${user.id}`);
        setHistory(data);
      } catch (err) {
        Alert.alert('Ops', 'Não foi possivel carregar seu histórico');
      } finally {
        setLoading(false);
      }
    }

    user && load();
    !user && setLoading(false);
  }, [user]);

  useFocusEffect(loadHistory);

  return (
    <Container>
      <Heading>Histórico</Heading>
      <Content>
        {loading && <ActivityIndicator size="large" />}
        {!user && !loading && (
          <Text>É preciso estar logado para visualizar o histórico!</Text>
        )}
        {user && !loading && (
          <ScrollView style={{ width: '100%' }}>
            <HistoryContainer>
              {history.map(item => (
                <HistoryItemCard
                  key={item.id}
                  date={item.created_at}
                  seller={item.loja.nome}
                  value={item.valor}
                  onPress={() => {}}
                />
              ))}
            </HistoryContainer>
          </ScrollView>
        )}
      </Content>
    </Container>
  );
};

export default Info;
