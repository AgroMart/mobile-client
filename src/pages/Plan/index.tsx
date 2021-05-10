/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import api from '../../services/api';
import { useAuth } from '../../hooks/AuthProvider';
import { useStores } from '../../hooks/StoresProvider';

import BackHeader from '../../components/BackHeader';
import PlanCard from '../../components/PlanCard';

import { colors } from '../../styles';

import { Container, Content, PlanContainer } from './styles';

// const planMock = {
//   store: 'Agrostore',
//   contact: '(61) 98143-7679',
//   acquisitionDate: '13/01/2021',
//   avaliableBasket: '2',
//   recievedBasket: '12',
//   image:
//     'https://comps.canstockphoto.com.br/fazenda-alface-filas-banco-de-fotos_csp5956244.jpg',
// };

type PlanInfo = {
  id: number;
  cestas_disponiveis: number;
  pular_cesta: boolean;
  plano: {
    quantidade_de_cestas: number;
    imagem: {
      url: string;
    };
    loja: number;
  };
  created_at: string;
};

const Plan: React.FC = () => {
  const [plans, setPlans] = useState<PlanInfo[]>([]);
  const [loading, setLoading] = useState(true);

  const { user } = useAuth();
  const { stores } = useStores();

  useEffect(() => {
    async function load() {
      try {
        const { data } = await api.get(`/assinantes?usuario=${user.id}`);

        setPlans(data);
      } catch (err) {
        Alert.alert('Ops', 'Não foi possivel carregar seus planos');
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [user.id]);

  return (
    <Container>
      <BackHeader text="Meus Planos" />

      <ScrollView>
        <Content>
          {loading && (
            <ActivityIndicator size="large" color={`${colors.secondary}`} />
          )}
          {!loading && (
            <PlanContainer>
              {plans.map(item => (
                <PlanCard
                  key={item.id}
                  id={item.id}
                  switchInitialValue={item.pular_cesta}
                  acquisitionDate={item.created_at}
                  avaliableBasket={item.cestas_disponiveis}
                  recievedBasket={
                    item.plano.quantidade_de_cestas - item.cestas_disponiveis
                  }
                  contact={
                    stores.find(store => store.id === item.plano.loja)
                      ?.contato || ''
                  }
                  image={item.plano.imagem.url}
                  store={
                    stores.find(store => store.id === item.plano.loja)?.nome ||
                    ''
                  }
                />
              ))}
            </PlanContainer>
          )}
        </Content>
      </ScrollView>
    </Container>
  );
};

export default Plan;
