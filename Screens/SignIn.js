import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

const SignIn=({navigation})=>{
    return(
      <View style={styles.container}>
        <Text>SignIn Page</Text>
      </View>
  );
  }
  
  const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: "center",
    },


  });

  export default SignIn;