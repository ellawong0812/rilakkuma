import * as React from 'react';
import {useState} from "react";
import { Button, View, Text,Image,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function BlackBearDetailsScreen({ navigation }) {
  const[count,setCount]=useState(1)

  function decreaCount(){
    setCount(prevCount => prevCount -1)
  }

  function increaCount(){
    setCount(prevCount => prevCount +1)
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"lavenderblush" }}>
    
      <Text style={{fontSize:50,fontWeight:"bold"}}>Hello! I live happily ;0 </Text>
      <Image source={require("../../../assets/family.png")} style={{width:300,height:300}}/>
      <View style={{flex:1,backgroundColor:"turquoise"}}>
        <Text>Your rate on Rilakkuma: </Text>
      <Button title='-' onPress={decreaCount}/>
      <Text>{count}</Text>
      <Button title='+' onPress={increaCount}/>
      </View>
    </View>
  );
}

export default BlackBearDetailsScreen;