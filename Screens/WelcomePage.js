import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import CustomButton from "../component/ButtonComponent";
const WelcomeScreen=({navigation})=>{
    return(
      <View style={styles.container}>
        <Image style={styles.ImagesSty} source={require('../Images/WelcomePageLogo.png')}/>
        <Text style={styles.SecondText}>Words Worth helps you search books conversion to audiobook, save time and stay organized</Text>
        <CustomButton text="Get Started" color="grey" />

        <View style={styles.bottom}>
          <Text style={styles.thirdText}>By Joining you agree to share information with people in your friendlist</Text>
        </View>
        
      </View>
  );
  }
  
  const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: 'center'
    },
    ImagesSty:{
      width: 250,
      height: 70,
      marginTop: 300,
      justifyContent: "center"
    },SecondText:{
      fontSize: 16,
      paddingTop: 20,
      width: "75%",
      justifyContent: "space-between",
      marginBottom: 30,
    },
    thirdText:{
    fontSize: 14,
    justifyContent: "space-between",
    fontStyle: "italic", 
    color: "darkgrey"
    }
    ,bottom:{
      flex: 1,
      justifyContent: 'flex-end',
      alignSelf: "center",
      marginBottom: 10,
      width: "89%",
      //justifyContent: "space-between",
      
    }
  });

  export default WelcomeScreen;