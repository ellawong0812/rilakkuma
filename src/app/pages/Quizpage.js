import { SafeAreaView, StyleSheet, Text, View,Button, Alert } from 'react-native';
import React from 'react';
import Question from './Question';
import Answer from './Answer';

const Quizpage = () => {
  return (
    <View>
      <Question/>
      <Answer/>
      <Answer/>
      <Answer/>
      <Answer/>
      <Button title="Next" onPress={() => Alert.alert("Congralation","Correct",[{text:"Close"}])}/>
    </View>
  )
}

export default Quizpage

const styles = StyleSheet.create({})
