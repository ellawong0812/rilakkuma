import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableHighlight, ScrollView } from 'react-native';
import { ImagesAssets } from '../../../assets/ImagesAssets';
import { Button } from '@ant-design/react-native'


function HomeScreen({ navigation }) {

  return (
    <ScrollView>
    <Button type="primary" >Welcome</Button>
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: "lightgreen" }}>

        <Text style={styles.baseText}>

          <TouchableHighlight onPress={() => navigation.navigate('Comment')}>
            <Text style={styles.titleText}>



              Rilakkuma:D
            </Text>
          </TouchableHighlight>


        </Text>
        <Text>Click on image to view details about them</Text>
        <TouchableHighlight onPress={() => navigation.navigate('WhiteBearDetailsScreen')}>
          <Image source={ImagesAssets.whiteBear} style={{ width: 300, height: 300 }} />
        </TouchableHighlight>


        <TouchableHighlight onPress={() => navigation.navigate('BlackBearDetailsScreen')}>
          <Image source={ImagesAssets.blackBear} style={{ width: 300, height: 300 }} />

        </TouchableHighlight>

        <View style={{margin:30,padding:30,backgroundColor:"cornflowerblue",borderRadius:100}}>
        <TouchableHighlight onPress={() => navigation.navigate('Quiz')}>
          <Text style={{fontSize:50,color:'darkorchid',fontWeight:"bold"}}>Have a Quiz to test your knowledge on Rilakkuma</Text>
        </TouchableHighlight>

        <Image source={ImagesAssets.myhome} style={{ width: 300, height: 300, borderRadius:100 }} />
      </View>
      </View>
    </ScrollView>


  );
}
const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 50,
    fontWeight: "bold",
    color: "darksalmon",
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
