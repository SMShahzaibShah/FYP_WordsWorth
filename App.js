import   React ,{useEffect,useState} from 'react';
import { View, ActivityIndicator, Text, Button, StyleSheet, FlatList, Image, TouchableOpacity  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons, FontAwesome,FontAwesome5,SimpleLineIcons,MaterialIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import  WelcomeScreen  from "./Screens/WelcomePage";
import SignIn from "./Screens/SignIn";
import SignUp from "./Screens/SignUp";
import Prefrences from "./Screens/Prefrences";
import Search from "./Screens/Search";
import DashBoard from './Screens/Dashboard';
import ListDisplay from './Screens/ListDisplay';

import * as firebase from "firebase"



const Stack = createStackNavigator();

export default function App() {
  
useEffect(()=>{
  var firebaseConfig = {
    apiKey: "AIzaSyBwEie5MWQm07oxnAoqIRV_LvSdvhzEMsM",
    authDomain: "wordsworth-3566c.firebaseapp.com",
    databaseURL: "https://wordsworth-3566c.firebaseio.com",
    projectId: "wordsworth-3566c",
    storageBucket: "wordsworth-3566c.appspot.com",
    messagingSenderId: "754217307534",
    appId: "1:754217307534:web:0b2df3b1faa91f1856a8df"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
},[])  
const stacknavigator =(
  <NavigationContainer>
    <Stack.Navigator initialRouteName={"Signin"}
    screenOptions={
      {
        headerTitleAlign: "center",
        headerTintColor: 'black', // change header color
        headerStyle:{
        backgroundColor: 'lightblue',
        },
        headerRight: () => <Button title="Edit"></Button>
      }
    }
    >
      <Stack.Screen name="Signin" component={SignIn} 
      options={{
        //title: 
        //headerShown: false,
        // headerTitleAlign: "center",
        // headerTintColor: 'black', // change header color
        // headerStyle:{
        //   backgroundColor: 'lightblue',
        // }
        headerRight: () => {}
      }}/>
      <Stack.Screen name="Signup" component={SignUp} />
      <Stack.Screen name="Dashboard" component={DashBoard} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  </NavigationContainer>
)
  

  return (
    stacknavigator
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
