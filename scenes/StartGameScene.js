import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, View, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Card from "../components/Card"
import MyButton from "../components/MyButton"

function StartGameScreen(props){
    const [enteredValue, setEnteredValue] = useState("")

    function inputHandeler(text){
        setEnteredValue(text.replace(/[^0-9]/g, ""));
    }

    function onPressDeleteButton(){
        setEnteredValue("")
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.main}>
                <Text>Enter a two digit number.</Text>
                <Card>
                    <TextInput 
                        style={styles.input} placeholder="00"
                        keyboardType="number-pad" 
                        maxLength={2} 
                        value={enteredValue}
                        onChangeText={inputHandeler}
                        />
                    <View style={styles.buttonWrap}>
                        <MyButton text={"DELETE"} onPress={onPressDeleteButton} />
                        <MyButton text={"NEXT"}/>
                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    main: {
        padding: 10,
        alignItems: "center",
        height: "100%"
    },
    input: {
        textAlign: "center",
        borderBottomColor: "black",
        borderBottomWidth: 1,
        padding: 2,
        width:50,
        marginBottom: 10,
        fontSize: 40
    },
    buttonWrap: {
          width: '100%',
          justifyContent: "space-evenly",
          alignItems: 'center',
          flexDirection: "row",
          marginTop: 10
    },
    button: {
        flex: 1,
        padding: 10,
        width: 100,
        textAlign: "center"
    }
});

export default StartGameScreen;