import React ,{useState}from 'react';
import { StyleSheet,ScrollView, Text, View ,Image,TextInput,Pressable,Button} from 'react-native';
import ES from './ES';
import Wel from '../assets/Wel.png';
import Logincss from './Logincss';
import Custominput from './Custominput';
import MyButton from './MyButton';
import Main from './Main';

const Login = ({navigation ,route}) => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const onLogInPressed =()=>{
      
      navigation.navigate('Main');

      
    };

    const onForgotPressed =()=>{

      console.warn('for');
     };
    return (
        <ScrollView>
      <View style={Logincss.container}>
      <View >
      <Text style ={Logincss.login}>Login</Text>
  </View>
  <Image source={Wel} alt="lap"  style={Logincss.photo}/>
      <View style ={Logincss.welcom}>
         <Custominput placholder="username" value={username} setValue={setUsername} ></Custominput>
         <Custominput placholder="password" secureTextEntry={true} value={password} setValue={setPassword} style = {Logincss.input} ></Custominput>
         </View>
         <MyButton    style={Logincss.btn} text='Login' onPress={onLogInPressed}> </MyButton>
        <Button title ='Forgot Password?'onCliclk onPress={onLogInPressed }  color="#ffffff"></Button>
       
          </View></ScrollView>
          );


};


  export default Login;
 