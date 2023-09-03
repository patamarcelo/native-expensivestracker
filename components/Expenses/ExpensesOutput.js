import { View, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSuymmary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../utils/styles";
const { colors } = GlobalStyles;

const DUMMY_EXPENSES = [
	{
		id: "e1",
		description: "A pair of shoes",
		amount: 59.99,
		date: new Date("2021-12-19")
	},
	{
		id: "e2",
		description: "Two pair of shoes",
		amount: 89.99,
		date: new Date("2022-01-19")
	},
	{
		id: "e3",
		description: "Pair of Bananas",
		amount: 19.99,
		date: new Date("2021-10-19")
	},
	{
		id: "e4",
		description: "A Book",
		amount: 24.9,
		date: new Date("2019-05-19")
	},
	{
		id: "e5",
		description: "NoteBook",
		amount: 1590.82,
		date: new Date("2020-09-19")
	},
	{
		id: "e6",
		description: "Two pair of shoes",
		amount: 89.99,
		date: new Date("2022-01-19")
	},
	{
		id: "e7",
		description: "Pair of Bananas",
		amount: 19.99,
		date: new Date("2021-10-19")
	},
	{
		id: "e8",
		description: "A Book",
		amount: 24.9,
		date: new Date("2019-05-19")
	},
	{
		id: "e9",
		description: "NoteBook",
		amount: 1590.82,
		date: new Date("2020-09-19")
	}
];
const ExpensesOutput = (props) => {
	const { expenses, expensesPeriod } = props;
	return (
		<View style={styles.mainContainer}>
			<ExpensesSummary
				periodName={expensesPeriod}
				expenses={DUMMY_EXPENSES}
			/>

			<ExpensesList expenses={DUMMY_EXPENSES} />
		</View>
	);
};

export default ExpensesOutput;

const styles = StyleSheet.create({
	mainContainer: {
		paddingBottom: 0,
		backgroundColor: colors.primary700,
		flex: 1
	}
});
