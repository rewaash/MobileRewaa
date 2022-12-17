import React from 'react';
import { StyleSheet, Text, View ,Image,TextInput} from 'react-native';
const Custominput = ({value,setValue,placholder,secureTextEntry}) => {
    return (
      
         <TextInput  value={value} 
         onChangeText={setValue}
          placeholder={placholder}
          
        placeholderTextColor = "#00007f"
          secureTextEntry={secureTextEntry}
           style = {ES.input} ></TextInput>
        
          );


}

const ES = StyleSheet.create({
    
    input:{
        placeholderTextColor:'#ffff00' ,
    width:'80%',
    height:58,
    backgroundColor:'#ffff',
    borderColor:'#3B7190',

       borderEndWidth:10,
       borderRadius :20,
       paddingHorizontal :12,
       marginVertical:20,
       marginTop: '5%',
       alignItems: 'center',
     
      },
    });

;export default Custominput;
