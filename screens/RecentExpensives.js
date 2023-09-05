import { View, Text, StyleSheet } from "react-native";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import { GlobalStyles } from "../utils/styles";
const { colors } = GlobalStyles;

import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDay } from "../utils/date";

const RecentExpensives = () => {
	const context = useContext(ExpensesContext);
	console.log(context);

	const recentExpenses = context.expenses.filter((data) => {
		const today = new Date();
		const date7daysAgo = getDateMinusDay(today, 7);

		return data.date > date7daysAgo;
	});

	return (
		<View style={styles.mainContainer}>
			<ExpensesOutput
				expenses={recentExpenses}
				expensesPeriod="Last 7 Days"
				fallback="Now Expensives Register for the last 7 days"
			/>
		</View>
	);
};

export default RecentExpensives;

const styles = StyleSheet.create({
	mainContainer: {
		padding: 10,
		backgroundColor: colors.primary700,
		flex: 1
	}
});
