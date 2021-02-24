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
import CustomButton from "../component/ButtonComponent";
import * as firebase from "firebase";

import RadioGroup from "react-native-custom-radio-group";
import { LinearGradient } from "expo-linear-gradient";

import colors from "../assets/colors/colors";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";

const EditProfile = ({ navigation, route }) => {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [name, setname] = useState({ fName: "", LName: "" });
  const [getRadioState, setRadioState] = useState({
    activeBgColor: "white",
    activeTxtColor: "black",
    inActiveBgColor: "white",
    inActiveTxtColor: "black",
  });
  const [getRadioState1, setRadioState1] = useState({
    activeBgColor: "white",
    activeTxtColor: "black",
    inActiveBgColor: "white",
    inActiveTxtColor: "black",
  });
  const [getquestion, setquestion] = useState({
    quest: "What is the name of your first pet?",
  });

  const changeStyle1 = (value) => {
    if (value == "transport_car") {
      setRadioState1({
        activeBgColor: "red",
        activeTxtColor: "white",
        inActiveBgColor: "white",
        inActiveTxtColor: "black",
      });
    } else if (value == "transport_bike") {
      setRadioState1({
        activeBgColor: "blue",
        activeTxtColor: "white",
        inActiveBgColor: "white",
        inActiveTxtColor: "black",
      });
    } else if (value == "transport_bus") {
      setRadioState1({
        activeBgColor: "green",
        activeTxtColor: "white",
        inActiveBgColor: "white",
        inActiveTxtColor: "black",
      });
    }
  };
  const changeStyle = (value) => {
    if (value == "transport_car") {
      setRadioState({
        activeBgColor: "red",
        activeTxtColor: "white",
        inActiveBgColor: "white",
        inActiveTxtColor: "black",
      });
    } else if (value == "transport_bike") {
      setRadioState({
        activeBgColor: "blue",
        activeTxtColor: "white",
        inActiveBgColor: "white",
        inActiveTxtColor: "black",
      });
    } else if (value == "transport_bus") {
      setRadioState({
        activeBgColor: "green",
        activeTxtColor: "white",
        inActiveBgColor: "white",
        inActiveTxtColor: "black",
      });
    }
  };
  const Arrays = [{ key: "0", data: "Search A Book", backColor: "red" }];

  const radioGroupList = [
    {
      label: "Only Me",
      value: "transport_car",
    },
    {
      label: "Friends",
      value: "transport_bike",
    },
    {
      label: "Public",
      value: "transport_bus",
    },
  ];
  const onUpdateProfile = () => {
    var user = firebase.auth().currentUser;
    user
      .updateProfile({
        displayName: name.fName + "," + name.LName,
      })
      .then(function () {
        alert("Information Updated");
      })
      .catch(function (error) {
        // An error happened.
      });
    if (pass.length > 0) {
      user
        .updatePassword(pass)
        .then(function () {
          // Update successful.
          alert("Information Updated");
        })
        .catch(function (error) {
          // An error happened.
        });
    }
  };

  useEffect(() => {
    var user = firebase.auth().currentUser;
    console.log(user);
    //  console.log(user);
    var disName = user.displayName;
    var disNamear = disName.split(",");
    setname({ fName: disNamear[0], LName: disNamear[1] });
    //setemail()
  }, []);
  return (
    <>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", height: 100 }}>
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
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{
                marginTop: 50,
                marginLeft: 45,
                fontSize: 24,
                fontFamily: "OpenSans-Bold",
              }}
            >
              Edit Profile
            </Text>
          </View>
        </View>
        <View
          style={{
            marginLeft: 130,
            height: 130,
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
                  marginTop: 15,
                  marginLeft: 65,
                }}
              >
                {
                  //Input Fields
                }
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
                    placeholder="Enter old Password"
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
                    size={20}
                    style={{
                      alignSelf: "center",
                      marginLeft: 3,
                      marginRight: 5,
                    }}
                    color="#653CA0"
                  />
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
                    placeholder="Enter new Password"
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
                    size={20}
                    style={{
                      alignSelf: "center",
                      marginLeft: 3,
                      marginRight: 5,
                    }}
                    color="#653CA0"
                  />
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
                    placeholder="Confirm new Password"
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
                    size={20}
                    style={{
                      alignSelf: "center",
                      marginLeft: 3,
                      marginRight: 5,
                    }}
                    color="#653CA0"
                  />
                </View>

                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => onSignUp()}
                >
                  <Text style={{ marginTop: 15 }}>
                    <LinearGradient
                      colors={["#6E3AA7", "#23286B"]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      style={styles.doneButtonWrapper}
                    >
                      <Text style={styles.doneButtonText}>UPDATE PASSWORD</Text>
                    </LinearGradient>
                  </Text>
                </TouchableOpacity>
                {
                  //Or LIne
                }
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    width: "78%",
                    marginTop: 15,
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      height: 1,
                      backgroundColor: "black",
                      alignSelf: "center",
                    }}
                  />
                  <View>
                    <Text
                      style={{
                        textAlign: "center",
                        fontFamily: "OpenSans-SemiBold",
                      }}
                    >
                      Privacy Setting
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      height: 1,
                      backgroundColor: "black",
                      alignSelf: "center",
                    }}
                  />
                </View>
                {
                  //Privacy Section Start
                }
                <View style={{ marginTop: 5 }}>
                  <View>
                    <Text
                      style={{
                        fontFamily: "OpenSans-Regular",
                        fontSize: 16,
                        color: colors.gray,
                      }}
                    >
                      {" "}
                      Who can see your Profile ?{" "}
                    </Text>
                    <RadioGroup
                      radioGroupList={radioGroupList}
                      buttonContainerActiveStyle={{
                        backgroundColor: getRadioState.activeBgColor,
                      }}
                      buttonTextActiveStyle={{
                        color: getRadioState.activeTxtColor,
                      }}
                      buttonContainerInactiveStyle={{
                        backgroundColor: getRadioState.inActiveBgColor,
                      }}
                      buttonTextInactiveStyle={{
                        color: getRadioState.inActiveTxtColor,
                      }}
                      onChange={(value) => {
                        changeStyle(value);
                      }}
                      buttonTextStyle={{
                        fontSize: 10,
                        fontFamily: "OpenSans-Bold",
                      }}
                      buttonContainerStyle={{
                        borderRadius: 20,
                        margin: 10,
                      }}
                      containerStyle={{
                        width: "80%",
                      }}
                    />
                  </View>
                  <Text
                    style={{
                      fontFamily: "OpenSans-Regular",
                      fontSize: 16,
                      color: colors.gray,
                    }}
                  >
                    Who can view your Collections ?
                  </Text>
                  <RadioGroup
                    radioGroupList={radioGroupList}
                    buttonContainerActiveStyle={{
                      backgroundColor: getRadioState1.activeBgColor,
                    }}
                    buttonTextActiveStyle={{
                      color: getRadioState1.activeTxtColor,
                    }}
                    buttonContainerInactiveStyle={{
                      backgroundColor: getRadioState1.inActiveBgColor,
                    }}
                    buttonTextInactiveStyle={{
                      color: getRadioState1.inActiveTxtColor,
                    }}
                    onChange={(value) => {
                      changeStyle1(value);
                    }}
                    buttonTextStyle={{
                      fontSize: 10,
                      fontFamily: "OpenSans-Bold",
                    }}
                    buttonContainerStyle={{
                      borderRadius: 20,
                      margin: 10,
                    }}
                    containerStyle={{
                      width: "80%",
                    }}
                  />
                </View>
                {
                  //Or LIne
                }
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    width: "78%",
                    marginTop: 5,
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      height: 1,
                      backgroundColor: "black",
                      alignSelf: "center",
                    }}
                  />
                  <View>
                    <Text
                      style={{
                        textAlign: "center",
                        fontFamily: "OpenSans-SemiBold",
                      }}
                    >
                      Security Setting
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      height: 1,
                      backgroundColor: "black",
                      alignSelf: "center",
                    }}
                  />
                </View>
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
                    Select A security Question ?{" "}
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
                      label="What is the name of your first pet?"
                      value="pet"
                    />
                    <Picker.Item
                      label="What is the middle name of your Mother?"
                      value="mothMid"
                    />
                    <Picker.Item
                      label="What is the name of your high School?"
                      value="high"
                    />
                    <Picker.Item
                      label="In which City you were born?"
                      value="born"
                    />
                  </Picker>
                  <Text
                    style={{
                      fontFamily: "OpenSans-Regular",
                      fontSize: 16,
                      color: colors.gray,
                      marginTop: -3,
                    }}
                  >
                    {" "}
                    Enter Recovery Email ?{" "}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      width: 265,
                      height: 45,
                      backgroundColor: "#F1E7FF",
                      borderRadius: 50,
                      paddingLeft: 10,
                      marginTop: 10,
                    }}
                  >
                    <Fontisto
                      name="email"
                      size={24}
                      style={{ alignSelf: "center", marginRight: 5 }}
                      color="#653CA0"
                    />
                    <TextInput
                      placeholder="Enter Email"
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
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => onSignUp()}
                  >
                    <Text style={{ marginTop: 15 }}>
                      <LinearGradient
                        colors={["#6E3AA7", "#23286B"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.doneButtonWrapper}
                      >
                        <Text style={styles.doneButtonText}>UPDATE INFO</Text>
                      </LinearGradient>
                    </Text>
                  </TouchableOpacity>
                  <Image
                    source={require("../assets/EditProfile1.png")}
                    style={{
                      marginTop: 20,
                      marginBottom: 50,
                      left: 30,
                    }}
                  />
                </View>
              </View>
            );
          }}
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

export default EditProfile;
