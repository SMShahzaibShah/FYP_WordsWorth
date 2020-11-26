import React from 'react';
import { TextInput,StyleSheet, Text, View, Button, Image } from 'react-native';
import CustomButton from "../component/ButtonComponent";


const SignIn=({navigation})=>{
    return(
      <View style={styles.container}>
        <Image style={styles.ImagesSty} source={require('../Images/WelcomePageLogo.png')}/>
        <View style={styles.internalContents}> 
        <Text style={styles.text}>Sign In</Text>
        <Text style={styles.Hitext}>Hi, there! Nice to see you again </Text>
        <Text style={styles.label}>Email</Text>
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.textInput}
                placeholder="Enter username/Email"/>
        </View>
        <Text style={styles.label}>Password</Text>
        <View style={styles.inputContainer}>
        <TextInput 
                style={styles.textInput}
                placeholder="Enter Password"/>

        </View>
        </View>
        <View style={styles.button}>
        <CustomButton text="Sign In" color='red' />
        </View>
        <View style={{flexDirection:"row", margin: 20, justifyContent: "space-between", width: "80%"}}>
        <Text style={styles.label}>Forget Password</Text>
        <Text style={styles.label}>SignUp</Text>
        </View>
        
        
      </View>
  );
  }
  
  const styles = StyleSheet.create({
    label:{
        fontSize: 16,
        color: 'red',
    },
    internalContents:{
      width: "85%", 
    }
    ,container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
       // justifyContent: 'center',
       //paddingTop: 40,
    },
    ImagesSty:{
      width: 200,
      height: 60,
      marginTop: 100,
      marginBottom: 50,
      //justifyContent: "center"
    },
    textInput:{
        borderColor: "grey",
        //borderWidth: 2,
        borderBottomWidth: 2,
        width: '95%',
        //borderRadius: 50,
        fontSize: 16,
        padding: 10,
      },
      inputContainer:{
        flexDirection: "row",
        width: '100%',
        justifyContent: "space-between",
        alignItems: "flex-end",
        paddingBottom: 20,
        paddingTop: 0,
      },
      text:{
        fontSize: 30,
        color: 'black',
        

      },button:{
          margin: 10,
          alignItems: "center",
          justifyContent: "center"
      },
      Hitext:{
        fontStyle:"italic",
        color: "lightgrey",
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 10,
      }

  });

  export default SignIn;