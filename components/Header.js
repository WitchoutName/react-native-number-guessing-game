import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Header(props){
	return (
		<View style={styles.header}>
				<Text style={styles.headerTitle}>{props.title}</Text>
		</View>

	);
};

const styles = StyleSheet.create({
		header: {
			width: "100%",
			height: 90,
			paddingTop: 36,
			alignItems: "center",
			justifyContent: "center",
			backgroundColor: "#f7287b"
		},
		headerTitle: {
			color: "black",
			fontSize: 18
		}
})

export default Header;