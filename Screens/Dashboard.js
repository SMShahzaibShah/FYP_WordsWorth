import React ,{useState} from 'react';
import { ScrollView,StyleSheet, Text, View, TouchableOpacity } from 'react-native';

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
          <Text style={styles.text}>DashBoard</Text>
        {scrolView}
      </View>
  );
  }
  
  const styles = StyleSheet.create({
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
        height: 100,
        borderRadius: 10,
      },
      container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
       // justifyContent: 'center',
       paddingTop: 40,
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