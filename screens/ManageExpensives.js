import { Text, StyleSheet, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { formatDate } from "../utils/date";
import { useLayoutEffect } from "react";
import IconButton from "../components/ui/IconButton";
import { GlobalStyles } from "../utils/styles";
import Button from "../components/ui/Button";
const { colors } = GlobalStyles;

import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";

const ManageExpensives = () => {
	const route = useRoute();
	const navigation = useNavigation();

	contextExp = useContext(ExpensesContext);

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
		contextExp.deleteExpense(itemRoute.id);
		closeModalhandler();
	};

	const cancelHandler = () => {
		closeModalhandler();
	};

	const confirmHandler = () => {
		if (isEditiing) {
			contextExp.updateExpense(itemRoute.id, {
				description: "test!!!",
				amount: 29.99,
				date: new Date("2023-09-02")
			});
		} else {
			contextExp.addExpense({
				description: "test",
				amount: 19.99,
				date: new Date("2023-09-05")
			});
		}

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
