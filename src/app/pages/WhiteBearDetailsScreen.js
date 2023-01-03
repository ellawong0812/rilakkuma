import * as React from 'react';
import { Button, View, Text, Image,StyleSheet,TouchableOpacity,Alert,ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ImagesAssets } from '../../../assets/ImagesAssets';

function WhiteBearDetailsScreen({ navigation }) {
  return (
  
  
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"lightcyan" }}>
      <Text style={{fontWeight:"bold",fontSize:50, color:"red"}}>Hello!I am Korilakkuma</Text>
      <View style={{backgroundColor:"blue",alignItems:"center"}}>
      <Text style={{color:"white"}}>I make a friend called chairoikoguma</Text>
      
      <TouchableOpacity onPress={() => Alert.alert("Hey!","Do you like me?",[{text:"Yes"},{text:"No"},
    ])}>
      <Image source={ImagesAssets.myfriends} />
      </TouchableOpacity>
      <View style={{backgroundColor:"lightblue",alignItems:"center"}}>
      <Text>I like eating ice-cream with him</Text>
      <Image source={require("../../../assets/icecream.png")} style={{width:300,height:300}}/>


      </View>
      </View>
     </View>
  );
}


export default WhiteBearDetailsScreen;


  
