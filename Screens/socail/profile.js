import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Modal,
} from "react-native";

import * as firebase from "firebase";
import { AsyncStorage } from "react-native";
require("firebase/firestore");
require("firebase/firebase-storage");
import { EvilIcons } from "@expo/vector-icons";
import colors from "../../assets/colors/colors";

export default function Profile() {
  const [getData, setData] = useState();
  const [getModal, setModal] = useState(false);
  const [getSelected, setSelected] = useState({});

  useEffect(() => {
    fectchUserposts();
  }, []);
  const fectchUserposts = () => {
    firebase
      .firestore()
      .collection("posts")
      .doc(firebase.auth().currentUser.uid)
      .collection("userPosts")
      .orderBy("creation", "asc")
      .get()
      .then((snapshot) => {
        let posts = snapshot.docs.map((doc) => {
          const data = doc.data();
          return { ...data };
        });
        setData(posts);
      });
  };
  return (
    <View style={styles.container}>
      <Modal
        animationType="none"
        transparent={true}
        visible={getModal}
        onRequestClose={() => {
          setModal(false);
        }}
      >
        <View style={styles.modalBackground}>
          <View style={styles.activityIndicatorWrapper}>
            <Image
              source={{
                uri: getSelected.downloadURL,
              }}
              style={{
                height: 200,
                width: 120,
                borderRadius: 10,
                top: 20,
                marginBottom: 25,
                alignSelf: "center",
              }}
            />
            {
              //caption
            }
            <View
              style={{
                flexDirection: "row",
                width: "80%",
                alignSelf: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "OpenSans-SemiBold",
                  color: colors.blue,
                  marginRight: 5,
                }}
              >
                Caption :
              </Text>
              <Text
                style={{
                  fontFamily: "OpenSans-Regular",
                  fontSize: 14,
                  alignSelf: "center",
                  color: colors.blueFaded,
                }}
              >
                {getSelected.getcaption}
              </Text>
            </View>
            {
              //caption close
            }
            {
              //Status
            }
            <View
              style={{
                flexDirection: "row",
                width: "80%",
                alignSelf: "center",
                marginTop: 3,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "OpenSans-SemiBold",
                  color: colors.blue,
                  marginRight: 5,
                }}
              >
                Status :
              </Text>
              <Text
                style={{
                  fontFamily: "OpenSans-Regular",
                  fontSize: 14,
                  alignSelf: "center",
                  color: colors.blueFaded,
                }}
              >
                {getSelected.getquestion.quest}
              </Text>
            </View>
            {
              //Status CLose
            }
            {
              //Time
            }
            <View
              style={{
                flexDirection: "row",
                width: "80%",
                alignSelf: "center",
                marginTop: 3,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "OpenSans-SemiBold",
                  color: colors.blue,
                  marginRight: 5,
                }}
              >
                Time :
              </Text>
              <Text
                style={{
                  fontFamily: "OpenSans-Regular",
                  fontSize: 14,
                  alignSelf: "center",
                  color: colors.blueFaded,
                }}
              >
                {getSelected.getquestion.quest}
              </Text>
            </View>
            {
              //Time CLose
            }
          </View>
        </View>
      </Modal>
      {
        //Main Top That Conatins Photo And Following Info
      }
      <View
        style={{
          height: 80,
          //  backgroundColor: "red",
          alignSelf: "center",
          flexDirection: "row",
          width: "90%",
          justifyContent: "space-between",
        }}
      >
        {
          //Picture
        }
        <View
          style={{
            // backgroundColor: "cyan",
            height: 70,
            width: 70,
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
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
        <View
          style={{
            width: "70%",
            //  backgroundColor: "yellow",
            justifyContent: "space-between",
            flexDirection: "row",
            alignSelf: "center",
          }}
        >
          {
            //post
          }
          <View
            style={{
              flexDirection: "column",
            }}
          >
            <Text
              style={{
                alignSelf: "center",
              }}
            >
              56
            </Text>
            <Text
              style={{
                fontFamily: "OpenSans-SemiBold",
              }}
            >
              Posts
            </Text>
          </View>
          {
            //post Close
          }
          {
            //Followers
          }
          <View
            style={{
              flexDirection: "column",
            }}
          >
            <Text
              style={{
                alignSelf: "center",
              }}
            >
              217
            </Text>
            <Text
              style={{
                fontFamily: "OpenSans-SemiBold",
              }}
            >
              Followers
            </Text>
          </View>

          {
            //Followers Close
          }

          <View
            style={{
              flexDirection: "column",
            }}
          >
            <Text
              style={{
                alignSelf: "center",
              }}
            >
              56
            </Text>
            <Text
              style={{
                fontFamily: "OpenSans-SemiBold",
              }}
            >
              Following
            </Text>
          </View>
          {
            //Following
          }
          {
            //Followng Close
          }
        </View>
      </View>
      {
        //Main Top That Conatins Photo And Following Info
      }
      {
        //Naam and Bio start
      }
      <View
        style={{
          height: 80,
          // backgroundColor: "yellow",
          alignSelf: "center",
          flexDirection: "column",
          width: "100%",
          marginLeft: 5,
        }}
      >
        <Text
          style={{
            fontFamily: "OpenSans-SemiBold",
          }}
        >
          Syed Shahzaib Shah
        </Text>
        <Text
          style={{
            fontFamily: "Roboto-Regular",
          }}
        >
          Bio Aye gii
        </Text>
      </View>
      {
        //Naam and Bio close
      }
      {
        //Post Section Start
      }
      <View
        style={
          {
            //backgroundColor: "cyan",
            // width: "100%",
            // height: "100%",
          }
        }
      >
        <Text
          style={{
            fontFamily: "OpenSans-Bold",
            fontSize: 16,
            margin: 5,
          }}
        >
          Posts
        </Text>
        <View
          style={{
            width: "100%",
            //   backgroundColor: "yellow",
            alignItems: "center",
            height: 410,
            paddingBottom: 10,
          }}
        >
          <FlatList
            data={getData}
            keyExtractor={(item) => Math.random().toString(36).substring(7)}
            showsVerticalScrollIndicator={false}
            numColumns={3}
            renderItem={({ item }) => {
              return (
                <>
                  {getData == undefined ? (
                    <View
                      style={{ justifyContent: "center", alignSelf: "center" }}
                    >
                      <Text
                        style={{ fontSize: 18, fontFamily: "OpenSans-Bold" }}
                      >
                        Please Wait ...
                      </Text>
                      <ActivityIndicator size="small" color="#0000ff" />
                    </View>
                  ) : (
                    <TouchableOpacity
                      style={{
                        height: 200,
                        width: 120,
                        borderRadius: 10,
                        // backgroundColor: "red",
                        margin: 4,
                      }}
                      activeOpacity={0.7}
                      onPress={() => {
                        setSelected(item);
                        setModal(true);
                      }}
                    >
                      <Image
                        source={{
                          uri: item.downloadURL,
                        }}
                        style={{
                          height: 200,
                          width: 120,
                          borderRadius: 10,
                        }}
                      />
                    </TouchableOpacity>
                  )}
                </>
              );
            }}
          />
        </View>
      </View>
      {
        //Post Section Close
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  justifyContent: "center",
    //  alignItems: "center",
    backgroundColor: "#faf8f5",
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
    height: "60%",
    width: "100%",
    borderTopStartRadius: 50,
    borderWidth: 1,
    borderColor: "#C0C0C0",
    display: "flex",
    // alignItems: "center",
    //justifyContent: "space-around",
    bottom: 0,
    position: "absolute",
    borderTopRightRadius: 50,
  },
});
