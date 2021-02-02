import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import book from "./collections/book";
import audioBooks from "./collections/audioBooks";

import { Ionicons } from "@expo/vector-icons";
import colors from "../assets/colors/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AsyncStorage } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      swipeEnabled={true}
      initialRouteName="Books"
      // tabBarOptions={{ showIcon: true }}

      tabBarOptions={{
        activeTintColor: "#6E3AA7",
        inactiveTintColor: "lightgray",

        showIcon: true,
        pressColor: "cyan",
        labelStyle: {
          fontSize: 16,
          fontWeight: "bold",
        },
        style: {
          margin: 5,
          //          backgroundColor: "red",
          width: "90%",
          //justifyContent: "center",
          alignSelf: "center",
        },
        tabStyle: {
          // width: "100%",
          //justifyContent: "space-between",
          //borderWidth: 5,
          //margin: 5,
          //          borderWidth: 5,
          // borderBottomColor: "white",
          // borderRightColor: "black",
          // borderTopColor: "white",
          // borderLeftColor: "white",
          //borderColor: "white",
          //backgroundColor: "red",
          //backgroundColor: "red",
          //margin: 1,
        },
      }}
      //     tabBarPosition="top"
    >
      <Tab.Screen
        name="Books"
        component={book}
        options={{
          //  tabBarLabel: "Home",

          tabBarIcon: ({ focused }) =>
            focused == true ? (
              <MaterialCommunityIcons
                name="book-multiple"
                size={24}
                color="#6E3AA7"
              />
            ) : (
              <MaterialCommunityIcons
                name="book-multiple"
                size={24}
                color="lightgray"
              />
            ),
        }}
      />
      <Tab.Screen
        name="AudioBooks"
        component={audioBooks}
        options={{
          //  tabBarLabel: "Home",
          tabBarIcon: ({ focused }) =>
            focused == true ? (
              <MaterialCommunityIcons
                name="audiobook"
                size={24}
                color="#6E3AA7"
              />
            ) : (
              <MaterialCommunityIcons
                name="audiobook"
                size={24}
                color="lightgray"
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function collections() {
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
        <Ionicons name="ios-menu" size={40} color="black" />
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
            marginBottom: 40,
          }}
        >
          COLLECTIONS
        </Text>
      </View>
      {
        //Search DIVE
      }
      <NavigationContainer independent={true}>{MyTabs()}</NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
