import React, { useEffect, useState } from "react";
import { TextInput, StyleSheet, Text, View, Button, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomButton from "../component/ButtonComponent";
import * as firebase from "firebase";

import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";
import "firebase/firestore";
import colors from "../assets/colors/colors";

const SignUp = ({ navigation, route }) => {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [name, setname] = useState({ fName: "", LName: "" });
  const [getmethod, setMethod] = useState("none");

  const onSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, pass)
      .then((user) => {
        console.log("User INformation is ", user);
        firebase
          .auth()
          .signInWithEmailAndPassword(email, pass)
          .then((user) => {
            user = firebase.auth().currentUser;
            user.updateProfile({
              displayName: name.fName + "," + name.LName,
            });
            const dbh = firebase.firestore();
            dbh.collection("users").doc(user.uid).set({
              name: name,
              email: email,
            });
            alert("User Created");
            setemail("");
            setpass("");
            setname({ fName: "", LName: "" });
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorCode);
            // navigation.navigate('SignIn')
          });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode);
        // navigation.navigate('SignIn')
      });
  };

  if (getmethod === "none") {
    return (
      <>
        <View style={styles.container}>
          <View style={{ flexDirection: "row", height: 70 }}>
            <Image source={require("../assets/signup_top1.png")} />
            <View style={{ flexDirection: "column" }}>
              <Text
                style={{
                  marginTop: 60,
                  marginLeft: 15,
                  fontSize: 24,
                  fontFamily: "OpenSans-Bold",
                }}
              >
                SIGNUP
              </Text>
            </View>
          </View>
          <View
            style={{
              marginLeft: 100,
              height: 200,
              marginTop: 28,
            }}
          >
            <Image
              source={require("../assets/signup.png")}
              style={{ height: 200, width: 200 }}
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
              <Text style={{ marginTop: 15 }}>
                <LinearGradient
                  colors={["#6E3AA7", "#23286B"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.doneButtonWrapper}
                >
                  <Text style={styles.doneButtonText}>SIGNUP BY EMAIL</Text>
                </LinearGradient>
              </Text>
            </TouchableOpacity>
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
                  <Text style={styles.doneButtonText}>SIGNUP BY PHONE</Text>
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
        {/** 
      <View style={styles.container}>
        <Image style={styles.ImagesSty} source={require('../Images/WelcomePageLogo.png')}/>
        <View style={styles.internalContents}>
          <Text style={styles.text}>Sign Up</Text>
          <Text style={{...styles.label, marginBottom: -5}}>First Name</Text>
          <View style={styles.inputContainer}>
            <TextInput 
                style={styles.textInput}
                value={name.fName}
                onChangeText={(text)=>setname({fName: text, LName: name.LName})}
                placeholder="Enter First Name"
                
                />
        </View>
        <Text style={{...styles.label, marginBottom: -5}}>Last Name</Text>
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.textInput}
                value={name.LName}
                onChangeText={(text)=>setname({fName: name.fName, LName: text})}
                placeholder="Enter Last Name"
                />
        </View>
        <Text style={{...styles.label, marginBottom: -5}}>Email</Text>
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.textInput}
                placeholder="Enter Email"
                value={email}
                onChangeText={(text)=>setemail(text)}
                />
        </View>
        <Text style={{...styles.label, marginBottom: -5}}>Password</Text>
        <View style={styles.inputContainer}>
        <TextInput 
                style={styles.textInput}
                placeholder="Enter Password"
                value={pass}
                onChangeText={(text)=>setpass(text)}
                />
        </View>
        </View>

        <View style={styles.button}>
        <CustomButton  text="Countinue" color='red' onPressEvent={()=>onSignUp()} />
        </View>
        <View style={{flexDirection:"row", margin: 20, justifyContent: "space-between", width: "50%", alignSelf: "center"}}>
        <Text style={styles.Hitext}>Have an Account ?</Text>
        <TouchableOpacity 
        onPress={()=>navigation.navigate('Signin')}>
        <Text style={{...styles.label, alignSelf: "center", margin: 9}}>SignIn</Text>
        </TouchableOpacity>
        </View>
        
      </View>
      */}
      </>
    );
  } else if (getmethod === "byEmail") {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row", height: 70 }}>
          <Image source={require("../assets/signup_top1.png")} />
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{
                marginTop: 60,
                marginLeft: 15,
                fontSize: 24,
                fontFamily: "OpenSans-Bold",
              }}
            >
              SIGNUP
            </Text>
          </View>
        </View>
        <View
          style={{
            marginLeft: 100,
            height: 200,
            marginTop: 28,
          }}
        >
          <Image
            source={require("../assets/signup.png")}
            style={{ height: 200, width: 200 }}
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
            }}
          >
            <FontAwesome
              name="user"
              size={24}
              style={{ alignSelf: "center", marginRight: 5 }}
              color="#653CA0"
            />
            <TextInput
              placeholder="Enter First Name"
              value={name.fName}
              onChangeText={(text) =>
                setname({ fName: text, LName: name.LName })
              }
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
              backgroundColor: "#F1E7FF",
              borderRadius: 50,
              paddingLeft: 10,
              marginTop: 15,
            }}
          >
            <FontAwesome
              name="user"
              size={24}
              style={{ alignSelf: "center", marginRight: 5 }}
              color="#653CA0"
            />
            <TextInput
              placeholder="Enter Last Name"
              value={name.LName}
              onChangeText={(text) =>
                setname({ fName: name.fName, LName: text })
              }
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
              value={name.fName}
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
              value={pass}
              onChangeText={(text) => setpass(text)}
              secureTextEntry
              style={{
                width: 195,
                height: 45,
                borderRadius: 50,
                paddingLeft: 10,
                fontFamily: "OpenSans-Regular",
              }}
            ></TextInput>

            <FontAwesome
              name="eye"
              size={24}
              style={{ alignSelf: "center", marginLeft: 3, marginRight: 5 }}
              color="#653CA0"
            />
          </View>

          <TouchableOpacity activeOpacity={0.7} onPress={() => onSignUp()}>
            <Text style={{ marginTop: 15 }}>
              <LinearGradient
                colors={["#6E3AA7", "#23286B"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.doneButtonWrapper}
              >
                <Text style={styles.doneButtonText}>SIGNUP</Text>
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
              Already Have an Account ?{" "}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
              <Text style={{ fontFamily: "OpenSans-Bold" }}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row", height: 70 }}>
          <Image source={require("../assets/signup_top1.png")} />
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{
                marginTop: 60,
                marginLeft: 15,
                fontSize: 24,
                fontFamily: "OpenSans-Bold",
              }}
            >
              SIGNUP
            </Text>
          </View>
        </View>
        <View
          style={{
            marginLeft: 100,
            height: 200,
            marginTop: 28,
          }}
        >
          <Image
            source={require("../assets/signup.png")}
            style={{ height: 200, width: 200 }}
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
            }}
          >
            <FontAwesome
              name="user"
              size={24}
              style={{ alignSelf: "center", marginRight: 5 }}
              color="#653CA0"
            />
            <TextInput
              placeholder="Enter First Name"
              value={name.fName}
              onChangeText={(text) =>
                setname({ fName: text, LName: name.LName })
              }
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
              backgroundColor: "#F1E7FF",
              borderRadius: 50,
              paddingLeft: 10,
              marginTop: 15,
            }}
          >
            <FontAwesome
              name="user"
              size={24}
              style={{ alignSelf: "center", marginRight: 5 }}
              color="#653CA0"
            />
            <TextInput
              placeholder="Enter Last Name"
              value={name.LName}
              onChangeText={(text) =>
                setname({ fName: name.fName, LName: text })
              }
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
              value={name.fName}
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
              value={pass}
              onChangeText={(text) => setpass(text)}
              secureTextEntry
              style={{
                width: 195,
                height: 45,
                borderRadius: 50,
                paddingLeft: 10,
                fontFamily: "OpenSans-Regular",
              }}
            ></TextInput>

            <FontAwesome
              name="eye"
              size={24}
              style={{ alignSelf: "center", marginLeft: 3, marginRight: 5 }}
              color="#653CA0"
            />
          </View>

          <TouchableOpacity activeOpacity={0.7} onPress={() => onSignUp()}>
            <Text style={{ marginTop: 15 }}>
              <LinearGradient
                colors={["#6E3AA7", "#23286B"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.doneButtonWrapper}
              >
                <Text style={styles.doneButtonText}>SIGNUP</Text>
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
              Already Have an Account ?{" "}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
              <Text style={{ fontFamily: "OpenSans-Bold" }}>Sign in</Text>
            </TouchableOpacity>
          </View>

          {
            //DIV for google and Facebook and Twitter
            /**
          <View
            style={{
              flexDirection: "row",
              width: 260,
              justifyContent: "space-between",
              marginTop: 10,
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
           */
          }
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

export default SignUp;
