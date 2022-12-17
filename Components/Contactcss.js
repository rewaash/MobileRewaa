import { Button, StyleSheet} from 'react-native';

const ES = StyleSheet.create({
  container: {
    flex: 1,
 
    alignItems: 'center',backgroundColor :'#000c1f',
   
  },

  login:{ 
    color:'#ffffff', 
    fontWeight:'bold',
    fontSize :50,
    marginTop: '20%',
  alignItems: 'center', 
  marginBottom:'1%' 

  },

  l:{ color:'#ffffff', },

  photo:{
    maxHeight:150,
    marginTop: '8%',
    borderRadius :80,
    width:160,
    marginLeft:'21%'
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
       marginTop: '5%',
       marginVertical:20,
       alignItems: 'center',
    fontWeight:'bold',
    color:'white',
    textAlign:'center',
    overflow: 'hidden',
    
    
   
    },
    Text:{
        color:'white',  
        alignItems: 'center',
        fontWeight:'bold',
        fontSize :30,
        marginTop:'15%',
        marginBottom:'10%',
        color:'#ff8c00',  

    },

});
export default ES;
