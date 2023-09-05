import { View, Text, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSuymmary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../utils/styles";
const { colors } = GlobalStyles;

const ExpensesOutput = (props) => {
	const { expenses, expensesPeriod, fallback } = props;
	let content = <Text style={styles.infoText}>{fallback}</Text>;

	if (expenses.length > 0) {
		content = <ExpensesList expenses={expenses} />;
	}
	return (
		<View style={styles.mainContainer}>
			<ExpensesSummary periodName={expensesPeriod} expenses={expenses} />
			{content}
		</View>
	);
};

export default ExpensesOutput;

const styles = StyleSheet.create({
	mainContainer: {
		paddingBottom: 0,
		backgroundColor: colors.primary700,
		flex: 1
	},
	infoText: {
		color: "white",
		fontSize: 16,
		textAlign: "center",
		marginTop: 32
	}
});
