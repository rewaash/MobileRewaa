import React ,{useState}from 'react';
import { StyleSheet,ScrollView, Text,Alert, View ,Image,TextInput,Pressable,Button} from 'react-native';
import C from '../assets/C.png';
import Contactcss from './Contactcss';
import Custominput from './ContactInput';
import Conn from './Conn';
import MyButton from './MyButton';
import  Homecss from './Boxcss';
import RNFileSelector from 'react-native-file-selector';

const Apply = ({navigation ,route}) => {
  const { position} = route.params;

const [username,setUsername] = useState('');
const [GPA,setGPA]= useState('');
const [name,setname]= useState('');
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
          {text: 'I am sure,send it', onPress: () =>  Alert.alert('Your application has been received ')},
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
      <Text style ={Contactcss.Text}>{position}</Text>
      
  </View>

      <View style ={Contactcss.welcom}>
      <Conn placholder="Full Name"  
         value={name} setValue={setname} ></Conn>
         <Conn placholder="Email" value={username} setValue={setUsername} ></Conn>
         <Conn placholder="GPA" value={GPA} setValue={setGPA} ></Conn>
        </View>
 
         <MyButton    style={Contactcss.btn} text='Submit' onPress={onLogInPressed}> </MyButton>
         <Text style ={Homecss.xx}>HHHHHHHHHHHHHHHHHHHHHHH</Text>
       <Text style ={Homecss.xx}>HHHHHHHHHHHHHHHHHHHHHHH</Text>
      
       
          </View>
          </ScrollView>
          );


};


  export default Apply;
 
<RNFileSelector title={"Select File"} visible={this.state.visible} onDone={() => {
    console.log("file selected: " + path);
}} onCancel={() => {
    console.log("cancelled");
}}/>