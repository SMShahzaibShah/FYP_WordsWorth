import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import  WelcomeScreen  from "./Screens/WelcomePage";
import SignIn from "./Screens/SignIn";
import SignUp from "./Screens/SignUp";
import Prefrences from "./Screens/Prefrences";
import Dashboard from "./Screens/Dashboard";
import Search from "./Screens/Search";
import DashBoard from './Screens/Dashboard';
import ListDisplay from './Screens/ListDisplay';

export default function App() {
  const [getText, setText] = useState('Nothing');
  const changeName=()=>{
    setText('Sjajz')
  }

  return (
      <ListDisplay />
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
