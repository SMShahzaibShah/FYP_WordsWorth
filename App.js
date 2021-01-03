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
import {
  Ionicons,
  FontAwesome,
  FontAwesome5,
  SimpleLineIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import * as Font from "expo-font";
import { AppLoading } from "expo";

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
import AppIntroSlider from "react-native-app-intro-slider";

import * as firebase from "firebase";
import * as firebaseBooksData from "firebase";
import colors from "./assets/colors/colors";

import onboard1 from "./assets/onboarding1.png";

const data = [
  {
    title: "Save time by tracking \n your studies materials",
    text: "search books, novals, stories and more",
    image: require("./assets/onboarding1.png"),
  },
  {
    title: "Stay on top of your education",
    text: "Reduce your stress, increase your productivity",
    image: require("./assets/onboarding2.png"),
  },
  {
    title: "Spend more by Listening \n books you love",
    text: "Easily convert books into audiobook",
    image: require("./assets/onboarding3.png"),
  },
];

const fetchFont = () =>
  Font.loadAsync({
    "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-SemiBold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
  });

const Stack = createStackNavigator();

export default function App() {
  //states for loading font
  const [fontLoading, setfontLoading] = useState(false);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.img} />
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.txt}>{item.text}</Text>
        </View>
      </View>
    );
  };

  const keyExtractor = (item) => item.title;

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
      </Stack.Navigator>
    </NavigationContainer>
  );
  const renderDoneButton = () => {
    return (
      <View style={styles.rightTextWrapper}>
        <Text style={styles.rightText}>Done</Text>
      </View>
    );
  };
  const renderNextButton = () => {
    return (
      <View style={styles.rightTextWrapper}>
        <Text style={styles.rightText}>Next</Text>
      </View>
    );
  };
  const renderPrevButton = () => {
    return (
      <View style={styles.leftTextWrapper}>
        <Text style={styles.leftText}>Prev</Text>
      </View>
    );
  };

  if (fontLoading) {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent backgroundColor="transparent" />
        <AppIntroSlider
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          renderDoneButton={renderDoneButton}
          renderNextButton={renderNextButton}
          renderPrevButton={renderPrevButton}
          showPrevButton
          dotStyle={styles.dotStyle}
          activeDotStyle={styles.activeDotStyle}
          data={data}
        />
      </View>
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
  txt: {
    fontSize: 14,
    color: colors.gray,
    textAlign: "center",
    fontFamily: "OpenSans-SemiBold",
    marginHorizontal: 50,
    marginTop: 20,
  },
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
  img: {
    marginVertical: 40,
  },
  title: {
    fontSize: 24,
    color: colors.black,
    textAlign: "center",
    fontFamily: "OpenSans-Bold",
    marginHorizontal: 50,
  },
  leftTextWrapper: {
    width: 40,
    height: 40,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  leftText: {
    color: colors.blue,
    fontFamily: "OpenSans-SemiBold",
    fontSize: 14,
  },
  rightTextWrapper: {
    width: 40,
    height: 40,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  rightText: {
    color: colors.blue,
    fontFamily: "OpenSans-SemiBold",
    fontSize: 14,
  },
  activeDotStyle: {
    backgroundColor: colors.blue,
  },
  dotStyle: { backgroundColor: colors.blueFaded },
});
