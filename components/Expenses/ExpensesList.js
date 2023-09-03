import { FlatList, Text } from "react-native";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
	const { expenses } = props;

	const renderExpenseItem = (itemData) => {
		return <ExpenseItem item={itemData.item} />;
	};
	return (
		<FlatList
			data={expenses}
			renderItem={renderExpenseItem}
			keyExtractor={(item) => item.id}
		/>
	);
};

export default ExpensesList;
