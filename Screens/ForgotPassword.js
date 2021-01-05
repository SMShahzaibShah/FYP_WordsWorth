import React, { useEffect, useState } from "react";
import { TextInput, StyleSheet, Text, View, Button, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomButton from "../component/ButtonComponent";
import * as firebase from "firebase";

import { FontAwesome } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";

import colors from "../assets/colors/colors";

const ForgotPassword = ({ navigation, route }) => {
  const [email, setemail] = useState("");
  const [number, setnumber] = useState(0);
  const [getmethod, setMethod] = useState("none");

  if (getmethod === "none") {
    return (
      <>
        <View style={styles.container}>
          <View style={{ flexDirection: "row", height: 100 }}>
            <Image
              source={require("../assets/main_top.png")}
              style={{ position: "absolute", left: -140 }}
            />
            <View style={{ flexDirection: "column" }}>
              <Text
                style={{
                  marginTop: 70,
                  marginLeft: 90,
                  fontSize: 24,
                  fontFamily: "OpenSans-Bold",
                }}
              >
                Forgot Password
              </Text>
            </View>
          </View>
          <View
            style={{
              marginLeft: 100,
              height: 160,
              marginTop: 28,
            }}
          >
            <Image
              source={require("../assets/forgot.png")}
              style={{ height: 157, width: 201 }}
            />
          </View>
          <View
            style={{
              flexDirection: "column",
              marginTop: 15,
              marginLeft: 65,
              height: 465,
            }}
          >
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setMethod("byEmail")}
            >
              <Text style={{}}>
                <LinearGradient
                  colors={["#6E3AA7", "#23286B"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.doneButtonWrapper}
                >
                  <Text style={styles.doneButtonText}>RESET BY EMAIL</Text>
                </LinearGradient>
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setMethod("byPhone")}
            >
              <Text style={{ marginTop: 20 }}>
                <LinearGradient
                  colors={["#6E3AA7", "#23286B"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.doneButtonWrapper}
                >
                  <Text style={styles.doneButtonText}>RESET BY PHONE</Text>
                </LinearGradient>
              </Text>
            </TouchableOpacity>

            {
              //Or Line Code
            }
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                width: "78%",
                marginTop: 10,
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
            <View
              style={{ marginTop: 10, marginLeft: 10, flexDirection: "row" }}
            >
              <Text style={{ fontFamily: "OpenSans-SemiBold" }}>
                Already Have an Account ?{" "}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
                <Text style={{ fontFamily: "OpenSans-Bold" }}>Sign in</Text>
              </TouchableOpacity>
            </View>

            {
              //DIV for google and Facebook and Twitter
            }
          </View>
        </View>
      </>
    );
  } else if (getmethod === "byEmail") {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row", height: 100 }}>
          <Image
            source={require("../assets/main_top.png")}
            style={{ position: "absolute", left: -140 }}
          />
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{
                marginTop: 70,
                marginLeft: 90,
                fontSize: 24,
                fontFamily: "OpenSans-Bold",
              }}
            >
              Forgot Password
            </Text>
          </View>
        </View>
        <View
          style={{
            marginLeft: 100,
            height: 160,
            marginTop: 28,
          }}
        >
          <Image
            source={require("../assets/forgot.png")}
            style={{ height: 157, width: 201 }}
          />
        </View>
        <View
          style={{
            flexDirection: "column",
            marginTop: 15,
            marginLeft: 65,
            height: 465,
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
              marginTop: 15,
            }}
          >
            <Entypo
              name="email"
              size={24}
              style={{ alignSelf: "center", marginRight: 5 }}
              color="#653CA0"
            />
            <TextInput
              placeholder="Enter Email"
              style={{
                width: 232,
                height: 45,
                borderRadius: 50,
                paddingLeft: 10,
                fontFamily: "OpenSans-Regular",
              }}
            ></TextInput>
          </View>

          <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
            <Text style={{ marginTop: 15 }}>
              <LinearGradient
                colors={["#6E3AA7", "#23286B"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.doneButtonWrapper}
              >
                <Text style={styles.doneButtonText}>SEND EMAIL</Text>
              </LinearGradient>
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "78%",
              marginTop: 10,
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
          <View style={{ marginTop: 10, marginLeft: 10, flexDirection: "row" }}>
            <Text style={{ fontFamily: "OpenSans-SemiBold" }}>
              Back to Forgot Screen ?{" "}
            </Text>
            <TouchableOpacity onPress={() => setMethod("none")}>
              <Text style={{ fontFamily: "OpenSans-Bold" }}>Forgot</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  } else if (getmethod === "byPhone") {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row", height: 100 }}>
          <Image
            source={require("../assets/main_top.png")}
            style={{ position: "absolute", left: -140 }}
          />
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{
                marginTop: 70,
                marginLeft: 90,
                fontSize: 24,
                fontFamily: "OpenSans-Bold",
              }}
            >
              phone ForgotPassword
            </Text>
          </View>
        </View>
        <View
          style={{
            marginLeft: 100,
            height: 160,
            marginTop: 28,
          }}
        >
          <Image
            source={require("../assets/forgot.png")}
            style={{ height: 157, width: 201 }}
          />
        </View>
        <View
          style={{
            flexDirection: "column",
            marginTop: 15,
            marginLeft: 65,
            height: 465,
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
              marginTop: 15,
            }}
          >
            <FontAwesome
              name="phone"
              size={24}
              color="black"
              style={{ alignSelf: "center", marginRight: 5 }}
              color="#653CA0"
            />
            <TextInput
              placeholder="Enter Phone Number"
              keyboardType="phone-pad"
              style={{
                width: 232,
                height: 45,
                borderRadius: 50,
                paddingLeft: 10,
                fontFamily: "OpenSans-Regular",
              }}
            ></TextInput>
          </View>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setMethod("OTP")}
          >
            <Text style={{ marginTop: 15 }}>
              <LinearGradient
                colors={["#6E3AA7", "#23286B"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.doneButtonWrapper}
              >
                <Text style={styles.doneButtonText}>SEND CODE</Text>
              </LinearGradient>
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "78%",
              marginTop: 10,
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
          <View style={{ marginTop: 10, marginLeft: 10, flexDirection: "row" }}>
            <Text style={{ fontFamily: "OpenSans-SemiBold" }}>
              Back to Forgot Screen ?{" "}
            </Text>
            <TouchableOpacity onPress={() => setMethod("none")}>
              <Text style={{ fontFamily: "OpenSans-Bold" }}>Forgot</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row", height: 100 }}>
          <Image
            source={require("../assets/main_top.png")}
            style={{ position: "absolute", left: -140 }}
          />
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{
                marginTop: 70,
                marginLeft: 90,
                fontSize: 24,
                fontFamily: "OpenSans-Bold",
              }}
            >
              OTPForgotPassword
            </Text>
          </View>
        </View>
        <View
          style={{
            marginLeft: 100,
            height: 160,
            marginTop: 28,
          }}
        >
          <Image
            source={require("../assets/forgot.png")}
            style={{ height: 157, width: 201 }}
          />
        </View>
        <View
          style={{
            flexDirection: "column",
            marginTop: 15,
            marginLeft: 65,
            height: 465,
          }}
        >
          <Text style={{ fontFamily: "OpenSans-Regular", color: colors.gray }}>
            Please type the verification code send to number
          </Text>
          <View
            style={{
              flexDirection: "row",
              width: 265,
              height: 45,
              backgroundColor: "#F1E7FF",
              borderRadius: 50,
              paddingLeft: 10,
              marginTop: 15,
            }}
          >
            <Octicons
              name="key"
              size={24}
              color="black"
              style={{ alignSelf: "center", marginRight: 5 }}
              color="#653CA0"
            />
            <TextInput
              placeholder="Enter OTP Code"
              keyboardType="phone-pad"
              style={{
                width: 232,
                height: 45,
                borderRadius: 50,
                paddingLeft: 10,
                fontFamily: "OpenSans-Regular",
              }}
            ></TextInput>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setMethod("byPhone")}
          >
            <Text style={{ marginTop: 15 }}>
              <LinearGradient
                colors={["#6E3AA7", "#23286B"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.doneButtonWrapper}
              >
                <Text style={styles.doneButtonText}>VERIFY</Text>
              </LinearGradient>
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "78%",
              marginTop: 10,
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
          <View style={{ marginTop: 10, marginLeft: 10, flexDirection: "row" }}>
            <Text style={{ fontFamily: "OpenSans-SemiBold" }}>
              Back to Forgot Screen ?{" "}
            </Text>
            <TouchableOpacity onPress={() => setMethod("byPhone")}>
              <Text style={{ fontFamily: "OpenSans-Bold" }}>Forgot</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: "red",
    //alignSelf:'center'
  },
  internalContents: {
    width: "85%",
  },
  container: {
    flex: 1,
    //  backgroundColor: "#fff",
    // alignItems: "center",
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
    paddingBottom: 10,
    paddingTop: 0,
  },
  text: {
    fontSize: 30,
    color: "black",
    marginBottom: 5,
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

export default ForgotPassword;
