import React, { useEffect, useState } from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import CustomButton from "../component/ButtonComponent";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import colors from "../assets/colors/colors";

import { LinearGradient } from "expo-linear-gradient";
import * as firebase from "firebase";
const SignIn = ({ navigation, route }) => {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");

  const onSignIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .then((user) => {
        navigation.navigate("Dashboard");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode);
        // navigation.navigate('SignIn')
      });
  };
  return (
    <>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", height: 200 }}>
          <Image source={require("../assets/main_top2.png")} />
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{
                marginTop: 120,
                marginLeft: 20,
                fontSize: 24,
                fontFamily: "OpenSans-Bold",
              }}
            >
              LOGIN
            </Text>
          </View>
        </View>
        <View style={{ marginLeft: 40, height: 300 }}>
          <Image source={require("../assets/Login.png")} />
        </View>
        <View
          style={{
            flexDirection: "column",
            marginTop: 20,
            marginLeft: 65,
            height: 225,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: 265,
              height: 45,
              backgroundColor: "#F1E7FF",
              borderRadius: 50,
              paddingLeft: 10,
            }}
          >
            <FontAwesome
              name="user"
              size={24}
              style={{ alignSelf: "center", marginRight: 5 }}
              color="#653CA0"
            />
            <TextInput
              placeholder="Enter Email / Phone Number"
              style={{
                width: 232,
                height: 45,
                borderRadius: 50,
                paddingLeft: 10,
              }}
            ></TextInput>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: 265,
              height: 45,
              marginTop: 25,
              backgroundColor: "#F1E7FF",
              borderRadius: 50,
              paddingLeft: 10,
            }}
          >
            <FontAwesome5
              name="lock"
              size={24}
              style={{ alignSelf: "center", marginRight: 5 }}
              color="#653CA0"
            />
            <TextInput
              placeholder="Enter Password"
              style={{
                width: 195,
                height: 45,
                borderRadius: 50,
                paddingLeft: 10,
              }}
            ></TextInput>

            <FontAwesome
              name="eye"
              size={24}
              style={{ alignSelf: "center", marginLeft: 3, marginRight: 5 }}
              color="#653CA0"
            />
          </View>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate("Signup")}
          >
            <Text style={{ marginTop: 25 }}>
              <LinearGradient
                colors={["#6E3AA7", "#23286B"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.doneButtonWrapper}
              >
                <Text style={styles.doneButtonText}>LOGIN</Text>
              </LinearGradient>
            </Text>
            <Text style={{ marginTop: 20, marginLeft: 25 }}>
              Don’t Have an Account ? Sign up
            </Text>
            <Text style={{ marginTop: 20, marginLeft: 65 }}>
              Forgot Password ?
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Image source={require("../assets/main_bottom2.png")} />
        </View>
      </View>
      {/** 
    <View style={styles.container}>
      <Image source={require("../Images/WelcomePageLogo.png")} />
      <View style={styles.internalContents}>
        <Text style={styles.text}>Sign In</Text>
        <Text style={styles.Hitext}>Hi, there! Nice to see you again </Text>
        <Text style={styles.label}>Email</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter username/Email"
            value={email}
            onChangeText={(text) => setemail(text)}
          />
        </View>
        <Text style={styles.label}>Password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Password"
            secureTextEntry
            value={pass}
            onChangeText={(text) => setpass(text)}
          />
        </View>
      </View>
      <View style={styles.button}>
        <CustomButton
          text="Sign In"
          color="red"
          onPressEvent={() => onSignIn()}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          margin: 20,
          justifyContent: "space-between",
          width: "55%",
        }}
      >
        <Text style={styles.Hitext}>Create an Account</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={{ ...styles.label, alignSelf: "center", margin: 9 }}>
            SignUp
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={{ ...styles.label, marginTop: -10 }}>Forgot Password ?</Text>
    </View>
    */}
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: "red",
  },
  internalContents: {
    width: "85%",
  },
  container: {
    flex: 1,
    //backgroundColor: "#fff",
    //alignItems: "center",
    // justifyContent: 'center',
    //paddingTop: 40,
  },
  ImagesSty: {
    width: 250,
    height: 60,
    marginTop: 100,
    marginBottom: 50,
    //justifyContent: "center"
  },
  textInput: {
    borderColor: "grey",
    //borderWidth: 2,
    borderBottomWidth: 2,
    width: "95%",
    //borderRadius: 50,
    fontSize: 16,
    padding: 10,
  },
  inputContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingBottom: 20,
    paddingTop: 0,
  },
  text: {
    fontSize: 30,
    color: "black",
  },
  button: {
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  Hitext: {
    fontStyle: "italic",
    color: "lightgrey",
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
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

export default SignIn;
