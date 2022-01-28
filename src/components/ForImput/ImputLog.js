import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {InpCon, Input, Image} from './Styled';
import Icon from 'react-native-vector-icons/FontAwesome5';

export function ImputLog(props) {
  return (
    <InpCon>
      <Icon name={props.name} size={30} color={'black'} />
      <Input
        keyboardType={null}
        placeholder={props.placeholderAdj}
        secureTextEntry={props.name === 'lock' ? props.secureTextEntry : false }
        onChangeText={valor => {
          props.value(valor);
        }}
      />
      {props.name === 'lock' ? 
        <TouchableOpacity onPress={props.onPress}>
        <Image source={
          props.secureTextEntry
          ? require('../../assets/img/ver.png')
          : require('../../assets/img/ojo.png')
        }
        />
      </TouchableOpacity> : false
      }
    </InpCon>
  );
}
