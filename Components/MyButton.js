import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import ES from './ES';
import HomePic from '../assets/HomePic.svg';

const MyButton = () => {
    return (
      <View style={ES.container}>
   <img src={HomePic} alt="lap"/>
      <View style ={ES.welcom}>
          <Text style = {ES.title}> FrontLine Technology solutoins</Text>
          <Text style = {ES.subtitle}> Get started</Text>
          </View></View>
          );


};


  export default MyButton;
 