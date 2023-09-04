import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = (props) => {
	const { name, color, size, onPress } = props;
	return (
		<Pressable
			style={({ pressed }) => pressed && styles.pressed}
			onPress={onPress}
		>
			<View style={styles.buttonContainer}>
				<Ionicons name={name} color={color} size={size} />
			</View>
		</Pressable>
	);
};

export default IconButton;

const styles = StyleSheet.create({
	buttonContainer: {
		borderRadius: 24,
		padding: 6,
		mawrginHorizontal: 8,
		marginVertical: 2
	},
	pressed: {
		opacity: 0.75
	}
});
