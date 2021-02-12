import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import * as firebase from "firebase";
require("firebase/firestore");
require("firebase/firebase-storage");
import colors from "../../assets/colors/colors";

import { LinearGradient } from "expo-linear-gradient";
export default function post() {
  const [getcaption, setcaption] = useState("");
  const [getheight, setheight] = useState(0);

  const UploadImage = async () => {
    const uri = "to be set";
    const childPath = `post/${
      firebase.auth().currentUser.uid
    }/${Math.random().toString(36)}`;
    const response = await fetch(uri);
    const blob = await response.blob();
    const task = firebase.storage().ref().child(childPath).put(blob);

    const taskProgress = (snapshot) => {
      console.log(`transferred: ${snapshot.bytesTransferred}`);
    };
    const TaskCompleted = () => {
      task.snapshot.ref.getDownloadURL().then((snapshot) => {
        savePostData(snapshot);
        console.log(snapshot);
      });
    };
    const taskError = (snapshot) => {
      console.log(snapshot);
    };
    task.on("state_changed", taskProgress, taskError, TaskCompleted);
  };
  const savePostData = (downloadURL) => {
    firebase
      .firestore()
      .collection("posts")
      .doc(firebase.auth().currentUser.uid)
      .collection("userPosts")
      .add({
        downloadURL,
        getcaption,
        creation: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(function () {
        alert("Post Added");
      });
  };
  return (
    <View style={styles.container}>
      {
        //Search Image
      }
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          //  marginTop: 80,
        }}
      >
        <Image
          source={require("../../assets/Postpng.png")}
          style={{
            //position: "absolute",
            height: 160,
            width: 200,
          }}
        />
      </View>
      {
        //TExtInput Container
      }
      <View
        style={{
          width: "90%",
          //alignContent: "center",
          alignSelf: "center",
          //backgroundColor: "red",
        }}
      >
        <Text
          style={{
            fontFamily: "OpenSans-Regular",
            fontSize: 17,
            color: colors.blue,
            marginBottom: 10,
            marginTop: 10,
          }}
        >
          {" "}
          What's In your Mind{" "}
        </Text>
        <TextInput
          placeholder="Type Here..."
          disableFullscreenUI={true}
          multiline={true}
          onChangeText={(text) => {
            setcaption(text);
          }}
          style={styles.textinpputField}
        ></TextInput>
        {
          //Button
        }
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            margin: 10,
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
              <Text style={styles.doneButtonText}>Post</Text>
            </LinearGradient>
          </Text>
        </TouchableOpacity>
        {
          //Button close
        }
      </View>
      {
        //TExtInput Container close
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    //   alignItems: "center",
    backgroundColor: "#faf8f5",
  },
  textinpputField: {
    width: "100%",
    borderRadius: 15,
    padding: 10,
    fontFamily: "OpenSans-Regular",
    backgroundColor: "#F1E7FF",
  },
  doneButtonWrapper: {
    flex: 1,
    padding: 10,
    borderRadius: 50,
    width: 80,
    height: 40,
  },
  doneButtonText: {
    fontSize: 14,
    fontFamily: "OpenSans-SemiBold",
    textAlign: "center",
    color: colors.white,
  },
});
