import React from 'react';
import { StyleSheet, View } from 'react-native';

function Card(props){
	return (
		<View style={styles.card}>{props.children}</View>
	);
};

const styles = StyleSheet.create({
	card: {
        elevation: 0,
        width: "80%",
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 15,
        alignItems: "center",
        marginTop: 10,
        padding: 10
    }
})

export default Card;