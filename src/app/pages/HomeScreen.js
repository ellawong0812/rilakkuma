import React, { useState } from 'react';
import { Button, View, Text, StyleSheet, Image, FlatList, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ImagesAssets } from '../../../assets/ImagesAssets';

function HomeScreen({ navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center',backgroundColor:"lightgreen" }}>

      <Text style={styles.baseText}>

      <TouchableHighlight onPress={() => navigation.navigate('Comment')}>
        <Text style={styles.titleText}>
        


          Rilakkuma:D
          HIHI Im Victor
        </Text>  
        </TouchableHighlight>


      </Text>
      <Text>Click on image to view details about them</Text>
      <TouchableHighlight onPress={() => navigation.navigate('WhiteBearDetailsScreen')}>
        <Image source={ImagesAssets.whiteBear} style={{width:300,height:300}}/>
      </TouchableHighlight>


      <TouchableHighlight onPress={() => navigation.navigate('BlackBearDetailsScreen')}>
        <Image source={ImagesAssets.blackBear} style={{width:300,height:300}}/>

      </TouchableHighlight>

    </View>

  );
}
const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 100,
    fontWeight: "bold",
    color:"red",
  },
  container: {
    flex: 1,
    padding: 20,
  },

  tinyLogo: {
    width: 50,
    height: 50,
  }, column: {
    margin: 20,
  },
  inner: {
    flexDirection: "row",
    marginRight: 20
  },
  image: {
    width: 40,
    height: 40,
  },
  textFont: {
    fontSize: 12,
  },
});

export default HomeScreen;
