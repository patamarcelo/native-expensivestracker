import { View, Text, StyleSheet } from "react-native";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import { GlobalStyles } from "../utils/styles";
const { colors } = GlobalStyles;

import { useContext, useEffect, useState } from "react";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDay } from "../utils/date";
import { getExpenses } from "../utils/http";
import Loading from "../components/ui/Loading";
import ErrorOverlay from "../components/ui/ErrorOverlay";

const RecentExpensives = () => {
	const context = useContext(ExpensesContext);
	const [loadingData, setLoadingData] = useState(true);
	const [error, setError] = useState("");

	console.log(context);

	const recentExpenses = context.expenses.filter((data) => {
		const today = new Date();
		const date7daysAgo = getDateMinusDay(today, 7);

		return data.date > date7daysAgo;
	});

	const errorHandler = () => {
		setError(null);
	};

	useEffect(() => {
		const getExpensesHttp = async () => {
			setLoadingData(true);
			try {
				const expenses = await getExpenses();
				context.setExpenses(expenses);
			} catch (err) {
				setError("Could not fetch expenses!!");
			}
			setLoadingData(false);
		};
		getExpensesHttp();
	}, []);

	if (error && !loadingData) {
		return <ErrorOverlay msg={error} onConfirm={errorHandler} />;
	}
	if (loadingData) {
		return <Loading color="white" size="large" />;
	}
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
