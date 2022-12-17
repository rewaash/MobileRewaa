import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image} from 'react-native';
import HomePic from './assets/HomePic.svg';
import BackgroundHome from './assets/BackgroundHome.jpg';
import Home from './Components/Home';
import Login from './Components/Login';
import Main from './Components/Main';
import Visitor from './Components/Visitor';
import Contact from './Components/Contact ';
import Jobs from './Components/Job';
import 'react-native-gesture-handler';
import Apply from './Components/Apply';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Aboutus from './Components/Aboutus';
const sstack =  createStackNavigator();
export default function App() {
  return (
  <NavigationContainer>
    <sstack.Navigator  >
      <sstack.Screen name ="Welcom" component={Home} options={{headerShown: true}} ></sstack.Screen>
      <sstack.Screen name ="Get Started" component={Visitor} options={{headerShown: true}} ></sstack.Screen>
      <sstack.Screen name ="Login" component={Login} options={{headerShown: true}} ></sstack.Screen>
      <sstack.Screen name ="Main" component={Main} options={{headerShown: true}} ></sstack.Screen>
      <sstack.Screen name ="AboutUs" component={Aboutus} options={{headerShown: true}} ></sstack.Screen>
      <sstack.Screen name ="Contact Us" component={Contact} options={{headerShown: true}} ></sstack.Screen>
      <sstack.Screen name ="Jobs" component={Jobs} options={{headerShown: true}} ></sstack.Screen>
      <sstack.Screen name ="Apply" component={Apply} options={{headerShown: true}} ></sstack.Screen>
    </sstack.Navigator>
  </NavigationContainer>
  );
}

