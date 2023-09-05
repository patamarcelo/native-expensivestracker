import { View, Text, StyleSheet } from "react-native";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import { GlobalStyles } from "../utils/styles";
const { colors } = GlobalStyles;

import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";

const AllExpensives = () => {
	const expenses = useContext(ExpensesContext);
	return (
		<View style={styles.mainContainer}>
			<ExpensesOutput
				expenses={expenses.expenses}
				expensesPeriod="Total"
				fallback="No Register Expenses found!!!"
			/>
		</View>
	);
};

export default AllExpensives;

const styles = StyleSheet.create({
	mainContainer: {
		padding: 10,
		backgroundColor: colors.primary700,
		flex: 1
	}
});
