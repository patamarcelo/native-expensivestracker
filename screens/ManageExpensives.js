import { Text, StyleSheet, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { formatDate } from "../utils/date";
import { useLayoutEffect } from "react";
import IconButton from "../components/ui/IconButton";
import { GlobalStyles } from "../utils/styles";
import Button from "../components/ui/Button";
const { colors } = GlobalStyles;

import { useContext, useState } from "react";
import { ExpensesContext } from "../store/expenses-context";
import FormExpenses from "../components/ExpensesForm/FormExpenses";
import { deleteExpense, storeExpense, updateExpense } from "../utils/http";
import Loading from "../components/ui/Loading";
import ErrorOverlay from "../components/ui/ErrorOverlay";

const ManageExpensives = () => {
	const route = useRoute();
	const navigation = useNavigation();
	const [loadingData, setLoadingData] = useState(false);
	const [error, setError] = useState();

	contextExp = useContext(ExpensesContext);

	const itemRoute = route.params?.item;
	const isEditiing = !!itemRoute;

	const confirmHandlerError = () => {
		setError(null);
	};

	useLayoutEffect(() => {
		navigation.setOptions({
			title: isEditiing ? "Edit Expense" : "Add Expense"
		});
	}, [navigation, isEditiing]);

	const closeModalhandler = () => {
		navigation.goBack();
	};
	const deleteExpenseHandler = async () => {
		setLoadingData(true);
		try {
			deleteExpense(itemRoute.id);
			contextExp.deleteExpense(itemRoute.id);
			closeModalhandler();
		} catch (err) {
			setError("could Not Delete the Item!! - try again later");
			setLoadingData(false);
		}
		// setLoadingData(false);
	};

	const cancelHandler = () => {
		closeModalhandler();
	};

	const confirmHandler = async (expenseData) => {
		setLoadingData(true);
		try {
			if (isEditiing) {
				contextExp.updateExpense(itemRoute.id, expenseData);
				await updateExpense(itemRoute.id, expenseData);
			} else {
				const id = await storeExpense(expenseData);
				contextExp.addExpense({ ...expenseData, id: id });
			}
			closeModalhandler();
		} catch (err) {
			setError("could Not Delete the Item!! - try again later");
			setLoadingData(false);
		}
	};

	if (error && !loadingData) {
		return <ErrorOverlay msg={error} onConfirm={confirmHandlerError} />;
	}

	if (loadingData) {
		return <Loading color="white" size="large" />;
	}

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
