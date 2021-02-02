import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  FlatList,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import * as FileSystem from "expo-file-system";

import { AsyncStorage } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
export default function book() {
  const [getModal, setModal] = useState(false);
  const [allbooks, setbooks] = useState([]);
  const [getselectedItem, setselectedItem] = useState([]);
  const [allCollections, setallCollections] = useState();
  const [CollectionsName, setCollectionsName] = useState();
  const [CollectionsDis, setCollectionsDis] = useState();
  const [Coll, setColl] = useState();

  const outputData = async () => {
    setbooks(
      await FileSystem.readDirectoryAsync(
        "file:///storage/emulated/0/expoWordsWorthDownload/"
      )
    );
  };

  const outputCollections = async () => {
    const allcoll = await AsyncStorage.getItem("Collections");
    setColl(JSON.parse(allcoll));
  };
  var selectItem = (item) => {
    var color = false;
    //console.log(item);
    //console.log(getselectedItem);

    for (var i = 0; i < getselectedItem.length; i++) {
      //console.log(getselectedItem[i]);
      if (getselectedItem[i] == item) {
        //found = true;
        color = true;
        break;
      }
    }
    // console.log(color);
    return color;
  };
  const Loading = (
    <View
      style={{
        justifyContent: "center",
        marginTop: 50,
        //alignSelf: "center",
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontFamily: "OpenSans-Bold",
          textAlign: "center",
        }}
      >
        There is No Collection Right now Click in "+" button to create one
      </Text>
    </View>
  );
  const FlatLists = (
    <FlatList
      data={Coll}
      //keyExtractor={(item) => Math.random().toString(36).substring(7)}
      //showsVerticalScrollIndicator={false}
      //numColumns={2}
      style={{
        marginTop: 5,
        width: "90%",
        // backgroundColor: "red",
        alignSelf: "center",
      }}
      renderItem={({ item }) => {
        return (
          <View
            style={{
              backgroundColor: "yellow",
              height: 100,
              width: 80,
            }}
          ></View>
        );
      }}
      keyExtractor={(item, index) => index.toString()}
    />
  );

  const SaveData = async (item) => {
    AsyncStorage.getItem("Collections").then((favs) => {
      favs = favs == null ? [] : JSON.parse(favs);

      favs.push(item);
      return AsyncStorage.setItem("Collections", JSON.stringify(favs));
    });
  };
  useEffect(() => {
    outputData();
    // setselectedItem([]);
    outputCollections();
  }, []);
  return (
    <View style={styles.container}>
      {/**
      {Coll == undefined ? Loading : FlatLists}
 */}
      {FlatLists}
      {
        //Modal
      }
      <Modal transparent={true} animationType={"none"} visible={getModal}>
        <View style={styles.modalBackground}>
          <View style={styles.activityIndicatorWrapper}>
            {
              //Cross Button
            }
            <TouchableOpacity
              onPress={() => setModal(false)}
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                backgroundColor: "gray",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                right: 10,
                top: 10,
              }}
            >
              <Entypo name="cross" size={30} color="white" />
            </TouchableOpacity>
            {
              //Cross Button close
            }
            {
              //Collection TExt Input
            }
            <View
              style={{
                flexDirection: "row",
                width: 265,
                height: 45,
                backgroundColor: "#F1E7FF",
                borderRadius: 50,
                paddingLeft: 10,
                marginTop: 80,
              }}
            >
              <MaterialIcons
                name="collections-bookmark"
                size={24}
                style={{ alignSelf: "center", marginRight: 5 }}
                color="#653CA0"
              />
              <TextInput
                placeholder="Enter Collection Name"
                style={{
                  width: 232,
                  height: 45,
                  borderRadius: 50,
                  paddingLeft: 10,
                  fontFamily: "OpenSans-Regular",
                }}
                value={CollectionsName}
                onChangeText={(text) => setCollectionsName(text)}
              ></TextInput>
            </View>
            {
              //Collection TExt Input close
            }
            {
              //Collection TExt Input
            }
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
              <MaterialIcons
                name="description"
                size={24}
                style={{ alignSelf: "center", marginRight: 5 }}
                color="#653CA0"
              />
              <TextInput
                placeholder="Enter Collection Description"
                style={{
                  width: 232,
                  height: 45,
                  borderRadius: 50,
                  paddingLeft: 10,
                  fontFamily: "OpenSans-Regular",
                }}
                value={CollectionsDis}
                onChangeText={(text) => setCollectionsDis(text)}
              ></TextInput>
            </View>
            {
              //Collection TExt Input close
            }
            <Text
              style={{
                fontFamily: "OpenSans-Regular",
                fontSize: 16,
                color: "#666666",
                marginTop: 10,
              }}
            >
              {" "}
              Select Books{" "}
            </Text>
            <FlatList
              data={allbooks}
              //keyExtractor={(item) => Math.random().toString(36).substring(7)}
              //showsVerticalScrollIndicator={false}
              //numColumns={2}
              style={{
                marginTop: 5,
              }}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.7}
                    style={{
                      //  backgroundColor: "red",
                      // justifyContent: "space-between",
                      height: 50,
                      width: 265,
                      margin: 10,
                      borderRadius: 50,
                      padding: 7,
                      backgroundColor:
                        selectItem(item) == true ? "green" : "lightgray",
                      justifyContent: "center",
                      //marginLeft: 5,
                      //flexDirection: "row",
                    }}
                    onPress={() => {
                      setselectedItem([...getselectedItem, item]);
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "OpenSans-SemiBold",
                        fontSize: 12,
                        //color: colors.blue,
                        justifyContent: "center",
                      }}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                );
              }}
              keyExtractor={(item, index) => index.toString()}
            />
            {
              //Button
            }
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                setallCollections({
                  name: CollectionsName,
                  dis: CollectionsDis,
                  items: getselectedItem,
                });
                SaveData(allCollections);
                setModal(false);
              }}
            >
              <Text style={{ margin: 15 }}>
                <LinearGradient
                  colors={["#6E3AA7", "#23286B"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.doneButtonWrapper}
                >
                  <Text style={styles.doneButtonText}>CREATE</Text>
                </LinearGradient>
              </Text>
            </TouchableOpacity>
            {
              //Button
            }
          </View>
        </View>
      </Modal>
      {
        //Add Button
      }
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          height: 70,
          width: 70,
          borderRadius: 50,
          backgroundColor: "#C4C4C4",
          bottom: "4%",
          position: "absolute",
          right: "5%",
          justifyContent: "center",
          borderWidth: 2,
          borderStyle: "solid",
          borderColor: "grey",
        }}
        onPress={() => {
          setselectedItem([]);
          setCollectionsName("");
          setCollectionsDis("");
          setModal(true);
        }}
      >
        <Feather
          name="plus"
          size={40}
          color="white"
          style={{
            alignSelf: "center",
          }}
        />
      </TouchableOpacity>
      {
        //Add Button close
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "red",
    // alignItems: "center",
    // justifyContent: "center",
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
    height: "70%",
    width: "80%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#C0C0C0",
    display: "flex",
    alignItems: "center",
    // justifyContent: "space-around",
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
    color: "#FFFFFF",
  },
});
