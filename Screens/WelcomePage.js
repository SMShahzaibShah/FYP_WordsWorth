import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const WelcomeScreen=({navigation})=>{
    return(
      <View style={styles.container}>
    <Text>Screen 2</Text>
    <Text>Dashboard</Text>
    <Button title="Back"
      onPress={()=> navigation.goBack()}/>
      <Button title="Go to Home Screen"
        onPress={()=> navigation.popToTop() }/>
    </View>
  );
  }
  
  const styles = StyleSheet.create({
    container:{ flex: 1, alignItems: 'center', justifyContent: 'center' },
  });

  export default WelcomeScreen;