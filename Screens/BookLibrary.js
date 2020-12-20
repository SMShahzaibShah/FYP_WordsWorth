import  React,{useState,useEffect} from 'react';
import { View, ActivityIndicator, Text, Button, StyleSheet, FlatList, Image, TouchableOpacity, TextInput  } from 'react-native';
const firebaseBooksData = require("firebase");


const BookLibrary = ({ navigation ,route }) =>{

    const [isLoading, setLoading] = useState(true);
    const [getbook,setbooks]=useState();
    const [getF,setF]=useState(getbook);
    
    
/** 
    const getAPIData = () => {
      return fetch(listData)
        .then((response) => response.json())
        .then((responseJson) => {
          setData(responseJson);
          setLoading(false);
          if(isLoading==true){
            setF(getData)
          }
        })
      .catch((error) => {
        console.error(error);
      });
    }
*/
var config = {
  apiKey: "AIzaSyC_zg-7N_LpvkhLAymvksM7Y9lrcA0AkjY",
  authDomain: "dogtag-e36b1.firebaseapp.com",
  databaseURL: "https://dogtag-e36b1.firebaseio.com/"
};
var sec;

function filterList(text){
  console.log(text)
  var list=getbook.filter(item=>item.name.includes(text));

  //    console.log(list)
  setF(list);
}


    useEffect(() => {
      // Initialize Firebase
      try{
        sec= firebaseBooksData.initializeApp(config, 'Secondary')
       // setSec(secon)
      }catch(exception){//console.log(exception)
        sec = firebaseBooksData.apps[firebaseBooksData.apps.length-1]
      }
      sec.database().ref('Names').on('value',function(snapshot){
        var data="";
        var temp=[];     
        snapshot.forEach(function(childSnapshot){
               data = childSnapshot.val();
               temp.push(data);
             })
             setbooks(temp);
             if(isLoading==true){
                setF(getbook);
             }
             setLoading(false);
            });
           // console.log(getbook)
            
      },[])  
 
const Loading=(
    <View style={{ flex: 1, padding: 20 }}>
        <ActivityIndicator size="large" />
        <Text>Loading Books From database...</Text>
      </View>
);
 
  
    

const FlatListData=(
  <View style={styles.flatList}>
        <FlatList
        data={getF}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {}}  >
            <View style={{...styles.ScrollView, flexDirection: "row", padding: 5 }}>
              <View style={{...styles.ScrollViewItem, paddingLeft: 5, paddingRight: 5 }}>
                <Text style={{...styles.ScrollViewText,fontSize: 20}}>{item.name}</Text>
                <View style={{...styles.ScrollView, flexDirection: "row", paddingLeft: 7 }}>
                    <Image style={{width: 30, height: 20, padding: 20}} source={require('../Images/eyeIcon.png')}/>
                    <Image style={{width: 30, height: 20, padding: 20}} source={require('../Images/delete.png')}/>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      </View>
 ) ;

    
  return(
  
    <View style={styles.flatList}>
    <TextInput
        style={styles.textInput} 
        placeholder="Enter Book to search"
        onChangeText={(text)=>filterList(text)}
    ></TextInput>
    {isLoading === true ? Loading : FlatListData}
    </View>
    
    );
  

}

  const styles = StyleSheet.create({
    container:{
      flex: 1, alignItems: 'center', justifyContent: 'center'
      , paddingTop: 10,
        backgroundColor: '#ecf0f1',
        padding: 8,
      },
      flatList: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 30 },
      ScrollViewItem:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor:"grey",
        alignSelf: "center",
        padding: 10,
        margin:5,
        width: '75%',
        borderRadius: 10,
    
      },
      ScrollViewText:{
        fontSize: 18,
        color: 'white',
      },
      ScrollView:{
        width: '100%'
      },
      textInput:{
        paddingTop:10,
        color:"black",
        borderColor: 'red',
        //borderWidth: 2,
        borderBottomWidth:2,
        width: "80%",
        fontSize: 24,
        //borderRadius: 40,
        fontSize: 16,
        padding: 10,
      },
    })
  
  export default BookLibrary