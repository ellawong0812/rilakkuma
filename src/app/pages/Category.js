import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'

export default function Category (props) {
  return (
    <View style={styles.container}>
      
      <Image source={props.image} style={styles.image}/>
      <Text style={styles.title}>{props.title}</Text>

    </View>
  );
}


const styles = StyleSheet.create({
    image:{
        height:70,
        width:70,
        borderRadius:15,

    },
    container:{
        flexDirection:"row",
        padding:10,
        backgroundColor:"grey",
        borderRadius:100,
        marginVertical:20,

    },
    title:{
        fontSize:20,
        fontWeight:"bold",
        color:"darkblue",
        marginLeft:20,
        marginTop:20,

    },
});

