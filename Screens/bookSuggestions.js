import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import colors from "../assets/colors/colors";

import { FontAwesome5 } from "@expo/vector-icons";

export default function collections({ navigation, route }) {
  const Arrays = [
    { key: "0", data: "Book 1", backColor: "red" },
    { key: "0", data: "Book 2", backColor: "red" },
    { key: "0", data: "Book 3", backColor: "red" },
    { key: "0", data: "Book 4", backColor: "red" },
    { key: "0", data: "Book 5", backColor: "red" },
    { key: "0", data: "Book 6", backColor: "red" },
    { key: "0", data: "Book 7", backColor: "red" },
  ];
  const Arrays1 = [{ key: "0", data: "Search A Book", backColor: "red" }];
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
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="md-arrow-back" size={24} color="black" />
        </TouchableOpacity>
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
            marginBottom: 60,
          }}
        >
          COLLECTIONS
        </Text>
      </View>
      {
        //Search DIVE
      }
      {
        //Suggestion Screen Start from here
      }
      {
        //suggestion Main Conatiner
      }
      <FlatList
        data={Arrays1}
        //horizontal={true}
        renderItem={({ itemss }) => {
          return (
            <>
              {
                //First For Most Searcg result
              }
              <View
                style={{
                  //backgroundColor: "yellow",
                  height: 270,
                }}
              >
                <Text
                  style={{
                    fontFamily: "OpenSans-Regular",
                    fontSize: 17,
                    color: colors.blue,
                    marginLeft: 7,
                  }}
                >
                  {" "}
                  Most Search Books{" "}
                </Text>
                <FlatList
                  data={Arrays}
                  horizontal={true}
                  renderItem={({ item }) => {
                    return (
                      <View>
                        <View
                          style={{
                            height: 190,
                            width: 150,
                            margin: 10,
                            borderRadius: 10,
                            padding: 7,
                            backgroundColor: "cyan",
                            //  flexDirection: "column",
                          }}
                        ></View>
                        <Text
                          style={{
                            fontFamily: "OpenSans-SemiBold",
                            fontSize: 12,
                            color: colors.gray,
                            justifyContent: "center",
                            marginLeft: 12,
                          }}
                        >
                          {item.data}
                        </Text>
                      </View>
                    );
                  }}
                  keyExtractor={(item, index) => index.toString()}
                />
              </View>
              {
                //Top Gene Books
              }

              <View
                style={{
                  //backgroundColor: "yellow",
                  height: 270,
                }}
              >
                <Text
                  style={{
                    fontFamily: "OpenSans-Regular",
                    fontSize: 17,
                    color: colors.blue,
                    marginLeft: 7,
                  }}
                >
                  {" "}
                  Top Genere{" "}
                </Text>
                <FlatList
                  data={Arrays}
                  horizontal={true}
                  renderItem={({ item }) => {
                    return (
                      <View>
                        <View
                          style={{
                            height: 190,
                            width: 150,
                            margin: 10,
                            borderRadius: 10,
                            padding: 7,
                            backgroundColor: "cyan",
                            //  flexDirection: "column",
                          }}
                        ></View>
                        <Text
                          style={{
                            fontFamily: "OpenSans-SemiBold",
                            fontSize: 12,
                            color: colors.gray,
                            justifyContent: "center",
                            marginLeft: 12,
                          }}
                        >
                          {item.data}
                        </Text>
                      </View>
                    );
                  }}
                  keyExtractor={(item, index) => index.toString()}
                />
              </View>
              {
                //Top Genere Books Close
              }
              {
                //Best Sellers Books Close
              }

              <View
                style={{
                  //backgroundColor: "yellow",
                  height: 270,
                }}
              >
                <Text
                  style={{
                    fontFamily: "OpenSans-Regular",
                    fontSize: 17,
                    color: colors.blue,
                    marginLeft: 7,
                  }}
                >
                  {" "}
                  Best Sellers Books{" "}
                </Text>
                <FlatList
                  data={Arrays}
                  horizontal={true}
                  renderItem={({ item }) => {
                    return (
                      <View>
                        <View
                          style={{
                            height: 190,
                            width: 150,
                            margin: 10,
                            borderRadius: 10,
                            padding: 7,
                            backgroundColor: "cyan",
                            //  flexDirection: "column",
                          }}
                        ></View>
                        <Text
                          style={{
                            fontFamily: "OpenSans-SemiBold",
                            fontSize: 12,
                            color: colors.gray,
                            justifyContent: "center",
                            marginLeft: 12,
                          }}
                        >
                          {item.data}
                        </Text>
                      </View>
                    );
                  }}
                  keyExtractor={(item, index) => index.toString()}
                />
              </View>
              {
                //Best Sellers Books Close
              }
            </>
          );
        }}
      />
      {
        //First For Most Searcg result close
      }
      {
        //suggestion Main Conatiner close
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#faf8f5",
    alignItems: "center",
    justifyContent: "center",
  },
});
