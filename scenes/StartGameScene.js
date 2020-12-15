import React from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';

function StartGameScreen(props){
    return (
        <View style={styles.main}>
            <TextInput placeholder="hrh"/>
            <Text dataDetectorType="email">www@google.com</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 10,
        alignItems: "center",
        justifyContent: "flex-start"
    }
});

export default StartGameScreen;