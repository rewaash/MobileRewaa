import React from 'react';
import { StyleSheet, Text, View ,Image,TextInput} from 'react-native';
import ES from './ES';
import HomePic from '../assets/HomePic.svg';

const Login = () => {
    return (
      <View style={ES.container}>
      <View >
      <Text style ={ES.login}> Login</Text>
  </View>
 
      <View style ={ES.welcom}>
         <TextInput style = {ES.input}  placeholder='Username'></TextInput>
         <TextInput  style = {ES.input} placeholder='Password'></TextInput>
          </View></View>
          );


};


  export default Login;
 