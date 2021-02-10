import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import colors from "../assets/colors/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Tab = createMaterialBottomTabNavigator();

import newsFeed from "./socail/newsFeed";
import searchFriends from "./socail/searchFriends";
import message from "./socail/messages";
import profile from "./socail/profile";
import post from "./socail/post";

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="NewsFeed"
      activeColor="white"
      inactiveColor="grey"
      barStyle={{
        backgroundColor: "white",
        //paddingTop: 5,
        //marginBottom: 0,
      }}
    >
      <Tab.Screen
        name="NewsFeed"
        component={newsFeed}
        options={{
          tabBarColor: "#653CA0",
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={searchFriends}
        options={{
          tabBarColor: "#006D69",
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-search" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="post"
        component={post}
        options={{
          tabBarColor: "#37265b",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="add-circle-outline" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="message"
        component={message}
        options={{
          tabBarColor: "#6518f4",
          tabBarIcon: ({ color }) => (
            <Feather name="message-square" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="profile"
        component={profile}
        options={{
          tabBarColor: "#1f65ff",
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AsyncStorage } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function socailSeg({ navigation, route }) {
  return (
    <View
      style={{
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <Image
        source={require("../assets/forSearch.png")}
        style={{
          width: "100%",
          position: "absolute",
        }}
      />
      <Image
        source={require("../assets/dashboardBackground.png")}
        style={{
          position: "absolute",
          marginTop: 68,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          marginTop: 33,
          width: "80%",
          justifyContent: "space-between",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="md-arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("EditProfile")}
        >
          <FontAwesome5 name="user-edit" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {
        //Text
      }
      <View style={{ width: "100%", marginLeft: "10%" }}>
        <Text
          style={{
            fontFamily: "Roboto-Regular",
            fontSize: 20,
            color: colors.gray,
            marginTop: 20,
            marginBottom: 60,
          }}
        >
          SOCIAL SEGMENT
        </Text>
      </View>
      {
        //Search DIVE
      }
      <NavigationContainer independent={true}>
        <Stack.Navigator
          initialRouteName={"newsFeed"}
          screenOptions={{
            headerShown: false,
            //  headerTitleAlign: "center",
            // headerTintColor: "black", // change header color
            // headerStyle: {
            //  backgroundColor: "lightblue",
            //},
            // headerRight: () => <Button title="Edit"></Button>,
          }}
        >
          <Stack.Screen name="newsFeed" component={MyTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#faf8f5",
    alignItems: "center",
    justifyContent: "center",
  },
});
