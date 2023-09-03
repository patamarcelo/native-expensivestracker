import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../utils/styles";
const { colors } = GlobalStyles;

const ExpensesSummary = (props) => {
	const { periodName, expenses } = props;

	const expensesSum = expenses.reduce((sum, expense) => {
		return sum + expense.amount;
	}, 0);
	return (
		<View style={styles.mainContainer}>
			<Text style={styles.period}>{periodName}</Text>
			<Text style={styles.amount}>R$ {expensesSum.toFixed(2)}</Text>
		</View>
	);
};

export default ExpensesSummary;

const styles = StyleSheet.create({
	mainContainer: {
		padding: 8,
		marginBottom: 10,
		backgroundColor: colors.primary50,
		borderRadius: 6,
		flexDirection: "row",
		gap: 10,
		justifyContent: "space-between",
		alignItems: "center"
	},
	period: {
		color: colors.primary400,
		fontSize: 12
	},
	amount: {
		fontSize: 16,
		fontWeight: "bold",
		color: colors.primary500
	}
});
