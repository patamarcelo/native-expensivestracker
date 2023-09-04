import { Text, StyleSheet, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { formatDate } from "../utils/date";
import { useLayoutEffect } from "react";
import IconButton from "../components/ui/IconButton";
import { GlobalStyles } from "../utils/styles";
import Button from "../components/ui/Button";
const { colors } = GlobalStyles;

const ManageExpensives = () => {
	const route = useRoute();
	const navigation = useNavigation();

	const itemRoute = route.params?.item;
	const isEditiing = !!itemRoute;

	useLayoutEffect(() => {
		navigation.setOptions({
			title: isEditiing ? "Edit Expense" : "Add Expense"
		});
	}, [navigation, isEditiing]);

	const closeModalhandler = () => {
		navigation.goBack();
	};
	const deleteExpenseHandler = () => {
		closeModalhandler();
	};

	const cancelHandler = () => {
		closeModalhandler();
	};

	const confirmHandler = () => {
		closeModalhandler();
	};

	return (
		<View style={styles.container}>
			<View style={styles.buttonContainer}>
				<Button
					mode="flat"
					onPress={cancelHandler}
					style={styles.buttonStyle}
				>
					Cancel
				</Button>
				<Button onPress={confirmHandler} style={styles.buttonStyle}>
					{isEditiing ? "update" : "Add"}
				</Button>
			</View>
			{isEditiing && (
				<View style={styles.deleteContainer}>
					<IconButton
						name="trash"
						color={colors.error500}
						size={36}
						onPress={deleteExpenseHandler}
					/>
				</View>
			)}
		</View>
	);
};

export default ManageExpensives;

const styles = StyleSheet.create({
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center"
	},
	buttonStyle: {
		minWidth: 120,
		marginHorizontal: 8
	},
	deleteContainer: {
		marginTop: 16,
		paddingTop: 8,
		borderTopWidth: 2,
		borderTopColor: colors.primary200,
		alignItems: "center"
	},
	container: {
		flex: 1,
		padding: 24,
		backgroundColor: colors.primary800
	}
});
