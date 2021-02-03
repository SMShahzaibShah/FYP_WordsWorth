import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  FlatList,
  Image,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import * as FileSystem from "expo-file-system";

import colorss from "../../assets/colors/colors";

import { LinearGradient } from "expo-linear-gradient";
export default function CollectionBooksDetails({ navigation, route }) {
  const [CollectionsName, setCollectionsName] = useState(
    route.params.collectionInfo.name
  );
  const [CollectionsDis, setCollectionsDis] = useState(
    route.params.collectionInfo.dis
  );

  const [allbooks, setbooks] = useState([]);
  const [getselectedItem, setselectedItem] = useState([]);
  const [getNotInCollection, setNotInCollection] = useState([]);
  const [getModal, setModal] = useState(false);
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
  const outputData = async () => {
    setbooks(
      await FileSystem.readDirectoryAsync(
        "file:///storage/emulated/0/expoWordsWorthDownload/"
      )
    );
  };

  const notinColl = () => {
    const booksInCols = route.params.collectionInfo.items;

    // console.log(booksInCols);
    //console.log(getNotInCollection);
    //console.log(allbooks);
    setNotInCollection(allbooks.filter((e) => !booksInCols.includes(e)));
  };
  useEffect(() => {
    outputData();
    // setselectedItem([]);
    notinColl();
  }, []);
  return (
    <View style={styles.container}>
      <Modal
        transparent={true}
        animationType={"none"}
        visible={getModal}
        // onRequestClose={() => outputCollections()}
      >
        <View style={styles.modalBackground}>
          <View style={styles.activityIndicatorWrapper}>
            {
              //Cross Button
            }
            <TouchableOpacity
              onPress={() => setModal(false)}
              style={{
                width: 30,
                height: 30,
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
                marginTop: 40,
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
              Select Books to delete ?{" "}
            </Text>
            <FlatList
              data={route.params.collectionInfo.items}
              //keyExtractor={(item) => Math.random().toString(36).substring(7)}
              //showsVerticalScrollIndicator={false}
              //numColumns={2}
              horizontal={true}
              style={{
                marginTop: 5,
                height: 0,
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
                      margin: 5,
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

            <Text
              style={{
                fontFamily: "OpenSans-Regular",
                fontSize: 16,
                color: "#666666",
                marginTop: 10,
              }}
            >
              {" "}
              Select Books to Add in Collection ?{" "}
            </Text>
            <FlatList
              data={getNotInCollection}
              //keyExtractor={(item) => Math.random().toString(36).substring(7)}
              //showsVerticalScrollIndicator={false}
              //numColumns={2}
              horizontal={true}
              style={{
                // marginTop: 5,
                height: 0,
                // backgroundColor: "red",
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
                      margin: 5,
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
              onPress={async () => {
                {
                  /**
                SaveData({
                  name: CollectionsName,
                  dis: CollectionsDis,
                  items: getselectedItem,
                });
               // outputCollections();
                setModal(false);
              
               */
                }
              }}
            >
              <Text style={{ margin: 5 }}>
                <LinearGradient
                  colors={["#6E3AA7", "#23286B"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.doneButtonWrapper}
                >
                  <Text style={styles.doneButtonText}>Update</Text>
                </LinearGradient>
              </Text>
            </TouchableOpacity>
            {
              //Button
            }
            {
              //Button
            }
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={async () => {
                {
                  /**
                SaveData({
                  name: CollectionsName,
                  dis: CollectionsDis,
                  items: getselectedItem,
                });
               // outputCollections();
                setModal(false);
              
               */
                }
              }}
            >
              <Text style={{ margin: 2, marginBottom: 10 }}>
                <LinearGradient
                  colors={["#6E3AA7", "#23286B"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.doneButtonWrapper}
                >
                  <Text style={styles.doneButtonText}>Delete</Text>
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
        //Back Button
      }
      <View
        style={{
          flexDirection: "row",
          // marginTop: 33,
          width: "80%",
          justifyContent: "space-between",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
          style={{
            flexDirection: "row",
          }}
        >
          <Ionicons
            name="md-arrow-back"
            size={24}
            color="black"
            style={{
              marginRight: 3,
            }}
          />
          <Text
            style={{
              alignSelf: "center",
              fontSize: 16,
            }}
          >
            Back
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            console.log("Edit");
            setselectedItem([]);
            setModal(true);
            notinColl();
          }}
        >
          <Octicons name="gear" size={25} color="black" />
        </TouchableOpacity>
      </View>

      {
        //Back Button close
      }
      {
        //Collection Details
      }
      {
        //Text
      }
      <View
        style={{
          //alignItems: "center",
          //justifyContent: "center",
          alignSelf: "center",
          //backgroundColor: "red",
          width: "80%",
        }}
      >
        <View
          style={{
            // width: "95%",
            //  marginLeft: "7%",
            // backgroundColor: "red",
            //  flexDirection: "row",
            marginTop: 20,
            //    alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "OpenSans-SemiBold",
              fontSize: 18,
              color: colorss.blue,
              // marginTop: 20,
            }}
          >
            Collection Name :
          </Text>
          <Text
            style={{
              fontFamily: "OpenSans-Regular",
              fontSize: 17,
              color: colorss.blueFaded,
              // marginTop: 20,
              // alignSelf: "center",
              //marginLeft: 5,
              textAlign: "left",
            }}
          >
            {route.params.collectionInfo.name}
          </Text>
        </View>
        {
          //Collection Details close
        }
        {
          //Text
        }
        <View
          style={{
            // width: "95%",
            //   marginLeft: "7%",
            //  backgroundColor: "red",
            //   flexDirection: "row",
            marginTop: 5,
            // alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "OpenSans-SemiBold",
              fontSize: 18,
              color: colorss.blue,
              // marginTop: 20,
            }}
          >
            Collection Discription :
          </Text>
          <Text
            style={{
              fontFamily: "OpenSans-Regular",
              fontSize: 17,
              color: colorss.blueFaded,
              // marginTop: 20,
              // alignSelf: "center",
              //marginLeft: 5,
              textAlign: "left",
            }}
          >
            {route.params.collectionInfo.dis}
          </Text>
        </View>
        {
          //Collection Details close
        }

        <Text
          style={{
            fontFamily: "OpenSans-SemiBold",
            fontSize: 18,
            color: colorss.blue,
            marginTop: 10,
            marginLeft: -4,
          }}
        >
          {" "}
          List of Books In Collection :{" "}
        </Text>
        {
          //flat List
        }
        <FlatList
          data={route.params.collectionInfo.items}
          //keyExtractor={(item) => Math.random().toString(36).substring(7)}
          //showsVerticalScrollIndicator={false}
          //numColumns={2}
          style={{
            marginTop: 5,
            // backgroundColor: "red",
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
                  backgroundColor: "lightgray",
                  justifyContent: "center",
                  //marginLeft: 5,
                  //flexDirection: "row",
                }}
                onPress={() => {}}
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
          keyExtractor={(index) => index.toString()}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#faf8f5",
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
    height: "80%",
    width: "90%",
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
