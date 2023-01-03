import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../pages/HomeScreen';
// import screens

const Stack = createNativeStackNavigator();

function MainStackNavigator() {
    return (
    <Stack.Navigator
      initialRouteName='Home'>
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        />
    </Stack.Navigator> 
    );
}

export default MainStackNavigator;
