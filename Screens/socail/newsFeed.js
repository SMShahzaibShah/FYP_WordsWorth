import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Modal,
  ActivityIndicator,
} from "react-native";

import * as firebase from "firebase";
import { AsyncStorage } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

require("firebase/firestore");
require("firebase/firebase-storage");
import colors from "../../assets/colors/colors";

export default function newsFeed() {
  const [getUsersInfo, setUsersInfo] = useState([]);
  const [getUsersPost, setUsersPost] = useState([]);
  const [getFeedData, setFeedData] = useState([]);
  const [getTime, setTime] = useState(0);
  const [getF, setF] = useState(["Hi", "Hi", "Hi", "Hi"]);
  const [getModal, setModal] = useState(false);

  const fetchFeedData = () => {
    var arr1d = [].concat(...getUsersPost);
    for (var i = 0; i < getUsersInfo.length; i++) {
      var j = 0;
      for (j; j < arr1d.length; j++) {
        if (getUsersInfo[i].id == arr1d[j].id) {
          const feeData = {
            userInformation: getUsersInfo[i],
            userPosts: arr1d[j],
          };
          var feedDataa = getFeedData;
          feedDataa.push(feeData);
          setFeedData(feedDataa);
          //console.log(feedDataa);
        }
      }
    }
  };

  const fetchUsersInfo = (following) => {
    // console.log(following);
    for (var i = 0; i < following.length; i++) {
      firebase
        .firestore()
        .collection("users")
        .doc(following[i])
        .get()
        .then((snapshot) => {
          const usedata = snapshot.data();
          const id = snapshot.id;
          const uData = {
            info: usedata,
            id: id,
          };
          var usersData = getUsersInfo;
          usersData.push(uData);
          setUsersInfo(usersData);
          // console.log(getUsersInfo);
        });
    }
  };

  const fectchUserposts = (following) => {
    //  console.log(following);
    for (var i = 0; i < following.length; i++) {
      const id = following[i];
      firebase
        .firestore()
        .collection("posts")
        .doc(following[i])
        .collection("userPosts")
        .orderBy("creation", "asc")
        .get()
        .then((snapshot) => {
          let posts = snapshot.docs.map((doc) => {
            const data = doc.data();
            // const id = idd;
            return { id, ...data };
          });

          if (posts.length > 0) {
            var usepost = getUsersPost;
            usepost.push(posts);
            setUsersPost(usepost);
          }
        });
    }
  };

  useEffect(() => {
    setUsersInfo([]);
    setUsersPost([]);
    if (getTime == 0) {
      fetchUserFollowing();
    }
  }, []);

  const fetchUserFollowing = () => {
    setTime(1);
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
        fetchUsersInfo(following);
        fectchUserposts(following);
        //  console.log(getUsersPost);

        fetchFeedData();
        // console.log(getUsersPost);
      });
  };

  const Date = (TimeStamp) => {
    return TimeStamp.toDate().toString();
  };
  return (
    <View style={styles.container}>
      <Modal animationType="none" transparent={true} visible={getModal}>
        <View style={styles.modalBackground}>
          <View style={styles.activityIndicatorWrapper}>
            <Text>Please Wait...</Text>
            <ActivityIndicator size="small" color="#0000ff" />
          </View>
        </View>
      </Modal>

      <FlatList
        data={getFeedData}
        keyExtractor={(item) => Math.random().toString(36).substring(7)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                height: 455,
                //width: "100%",
                // backgroundColor: "red",
                margin: 5,
                paddingLeft: 10,
                paddingRight: 10,
                paddingBottom: 10,
                paddingTop: 15,
                //Shadow
                borderWidth: 1,
                borderRadius: 2,
                borderColor: "#ddd",
                borderBottomWidth: 0,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                elevation: 1,
                marginLeft: 5,
                marginRight: 5,
                marginTop: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                {
                  //Picture
                }
                <View
                  style={{
                    // backgroundColor: "cyan",
                    height: 40,
                    width: 40,
                    borderRadius: 50,
                    //justifyContent: "center",
                    //alignItems: "center",
                    //alignSelf: "center",
                    paddingTop: 10,
                    paddingLeft: 8,
                  }}
                >
                  <EvilIcons
                    name="user"
                    size={70}
                    color="black"
                    style={{ margin: -15 }}
                  />
                </View>
                {
                  //Picture Close
                }
                {
                  //Name and Time
                }
                <View
                  style={{
                    //  backgroundColor: "yellow",
                    height: 50,
                    width: "83%",
                  }}
                >
                  {
                    //Name
                  }
                  <Text
                    style={{
                      fontFamily: "OpenSans-SemiBold",
                      fontSize: 14,
                      color: colors.blue,
                      marginTop: 5,
                    }}
                  >
                    {item.userInformation.info.name.fName}{" "}
                    {item.userInformation.info.name.LName}
                  </Text>
                  {
                    //Name close
                  }
                  {
                    //Time
                  }
                  <Text
                    style={{
                      fontFamily: "OpenSans-Regular",
                      fontSize: 12,
                      color: colors.gray,
                      marginTop: 2,
                    }}
                  >
                    {Date(item.userPosts.creation)}
                  </Text>
                  {
                    //Time close
                  }
                </View>
                {
                  //Name and Time Close
                }
              </View>
              {
                //Image
              }
              <View
                style={{
                  height: 370,
                  width: 345,
                  //     backgroundColor: "cyan",
                  margin: 10,
                  alignSelf: "center",
                }}
              >
                {
                  //Caption
                }
                <Text
                  style={{
                    fontFamily: "OpenSans-Regular",
                    fontSize: 14,
                    color: colors.blue,
                    marginTop: 2,
                    marginBottom: 2,
                    //marginTop: 5,
                  }}
                >
                  {item.userPosts.getcaption}
                </Text>
                {
                  //Caption Close
                }
                {
                  //Image
                }
                <View
                  style={{
                    height: 320,
                    //     backgroundColor: "blue",
                  }}
                >
                  <Image
                    source={{
                      uri: item.userPosts.downloadURL,
                    }}
                    style={{
                      height: 320,
                      width: 200,
                    }}
                  />
                </View>
                {
                  //Image Close
                }
                {
                  //like Comment
                }
                <View
                  style={{
                    flexDirection: "row",
                    //   backgroundColor: "yellow",
                    width: 70,
                    justifyContent: "space-between",
                    marginTop: 2,
                  }}
                >
                  <AntDesign
                    name="hearto"
                    size={24}
                    color="black"
                    style={{
                      alignSelf: "center",
                    }}
                  />
                  <FontAwesome
                    name="comment-o"
                    size={25}
                    color="black"
                    style={{
                      alignSelf: "center",
                    }}
                  />
                </View>
                {
                  //like Comment
                }
              </View>

              {
                //Image Close
              }
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
