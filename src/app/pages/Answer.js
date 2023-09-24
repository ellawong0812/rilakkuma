import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Answer = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.answer}>Answer</Text>
    </SafeAreaView>
  )
}

export default Answer

const styles = StyleSheet.create({
    container:{
        backgroundColor:"yellow",
        height:90,
        justifyContent:"center",
        alignItems:"center",
        marginVertical:10,
    },
    question:{
        fontSize:30,
        fontWeight:"bold",
    },
})
