import React from 'react';
import { ScrollView, TextInput,StyleSheet, Text, View, Button, Image, ScrollView, TouchableOpacity } from 'react-native';
import CustomButton from "../component/ButtonComponent";


const DashBoard=({navigation})=>{
    return(
      <View style={styles.container}>
          <Text style={styles.text}>Dashboard</Text>
          <ScrollView>
                <TouchableOpacity key={Math.random()} activeOpacity={0.7}>
                    <View>
                        <Text>Search a Book</Text>
                    </View>
                    
                </TouchableOpacity>
          </ScrollView>

        <View style={styles.divContainer}>
            <Text style={styles.divText} >Search a Book</Text>
        </View >
        <View style={styles.divContainer}>
            <Text style={styles.divText}>Libray</Text>
        </View>
        <View style={styles.divContainer}>
            <Text style={styles.divText}>Conversion To Audio book</Text>
        </View>
        <View style={styles.divContainer}>
            <Text style={styles.divText}>Audio Player</Text>
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
    text:{
        fontSize: 32,
        color: 'darkgrey',
      }
      ,divContainer:{
          width: "90%",
          height: 80,
          backgroundColor: 'lightblue',
          alignItems: "center",
          justifyContent: "space-around",
          margin: 5,
      },
      divText:{
          fontSize: 16,
          color: "white",
      }

  });

  export default DashBoard;