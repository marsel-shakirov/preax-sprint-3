export const action = (initialState, formData) => {
	const query = formData.get('answer');
	initialState.push(query);

	return initialState;
};
