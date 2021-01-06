import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import CustomButton from "../component/ButtonComponent";

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import colors from "../assets/colors/colors";

import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";

const Search = ({ navigation, route }) => {
  const [getsearch, setSearch] = useState("");
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return (
    <>
      <View style={styles.container}>
        {
          //FIrst Two Images
        }
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
            marginTop: 80,
          }}
        />
        {
          //Navigation Menu
        }
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

        <View style={{ width: "100%", marginLeft: 76 }}>
          <Text
            style={{
              fontFamily: "Roboto-Regular",
              fontSize: 20,
              color: colors.gray,
              marginTop: 20,
            }}
          >
            SEARCH
          </Text>
        </View>
        {
          //Search Image
        }
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 180,
          }}
        >
          <Image
            source={require("../assets/ForSearchScreen.png")}
            style={{ position: "absolute" }}
          />
        </View>
        {
          //Text Input
        }
        <View
          style={{
            flexDirection: "row",
            width: 265,
            height: 45,
            backgroundColor: "#F1E7FF",
            borderRadius: 50,
            paddingLeft: 10,
            justifyContent: "center",
            alignSelf: "center",
            marginTop: 130,
          }}
        >
          <Octicons
            name="search"
            size={24}
            style={{ alignSelf: "center", marginRight: 5 }}
            color="#653CA0"
          />
          <TextInput
            placeholder="Enter Book Name To Search"
            style={{
              width: 232,
              height: 45,
              borderRadius: 50,
              paddingLeft: 10,
              fontFamily: "OpenSans-Regular",
            }}
          ></TextInput>
        </View>
        {
          //Button
        }
        <View style={{ justifyContent: "center", alignSelf: "center" }}>
          <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
            <Text style={{ marginTop: 15 }}>
              <LinearGradient
                colors={["#6E3AA7", "#23286B"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.doneButtonWrapper}
              >
                <Text style={styles.doneButtonText}>Search</Text>
              </LinearGradient>
            </Text>
          </TouchableOpacity>
        </View>
        {
          //Last Image
        }
        <Image
          source={require("../assets/main_bottom2.png")}
          style={{ bottom: 0, position: "absolute" }}
        />
      </View>
      {/**
      <View style={styles.container}>
        <Image style={styles.ImagesSty} source={require('../Images/WelcomePageLogo.png')}/>
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.textInput}
                placeholder="Search a Book"
                value={getsearch}
                onChangeText={(text)=> setSearch(text)}
                />
            <Ionicons style={styles.iconStyle} name="ios-mic" size={35} color="black" />
        </View>
        <CustomButton text="Search" color='red' onPressEvent={()=>navigation.navigate("list")}/>
      </View>
       */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  ImagesSty: {
    width: 250,
    height: 60,
    marginTop: 100,
    marginBottom: 50,
    //justifyContent: "center"
  },
  SecondText: {
    fontSize: 16,
    paddingTop: 20,
    width: "90%",
  },
  textInput: {
    borderColor: "red",
    //borderWidth: 2,
    borderBottomWidth: 2,
    width: "78%",
    //borderRadius: 50,
    fontSize: 16,
    padding: 10,
  },
  inputContainer: {
    flexDirection: "row",
    width: "75%",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 40,
  },
  iconStyle: {
    alignSelf: "auto",
  },
  doneButtonWrapper: {
    flex: 1,
    paddingLeft: 50,
    paddingRight: 50,
    borderRadius: 25,
    width: 265,
    height: 45,
  },
  doneButtonText: {
    fontSize: 14,
    fontFamily: "OpenSans-SemiBold",
    textAlign: "center",
    marginTop: 10,
    color: colors.white,
  },
});

export default Search;
