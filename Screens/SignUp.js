import React from 'react';
import { TextInput,StyleSheet, Text, View, Button, Image } from 'react-native';
import CustomButton from "../component/ButtonComponent";


const SignUp=({navigation})=>{
    return(
      <View style={styles.container}>
          <Text style={styles.text}>Sign Up</Text>
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.textInput}
                placeholder="Enter First Name"/>
        </View>
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.textInput}
                placeholder="Enter Last Name"/>
        </View>
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.textInput}
                placeholder="Enter Email"/>
        </View>
        <View style={styles.inputContainer}>
        <TextInput 
                style={styles.textInput}
                placeholder="Enter Password"/>

        </View>
        <View style={styles.button}>
        <CustomButton style={{margin: 10}} text="Sign Up" />
        <CustomButton style={{margin: 10}} text="Sign In" />
        </View>
        
      </View>
  );
  }
  
  const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
       //paddingTop: 40,
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
        alignItems: "flex-end"
    
      },
      text:{
        fontSize: 32,
        color: 'darkgrey',
      },button:{
          margin: 10,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          padding: 10,
      }

  });

  export default SignUp;