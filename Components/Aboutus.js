import React ,{useState} from 'react';
import 'react-native-gesture-handler';
import Homecss from './Boxcss'
import { StyleSheet, ScrollView ,Text, View ,Image,Button,TouchableOpacity} from 'react-native';

import Wel from '../assets/Wel.png';
import Box from './Box';
const Aboutus  = ({navigation}) => {
 

    return (
      
     

        
<ScrollView>
      <View style={Homecss.container}>
      <View >
      

  </View>
 <Text style={Homecss.Text}> About Us</Text>


  <View style= {Homecss.containerr}>
  <Text style ={Homecss.Mytext}>At FrontLine
, we develop innovative and creative products and Services . 
We are specialized in providing customer support . Professional Services,IT solutions and Product Development .</Text>
<Text style ={Homecss.Mytext}>Satisfied clients around the globe  bear testimony to the quality of our work .</Text>

</View>
       <Text style ={Homecss.xx}>HHHHHHHHHHHHHHHHHHHHHHH</Text>
       <Text style ={Homecss.xx}>HHHHHHHHHHHHHHHHHHHHHHH</Text>
      
          </View></ScrollView>


          );


};


  export default Aboutus;
 


          