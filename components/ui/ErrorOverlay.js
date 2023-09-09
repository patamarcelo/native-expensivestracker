import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../utils/styles";
const { colors } = GlobalStyles;

import Button from "./Button";

const ErrorOverlay = (props) => {
	const { msg, onConfirm } = props;
	return (
		<View style={styles.container}>
			<Text style={[styles.text, styles.title]}>An Error ocurred!!</Text>
			<Text style={styles.text}>{msg}</Text>
			<Button onPress={onConfirm}>OK</Button>
		</View>
	);
};

export default ErrorOverlay;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 24,
		backgroundColor: colors.primary700
	},
	text: {
		color: "white",
		textAlign: "center",
		marginBottom: 8
	},
	title: {
		fontSize: 20,
		fontWeight: "bold"
	}
});
