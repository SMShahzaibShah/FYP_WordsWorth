import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function newsFeed() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
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
});
