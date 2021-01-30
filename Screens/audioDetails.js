import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Modal,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../assets/colors/colors";
import { color } from "react-native-reanimated";
import * as FileSystem from "expo-file-system";
import * as Permissions from "expo-permissions";
import * as MediaLibrary from "expo-media-library";
import { AsyncStorage } from "react-native";
import { Feather } from "@expo/vector-icons";

const getUrl = (img) => {
  //console.log(img.split("url:")[1]);
  return img.split("url:")[1];
};
const audioDetails = ({ navigation, route }) => {
  const [getModal, setModal] = useState(false);
  const [getText, setText] = useState(false);

  const Arrays = [{ key: "0", data: "Search A Book", backColor: "red" }];

  const SaveData = async (item) => {
    AsyncStorage.getItem("BooksInfo").then((favs) => {
      favs = favs == null ? [] : JSON.parse(favs);

      favs.push(item);
      return AsyncStorage.setItem("BooksInfo", JSON.stringify(favs));
    });
  };

  const outputData = async () => {
    const allBooks = await AsyncStorage.getItem("BooksInfo");
    console.log("sad");
    //console.log(JSON.parse(allBooks));
  };

  const [status, setStatus] = useState(true);

  function check(bookName) {
    AsyncStorage.getItem("BooksInfo").then((favs) => {
      favs = favs == null ? [] : JSON.parse(favs);
      var i = 0;
      while (i < favs.length) {
        //console.log(favs[i].name);
        if (favs[i].name == bookName.name) {
          setStatus(false);
        }
        i = i + 1;
      }
    });
  }

  const downloadFile = (bookName) => {
    console.log("yes");
    setText(false);
    const uri = bookName.file;
    let fileUri = FileSystem.documentDirectory + bookName.name + ".pdf";
    check(bookName);
    console.log(status);
    if (status == true) {
      FileSystem.downloadAsync(uri, fileUri)
        .then(({ uri }) => {
          console.log("Download ho gya");
          saveFile(uri);
          console.log(uri);
          console.log("done");
          setText(true);
          SaveData(bookName);
          setModal(false);
          outputData();
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setModal(false);

      alert("book already there");
    }
  };
  const saveFile = async (fileUri) => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status === "granted") {
      const asset = await MediaLibrary.createAssetAsync(fileUri);
      const album = await MediaLibrary.getAlbumAsync("expoWordsWorthDownload");
      await MediaLibrary.createAlbumAsync(
        "expoWordsWorthDownload",
        asset,
        false
      );
    }
  };

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
              AUDIO BOOK
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
            <View style={styles.flatList}>
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
                      width: 100,
                      //margin: 5,
                      marginRight: 5,
                      marginTop: 2,
                      borderRadius: 5,
                    }}
                  >
                    <Image
                      source={{
                        uri: getUrl(route.params.BookDetails.image),
                      }}
                      style={{
                        height: 175,
                        width: 100,
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
                        height: 75,
                        textAlign: "justify",
                      }}
                    >
                      {route.params.BookDetails.name}
                    </Text>
                    <Text
                      style={{
                        ...styles.ScrollViewText,
                        marginTop: 15,
                        textAlign: "justify",
                        width: "100%",
                        height: "55%",
                      }}
                    >
                      {route.params.BookDetails.description}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{ height: Dimensions.get("window").height * 0.45 }}>
              <FlatList
                data={route.params.audioParts}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => {
                  return (
                    <View
                      style={
                        {
                          //height: 500,
                          //width: "100%",
                        }
                      }
                    >
                      <View
                        style={{
                          //  backgroundColor: "red",
                          justifyContent: "space-between",
                          height: 50,
                          width: "80%",
                          margin: 10,
                          borderRadius: 50,
                          padding: 7,
                          backgroundColor: "#F1E7FF",
                          marginLeft: -0,
                          flexDirection: "row",
                        }}
                      >
                        <Text
                          style={{
                            fontFamily: "OpenSans-SemiBold",
                            fontSize: 12,
                            color: colors.blue,
                            justifyContent: "center",
                          }}
                        >
                          Part {index + 1} # {item.key}{" "}
                        </Text>
                        <View style={{ marginLeft: 15, alignSelf: "center" }}>
                          <Feather name="download" size={30} color="black" />
                        </View>
                      </View>
                    </View>
                  );
                }}
              />
            </View>
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
    //  height: "100%",
    width: "100%",
    backgroundColor: "white",
    marginTop: 80,
    borderRadius: 40,
    borderBottomEndRadius: 0,
    paddingTop: 20,
    alignItems: "center",
    alignSelf: "center",
    paddingLeft: 20,
    justifyContent: "space-between",
  },
  backButton: {
    marginTop: "8%",
    marginLeft: "5%",
    width: "14%",
  },
  flatList: {
    alignSelf: "center",
    justifyContent: "space-between",
    width: "85%",
    paddingTop: 5,
    //backgroundColor: "red",
  },
  ScrollViewItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    //backgroundColor: "yellow",
    alignSelf: "center",
    //margin: 5,
    width: "90%",
    borderRadius: 5,
    //paddingLeft: 5,
    //paddingRight: 5,
    //height: 130,
    height: 185,
    //backgroundColor: "yellow",
  },
  ScrollViewText: {
    fontSize: 12,
    fontFamily: "OpenSans-Regular",
    color: colors.gray,
    height: 65,
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
export default audioDetails;
