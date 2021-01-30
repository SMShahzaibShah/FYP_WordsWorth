import React, { useEffect, useState } from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  FlatList,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as firebase from "firebase";

import { Entypo } from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";

import colors from "../assets/colors/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";

const audioSettings = ({ navigation, route }) => {
  const [name, setname] = useState({ fName: "", LName: "" });

  const [getquestion, setquestion] = useState({
    quest: "Microsoft David Desktop",
  });

  const Arrays = [{ key: "0", data: "Search A Book", backColor: "red" }];

  useEffect(() => {
    var user = firebase.auth().currentUser;
    //  console.log(user);
    var disName = user.displayName;
    var disNamear = disName.split(",");
    setname({ fName: disNamear[0], LName: disNamear[1] });
    //setemail()
  }, []);
  return (
    <>
      <View style={styles.container}>
        {
          //go Back Button
        }
        <View style={{ flexDirection: "row", height: 50 }}>
          <Image
            source={require("../assets/main_top.png")}
            style={{ position: "absolute", left: -140 }}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}
          >
            <View
              style={{
                marginTop: 20,
                left: 20,
                width: 80,
                flexDirection: "row",
              }}
            >
              <MaterialIcons name="arrow-back" size={24} color="black" />
              <Text style={{ marginLeft: -1, marginTop: 1 }}> Back</Text>
            </View>
          </TouchableOpacity>
        </View>
        {
          //go Back Button close
        }
        {
          //Page Name
        }
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontFamily: "OpenSans-Bold",
            }}
          >
            AUDIO SETTINGS
          </Text>
        </View>

        {
          //Page Name Close
        }
        <View
          style={{
            // marginLeft: 130,
            marginTop: 10,
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <Image source={require("../assets/defaultUser.png")} />
          <View style={{ flexDirection: "row", marginLeft: 5, marginTop: 3 }}>
            <Text style={{ fontFamily: "OpenSans-Bold", color: colors.gray }}>
              {name.fName}{" "}
            </Text>
            <Text
              style={{
                marginLeft: 5,
                fontFamily: "OpenSans-Bold",
                color: colors.gray,
              }}
            >
              {name.LName}
            </Text>
          </View>
        </View>
        {/**        <Image
          source={require("../assets/EditProfile1.png")}
          style={{ marginTop: 666, right: 5, position: "absolute" }}
        />
         */}

        <FlatList
          data={Arrays}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  flexDirection: "column",
                  marginTop: 25,
                  marginLeft: 65,
                }}
              >
                {
                  //Security Settings
                }
                <View style={{ marginTop: 10 }}>
                  <Text
                    style={{
                      fontFamily: "OpenSans-Regular",
                      fontSize: 16,
                      color: colors.gray,
                    }}
                  >
                    {" "}
                    Select Narrator ?{" "}
                  </Text>
                  <Picker
                    selectedValue={getquestion}
                    style={{
                      height: 50,
                      width: 270,
                    }}
                    onValueChange={(itemValue, itemIndex) =>
                      setquestion({ quest: itemValue })
                    }
                    mode="dropdown"
                  >
                    <Picker.Item
                      label="Microsoft David Desktop"
                      value="Microsoft David Desktop"
                    />
                    <Picker.Item
                      label="Microsoft James"
                      value="Microsoft James"
                    />
                    <Picker.Item
                      label="Microsoft Linda"
                      value="Microsoft Linda"
                    />
                    <Picker.Item
                      label="Microsoft Richard"
                      value="Microsoft Richard"
                    />
                    <Picker.Item
                      label="Microsoft George"
                      value="Microsoft George"
                    />
                    <Picker.Item
                      label="Microsoft Susan"
                      value="Microsoft Susan"
                    />
                    <Picker.Item
                      label="Microsoft Sean"
                      value="Microsoft Sean"
                    />
                    <Picker.Item
                      label="Microsoft Heera"
                      value="Microsoft Heera"
                    />
                    <Picker.Item
                      label="Microsoft Ravi"
                      value="Microsoft Ravi"
                    />
                    <Picker.Item
                      label="Microsoft Mark"
                      value="Microsoft Mark"
                    />
                    <Picker.Item
                      label="Microsoft Hazel Desktop"
                      value="Microsoft Hazel Desktop"
                    />
                    <Picker.Item
                      label="Microsoft Catherine"
                      value="Microsoft Catherine"
                    />
                    <Picker.Item
                      label="Microsoft Zira Desktop"
                      value="Microsoft Zira Desktop"
                    />
                  </Picker>
                  <Text
                    style={{
                      fontFamily: "OpenSans-Regular",
                      fontSize: 16,
                      color: colors.gray,
                    }}
                  >
                    {" "}
                    Select Speed ?{" "}
                  </Text>
                  <Picker
                    selectedValue={getquestion}
                    style={{
                      height: 50,
                      width: 270,
                    }}
                    onValueChange={(itemValue, itemIndex) =>
                      setquestion({ quest: itemValue })
                    }
                    mode="dropdown"
                  >
                    <Picker.Item label="0.5" value="Microsoft David Desktop" />
                    <Picker.Item label="0.75" value="Microsoft James" />
                    <Picker.Item label="1.0" value="Microsoft Linda" />
                    <Picker.Item label="1.25" value="Microsoft Richard" />
                    <Picker.Item label="1.5" value="Microsoft George" />
                    <Picker.Item label="2" value="Microsoft Susan" />
                  </Picker>
                </View>
                <View style={{ marginTop: 10, width: "80%" }}>
                  <Text
                    style={{
                      fontFamily: "OpenSans-Regular",
                      fontSize: 16,
                      color: colors.gray,
                    }}
                  >
                    {" "}
                    Sample Audio{" "}
                  </Text>
                  <View
                    style={{
                      alignSelf: "center",
                      justifyContent: "center",
                      backgroundColor: "#F1E7FF",
                      borderRadius: 50,
                      width: 50,
                      height: 50,
                      padding: 3,
                    }}
                  >
                    <Entypo
                      name="controller-play"
                      size={38}
                      color="#653CA0"
                      style={{ alignSelf: "center", marginLeft: 3 }}
                    />
                  </View>
                </View>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => console.log("Hy")}
                >
                  <Text style={{ marginTop: 15 }}>
                    <LinearGradient
                      colors={["#6E3AA7", "#23286B"]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      style={styles.doneButtonWrapper}
                    >
                      <Text style={styles.doneButtonText}>SAVE</Text>
                    </LinearGradient>
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
        <Image
          source={require("../assets/main_bottom4.png")}
          style={{ position: "absolute", bottom: -80, right: 0, width: "100%" }}
        />
      </View>
      {/** 
      <View style={styles.container}>
        <Image
          style={styles.ImagesSty}
          source={require("../Images/WelcomePageLogo.png")}
        />
        <View style={styles.internalContents}>
          <Text style={styles.text}>Edit Profile</Text>
          <Text style={{ ...styles.label, marginBottom: -5 }}>First Name</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              value={name.fName}
              onChangeText={(text) =>
                setname({ fName: text, LName: name.LName })
              }
            />
          </View>
          <Text style={{ ...styles.label, marginBottom: -5 }}>Last Name</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Last Name"
              value={name.LName}
              onChangeText={(text) =>
                setname({ fName: name.fName, LName: text })
              }
            />
          </View>
          <Text style={{ ...styles.label, marginBottom: -5 }}>Password</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder=" Password"
              value={pass}
              onChangeText={(text) => setpass(text)}
              secureTextEntry
            />
          </View>
        </View>

        <View
          style={{
            ...styles.button,
            marginBottom: -5,
            flexDirection: "row",
            marginLeft: 5,
            justifyContent: "space-between",
            width: "60%",
          }}
        >
          <CustomButton
            text="Update"
            color="green"
            onPressEvent={() => onUpdateProfile()}
          />
          <CustomButton
            text="Cancel"
            color="red"
            onPressEvent={() => navigation.navigate("Dashboard")}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            margin: 20,
            justifyContent: "space-between",
            width: "50%",
            alignSelf: "center",
          }}
        >
          <Text style={styles.Hitext}>Have an Account ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
            <Text style={{ ...styles.label, alignSelf: "center", margin: 9 }}>
              SignIn
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      */}
    </>
  );
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
    justifyContent: "center",
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

export default audioSettings;
