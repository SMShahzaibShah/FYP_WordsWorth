import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import CustomButton from "../component/ButtonComponent";

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import colors from "../assets/colors/colors";
const firebaseBooksData = require("firebase");

import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";

const Search = ({ navigation, route }) => {
  const [getsearch, setSearch] = useState("loading");
  const [getbookInfo, setbookInfo] = useState("");
  const [noRes, setRes] = useState(true);
  const [getbook, setbooks] = useState();
  const [getF, setF] = useState({});

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  useEffect(() => {
    // Initialize Firebase
    try {
      sec = firebaseBooksData.initializeApp(config, "Secondary");
      // setSec(secon)
      console.log("Sa");
    } catch (exception) {
      //console.log(exception)
      sec = firebaseBooksData.apps[firebaseBooksData.apps.length - 1];
    }
    sec
      .database()
      .ref("Books")
      .on("value", function (snapshot) {
        console.log("as");
        var data = "";
        var temp = [];
        snapshot.forEach(function (childSnapshot) {
          data = childSnapshot.val();
          temp.push(data);
          //console.log(temp);
        });
        setbooks(temp);
        setSearch("none");
      });
    //console.log(getbook);
  }, []);

  var config = {
    apiKey: "AIzaSyC_zg-7N_LpvkhLAymvksM7Y9lrcA0AkjY",
    authDomain: "dogtag-e36b1.firebaseapp.com",
    databaseURL: "https://dogtag-e36b1.firebaseio.com/",
  };
  var sec;

  const getUrl = (img) => {
    //console.log(img.split("url:")[1]);
    return img.split("url:")[1];
  };

  const FlatListData = (
    <View style={styles.flatList}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={getF}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() =>
              navigation.navigate("bookDetails", { BookDetails: item })
            }
          >
            <View style={styles.ScrollView}>
              <View
                style={{
                  ...styles.ScrollViewItem,
                }}
              >
                {
                  //div for Image
                }
                <View
                  style={{
                    //backgroundColor: "blue",
                    height: 180,
                    width: 110,
                    //margin: 5,
                    marginRight: 5,
                    marginTop: 2,
                    borderRadius: 5,
                  }}
                >
                  <Image
                    source={{
                      uri: getUrl(item.image),
                    }}
                    style={{
                      height: 180,
                      width: 110,
                      borderRadius: 5,
                    }}
                  />
                </View>

                {
                  //div for Image close
                }
                {
                  //div for Text close
                }
                <View
                  style={{
                    flexDirection: "column",
                    //marginLeft: -40,
                    //  backgroundColor: "cyan",
                    width: 160,
                    marginTop: 5,
                  }}
                >
                  <Text
                    style={{
                      ...styles.ScrollViewText,
                      fontSize: 14,
                      color: colors.blue,
                      fontFamily: "OpenSans-SemiBold",
                      // height: 65,
                      textAlign: "justify",
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      ...styles.ScrollViewText,
                      marginTop: 15,
                      height: 95,
                      textAlign: "justify",
                    }}
                  >
                    {item.description}
                  </Text>
                </View>
              </View>
              <View style={{ alignSelf: "center" }}>
                <Feather name="download" size={30} color="black" />
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
  function filterList() {
    //console.log(text);
    var list = getbook.filter((item) => item.name.includes(getbookInfo));
    setSearch("Yes");
    //    console.log(list)
    setF(list);
    if (list.length < 1) {
      setRes(false);
    } else {
      setRes(true);
    }
  }

  const Loading = (
    <View style={{ justifyContent: "center", alignSelf: "center" }}>
      <ActivityIndicator size="large" />
      <Text style={{ fontSize: 18, fontFamily: "OpenSans-Bold" }}>
        Sorry We were unable to Find Book
      </Text>
    </View>
  );
  if (getsearch == "loading") {
    return (
      <>
        <View style={{ justifyContent: "center", alignSelf: "center" }}>
          <ActivityIndicator size="large" />
          <Text style={{ fontSize: 18, fontFamily: "OpenSans-Bold" }}>
            Loading Please Wait
          </Text>
        </View>
      </>
    );
  } else if (getsearch === "none") {
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
            //Last Image
          }
          <Image
            source={require("../assets/main_bottom2.png")}
            style={{ bottom: 0, position: "absolute" }}
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
              onChangeText={(text) => setbookInfo(text)}
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
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => filterList()}
              disabled={getbookInfo <= 0}
            >
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
  } else {
    return (
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
          //Last Image
        }
        <Image
          source={require("../assets/main_bottom2.png")}
          style={{ bottom: 0, position: "absolute" }}
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
          //Search DIVE
        }
        <View
          style={{
            justifyContent: "center",
            alignSelf: "center",
            marginTop: 60,
            width: "90%",
          }}
        >
          {
            //Back Button and Dislaying Text
          }
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setSearch("none")}
            >
              <View style={{ flexDirection: "row" }}>
                <MaterialIcons name="arrow-back" size={24} color="black" />
                <Text style={{ alignSelf: "center" }}>Back</Text>
              </View>
            </TouchableOpacity>
            {
              //Text Part
            }
            <View>
              <Text style={{ color: colors.blue, fontSize: 16 }}>
                Displaying Result for
              </Text>
              <Text style={{ color: colors.gray, fontSize: 14 }}>
                {getbookInfo}{" "}
              </Text>
            </View>
          </View>
        </View>
        {
          //Books Displaying Part
        }
        <View style={styles.flatList}>
          {noRes === true ? FlatListData : Loading}
        </View>
      </View>
    );
  }
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
  flatList: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "space-between",
    width: "90%",
    paddingTop: 5,
  },
  ScrollViewItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    //backgroundColor: "yellow",
    alignSelf: "center",
    //margin: 5,
    width: "80%",
    borderRadius: 5,
    //paddingLeft: 5,
    //paddingRight: 5,
    //height: 130,
    height: 180,
  },
  ScrollViewText: {
    fontSize: 12,
    fontFamily: "OpenSans-Regular",
    color: colors.gray,
    height: 60,
    width: 155,
    marginTop: 2,
    //backgroundColor: "white",
  },
  ScrollView: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    //height: 150,
    height: 200,
    //backgroundColor: "red",
    borderRadius: 10,
  },
});

export default Search;
