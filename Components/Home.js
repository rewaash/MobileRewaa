import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import ES from './ES';
import Wel from '../assets/Wel.png';

const Home = () => {
    return (
      <View style={ES.container}>
   <Image source={Wel} alt="lap"  style={ES.photo}/>
      <View style ={ES.welcom}>
          <Text style = {ES.title}> FrontLine Technology </Text>
          <Text style = {ES.subtitle}> Login</Text>
          </View></View>
          );


};


  export default Home;
 