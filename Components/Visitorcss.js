import { Button, StyleSheet} from 'react-native';

const ES = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor :'#000c1f',
    alignItems: 'center',
   
  },

  login:{ 
    color:'#ffffff', 
    fontWeight:'bold',
    fontSize :25,
    marginTop: '20%',
  alignItems: 'center', 
  marginBottom:'1%' 

  },

  l:{ 
    fontSize :30,
    color:'#ffffff',
  marginTop: '7%',
  marginLeft:'15%', },

  photo:{
    maxHeight:220,
    marginTop: '8%',
  },


  e:{ 
    color:'#000c1f',
  },

  photo:{
    maxHeight:220,
    marginTop: '8%',},
 contact:{

  maxHeight:110,
  maxWidth:140,
  marginTop: '15%',
marginRight:'7%',
  alignSelf: "flex-end",
 borderRadius:'25'
 },

  about:{
    maxHeight:190,
    maxWidth:230,
    marginTop: '15%',
 marginLeft:'2%',
    alignSelf: "flex-start",
   borderRadius:'40'

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
    }

});
export default ES;
