import React ,{useState} from 'react';
import { ScrollView,StyleSheet, Text, View, TouchableOpacity ,Image} from 'react-native';

import {DashboardData} from "../constants/DashboardData";

const DashBoard=({navigation})=>{
    const[getList, setList]=useState(DashboardData);
    
    const scrolView=(
        <ScrollView style={styles.scrollView}>
        {getList.map((item) => 
        <TouchableOpacity
        activeOpacity={0.7}
        key={item.key}
        onPress={()=>{}}>
            <View style={{...styles.scrollViewItem, backgroundColor: item.backColor}}>
              <Text style={styles.scrollViewText}> {item.data}</Text>
            </View>
        </TouchableOpacity>
          )}
      </ScrollView>
      );
    
    return(
      <View style={styles.container}>
          <Image style={styles.ImagesSty} source={require('../Images/WelcomePageLogo.png')}/>
          <Text style={styles.text}>Dashboard</Text>
          <View style={styles.internalContents}> 

          </View>
        {scrolView}
      </View>
  );
  }
  
  const styles = StyleSheet.create({
    internalContents:{
      width: "85%", 
    },
    ImagesSty:{
      width: 200,
      height: 60,
      marginTop: 50,
      marginBottom: 20,
      //justifyContent: "center"
    },
    crossScrollViewText:{
        fontSize: 16,
        color:'white',
        fontWeight: "bold"
      }
      ,scrollViewText:{
        fontSize: 22,
        color: 'white'
      },scrollView:{
        width: '80%',
      },
      scrollViewItem:{
        flexDirection: 'row',
        justifyContent: 'space-between',
       // backgroundColor:"grey",
        alignSelf: "center",
        padding: 10,
        margin:5,
        width: '97%',
        height: 60,
        borderRadius: 10,
      },
      container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
       // justifyContent: 'center',
       //paddingTop: 40,
    },
    text:{
      fontSize: 30,
      color: 'black',
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