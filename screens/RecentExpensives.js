import { View, Text, StyleSheet } from "react-native";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import { GlobalStyles } from "../utils/styles";
const { colors } = GlobalStyles;

const RecentExpensives = () => {
	return (
		<View style={styles.mainContainer}>
			<ExpensesOutput expensesPeriod="Last 7 Days" />
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
