/* eslint-disable camelcase */
import React, { useCallback, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';
import { Text, ActivityIndicator, Alert } from 'react-native';

import initializeApi from '../../services/api';
import { useAuth } from '../../hooks/AuthProvider';

import HistoryItemCard from '../../components/HistoryItemCard';

import { colors } from '../../styles';

import { Container, Content, Heading, HistoryContainer } from './styles';

interface Register {
  id: string;
  itens: any;
  valor: number;
  entregue: false;
  tipo_de_entrega: string;
  loja: {
    id: string;
    nome: string;
    descricao: string;
    banner: string;
    tipos_de_entrega: string;
    contato: string;
    cnpj: string;
    usuario: string;
    extratos: [string];
    endereco: string;
    produtos_avulsos: [string];
    planos: [string];
    cestas: [string];
    published_at: string;
    created_by: string;
    updated_by: string;
  };
  user: {
    id: string;
    username: string;
    email: string;
    provider: string;
    password: string;
    resetPasswordToken: string;
    confirmationToken: string;
    confirmed: true;
    blocked: true;
    role: string;
    loja: string;
    extratos: [string];
    endereco: string;
    assinantes: [string];
    created_by: string;
    updated_by: string;
  };
  pagamento_realizado: false;
  created_at: string;
}

const History: React.FC = () => {
  const [history, setHistory] = useState<Register[]>([]);
  const [loading, setLoading] = useState(true);

  const { user } = useAuth();

  const loadHistory = useCallback(() => {
    async function load() {
      setLoading(true);

      try {
        const api = await initializeApi();

        const { data } = await api.get(`extratoes?user=${user.id}`);

        // This is just a terible workaround because the userId filter is not working and I don't have time to fix it
        // whoever implemented it didn't test it
        const filteredData = data.filter((record:any) => record?.user?.id === user.id)
        
        setHistory(filteredData);
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
  console.log('HISTORY', history)
  return (
    <Container>
      <Heading>Histórico</Heading>
      <Content>
        {loading && (
          <ActivityIndicator size="large" color={`${colors.secondary}`} />
        )}
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
                  value={(() => {

                    const itemsArray:Array<any> = Object.values(item.itens);

                    return itemsArray.reduce((accumulator, item) => {
                      return accumulator + (item.valor * item.quantidade);
                    }, 0)
                  })()}
                  extract={item}
                />
              ))}
            </HistoryContainer>
          </ScrollView>
        )}
      </Content>
    </Container>
  );
};

export default History;
