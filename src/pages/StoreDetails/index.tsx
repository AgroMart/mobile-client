import React from 'react';
import { SectionList } from 'react-native';

import {
  Container,
  Header,
  StoreBanner,
  HeaderContent,
  Title,
  StoreRA,
  SubTitle,
  Separator,
  Content,
} from './styles';

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

const StoreDetails: React.FC = () => {
  return (
    <Container>
      <Header>
        <StoreBanner
          source={{
            uri:
              'https://comps.canstockphoto.com.br/fazenda-alface-filas-banco-de-fotos_csp5956244.jpg',
          }}
        />
        <HeaderContent>
          <Title>Fazenda do alface roxo</Title>
          <StoreRA>Brazlandia</StoreRA>

          <Separator />

          <Title>Descrição:</Title>
          <SubTitle>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </SubTitle>

          <Separator />
        </HeaderContent>
      </Header>

      <Content>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <SubTitle>{item}</SubTitle>}
          renderSectionHeader={({ section: { title } }) => (
            <Title>{title}</Title>
          )}
        />
      </Content>
    </Container>
  );
};

export default StoreDetails;
