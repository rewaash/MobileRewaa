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
   
    width:'70%',
    height:39,
    backgroundColor:'#ffffff',
       borderColor :'#ffffff',
       borderEndWidth:3,
       borderRadius :39,
       paddingHorizontal :12,
       marginVertical:20,
       marginTop: '2%',
       alignItems: 'center',
     
      },
    });

;export default Custominput;
