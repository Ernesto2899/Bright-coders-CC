import React, {useState} from 'react';
import {Container, Boton, Logo, Texto} from '../assets/styled.js';
import {useNavigation} from '@react-navigation/native';
import {CheckBoxWithLabel, InputLog, createUser} from '../components/index';
import {Textstar} from '../components/FormInput/Styled';
import {Store} from '../redux/Store.js';
import {setEmail, setName, setPassword} from '../redux/Actions.js';

export const Register = () => {
  const navigation = useNavigation();
  const [termsCheckBox, setTermsCheckBox] = useState('');
  const [nombre, setNombre] = useState('');
  const [email, setMail] = useState('');
  const [pswrd, setPswrd] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <Container>
      <Logo />

      <InputLog
        placeholderAdj={'Nombre'}
        name={'user-alt'}
        value={setNombre}
        onChangeText={valor => Store.dispatch(setName(valor))}
      />
      <InputLog
        placeholderAdj={'Correo Electrónico'}
        name={'at'}
        value={setMail}
        onChangeText={valor => Store.dispatch(setEmail(valor))}
      />
      <InputLog
        placeholderAdj={'Contraseña'}
        secureTextEntry={hidePassword}
        name={'lock'}
        value={setPswrd}
        onPress={() => setHidePassword(!hidePassword)}
        onChangeText={value => {
          Store.dispatch(setPassword(value));
        }}
      />

      <CheckBoxWithLabel value={termsCheckBox} changeValue={setTermsCheckBox} />

      <Boton
        onPress={() => {
          createUser({navigation});
        }}>
        <Texto style={{color: 'black'}}>Registarse</Texto>
      </Boton>

      <Textstar>
        TENGO UNA CUENTA{' '}
        <Textstar
          Color={'#FFF064'}
          style={{textDecorationLine: 'underline'}}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          {' '}
          INICIAR SESION
        </Textstar>
      </Textstar>
    </Container>
  );
};
