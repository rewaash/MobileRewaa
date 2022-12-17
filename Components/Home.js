import React ,{useState} from 'react';
import 'react-native-gesture-handler';
import Homecss from './Homecss'
import { StyleSheet, ScrollView ,Text, View ,Image,Button,TouchableOpacity} from 'react-native';

import Wel from '../assets/Wel.png';
import Custominput from './Custominput';
import MyButton from './MyButton';
import Logincss from './Logincss';
const Home  = ({navigation}) => {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  const onLogInPressed =()=>{
    
    navigation.navigate('Main');

    
  };

    return (
      
     

        
<ScrollView>
      <View style={Homecss.container}>
      <View >
      <Text style ={Homecss.login}>FrontLine Technology </Text>

  </View>
  <Image source={Wel} alt="lap"  style={Homecss.photo}/>
      <View style ={Homecss.welcom}>
      <MyButton    style={Homecss.btn} text='Get Started' onPress={()=>
          navigation.navigate('Get Started')}> </MyButton>
          <Text style ={Homecss.l} >OR if you have an account you can log in :</Text>
         <MyButton    style={Homecss.btn} text='Login'  onPress={()=>
          navigation.navigate('Login')}> </MyButton>
       
         </View>
        
       
          </View></ScrollView>


          );


};


  export default Home;
 


          