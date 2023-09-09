import { createContext, useContext, useReducer } from "react";

export const ExpensesContext = createContext({
	expenses: [],
	addExpense: ({ description, amount, date }) => {},
	deleteExpense: (id) => {},
	setExpenses: (expneses) => {},
	updateExpense: (id, { description, amount, date }) => {}
});

const expensesReducer = (state, action) => {
	switch (action.type) {
		case "ADD":
			// const id = new Date().toString() + Math.random().toString();

			return [...action.payload, ...state];
		case "SET":
			const inverted = action.payload.reverse(0);
			return action.payload;
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
	const [expensesSatate, dispatch] = useReducer(expensesReducer, []);

	const addExpense = (expenseData) => {
		dispatch({ type: "ADD", payload: expenseData });
	};
	const setExpenses = (expenseData) => {
		dispatch({ type: "SET", payload: expenseData });
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
		updateExpense: updateExpense,
		setExpenses: setExpenses
	};
	return (
		<ExpensesContext.Provider value={value}>
			{children}
		</ExpensesContext.Provider>
	);
};

export default ExpensesContextProvider;
