import React ,{useState} from 'react';
import 'react-native-gesture-handler';
import Jobscss from './Jobscss'
import Apply from './Apply';
import { StyleSheet, ScrollView ,Text, View ,Image,Button,TouchableOpacity} from 'react-native';

import MyButton from './MyButton';

import Wel from '../assets/Wel.png';
import Box from './Box';
const Job  = ({navigation}) => {  

return ( 
        
        
<ScrollView>
<View style={Jobscss.container}>

<Text style={Jobscss.Text}>Find A Job</Text>
<View style= {Jobscss.containerr}>
<Text style ={Jobscss.Mytext}>Backend Developer</Text>
<Text style ={Jobscss.con}> +2 years of experience </Text>
<Text style ={Jobscss.cc}> .NET ,EF  </Text>
<MyButton    style={Jobscss.btn} text='Apply'  onPress={()=>
          navigation.navigate('Apply',{position:'Backend Developer',})}> </MyButton>
</View>

<View style= {Jobscss.containerr}>
<Text style ={Jobscss.Mytext}>Frontend Developer</Text>
<Text style ={Jobscss.con}> +3 years of experience </Text>
<Text style ={Jobscss.cc}>                React,React native  </Text>
<MyButton    style={Jobscss.btn} text='Apply'  onPress={()=>
          navigation.navigate('Apply',{position:'Frontend Developer',})}> </MyButton>
</View>

<View style= {Jobscss.containerr}>
<Text style ={Jobscss.Mytext}>FullStack Developer</Text>
<Text style ={Jobscss.con}> +1 years of experience </Text>
<Text style ={Jobscss.cc}>         Node Js,React </Text>
<MyButton    style={Jobscss.btn} text='Apply'  onPress={()=>
          navigation.navigate('Apply' ,{position:'FullStack Developer',})}> </MyButton>
</View>

<Text style ={Jobscss.xx}>HHHHHHHHHHHHHHHHHHHHHHH</Text>
<Text style ={Jobscss.xx}>HHHHHHHHHHHHHHHHHHHHHHH</Text>
</View></ScrollView>

);
};


  export default Job;
 


          