/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import initializeApi from '../../services/api';
import { useAuth } from '../../hooks/AuthProvider';
import { useStores } from '../../hooks/StoresProvider';

import BackHeader from '../../components/BackHeader';
import PlanCard from '../../components/PlanCard';

import { colors } from '../../styles';

import { Container, Content, PlanContainer } from './styles';

// THIS TYPE IS ALL WRONG, BUT I DON'T HAVE TIME TO FIX IT, THE BACKEND OF THIS PART IS NOT WORKING PROPERLY AS WELL
type PlanInfo = {
  id: number;
  cestas_disponiveis: number;
  pular_cesta: boolean;
  plano: {
    nome: string;
    quantidade_de_cestas: number;
    imagem: {
      url: string;
    };
    loja: number;
  };
  planos:
    | {
        nome: string;
        quantidade_de_cestas: number;
        imagem: {
          url: string;
        };
        loja: number;
      }
    | Array<{
        nome: string;

        quantidade_de_cestas: number;
        imagem: {
          url: string;
        };
        loja: number;
      }>;
  created_at: string;
} | any;

const Plan: React.FC = () => {
  const [plans, setPlans] = useState<PlanInfo[]>([]);
  const [loading, setLoading] = useState(true);

  const { user } = useAuth();
  const { stores } = useStores();

  useEffect(() => {
    async function load() {
      try {
        const api = await initializeApi();
        console.log('user0', user.username);
        let { data } = await api.get(`assinantes`);

        // THIS IS A FILTER IMPLEMENTED IN A VERY POOR WAY, UNFORTUNATELY, THE BACKEND IS NOT SAVING THE USER RELATION PROPERLY IN "ASSINANTES"
        data = data.filter((assinante:any) => assinante?.nome === user.username)

        console.log('planos', data);

        setPlans(data);
      } catch (err) {
        console.log('planos', err);
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
                  key={item?.id}
                  id={item?.id}
                  switchInitialValue={item?.pular_cesta}
                  acquisitionDate={item?.created_at}
                  avaliableBasket={item?.cestas_disponiveis}
                  recievedBasket={
                    (item?.plano?.quantidade_de_cestas ??
                      item?.planos[0]?.quantidade_de_cestas ??
                      item?.planos?.quantidade_de_cestas) -
                    item?.cestas_disponiveis
                  }
                  // contact={
                  //   stores.find(
                  //     store =>
                  //       store.id === item?.planos[0]?.loja ??
                  //       item?.plano?.loja ??
                  //       item?.planos?.loja,
                  //   )?.contato || ''
                  // }
                  image={item?.plano?.imagem?.url}
                  name={
                    item?.plano?.nome ??
                    item?.planos[0]?.nome ??
                    item?.planos?.nome
                  }
                  // store={
                  //   stores.find(store => store.id === item?.plano?.loja)
                  //     ?.nome || ''
                  // }
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
