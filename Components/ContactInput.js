import React from 'react';
import { StyleSheet, Text, View ,Image,TextInput} from 'react-native';
const Custominput = ({value,setValue,placholder,secureTextEntry}) => {
    return (
      
         <TextInput  value={value} 
         onChangeText={setValue}
          placeholder={placholder}
          secureTextEntry={secureTextEntry}
           style = {ES.input} ></TextInput>
        
          );


}

const ES = StyleSheet.create({
    
    input:{
   
    width:'80%',
    height:160,
    backgroundColor:'#ffff',
    borderColor:'#3B7190',
textAlign:'top',
       borderEndWidth:10,
       borderRadius :25,
       paddingHorizontal :12,
       marginVertical:20,
       marginTop: '2%',
       alignItems: 'center',
     
      },
    });

;export default Custominput;
