import { StyleSheet} from 'react-native';

const ES = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor :'#000c0f',
    alignItems: 'center',
   
  },

  login:{ 
    color:'#ffffff', 
    fontWeight:'bold',
    fontSize :50,
    marginTop: '50%',
  alignItems: 'center',  

  },

  photo:{
    maxHeight:200,
    marginTop: '40%',
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
  title:
  {
   fontSize :40,
   fontWeight:'bold',
  color:'#ffffff',
  }
,
  subtitle:
  {
    fontSize :25,
   fontWeight:'200',
  color:'#ffffff',
  marginTop: '19%',
   
  }

});
export default ES;
