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
  Modal,
} from "react-native";
const firebaseBooksData = require("firebase");

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AsyncStorage } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

import * as MediaLibrary from "expo-media-library";
import colors from "../assets/colors/colors";
const audiobrary = ({ navigation, route }) => {
  const [isLoading, setLoading] = useState(true);
  const [getF, setF] = useState();
  const [getText, setText] = useState(false);
  //const [book, setbook] = useState();
  const [parts, setParts] = useState();
  const [getmodal, setModal] = useState(false);

  const Arrays = [{ key: "0", data: "Search A Book", backColor: "red" }];
  var config = {
    apiKey: "AIzaSyC_zg-7N_LpvkhLAymvksM7Y9lrcA0AkjY",
    authDomain: "dogtag-e36b1.firebaseapp.com",
    databaseURL: "https://dogtag-e36b1.firebaseio.com/",
  };
  var sec;

  const outputData = async () => {
    const allBooks = await AsyncStorage.getItem("AudioBooks");

    //console.log("sad");
    //console.log(JSON.parse(allBooks));
    setF(JSON.parse(allBooks));
  };
  const getUrl = (img) => {
    //console.log(img.split("url:")[1]);
    return img.split("url:")[1];
  };

  useEffect(() => {
    // Initialize Firebase
    /**
      try{
        sec= firebaseBooksData.initializeApp(config, 'Secondary')
       // setSec(secon)
      }catch(exception){//console.log(exception)
        sec = firebaseBooksData.apps[firebaseBooksData.apps.length-1]
      }
      sec.database().ref('Names').on('value',function(snapshot){
        var data="";
        var temp=[];     
        snapshot.forEach(function(childSnapshot){
               data = childSnapshot.val();
               temp.push(data);
             })
             setbooks(temp);
             if(isLoading==true){
                setF(getbook);
             }
             setLoading(false);
            });
           // console.log(getbook)
      */
    outputData();
  }, []);

  const Loading = (
    <View style={{ flex: 1, padding: 20 }}>
      <ActivityIndicator size="large" />
      <Text>Loading Books From database...</Text>
    </View>
  );

  const SaveData = async (item) => {
    AsyncStorage.getItem("AudioBooks").then((favs) => {
      favs = favs == null ? [] : JSON.parse(favs);

      favs.push(item);
      return AsyncStorage.setItem("AudioBooks", JSON.stringify(favs));
    });
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
                    backgroundColor: "blue",
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
                      uri: getUrl(item.image),
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
                    backgroundColor: "cyan",
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
                      height: 65,
                      textAlign: "justify",
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      ...styles.ScrollViewText,
                      marginTop: 15,
                      height: 90,
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
  const SavesData = async (bookName, item) => {
    AsyncStorage.getItem(bookName).then((favs) => {
      favs = favs == null ? [] : JSON.parse(favs);

      favs.push(item);
      return AsyncStorage.setItem(bookName, JSON.stringify(favs));
    });
  };

  const FetchData = (book) => {
    let data = book.file;
    data = data.split("/").join("$");
    let bookname = book.name.split(" ").join("-");
    data = "http://192.168.17.105:8080/files/details/" + data + "||" + bookname;
    console.log(data);
    setModal(true);
    AsyncStorage.getItem(bookname).then((favs) => {
      //console.log(bookname);
      if (favs == null) {
        fetch(data)
          .then((res) => res.json())
          .then((jsonData) => {
            setModal(false);
            setParts(jsonData);
            console.log(jsonData);
            SavesData(bookname, jsonData);
            navigation.navigate("audioDetails", {
              BookDetails: book,
              audioParts: jsonData,
            });
          });
      } else {
        setModal(false);
        navigation.navigate("audioDetails", {
          BookDetails: book,
          audioParts: JSON.parse(favs)[0],
        });
      }
    });
  };

  return (
    <>
      <View style={{ flex: 1 }}>
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
            onPress={() => navigation.navigate("audioSettings")}
          >
            <Octicons name="gear" size={30} color="black" />
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
            }}
          >
            AUDIO LIBRARY
          </Text>
        </View>
        {
          //2nd Conatiner
        }
        <Modal
          transparent={true}
          animationType={"none"}
          visible={getmodal}
          onDismiss={() => console.log("close modal")}
        >
          <View style={styles.modalBackground}>
            <View style={styles.activityIndicatorWrapper}>
              <Text
                style={{
                  fontFamily: "OpenSans-SemiBold",
                  fontSize: 14,
                  color: colors.blue,
                }}
              >
                Please Wait..
              </Text>
              <ActivityIndicator
                animating={getmodal}
                size="large"
                color="black"
              />
            </View>
          </View>
        </Modal>
        <View style={styles.secondcontainer}>
          {
            //flatlist
          }
          <FlatList
            data={getF}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => {
                    FetchData(item);
                  }}
                >
                  <View
                    style={{
                      flexDirection: "column",
                      // backgroundColor: "yellow",
                      //height: 250,
                      // marginTop: 5,
                      //  marginBottom: 5,
                    }}
                  >
                    <View
                      style={{
                        //backgroundColor: "cyan",
                        width: 150,
                      }}
                    >
                      <View
                        style={
                          {
                            //height: 200,
                            //width: 125,
                            //borderRadius: 10,
                            //backgroundColor: "red",
                          }
                        }
                      >
                        <Image
                          source={{
                            uri: getUrl(item.image),
                          }}
                          style={{
                            height: 200,
                            width: 120,
                          }}
                        />
                      </View>
                      {
                        //Text
                      }
                      {
                        //Book Name
                      }
                      <View style={{ marginTop: 5, width: 120, height: 80 }}>
                        <Text
                          style={{
                            fontFamily: "OpenSans-SemiBold",
                            fontSize: 12,
                            color: colors.gray,
                            justifyContent: "center",
                          }}
                        >
                          {item.name}
                        </Text>
                      </View>

                      {
                        //Book Name Close
                      }
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item, index) => index.toString()}
          />
          {
            //flatlistEnd
          }
        </View>
        {
          //second conatiner end
        }
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  textInput: {
    paddingTop: 10,
    color: "black",
    borderColor: "red",
    //borderWidth: 2,
    borderBottomWidth: 2,
    width: "80%",
    fontSize: 24,
    //borderRadius: 40,
    fontSize: 16,
    padding: 10,
  },
  flatList: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "space-between",
    width: "90%",
    paddingTop: 5,
    marginTop: "16%",
    backgroundColor: "red",
  },
  ScrollViewItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "yellow",
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
    //backgroundColor: "yellow",
    borderRadius: 10,
  },
  secondcontainer: {
    //  backgroundColor: "white",
    flex: 1,
    marginTop: 30,
    paddingTop: 30,
    alignItems: "center",
    marginBottom: 5,
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
    height: 100,
    width: 100,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#C0C0C0",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export default audiobrary;
