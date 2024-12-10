export const counterReducer = (state, action) => {
	switch (action.type) {
		case 'increment':
			return { count: state.count + 1 };
		case 'decrement':
			return { count: state.count - 1 };
		case 'change':
			return action.value < '1'
				? { ...state }
				: { count: Number(action.value) };
		default:
			throw Error('Unknown action ' + action.type);
	}
};
