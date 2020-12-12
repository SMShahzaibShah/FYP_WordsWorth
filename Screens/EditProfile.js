import   React ,{useEffect,useState} from 'react';
import { TextInput,StyleSheet, Text, View, Button, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomButton from "../component/ButtonComponent";
import * as firebase from "firebase"


const EditProfile=({navigation,route})=>{
  const [email,setemail]=useState("");
  const [pass,setpass]=useState("");
  const [name,setname]=useState({FName:'', LName:''})
  
  const onUpdateProfile=()=>{
    var user = firebase.auth().currentUser;
    user.updateProfile({
      displayName: name.fName +","+ name.LName
    }).then(function() {
    // Update successful.
    }).catch(function(error) {
    // An error happened.
    });
    user.updatePassword(pass).then(function() {
      // Update successful.
    }).catch(function(error) {
      // An error happened.
    });  
  }

  useEffect(()=>{
    var disName = route.params.usersname.user.displayName
    var  disNamear = disName.split(',')
    setname({FName: disNamear[0], LName: disNamear[1]})
    setemail(route.params.usersname.user.email)
  },[]) 
    return(
      <View style={styles.container}>
        {console.log(name)}
        
        <Image style={styles.ImagesSty} source={require('../Images/WelcomePageLogo.png')}/>
        <View style={styles.internalContents}>
          <Text style={styles.text}>Edit Profile</Text>
          <Text style={{...styles.label, marginBottom: -5}}>First Name</Text>
          <View style={styles.inputContainer}>
            <TextInput 
                style={styles.textInput}
                value={name.FName}
                onChangeText={(text)=>setname({fName: text, LName: name.LName})}
                
                />
        </View>
        <Text style={{...styles.label, marginBottom: -5}}>Last Name</Text>
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.textInput}
                placeholder="Enter Last Name"
                value={name.LName}
                onChangeText={(text)=>setname({fName: name.FName, LName: text})}
                />
        </View>
        <Text style={{...styles.label, marginBottom: -5}}>Password</Text>
        <View style={styles.inputContainer}>
        <TextInput 
                style={styles.textInput}
                placeholder=" Password"
                value={pass}
                onChangeText={(text)=>setpass(text)}
                secureTextEntry
                />
        </View>
        </View>

        <View style={{...styles.button, marginBottom: -5, flexDirection: 'row', marginLeft: 5, justifyContent: "space-between", width: "60%"}}>
            <CustomButton  text="Update" color='green' onPressEvent={()=>onUpdateProfile()} />
            <CustomButton  text="Cancel" color='red' onPressEvent={()=>navigation.navigate("Dashboard", {user: route.params.username})} />
        </View>
        <View style={{flexDirection:"row", margin: 20, justifyContent: "space-between", width: "50%", alignSelf: "center"}}>
        <Text style={styles.Hitext}>Have an Account ?</Text>
        <TouchableOpacity 
        onPress={()=>navigation.navigate('Signin')}>
        <Text style={{...styles.label, alignSelf: "center", margin: 9}}>SignIn</Text>
        </TouchableOpacity>
        </View>
        
      </View>
  );
  }
  
  const styles = StyleSheet.create({
    label:{
      fontSize: 16,
      color: 'red',
      //alignSelf:'center'
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
      paddingBottom: 10,
      paddingTop: 0,
    },
    text:{
      fontSize: 30,
      color: 'black',
      marginBottom: 5,
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

  export default EditProfile;