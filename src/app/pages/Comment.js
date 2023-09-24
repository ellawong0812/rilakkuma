import * as React from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableOpacity, Alert, ScrollView, TextInput, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Comment({ navigation }) {
    const [comments, setComments] = React.useState("");
    const [commentsList, setCommentsList] = React.useState([]);

    const handleSubmit = (e) => {
        commentsList.push(e.nativeEvent.text);
        setComments("");
    }

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: 'powderblue' }}>
            <Text>
                Enter your comment:
            </Text>

            <TextInput
                style={{ borderColor: "slateblue", borderWidth: 3, margin: 10, padding: 10, width: 300 }}
                placeholder="Rilakkuma is cute"
                onChangeText={setComments}
                value={comments}
                onSubmitEditing={handleSubmit}
            />

            <Text>Here are the comments: </Text>
            <FlatList
                data={commentsList}
                renderItem={({ item }) => (<Text>{item}</Text>)} 
            />

        </View>
    );
}

export default Comment;