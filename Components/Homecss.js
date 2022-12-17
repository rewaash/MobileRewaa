import { Button, StyleSheet} from 'react-native';

const ES = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor :'#000c0f',
    alignItems: 'center',
   
  },

  login:{ 
    color:'#ffffff', 
    fontWeight:'bold',
    fontSize :25,
    marginTop: '19%',
  alignItems: 'center', 
  
  marginBottom:'1%' 

  },

  l:{ color:'#ffffff',    marginTop: '8%',  marginBottom:'2%'  },

  photo:{
    maxHeight:200,
    marginTop: '10%',
  },
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
  welcom: {
    marginTop: '1%',
   
    alignItems: 'center',
    width :'100%'
  },

btn:{

    width:'50%',
    height:47,

    backgroundColor :'#3B7190',
       borderColor :'#ffffff',
      borderWidth:2,
       borderRadius :22,
       padding:12,
       marginTop: '1%',
       marginVertical:20,
       alignItems: 'center',
    fontWeight:'bold',
    color:'white',
    textAlign:'center',
    overflow: 'hidden',
    marginBottom:'10%' 
    
    
   
    },
    Text:{
        color:'white',  
        alignItems: 'center',
        fontWeight:'bold',
    },

    Mytxt:{
      
      color:'white',  
    alignItems: 'center',
    fontWeight:'bold',   fontSize :24,},

    Mytext:{
      marginLeft:'12%',
      marginRight:'12%',
      marginTop:'10%',color:'white',  
   
    
    
       fontSize :19,},

});
export default ES;
