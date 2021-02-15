import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import colors from "../assets/colors/colors";

const DashBoard = ({ navigation, route }) => {
  const Arrays = [{ key: "0", data: "Search A Book", backColor: "red" }];

  return (
    <>
      <View style={styles.container}>
        {
          //Image for background
        }
        <Image
          source={require("../assets/dashboardBackground.png")}
          style={{ position: "absolute", marginTop: 80 }}
        />
        {
          //DIV for Menu and Edit
        }
        <View
          style={{
            flexDirection: "row",
            marginTop: 35,
            width: "80%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.openDrawer()}
          >
            <Ionicons name="ios-menu" size={40} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("EditProfile")}
          >
            <FontAwesome5 name="user-edit" size={24} color="black" />
          </TouchableOpacity>
        </View>
        {
          //Text on Dashboard
        }
        <View style={{ width: "100%", marginLeft: 76 }}>
          <Text
            style={{
              fontFamily: "Roboto-Regular",
              fontSize: 20,
              color: colors.gray,
              marginTop: 20,
              //backgroundColor: "red",
            }}
          >
            DASHBOARD
          </Text>
        </View>
        {
          //Elements on Dashboard
        }
        <FlatList
          data={Arrays}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <View style={{ flexDirection: "row", width: "92%" }}>
                <View style={{ flexDirection: "column" }}>
                  {
                    //Search A book
                  }
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate("Search")}
                  >
                    <View
                      style={{
                        height: 210,
                        width: 176.43,
                        marginTop: 65,
                        borderRadius: 10,
                      }}
                    >
                      <Image
                        source={require("../assets/serachBook.png")}
                        style={{ position: "absolute" }}
                      />
                      <Text
                        style={{
                          marginTop: 175,
                          // left: 18,
                          fontSize: 18,
                          fontFamily: "Roboto-Bold",
                          color: "#FFECCC",
                          alignSelf: "center",
                        }}
                      >
                        Search Book
                      </Text>
                    </View>
                  </TouchableOpacity>
                  {
                    //Audio Libray
                  }
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate("audioLibray")}
                  >
                    <View
                      style={{
                        height: 169,
                        width: 177.43,

                        marginTop: 20,
                        borderRadius: 10,
                      }}
                    >
                      <Image
                        source={require("../assets/audioLibrary.png")}
                        style={{ position: "absolute" }}
                      />
                      <Text
                        style={{
                          marginTop: 130,
                          // left: 18,
                          fontSize: 18,
                          fontFamily: "Roboto-Bold",
                          color: "#3F414E",
                          alignSelf: "center",
                        }}
                      >
                        Audio Libray
                      </Text>
                    </View>
                  </TouchableOpacity>
                  {
                    //Books Suggestion
                  }
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate("bookSuggestions")}
                  >
                    <View
                      style={{
                        height: 210,
                        width: 177.43,

                        marginTop: 20,
                        borderRadius: 10,
                      }}
                    >
                      <Image
                        source={require("../assets/Suggestions.png")}
                        style={{ position: "absolute" }}
                      />
                      <Text
                        style={{
                          marginTop: 170,
                          //  left: 18,
                          fontSize: 18,
                          fontFamily: "Roboto-Bold",
                          color: "#FFECCC",
                          alignSelf: "center",
                        }}
                      >
                        Book Suggestion
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "column" }}>
                  {
                    //book Library
                  }
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate("bookslibrary")}
                  >
                    <View
                      style={{
                        height: 167,
                        width: 176.43,

                        marginTop: 65,
                        marginLeft: 10,
                        borderRadius: 10,
                      }}
                    >
                      <Image
                        source={require("../assets/BookLibrary.png")}
                        style={{ position: "absolute" }}
                      />
                      <Text
                        style={{
                          marginTop: 135,
                          // left: 18,
                          fontSize: 18,
                          fontFamily: "Roboto-Bold",
                          color: "#FEF9F3",
                          alignSelf: "center",
                        }}
                      >
                        Book Libray
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate("socailSegment")}
                  >
                    {
                      //Socail
                    }
                    <View
                      style={{
                        height: 210,
                        width: 177.43,

                        marginTop: 20,
                        marginLeft: 10,
                        borderRadius: 10,
                      }}
                    >
                      <Image
                        source={require("../assets/Friends.png")}
                        style={{ position: "absolute" }}
                      />
                      <Text
                        style={{
                          marginTop: 170,
                          //   left: 18,
                          fontSize: 18,
                          fontFamily: "Roboto-Bold",
                          color: "#3F414E",
                          alignSelf: "center",
                        }}
                      >
                        Socail Segment
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate("collections")}
                  >
                    {
                      //Collection
                    }
                    <View
                      style={{
                        height: 167,
                        width: 177.43,

                        marginTop: 20,
                        marginLeft: 10,
                        borderRadius: 10,
                      }}
                    >
                      <Image
                        source={require("../assets/collection.png")}
                        style={{ position: "absolute" }}
                      />
                      <Text
                        style={{
                          marginTop: 120,
                          // left: 18,
                          fontSize: 18,
                          fontFamily: "Roboto-Bold",
                          color: "#FEF9F3",
                          alignSelf: "center",
                        }}
                      >
                        Collections
                      </Text>
                    </View>
                  </TouchableOpacity>
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
          <View
            style={{
              flexDirection: "row",
              width: "70%",
              justifyContent: "space-between",
              alignSelf: "center",
            }}
          >
            <Text style={styles.text}>Dashboard</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("EditProfile")}
            >
              <Text style={{ fontSize: 20 }}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
          {
            //<View style={styles.internalContents}>
            // {alert(route.params.users.user.email)}
            // </View>
          }
          {scrolView}
        </View>
        */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  internalContents: {
    width: "85%",
  },
  ImagesSty: {
    width: 250,
    height: 60,
    marginTop: 100,
    marginBottom: 50,
    //justifyContent: "center"
  },
  crossScrollViewText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  scrollViewText: {
    fontSize: 22,
    color: "white",
  },
  scrollView: {
    width: "80%",
  },
  scrollViewItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor:"grey",
    alignSelf: "center",
    padding: 10,
    margin: 5,
    width: "97%",
    height: 60,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: 'center',
    //paddingTop: 40,
  },
  text: {
    fontSize: 30,
    color: "black",
  },
  divContainer: {
    width: "90%",
    height: 80,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "space-around",
    margin: 5,
  },
  divText: {
    fontSize: 16,
    color: "white",
  },
});

export default DashBoard;
