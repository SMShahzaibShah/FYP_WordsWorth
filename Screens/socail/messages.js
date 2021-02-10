import React from "react";
import { View, Text } from "react-native";

export default function message() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#faf8f5",
      }}
    >
      <Text>messages</Text>
    </View>
  );
}
