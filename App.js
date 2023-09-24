import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import HomeScreen from './src/app/pages/HomeScreen';
import WhiteBearDetailsScreen from './src/app/pages/WhiteBearDetailsScreen';
import BlackBearDetailsScreen from './src/app/pages/BlackBearDetailsScreen';
import Comment from './src/app/pages/Comment';
import Quiz from './src/app/pages/Quiz';

const Stack = createNativeStackNavigator();

// export default function App() {
//   return (

//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName='Home'>
//         <Stack.Screen name='Rilakkuma' component={HomeScreen} options={{ title: 'My home' }} />
//         <Stack.Screen name='WhiteBearDetailsScreen' component={WhiteBearDetailsScreen} options={{ title: 'White Bear' }} />
//         <Stack.Screen name='BlackBearDetailsScreen' component={BlackBearDetailsScreen} options={{ title: 'Brown Bear' }} />
//         <Stack.Screen name='Comment' component={Comment} options={{ title: 'Leave a comment here!!!!' }} />
//       </Stack.Navigator>
//     </NavigationContainer>

//   );
// }



function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name='WhiteBearDetailsScreen' component={WhiteBearDetailsScreen} options={{ title: 'White Bear' }} />
        <Drawer.Screen name='BlackBearDetailsScreen' component={BlackBearDetailsScreen} options={{ title: 'Brown Bear' }} />
        <Drawer.Screen name='Comment' component={Comment} options={{ title: 'Leave a comment here!!!!' }} />
        <Drawer.Screen name='Quiz' component={Quiz} options={{ title: 'Have a quiz' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
