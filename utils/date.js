export const formatDate = (date) => {
	return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? 0 : ""}${
		date.getMonth() + 1
	}-${date.getDate() < 10 ? 0 : ""}${date.getDate()}`;
};

export const getDateMinusDay = (date, days) => {
	return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
};
