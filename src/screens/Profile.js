import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text} from 'react-native';
import {Container, Boton, Horizontal} from '../assets/styled.js';
import {signOut, signOutFB,Title, Cardpholi} from '../components/index';
import {Store} from '../redux/Store.js';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Profile = () => {
  const navigation = useNavigation();
  return (
    <Container>
        <Title Titulo={'Perfil'} />
        <Cardpholi />
        <Horizontal>
        <Boton Width={'45%'}>
          <Ionicons name={'create-outline'} color={'black'} size={40} />
        </Boton>
          <Boton Width={'45%'}
            onPress={() => {
              console.log(Store.getState().email),
                Store.getState().email == '' ||
                Store.getState().email == undefined
                  ? signOutFB({navigation})
                  : signOut({navigation});
            }}>
            <Text style={{color: 'black'}}>LogOut</Text>
          </Boton>
          </Horizontal>
    </Container>
  );
};
