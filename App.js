import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  const WelcomeScreen=({navigation})=>{
    return(
      <View style={styles.Scontainer}>
        <Text>Welcome To WordsWorth</Text>
        {//}<Image source={require('./Images/WelcomePageLogo.PNG')} />
        }
        <Image source={require('./Images/WelcomePageLogo.png')}/>
        <Text>Words Worth helps you search books conversion to audiobook, save time and stay organized</Text>
        <Button title="Get Started" onPress={()=>{}}/>
        <Text>By Joining you agree to share information with people in your friendlist</Text>

      </View>
  );
  }
  


  return (
    <WelcomeScreen></WelcomeScreen>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Scontainer:{ 
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center' 
  },

});
