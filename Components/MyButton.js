import React from 'react';
import { StyleSheet, Text, View ,Image,Button,Pressable} from 'react-native';
import ES from './ES';
import HomePic from '../assets/HomePic.svg';
import Logincss from './Logincss';
const MyButton = ({onPress,text}) => {
    return (
   <Pressable  onPress={onPress} style={Logincss.btn} >
       <Text style={Logincss.Text}> {text}</Text>
       </Pressable>
          );


};


  export default MyButton;
 