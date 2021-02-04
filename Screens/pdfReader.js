import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import PDFReader from "rn-pdf-reader-js";
import Constants from "expo-constants";

export default function reades({ navigation, route }) {
  return (
    <View style={styles.container}>
      <PDFReader
        source={{
          uri:
            "file:///storage/emulated/0/expoWordsWorthDownload/Books/" +
            route.params.BookDetails.name +
            ".pdf",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
  },
});
