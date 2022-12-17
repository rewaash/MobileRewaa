import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StyleSheet, Text, View ,Image,Button,TouchableOpacity} from 'react-native';
import ES from './ES';
import Wel from '../assets/Wel.png';

const Main  = ({navigation}) => {


    return (
      <View style={ES.container}>
  
      <View style ={ES.welcom}>
          <Text style = {ES.title}> Welcom </Text>
          
          </View></View>
          );


};


  export default Main;
 