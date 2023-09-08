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
import FormExpenses from "../components/ExpensesForm/FormExpenses";

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

	const confirmHandler = (expenseData) => {
		if (isEditiing) {
			contextExp.updateExpense(itemRoute.id, expenseData);
		} else {
			contextExp.addExpense(expenseData);
		}

		closeModalhandler();
	};

	return (
		<View style={styles.container}>
			<FormExpenses
				onSubmit={confirmHandler}
				onCancel={cancelHandler}
				isEditiing={isEditiing}
				item={itemRoute}
			/>

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
