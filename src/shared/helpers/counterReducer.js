export const counterReducer = (state, action) => {
	switch (action.type) {
		case 'increment':
			return { count: state.count + 1 };
		case 'decrement':
			return state.count <= 1 ? { ...state } : { count: state.count - 1 };
		default:
			throw Error('Unknown action ' + action.type);
	}
};
