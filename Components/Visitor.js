import React ,{useState}from 'react';
import { StyleSheet,ScrollView, Text, View ,Image,TextInput,Pressable,Button,TouchableOpacity} from 'react-native';
import ES from './ES';
import Wel from '../assets/Wel.png';
import About from '../assets/About.png';
import Our from '../assets/Worrk.png';
import Find from '../assets/Find.png';
import Contact from '../assets/Cn.png';
import Logincss from './Logincss';
import Custominput from './Custominput';
import MyButton from './MyButton';
import Main from './Main';
import Visitorcss from './Visitorcss';
import Contactus from './Contact ';
import Jobs from './Job';

const Visitor = ({navigation ,route}) => {

    

    const onForgotPressed =()=>{

      console.warn('for');
     };
    return (
        <ScrollView>
      <View style={Visitorcss.container}>
      <View >
      <Text style ={Visitorcss.login}> Welcome to FrontLine !</Text>
  </View>
<TouchableOpacity  onPress={()=>
          navigation.navigate('AboutUs')}> 
  <Image source={About} alt="lap"  style={Visitorcss.about}/>  
  <Text  style ={Visitorcss.l}>About Us</Text>
</TouchableOpacity>


<TouchableOpacity onPress={()=>
          navigation.navigate('Jobs')}>
       <Image source={Our} alt="lap"  style={Visitorcss.about}/>  
       <Text  style ={Visitorcss.l}>Our Work</Text>
</TouchableOpacity>

<TouchableOpacity  onPress={()=>
          navigation.navigate('Jobs')}>
  <Image source={Find} alt="lap"  style={Visitorcss.about}/>  
       <Text  style ={Visitorcss.l}>Find Job</Text>

       </TouchableOpacity>
  
  
    <TouchableOpacity onPress={()=>
          navigation.navigate('Contact Us')}> 
  <Image source={Contact} alt="lap"  style={Visitorcss.about}/>  
       <Text  style ={Visitorcss.l}>Contact Us</Text>
       </TouchableOpacity> 
       <View  style ={Visitorcss.e}>  
          <Text style ={Visitorcss.e}> hhhhhhhhhhhhhhhhh</Text>
          <Text style ={Visitorcss.e}> hhhhhhhhhhhhhhhhh</Text>
          <Text style ={Visitorcss.e}> hhhhhhhhhhhhhhhhh</Text>
          <Text style ={Visitorcss.e}> hhhhhhhhhhhhhhhhh</Text></View>
          </View></ScrollView>
          );


};


  export default Visitor;
 