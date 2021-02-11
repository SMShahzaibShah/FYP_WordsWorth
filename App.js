import React, { useEffect, useState } from "react";
import {
  View,
  ActivityIndicator,
  Text,
  Button,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import {
  Ionicons,
  FontAwesome,
  FontAwesome5,
  SimpleLineIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import WelcomeScreen from "./Screens/WelcomePage";
import SignIn from "./Screens/SignIn";
import SignUp from "./Screens/SignUp";
import Prefrences from "./Screens/Prefrences";
import Search from "./Screens/Search";
import DashBoard from "./Screens/Dashboard";
import ListDisplay from "./Screens/ListDisplay";
import EditProfile from "./Screens/EditProfile";
import List from "./Screens/list";
import BookLibrary from "./Screens/BookLibrary";
import Onboard from "./component/onboard";
import ForgotPassword from "./Screens/ForgotPassword";
import bookDetails from "./Screens/bookDetails";
import Reader from "./Screens/pdfReader";
import AudioLibray from "./Screens/audioLibray";
import audioDetails from "./Screens/audioDetails";
import audioSettings from "./Screens/audioSettings";
import audioPlayer from "./Screens/audioPlayer";
import collections from "./Screens/collestions";
import bookSuggestions from "./Screens/bookSuggestions";
import socailSegment from "./Screens/socailSeg";

import * as firebase from "firebase";
import * as firebaseBooksData from "firebase";

const Stack = createStackNavigator();

export default function App() {
  const [showOnboard, setShowonBoard] = useState(true);
  const [fontLoading, setfontLoading] = useState(false);

  useEffect(() => {
    var firebaseConfig = {
      apiKey: "AIzaSyBwEie5MWQm07oxnAoqIRV_LvSdvhzEMsM",
      authDomain: "wordsworth-3566c.firebaseapp.com",
      databaseURL: "https://wordsworth-3566c.firebaseio.com",
      projectId: "wordsworth-3566c",
      storageBucket: "wordsworth-3566c.appspot.com",
      messagingSenderId: "754217307534",
      appId: "1:754217307534:web:0b2df3b1faa91f1856a8df",
    };
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }, []);

  const fetchFont = () =>
    Font.loadAsync({
      "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
      "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
      "OpenSans-SemiBold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
      "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
      "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
      "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    });

  const stacknavigator = (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"welcome"}
        screenOptions={{
          headerShown: false,
          headerTitleAlign: "center",
          headerTintColor: "black", // change header color
          headerStyle: {
            backgroundColor: "lightblue",
          },
          headerRight: () => <Button title="Edit"></Button>,
        }}
      >
        <Stack.Screen name="welcome" component={WelcomeScreen} />
        <Stack.Screen
          name="Signin"
          component={SignIn}
          options={{
            //title:
            //headerShown: false,
            // headerTitleAlign: "center",
            // headerTintColor: 'black', // change header color
            // headerStyle:{
            //   backgroundColor: 'lightblue',
            // }
            headerRight: () => {},
          }}
        />
        <Stack.Screen
          name="Signup"
          component={SignUp}
          options={
            {
              //headerShown: true,
            }
          }
        />
        <Stack.Screen name="Dashboard" component={DashBoard} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="list" component={List} />
        <Stack.Screen name="bookslibrary" component={BookLibrary} />
        <Stack.Screen name="ForgotPass" component={ForgotPassword} />
        <Stack.Screen name="bookDetails" component={bookDetails} />
        <Stack.Screen name="reader" component={Reader} />
        <Stack.Screen name="audioLibray" component={AudioLibray} />
        <Stack.Screen name="audioDetails" component={audioDetails} />
        <Stack.Screen name="audioSettings" component={audioSettings} />
        <Stack.Screen name="audioPlayer" component={audioPlayer} />
        <Stack.Screen name="collections" component={collections} />
        <Stack.Screen name="bookSuggestions" component={bookSuggestions} />
        <Stack.Screen name="socailSegment" component={socailSegment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  const Drawer = createDrawerNavigator();
  const handleOnboardFinish = () => {
    setShowonBoard(false);
  };
  if (fontLoading) {
    return (
      <>
        {showOnboard && <Onboard handleDone={handleOnboardFinish} />}
        {!showOnboard && stacknavigator}
      </>
    );
  } else {
    return (
      <AppLoading
        startAsync={fetchFont}
        onFinish={() => setfontLoading(true)}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
