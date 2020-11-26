import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import  WelcomeScreen  from "./Screens/WelcomePage";
import SignIn from "./Screens/SignIn";
import SignUp from "./Screens/SignUp";
import Prefrences from "./Screens/Prefrences";
import Dashboard from "./Screens/Dashboard";
import Search from "./Screens/Search";


export default function App() {
  return (
      <Search />
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Scontainer:{ 
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center' 
  },

});
