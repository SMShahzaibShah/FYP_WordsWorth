import   React ,{useEffect,useState} from 'react';
import { TextInput,StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import CustomButton from "../component/ButtonComponent";
import * as firebase from "firebase"
const SignIn=({navigation,route})=>{
  const [email,setemail]=useState("");
  const [pass,setpass]=useState("");
  
  const onSignIn=()=>{
    firebase.auth().signInWithEmailAndPassword(email, pass)
    .then((user) => {
      navigation.navigate('Dashboard')
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorCode)
     // navigation.navigate('SignIn')
    });  
  }
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
                placeholder="Enter username/Email"
                value={email}
                onChangeText={(text)=>setemail(text)}
                />
        </View>
        <Text style={styles.label}>Password</Text>
        <View style={styles.inputContainer}>
        <TextInput 
                style={styles.textInput}
                placeholder="Enter Password"
                secureTextEntry
                value={pass}
                onChangeText={(text)=>setpass(text)}
                />
                
        </View>
        </View>
        <View style={styles.button}>
        <CustomButton text="Sign In" color='red' onPressEvent={()=>onSignIn()}/>
        </View>
        <View style={{flexDirection:"row", margin: 20, justifyContent: "space-between", width: "55%"}}>
        <Text style={styles.Hitext}>Create an Account</Text>
        <TouchableOpacity 
        onPress={()=>navigation.navigate("Signup")}>
          <Text style={{...styles.label, alignSelf:'center'}}>SignUp</Text>
        </TouchableOpacity>
                
        </View>
        <Text style={{...styles.label, marginTop: -10}}>Forgot Password ?</Text>
        
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