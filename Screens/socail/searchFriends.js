import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { Octicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

import colors from "../../assets/colors/colors";

import * as firebase from "firebase";
import "firebase/firestore";
import Search from "../Search";

export default function searchFriends() {
  const [users, setusers] = useState([]);
  const [getModal, setModal] = useState(false);
  const [getsearch, setSearch] = useState("");
  const [getFound, setFound] = useState();
  const [following, setfollowing] = useState(false);
  const [getfollowinId, setfollowingId] = useState([]);

  const fetchUserFollowing = () => {
    firebase
      .firestore()
      .collection("following")
      .doc(firebase.auth().currentUser.uid)
      .collection("userFollowing")
      .onSnapshot((Snapshot) => {
        let following = Snapshot.docs.map((doc) => {
          const id = doc.id;
          return id;
        });
        setfollowingId(following);
      });
  };

  useEffect(() => {
    fetchUserFollowing();
  }, []);

  const getData = () => {
    console.log(getfollowinId);
    if (getsearch.length == 0) {
      setModal(false);
      alert("Please Enter Name");
    } else {
      firebase
        .firestore()
        .collection("users")
        .where("name.fName", ">=", getsearch)
        .get()
        .then((Snapshot) => {
          let users = Snapshot.docs.map((doc) => {
            const data = doc.data();
            const id = doc.id;
            return { id, ...data };
          });
          setusers(users);

          if (users.length == 0) {
            console.log("not Found");
            setFound(false);
            alert("No User Found");
          } else {
            console.log("Found");
            setFound(true);
          }
          //  setSearch("");
          setModal(false);
        });
    }
  };

  const onFollow = (itemTobeFollow) => {
    firebase
      .firestore()
      .collection("following")
      .doc(firebase.auth().currentUser.uid)
      .collection("userFollowing")
      .doc(itemTobeFollow)
      .set({});
  };

  const onUnFollow = (itemTobeFollow) => {
    firebase
      .firestore()
      .collection("following")
      .doc(firebase.auth().currentUser.uid)
      .collection("userFollowing")
      .doc(itemTobeFollow)
      .delete();
  };

  return (
    <View style={styles.container}>
      {
        //modal
      }
      <Modal animationType="none" transparent={true} visible={getModal}>
        <View style={styles.modalBackground}>
          <View style={styles.activityIndicatorWrapper}>
            <Text
              style={{
                fontFamily: "OpenSans-SemiBold",
                fontSize: 14,
                color: colors.blue,
              }}
            >
              Please Wait
            </Text>

            <ActivityIndicator size="small" color="#0000ff" />
          </View>
        </View>
      </Modal>

      {
        //Modal Close
      }
      {
        //View Containing the textInput and Button
      }
      <View style={styles.inputAndButtonContainer}>
        {
          //Text Input
        }
        <View style={styles.textFieldView}>
          <Octicons
            name="search"
            size={24}
            style={{ alignSelf: "center", marginRight: 5 }}
            color="#653CA0"
          />
          <TextInput
            placeholder="Enter Friend's Name To Search"
            onChangeText={(text) => setSearch(text)}
            style={styles.textinpputField}
          ></TextInput>
        </View>
        {
          //Text Input close
        }
        {
          //Button
        }
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            marginLeft: 10,
          }}
          onPress={() => {
            setModal(true);
            getData();
          }}
        >
          <Text
            style={{
              alignSelf: "center",
            }}
          >
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
        {
          //Button Close
        }
      </View>
      {
        //View Containing the textInput and Button close
      }
      {
        //FlatList Container
      }
      <View
        style={{
          alignItems: "center",
          //   backgroundColor: "red",
        }}
      >
        {
          //FlatList
        }
        <FlatList
          data={users}
          style={{
            margin: 10,
            width: "95%",
          }}
          renderItem={({ item }) => {
            return (
              <>
                {users.length < 1 ? (
                  <>
                    <View
                      style={{ justifyContent: "center", alignItems: "center" }}
                    >
                      <Text>Not Found</Text>
                    </View>
                    {console.log(users.length)}
                  </>
                ) : (
                  <>
                    {
                      //FlatList conatiner for each Item
                    }
                    <TouchableOpacity
                      activeOpacity={0.7}
                      style={{
                        // backgroundColor: "yellow",
                        height: 80,
                        margin: 5,
                      }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        {
                          //Picture
                        }
                        <View
                          style={{
                            // backgroundColor: "cyan",
                            height: 70,
                            width: 70,
                            borderRadius: 50,
                            margin: 5,
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <EvilIcons
                            name="user"
                            size={100}
                            color="black"
                            style={{ margin: -15 }}
                          />
                        </View>
                        {
                          //Picture Close
                        }
                        {
                          //Name Conatiner
                        }
                        <View
                          style={{
                            flexDirection: "column",
                          }}
                        >
                          {
                            //Name
                          }
                          <Text
                            style={{
                              fontFamily: "OpenSans-SemiBold",
                              fontSize: 16,
                              color: colors.blue,
                              marginTop: 15,
                              marginLeft: 5,
                            }}
                          >
                            {item.name.fName} {item.name.LName}
                          </Text>
                          {
                            //Name close
                          }

                          {
                            //Bio
                          }
                          <Text
                            style={{
                              fontFamily: "OpenSans-Regular",
                              fontSize: 14,
                              color: colors.blueFaded,
                              marginTop: 2,
                              marginLeft: 5,
                            }}
                          >
                            {
                              //item.id
                            }
                            Bio Aye Gi
                          </Text>
                          {
                            //Bio close
                          }
                        </View>

                        {
                          //Name Conatiner close
                        }
                        {getfollowinId.includes(item.id) ? (
                          <>
                            {
                              //Following
                            }
                            <TouchableOpacity
                              activeOpacity={0.7}
                              style={{
                                height: 50,
                                width: 50,
                                backgroundColor: "#F1E7FF",
                                borderRadius: 50,
                                alignSelf: "center",
                                right: 0,
                                position: "absolute",
                                justifyContent: "center",
                              }}
                              onPress={() => {
                                onUnFollow(item.id);
                                console.log("Done");
                              }}
                            >
                              <SimpleLineIcons
                                name="user-following"
                                size={30}
                                color="#6E3AA7"
                                style={{
                                  alignSelf: "center",
                                }}
                              />
                            </TouchableOpacity>
                            {
                              //Following Close
                            }
                          </>
                        ) : (
                          <>
                            {
                              //Follow
                            }
                            <TouchableOpacity
                              activeOpacity={0.7}
                              style={{
                                height: 50,
                                width: 50,
                                backgroundColor: "#F1E7FF",
                                borderRadius: 50,
                                alignSelf: "center",
                                right: 0,
                                position: "absolute",
                                justifyContent: "center",
                              }}
                              onPress={() => {
                                onFollow(item.id);
                                console.log("Done");
                              }}
                            >
                              <SimpleLineIcons
                                name="user-follow"
                                size={30}
                                color="#6E3AA7"
                                style={{
                                  alignSelf: "center",
                                }}
                              />
                            </TouchableOpacity>
                            {
                              //Follow Close
                            }
                          </>
                        )}
                      </View>
                    </TouchableOpacity>
                    {
                      //FlatList conatiner for each Item close
                    }
                  </>
                )}
              </>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
        {
          //FlatList Close
        }
      </View>
      {
        //FlatList Close
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#faf8f5",
  },
  textFieldView: {
    flexDirection: "row",
    width: 265,
    height: 45,
    backgroundColor: "#F1E7FF",
    borderRadius: 50,
    paddingLeft: 10,
    justifyContent: "center",
    alignSelf: "center",
  },
  textinpputField: {
    width: 232,
    height: 45,
    borderRadius: 50,
    padding: 10,
    fontFamily: "OpenSans-Regular",
  },
  doneButtonWrapper: {
    flex: 1,
    padding: 10,
    borderRadius: 50,
    width: 83,
    height: 45,
  },
  doneButtonText: {
    fontSize: 14,
    fontFamily: "OpenSans-SemiBold",
    textAlign: "center",
    color: colors.white,
  },
  inputAndButtonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
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
    height: "20%",
    width: "80%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#C0C0C0",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
