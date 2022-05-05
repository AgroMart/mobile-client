import React, { useEffect, useState } from 'react';
import { ScrollView, Alert } from 'react-native';
// import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { useAuth } from '../../hooks/AuthProvider';
import NotificationCard from '../../components/NotificationCard';
import BackHeader from '../../components/BackHeader';
import { Container, NotificationsContainer, NoNotificationText, Spacing } from './styles';

import api from '../../services/api';

interface NotificationProps {
  title: string;
  body_text: string;
}

const Notifications: React.FC = () => {
  const { user } = useAuth();

  const [notifications, setNotifications] = useState([] as NotificationProps[]);

  const getData = async () => {
    try {
      const response = await api.get('notificacoes');
      const notifications: NotificationProps[] = await response.data;

      if(notifications.length > 0) setNotifications(notifications)
    } catch(err){

      Alert.alert('Ops', 'Não foi possivel carregar suas notificações');

    }
  };

  useEffect(() => {
    getData()
  }, []);

  // useFocusEffect();

  return (
    <Container>
      <BackHeader text="Notificações" />
      <Spacing />
      <ScrollView>
        <NotificationsContainer>
          {notifications.length > 0 ? (
            notifications.map((notification, index) => (
              <NotificationCard
                key={index}
                title={notification.title}
                text={notification.body_text}
              />
            ))
          ):(
            <NoNotificationText>Não há notificações para serem exibidas!</NoNotificationText>
          )}
        </NotificationsContainer>
      </ScrollView>
    </Container>
  );
};

export default Notifications;
