import { createContext, useContext, useReducer } from "react";

const DUMMY_EXPENSES = [
	{
		id: "e1",
		description: "A pair of shoes",
		amount: 59.99,
		date: new Date("2023-09-04")
	},
	{
		id: "e2",
		description: "Two pair of shoes",
		amount: 89.99,
		date: new Date("2023-09-01")
	},
	{
		id: "e3",
		description: "Pair of Bananas",
		amount: 19.99,
		date: new Date("2023-08-30")
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

export const ExpensesContext = createContext({
	expenses: [],
	addExpense: ({ description, amount, date }) => {},
	deleteExpense: (id) => {},
	updateExpense: (id, { description, amount, date }) => {}
});

const expensesReducer = (state, action) => {
	switch (action.type) {
		case "ADD":
			const id = new Date().toString() + Math.random().toString();
			return [{ ...action.payload, id: id }, ...state];
		case "UPDATE":
			const updateItem = state.findIndex(
				(expense) => expense.id === action.payload.id
			);
			const updatableExpanse = state[updateItem];
			const updatedItem = { ...updatableExpanse, ...action.payload.data };
			const updatedExpenses = [...state];
			updatedExpenses[updateItem] = updatedItem;
			return updatedExpenses;
		case "DELETE":
			return state.filter((data) => data.id !== action.payload);
		default:
			return state;
	}
};

const ExpensesContextProvider = ({ children }) => {
	const [expensesSatate, dispatch] = useReducer(
		expensesReducer,
		DUMMY_EXPENSES
	);

	const addExpense = (expenseData) => {
		dispatch({ type: "ADD", payload: expenseData });
	};

	const deleteExpense = (id) => {
		console.log(id);
		dispatch({ type: "DELETE", payload: id });
	};
	const updateExpense = (id, expenseData) => {
		dispatch({
			type: "UPDATE",
			payload: { id: id, data: expenseData }
		});
	};

	const value = {
		expenses: expensesSatate,
		addExpense: addExpense,
		deleteExpense: deleteExpense,
		updateExpense: updateExpense
	};
	return (
		<ExpensesContext.Provider value={value}>
			{children}
		</ExpensesContext.Provider>
	);
};

export default ExpensesContextProvider;
