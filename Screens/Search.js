import React from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import CustomButton from "../component/ButtonComponent";
import { Ionicons } from '@expo/vector-icons';
const Search=({navigation})=>{
    return(
      <View style={styles.container}>
        <Image style={styles.ImagesSty} source={require('../Images/WelcomePageLogo.png')}/>
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.textInput}
                placeholder="Search a Book"/>
            <Ionicons style={styles.iconStyle} name="ios-mic" size={35} color="black" />
        </View>
        <CustomButton text="Search" color='red'/>
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
    ImagesSty:{
      width: 250,
      height: 70,
      margin: 10,
    },SecondText:{
      fontSize: 16,
      paddingTop: 20,
      width: "90%",
    },
    textInput:{
      borderColor: "red",
      //borderWidth: 2,
      borderBottomWidth: 2,
      width: '78%',
      //borderRadius: 50,
      fontSize: 16,
      padding: 10,
    },inputContainer:{
      flexDirection: "row",
      width: '75%',
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: 40
      
    },
    iconStyle:{
      alignSelf: "auto",
    }

  });

  export default Search;