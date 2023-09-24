import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Question = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.question}>Question</Text>
    </SafeAreaView >
  )
}

export default Question

const styles = StyleSheet.create({
    container:{
        backgroundColor:"pink",
        height:250,
        justifyContent:"center",
        alignItems:"center",
    },
    question:{
        fontSize:30,
        fontWeight:"bold",
    },
})
