import { View, Text, StyleSheet } from "react-native";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import { GlobalStyles } from "../utils/styles";
const { colors } = GlobalStyles;

const AllExpensives = () => {
	return (
		<View style={styles.mainContainer}>
			<ExpensesOutput expensesPeriod="Total" />
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
