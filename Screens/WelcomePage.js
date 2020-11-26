import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

const WelcomeScreen=({navigation})=>{
    return(
      <View style={styles.container}>
        <View style={styles.textContainer}>
            <Text style={styles.WelcomeText}>Welcome To WordsWorth</Text>
        </View>
        <Image style={styles.ImagesSty} source={require('../Images/WelcomePageLogo.png')}/>
        <Text style={styles.SecondText}>Words Worth helps you search books conversion to audiobook, save time and stay organized</Text>
        <Button title="Get Started" onPress={()=>{}}/>
        
        <Text style={styles.thirdText}>By Joining you agree to share information with people in your friendlist</Text>

      </View>
  );
  }
  
  const styles = StyleSheet.create({
    textContainer:{
      
    },
    container:{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: "center",
    },
    WelcomeText:{
      fontSize: 26,
      margin: 4,
    },
    ImagesSty:{
      width: 250,
      height: 70,
      margin: 10,
    },SecondText:{
      fontSize: 16,
      paddingTop: 20,
      width: "90%",
    },
    thirdText:{
      //flex: 1,
     // justifyContent: 'flex-end',
     // marginBottom: 36
    }

  });

  export default WelcomeScreen;