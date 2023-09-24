import * as React from 'react';
import { Button, SafeAreaView, Text, TextInput, StyleSheet, Image, FlatList, TouchableHighlight, ScrollView } from 'react-native';
import { useState } from 'react';
import { ImagesAssets } from '../../../assets/ImagesAssets';
import Category from './Category'
import RadioGroup from 'react-native-radio-buttons-group';
import Question from './Question';
import Answer from './Answer';
import { TouchableOpacity } from 'react-native-gesture-handler';


// import { Button } from '@ant-design/react-native'


export default function Quiz() {
    const categories = [
        {
            id: "1",
            title: "Rilakkuma",
            image: ImagesAssets.rilakkuma,
        },
        {
            id: "2",
            title: "Korilakkuma",
            image: ImagesAssets.korilakkuma,
        },
        {
            id: "3",
            title: "Chicken",
            image: require('../../../assets/chicken.png'),
        },
        {
            id: "4",
            title: "Chairoikoguma",
            image: require('../../../assets/honey.png'),
        },
    ];

    const [color, setColor] = React.useState("");
    const [isQ1Correct, setIsQ1Correct] = React.useState(false);
    const [pressedSubmit, setPressedSubmit] = React.useState(false);

    const [age, setAge] = React.useState("");
    const [isQ2Correct, setIsQ2Correct] = React.useState(false);


    const handleSubmit = (e) => {
        commentsList.push(e.nativeEvent.text);
        setComments("");
    }

    const validateAnswer = () => {
        setPressedSubmit(true);
        // Validate if Q1 is correct
        if (color == "Brown") {
            // Show green color
            console.log("The answer is correct!!!!!!!!")
            setIsQ1Correct(true);
        }

        else {
            // Show red color

            console.log("WRONG!!!!")
            setIsQ1Correct(false);
        }

        // Validate if Q2 is correct
        validateAnswer2();

        // Validate if Q3 is correct
        validateAnswer3();

    }

    const validateAnswer2 = () => {
        setPressedSubmit(true);
        // Validate if Q1 is correct
        if (age == "20") {
            // Show green color
            console.log("The answer is correct!!!!!!!!")
            setIsQ2Correct(true);
        } else {
            // Show red color

            console.log("WRONG!!!!")
            setIsQ2Correct(false);
        }

        // TODO: Validate if Q2 is correct

    }
    //const[radioButtons, setRadioButtons]=useState([])
    const [isQ3Correct, setIsQ3Correct] = React.useState(false);
    const [foodList, setFoodList] = useState([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'Stawberry',
            value: 'stawberry',
            borderColor: 'red',


            // description:'is this correct?'
        },
        {
            id: '2',
            label: 'Pancake',
            value: 'pancake',
            borderColor: 'red',
        },
        {
            id: '3',
            label: 'Cake',
            value: 'cake',
            borderColor: 'red',
        },
        {
            id: '4',
            label: 'Ice-cream',
            value: 'ice-cream',
            borderColor: 'red',
        },
    ]);

    // const[radioButtons, setRadioButtons]=useState(radioButtonsData);

    function onPressRadioButton(radioArray) {
        console.log("radioArray: ", radioArray)
        setFoodList(radioArray);
    };

    const validateAnswer3 = () => {
        console.log("User choose: ", foodList); // filter selected == true 
        // const userSelected = foodList.filter(e => e.selected == true);
        var userSelected;
        for(let i = 0; i < foodList.length; i++) { // increment operator 
            // i = [0,1,2,3]
            if (foodList[i].selected == true) {
                userSelected = foodList[i];
                break;
            }
        }

        console.log("userSelected: ", userSelected);
        setPressedSubmit(true);
        // Validate if Q1 is correct
        if (userSelected.id == 1) {
            // Show green color
            console.log("The answer is correct!!!!!!!!")
            setIsQ3Correct(true);
        } else {
            // Show red color

            console.log("WRONG!!!!")
            setIsQ3Correct(false);
        }
    };


    // const getFonts=() => {
    //     return Font.loadAsync({
    //         'RubikBubbles-Regular': require('../../../assets/fonts/RubikBubbles-Regular.ttf')
    //     });
    // }

    // const [fontsLoaded]=useState({
    //     RubikBubbles:require('../../../assets/fonts/RubikBubbles-Regular.ttf'),
    // });

    // if (!fontsLoaded) return null;



    return (
        <SafeAreaView style={{ margin: 25 }} >
            <ScrollView>
                <Text style={{ fontWeight: "bold", fontSize: 25 }}>Q1: What is the color of Rilakkuma</Text>
                <TextInput
                    style={{ borderColor: "slateblue", borderWidth: 3, margin: 10, padding: 10, width: 300 }}
                    placeholder="Color"
                    onChangeText={setColor}
                    value={color}
                />
                {
                    pressedSubmit ?
                        (
                            (isQ1Correct == true) ?
                                <Text style={{ color: 'green' }}>Correct</Text>
                                :
                                <Text style={{ color: 'red' }}>Wrong</Text>
                        )
                        : null
                }



                <Text style={{ paddingTop: 30, fontWeight: "bold", fontSize: 25 }}>Q2: How old is Rilakkuma</Text>
                <TextInput
                    style={{ borderColor: "slateblue", borderWidth: 3, margin: 10, padding: 10, width: 300 }}
                    placeholder="99"
                    onChangeText={setAge}
                    value={age}

                />
                {
                    pressedSubmit ?
                        (
                            (isQ2Correct == true) ?
                                <Text style={{ color: "green" }}>Correct</Text>
                                :
                                <Text style={{ color: "red" }}>Wrong</Text>
                        )
                        : null
                }


                <Text style={{ paddingTop: 30, fontWeight: "bold", fontSize: 25 }}>
                    Q3: What is the favourite foodList of Korilakkuma?
                </Text>
                {
                    pressedSubmit ?
                        (
                            (isQ3Correct == true) ?
                                <Text style={{ color: "green" }}>Correct</Text>
                                :
                                <Text style={{ color: "red" }}>Wrong</Text>
                        )
                        : null
                }








                <RadioGroup
                    containerStyle={{ justifyContent: "flex-start", backgrouondColor: "pink", }}

                    radioButtons={foodList}
                    onPress={onPressRadioButton}
                />
                {/* <Button title='submit' onPress={validateAnswer, validateAnswer2, validateAnswer3} /> */}
                <Button title='submit' onPress={validateAnswer} />



                <Text style={{ fontWeight: "bold", fontSize: 25 }}>Select one type of question:</Text>

                <FlatList
                    data={categories}
                    renderItem={({ item }) => (
                        <Category image={item.image} title={item.title} />
                    )}
                    keyExtractor={(item) => item.id} />

                {/* <TouchableOpacity onPress={() => navigation.navigate('Question')}>
                    {categories.Rilakkuma}
                    </TouchableOpacity> */}

                    <Question />
                    <Answer />




            </ScrollView>
        </SafeAreaView>

    );
}