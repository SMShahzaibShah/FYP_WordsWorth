import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import  WelcomeScreen  from "./Screens/WelcomePage";
import SignIn from "./Screens/SignIn"

export default function App() {
  return (
      <SignIn />
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
