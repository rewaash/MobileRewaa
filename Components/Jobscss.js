import { Button, StyleSheet} from 'react-native';

const ES = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor :'#000c1f',
    alignItems: 'center',
   
   
  },

  containerr: {
    flex: 1,
width:300,
height:150,
    alignItems: 'center',
    borderRadius:'45',
    borderColor:'#3B7190',
    borderWidth:3,
    marginTop:'15%',
    marginBottom:'1%'
   
  },
xx:{  fontSize :60,
    color:'#000c1f' },

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
    marginTop: '20%',
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
        fontSize :30,
        marginTop:'25%',
    },

    Mytxt:{
        marginTop:'10%',
      color:'white',  
    alignItems: 'center',
    fontWeight:'bold',   fontSize :24,},

    Mytext:{
      marginLeft:'8%',
      marginRight:'2%',
      marginTop:'7%',color:'#ff8c00',  
   
    
    
       fontSize :19,},


       con:{
        marginLeft:'8%',
        marginRight:'2%',
        marginTop:'5%',color:'white',  
     
      
      
         fontSize :16,},
         
       cc:{
        marginLeft:'2%',
        marginRight:'25%',
        marginTop:'1%',
        color:'white',  
     
      
      
         fontSize :16,},



});
export default ES;
