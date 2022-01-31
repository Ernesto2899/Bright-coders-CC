import { Text, Button } from 'react-native';
import {Container, Boton} from '../assets/styled.js';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export const Home = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Text>Estoy en Home</Text>
      <Button onPress={() => navigation.navigate('Login')} title='Ir a login'/>
      <Boton>
        <Text style={{color: 'black'}}> Estoy en HOME</Text>
      </Boton>
    
    </Container>
  );
};

/**
 *  
 */