import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import * as firebase from "firebase";
import { AsyncStorage } from "react-native";
import post from "./post";
require("firebase/firestore");
require("firebase/firebase-storage");

export default function newsFeed() {
  const [getUsersInfo, setUsersInfo] = useState([]);
  const [getUsersPost, setUsersPost] = useState([]);
  const [getFeedData, setFeedData] = useState([]);
  const [getTime, setTime] = useState(0);

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
          // console.log(feedDataa);
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
    //setUsersInfo([]);
    // setUsersPost([]);
    // if (getTime == 0) {
    // fetchUserFollowing();
    //  }
  }, []);

  const fetchUserFollowing = () => {
    // setTime(1);
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

        setTimeout(() => {
          fetchFeedData();
          // console.log(getUsersPost);
        }, 1000);
      });
  };

  return (
    <View style={styles.container}>
      <Text>HI</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#faf8f5",
  },
});
