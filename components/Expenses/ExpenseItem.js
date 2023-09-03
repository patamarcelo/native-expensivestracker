import { Pressable, View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../utils/styles";
import { formatDate } from "../../utils/date";
const { colors } = GlobalStyles;
const ExpenseItem = (props) => {
	const { item } = props;
	return (
		<Pressable>
			<View style={styles.mainContainer}>
				<View style={styles.innerContainer}>
					<Text style={[styles.description, styles.textBase]}>
						{item.description}
					</Text>
					<Text style={styles.date}>{formatDate(item.date)}</Text>
				</View>
				<View style={styles.amountContainer}>
					<Text style={styles.amount}>
						R$ {item.amount.toFixed(2)}
					</Text>
				</View>
			</View>
		</Pressable>
	);
};

export default ExpenseItem;

const styles = StyleSheet.create({
	mainContainer: {
		padding: 12,
		marginVertical: 8,
		backgroundColor: colors.primary500,
		flexDirection: "row",
		justifyContent: "space-between",
		borderRadius: 6,
		elevation: 3,

		shadowColor: colors.gray500,
		shadowOpacity: 0.4,
		shadowOffset: { width: 1, height: 1 },
		shadowRadius: 4
	},
	amountContainer: {
		paddingHorizontal: 12,
		paddingVertical: 4,
		backgroundColor: "white",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 4
	},
	innerContainer: {},
	textBase: {
		color: colors.primary50
	},
	description: {
		fontSize: 16,
		marginBottom: 4,
		fontWeight: "bold"
	},
	date: {
		color: colors.gray100
	},
	amount: {
		textAlign: "right",
		color: colors.primary500,
		fontWeight: "bold",
		minWidth: 80
	}
});
