import { Alert, View, Text, StyleSheet } from "react-native";
import InputExpenses from "./InputExpenses";
import { useState, useEffect } from "react";
import Button from "../../components/ui/Button";
import { formatDate } from "../../utils/date";
import { GlobalStyles } from "../../utils/styles";
const { colors } = GlobalStyles;

const FormExpenses = (props) => {
	const { onCancel, onSubmit, isEditiing, item } = props;
	const [amountValue, setAmountValue] = useState({
		amount: {
			value: item?.amount ? item.amount.toString() : "",
			isValid: true
		},

		date: {
			value: item?.date ? formatDate(item.date) : "",
			isValid: true
		},
		description: {
			value: item?.description ? item.description : "",
			isValid: true
		}
	});

	useEffect(() => {
		if (item) {
			console.log(item);
		}
	}, [item]);

	console.log("teste");
	const amountChangeHandler = (inputId, value) => {
		setAmountValue((prev) => {
			return { ...prev, [inputId]: { value: value, isValid: true } };
		});
	};

	const submitHandler = () => {
		const expenseData = {
			amount: +amountValue.amount.value,
			date: new Date(amountValue.date.value),
			description: amountValue.description.value
		};

		const amountIsValid =
			!isNaN(expenseData.amount) && expenseData.amount > 0;
		const dateIsValid = expenseData.date.toString() !== "Invalid Date";
		const descriptionValid = expenseData.description.trim().length > 0;

		if (!amountIsValid || !dateIsValid || !descriptionValid) {
			// Alert.alert("Invalid Input", "Please check your data!!");
			setAmountValue((prev) => {
				return {
					amount: {
						value: prev.amount.value,
						isValid: amountIsValid
					},
					date: { value: prev.date.value, isValid: dateIsValid },
					description: {
						value: prev.description.value,
						isValid: descriptionValid
					}
				};
			});
			return;
		}

		onSubmit(expenseData);
	};

	const formIsInvalid =
		!amountValue.amount.isValid ||
		!amountValue.date.isValid ||
		!amountValue.description.isValid;

	return (
		<View style={styles.formStyle}>
			<Text style={styles.titleForm}>Your Expenses</Text>
			<View style={styles.inputsRow}>
				<InputExpenses
					style={styles.rowInput}
					label="Amount"
					invalid={!amountValue.amount.isValid}
					textInputConfig={{
						keyboardType: "decimal-pad",
						onChangeText: amountChangeHandler.bind(this, "amount"),
						value: amountValue.amount.value
					}}
				/>
				<InputExpenses
					style={styles.rowInput}
					label="Date"
					invalid={!amountValue.date.isValid}
					textInputConfig={{
						placeholder: "YYYY-MM-DD",
						maxLength: 10,
						onChangeText: amountChangeHandler.bind(this, "date"),
						value: amountValue.date.value
					}}
				/>
			</View>
			<InputExpenses
				label="Description"
				invalid={!amountValue.description.isValid}
				textInputConfig={{
					multiline: true,
					onChangeText: amountChangeHandler.bind(this, "description"),
					value: amountValue.description.value
				}}
			/>
			{formIsInvalid && (
				<Text style={styles.errorText}>Invalid input values </Text>
			)}
			<View style={styles.buttonContainer}>
				<Button
					mode="flat"
					onPress={onCancel}
					style={styles.buttonStyle}
				>
					Cancel
				</Button>
				<Button onPress={submitHandler} style={styles.buttonStyle}>
					{isEditiing ? "update" : "Add"}
				</Button>
			</View>
		</View>
	);
};

export default FormExpenses;

const styles = StyleSheet.create({
	errorText: {
		textAlign: "center",
		color: colors.error500,
		margin: 8
	},
	formStyle: {
		marginTop: 40
	},
	inputsRow: {
		flexDirection: "row",
		justifyContent: "space-between"
	},
	rowInput: {
		flex: 1
	},
	titleForm: {
		fontSize: 24,
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
		marginVertical: 24
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center"
	},
	buttonStyle: {
		minWidth: 120,
		marginHorizontal: 8
	}
});
