import React ,{useState}from 'react';
import { StyleSheet,ScrollView, Text,Alert, View ,Image,TextInput,Pressable,Button} from 'react-native';
import C from '../assets/C.png';
import Contactcss from './Contactcss';
import Custominput from './ContactInput';
import Conn from './Conn';
import MyButton from './MyButton';
import  Homecss from './Boxcss';


const Contact = ({navigation ,route}) => {


const [username,setUsername] = useState('');

    const [msg,setMsg] = useState('');

    const onLogInPressed =()=>{
      
      Alert.alert(
        'Are you sure  ?',
        'Press send or return to edit your message',
        [
          {
            text: 'Return to edit',
            onPress: () => console.log('Cancel Button Pressed'),
            style: 'cancel',
          },
          {text: 'I am sure,send it', onPress: () =>  Alert.alert('Message sent , Thank you')},
        ],
        {cancelable: false},
       );
      
    };

    const Send =()=>{

      Alert.alert('Message sent , Thank you');
     };
    return (
        <ScrollView>
      <View style={Contactcss.container}>
      <View >
      <Text style ={Contactcss.Text}>Have Some Questions ?</Text>
      <Image source={C} alt="lap"  style={Contactcss.photo}/>
  </View>

      <View style ={Contactcss.welcom}>
         <Conn placholder="Email" value={username} setValue={setUsername} ></Conn>
         <Custominput placholder="Your question" secureTextEntry={false} value={msg} setValue={setMsg} style = {Contactcss.input} ></Custominput>
         </View>
         <MyButton    style={Contactcss.btn} text='Submit' onPress={onLogInPressed}> </MyButton>
         <Text style ={Homecss.xx}>HHHHHHHHHHHHHHHHHHHHHHH</Text>
       <Text style ={Homecss.xx}>HHHHHHHHHHHHHHHHHHHHHHH</Text>
      
       
          </View>
          </ScrollView>
          );


};


  export default Contact;
 