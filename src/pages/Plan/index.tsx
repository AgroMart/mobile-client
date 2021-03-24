import React from 'react';

import BackHeader from '../../components/BackHeader';
import PlanCard from '../../components/PlanCard';

import { Container, PlanContainer } from './styles';

const planMock = {
  store: 'Agrostore',
  contact: '(61) 98143-7679',
  acquisitionDate: '13/01/2021',
  avaliableBasket: '2',
  recievedBasket: '12',
  image:
    'https://comps.canstockphoto.com.br/fazenda-alface-filas-banco-de-fotos_csp5956244.jpg',
};

const Plan: React.FC = () => {
  return (
    <Container>
      <BackHeader text="Meus Planos" />
      <PlanContainer>
        <PlanCard {...planMock} />
      </PlanContainer>
    </Container>
  );
};

export default Plan;
