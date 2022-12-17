import React ,{useState}from 'react';
import { StyleSheet,ScrollView, Text, View ,Image,TextInput,Pressable,Button,TouchableOpacity} from 'react-native';

import Boxcss from './Boxcss';
import Visitorcss from './Visitorcss'
4
const Box = ({navigation}) => {
5
    return (
        <ScrollView>
        <View style={Boxcss.container}>
        <View >
        <Text style ={Boxcss.Mytext}>At FrontLine
, we develop innovative and creative products and Services 
We are specialized in providing customer support.Professional Services,IT solutions, Network Services , System Automation  and Product Development Satisfied clients around the globe  bear testimony to the quality of our work .</Text>


        
        
        </View></View></ScrollView>
    );
9
};

export default Box;
10
11


23
24
