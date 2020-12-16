import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./components/Header";
import StartGameScreen from './scenes/StartGameScene';


export default function App() {
  return (
    <View style={styles.main}>
        <Header title={"I will guess your number!"}/>
        <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  main:{
    flex: 1
  }
});
