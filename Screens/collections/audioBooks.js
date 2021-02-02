import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function audioBooks() {
  return (
    <View style={styles.container}>
      <Text>Audio Books</Text>
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
