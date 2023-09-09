import { View, ActivityIndicator, StyleSheet } from "react-native";
import { GlobalStyles } from "../../utils/styles";
const { colors } = GlobalStyles;
const Loading = (props) => {
	const { size, color } = props;
	return (
		<View style={styles.container}>
			<ActivityIndicator size={size} color={color} />
		</View>
	);
};

export default Loading;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 24,
		backgroundColor: colors.primary700
	}
});
