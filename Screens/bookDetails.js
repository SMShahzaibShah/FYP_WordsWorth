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
import colors from "../assets/colors/colors";
import { color } from "react-native-reanimated";
const getUrl = (img) => {
  //console.log(img.split("url:")[1]);
  return img.split("url:")[1];
};
const bookDetails = ({ navigation, route }) => {
  const Arrays = [{ key: "0", data: "Search A Book", backColor: "red" }];
  return (
    <>
      <View style={styles.container}>
        {
          //Image for background
        }
        <Image
          source={require("../assets/detailBackground.png")}
          style={styles.backGroungImage}
        />
        {
          //Image close
        }
        {
          //Div code where Imgae will be displayed
        }
        <View>
          {
            //Back button Icon
          }

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.backButton}
          >
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="ios-arrow-round-back" size={30} color="black" />
              <Text style={{ alignSelf: "center", paddingLeft: 3 }}>Back</Text>
            </View>
          </TouchableOpacity>
          {
            //back Button Close
          }
          {
            //book detail Text
          }
          <View style={{ width: "100%", marginLeft: "7%" }}>
            <Text
              style={{
                fontFamily: "Roboto-Regular",
                fontSize: 20,
                color: colors.gray,
                marginTop: "10%",
              }}
            >
              Books Details
            </Text>
          </View>
          {
            //bookDetail Close
          }

          {
            //WhiteContainer
          }
          <View style={styles.secondcontainer}>
            {
              //Book Icon
            }
            <FlatList
              data={Arrays}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => {
                return (
                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <View
                      style={{
                        height: 270,
                        width: 200,
                        borderRadius: 10,
                      }}
                    >
                      <Image
                        source={{
                          uri: getUrl(route.params.BookDetails.image),
                        }}
                        style={{
                          height: 270,
                          width: 200,
                          borderRadius: 10,
                        }}
                      />
                    </View>
                    {
                      //Text
                    }
                    <View
                      style={{
                        marginTop: 10,
                        height: 60,
                        width: 320,
                      }}
                    >
                      {
                        //Book Name
                      }
                      <View style={{ flexDirection: "row" }}>
                        <Text
                          style={{
                            fontFamily: "OpenSans-Bold",
                            fontSize: 14,
                          }}
                        >
                          {" "}
                          Name:{" "}
                        </Text>
                        <Text
                          style={{
                            fontFamily: "OpenSans-SemiBold",
                            fontSize: 12,
                            color: colors.gray,
                            alignSelf: "center",
                            textAlign: "justify",
                            width: 260,
                          }}
                        >
                          {route.params.BookDetails.name}
                        </Text>
                      </View>
                      {
                        //Book Name Close
                      }
                      {
                        //Author Name
                      }
                      <View style={{ flexDirection: "row", paddingLeft: 5 }}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontFamily: "OpenSans-Bold",
                          }}
                        >
                          Author:
                        </Text>
                        <Text
                          style={{
                            fontFamily: "OpenSans-SemiBold",
                            fontSize: 14,
                            color: colors.gray,
                            alignSelf: "center",
                          }}
                        >
                          {route.params.BookDetails.author}
                        </Text>
                      </View>
                      {
                        //Author Name close
                      }
                    </View>
                    {
                      //Book Icon close
                    }
                    {
                      //Discrioption
                    }
                    <View
                      style={{
                        flexDirection: "column",
                        marginTop: 0,
                        height: 145,
                        width: 320,
                      }}
                    >
                      <Text
                        style={{ fontSize: 16, fontFamily: "OpenSans-Bold" }}
                      >
                        Discription:
                      </Text>
                      <ScrollView showsVerticalScrollIndicator={false}>
                        <Text
                          style={{
                            fontFamily: "OpenSans-SemiBold",
                            fontSize: 14,
                            color: colors.gray,
                            textAlign: "justify",
                          }}
                        >
                          {route.params.BookDetails.description}
                        </Text>
                      </ScrollView>
                    </View>
                    {
                      //For Button
                    }
                    <TouchableOpacity activeOpacity={0.7}>
                      <View
                        style={{
                          height: 40,
                          width: 120,
                          marginTop: 20,
                          borderRadius: 10,
                          justifyContent: "center",
                          backgroundColor: "#F1E7FF",
                        }}
                      >
                        <Text style={{ alignSelf: "center" }}>Download</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backGroungImage: {
    position: "absolute",
    top: 0,
    width: "100%",
  },
  secondcontainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    marginTop: 80,
    borderRadius: 40,
    borderBottomEndRadius: 0,
    paddingTop: 30,
    alignItems: "center",
  },
  backButton: {
    marginTop: "8%",
    marginLeft: "5%",
    width: "14%",
  },
});
export default bookDetails;
