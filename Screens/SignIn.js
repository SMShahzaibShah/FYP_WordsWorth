import React, { useEffect, useState } from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  Keyboard,
  Modal,
  ActivityIndicator,
} from "react-native";
import CustomButton from "../component/ButtonComponent";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import { AsyncStorage } from "react-native";
import colors from "../assets/colors/colors";

import { LinearGradient } from "expo-linear-gradient";
import * as firebase from "firebase";
import { AuthContext } from "../context";

const SignIn = ({ navigation, route }) => {
  const [email, setemail] = useState("shahzaib@gmail.com");
  const [pass, setpass] = useState("shahzaib123");
  const [showPass, setShowPass] = useState(true);
  const [getModal, setModal] = useState(false);

  const { SignInco } = React.useContext(AuthContext);

  const setUser = async (value) => {
    try {
      await AsyncStorage.setItem("user", value);
    } catch (e) {
      // save error
    }

    console.log("Done.");
  };

  const onSignIn = () => {
    Keyboard.dismiss();
    if (email.length <= 0) {
      alert("Email/Phone Number is empty");
    } else if (pass.length <= 0) {
      alert("Password Field is required");
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, pass)
        .then((user) => {
          setModal(false);
          SignInco();
          // navigation.navigate("Dashboard");
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          setModal(false);
          alert(errorCode);
          // navigation.navigate('SignIn')
        });
    }
  };

  const passSettings = () => {
    if (showPass == true) {
      setShowPass(false);
    } else {
      setShowPass(true);
    }
  };
  return (
    <>
      <View style={styles.container}>
        <Modal animationType="none" transparent={true} visible={getModal}>
          <View style={styles.modalBackground}>
            <View style={styles.activityIndicatorWrapper}>
              <Text>Please Wait...</Text>
              <ActivityIndicator size="small" color="#0000ff" />
            </View>
          </View>
        </Modal>
        <View style={{ flexDirection: "row", height: 100 }}>
          <Image source={require("../assets/main_top2.png")} />
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{
                marginTop: 50,
                marginLeft: 20,
                fontSize: 24,
                fontFamily: "OpenSans-Bold",
              }}
            >
              LOGIN
            </Text>
          </View>
        </View>
        <View style={{ marginLeft: 50, height: 272 }}>
          <Image
            source={require("../assets/Login.png")}
            style={{ height: 270, width: 300 }}
          />
        </View>
        <View
          style={{
            flexDirection: "column",
            marginTop: 10,
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
              value={email}
              onChangeText={(text) => setemail(text)}
              style={{
                width: 232,
                height: 45,
                borderRadius: 50,
                paddingLeft: 10,
                fontFamily: "OpenSans-Regular",
              }}
            ></TextInput>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: 265,
              height: 45,
              marginTop: 15,
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
              secureTextEntry={showPass}
              value={pass}
              onChangeText={(text) => setpass(text)}
              style={{
                width: 195,
                height: 45,
                borderRadius: 50,
                paddingLeft: 10,
                fontFamily: "OpenSans-Regular",
              }}
            ></TextInput>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => passSettings()}
              style={{ justifyContent: "center" }}
            >
              <FontAwesome
                name="eye"
                size={22}
                style={{ alignSelf: "center", marginLeft: 3, marginRight: 5 }}
                color="#653CA0"
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              setModal(true);
              onSignIn();
            }}
          >
            <Text style={{ marginTop: 15 }}>
              <LinearGradient
                colors={["#6E3AA7", "#23286B"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.doneButtonWrapper}
              >
                <Text style={styles.doneButtonText}>LOGIN</Text>
              </LinearGradient>
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "78%",
              marginTop: 15,
            }}
          >
            <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
            <View>
              <Text
                style={{
                  width: 25,
                  textAlign: "center",
                  fontFamily: "OpenSans-SemiBold",
                }}
              >
                or
              </Text>
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
          </View>
          {
            //DIV for google and Facebook and Twitter
          }
          <View
            style={{
              flexDirection: "row",
              width: 260,
              justifyContent: "space-between",
              marginTop: 15,
            }}
          >
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  backgroundColor: "#F1E7FF",
                  height: 60,
                  width: 60,
                  borderRadius: 50,
                }}
              ></View>
              <FontAwesome
                name="facebook"
                size={30}
                color="#653CA0"
                style={{
                  position: "absolute",
                  alignSelf: "center",
                  paddingLeft: 20,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  backgroundColor: "#F1E7FF",
                  height: 60,
                  width: 60,
                  borderRadius: 50,
                }}
              ></View>
              <FontAwesome
                name="google"
                size={30}
                color="#653CA0"
                style={{
                  position: "absolute",
                  alignSelf: "center",
                  paddingLeft: 18,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  backgroundColor: "#F1E7FF",
                  height: 60,
                  width: 60,
                  borderRadius: 50,
                }}
              ></View>
              <FontAwesome
                name="twitter"
                size={30}
                color="#653CA0"
                style={{
                  position: "absolute",
                  alignSelf: "center",
                  paddingLeft: 16,
                }}
              />
            </View>
          </View>
          <View style={{ marginTop: 15, marginLeft: 25, flexDirection: "row" }}>
            <Text style={{ fontFamily: "OpenSans-SemiBold" }}>
              Don’t Have an Account ?{" "}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
              <Text style={{ fontFamily: "OpenSans-Bold" }}>Sign up</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("ForgotPass")}>
            <Text
              style={{
                marginTop: 15,
                marginLeft: 65,
                fontFamily: "OpenSans-Bold",
              }}
            >
              Forgot Password ?
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: "100%", backgroundColor: "red" }}>
          <Image
            style={{ position: "absolute", left: 190, padding: 120 }}
            source={require("../assets/login_bottom1.png")}
          />
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
  modalBackground: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#00000080",
  },
  activityIndicatorWrapper: {
    backgroundColor: "white",
    height: "20%",
    width: "80%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#C0C0C0",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export default SignIn;
