import * as React from 'react';
import { Button, View, Text, Image,StyleSheet,TouchableOpacity,Alert,ScrollView,TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Comment({ navigation }) {
    return (
        <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:'powderblue'}}>
            <Text>
                Enter your comment:
            </Text>
            <TextInput
            multiline
            style={{borderColor:"slateblue",borderWidth:3,margin:10,padding:10,width:300}}
            placeholder="Rilakkuma is cute"/>

        </View>
    );}

    export default Comment;