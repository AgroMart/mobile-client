import React from 'react';

import { Container, Card, Title, Text } from './styles';

export interface NotificationCardProps {
  title: string;
  text: string;
}

const NotificationCard: React.FC<NotificationCardProps> = ({ title, text }) => {
  return (
    <Container>
      <Card>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Card>
    </Container>
  );
};

export default NotificationCard;
