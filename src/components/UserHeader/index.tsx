import React from 'react';
import { useNavigation } from '@react-navigation/native';

import DefaultProfile from '../../assets/defaultAvatar.png';

import DropdownComponent from '../DropdownComponent';

import { Container, Img, Text } from './styles';
import { StackNavigationProp } from '@react-navigation/stack';

interface UserHeaderProps {
  photo?: string;
  name?: string;
  disabled?: boolean;
}

type NavigationProps = {
  SelectCSA: undefined, 
}

const UserHeader: React.FC<UserHeaderProps> = ({ photo, name, disabled }) => {
  const navigation = useNavigation<StackNavigationProp<NavigationProps>>();

  
  return (
    <Container
    style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"space-between"}}
      onPress={() => navigation.navigate('SelectCSA')}
      disabled={disabled}
    >
      <Img source={photo ? { uri: photo } : DefaultProfile} />
      <Text>
        Olá,{' '}
        {name ? (
          <Text logged={!!name}>{name}.</Text>
        ) : (
          'faça login ou cadastro.'
        )}
      </Text>
      {name ? (
          <Text logged={!!name}>{""}.</Text>
        ) : (
          <DropdownComponent logged={name?.length as number>1?true:false}/>
        )}
      
      
    </Container>
  );
};

export default UserHeader;
