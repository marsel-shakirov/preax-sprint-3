export const counterReducer = (state, action) => {
	console.log(action.value);
	switch (action.type) {
		case 'increment':
			return { count: state.count + 1 };
		case 'decrement':
			return { count: state.count - 1 };
		case 'change':
			return Number(action.value) < 1
				? { count: '' }
				: Number(action.value) > 20
				? { ...state }
				: { count: Number(action.value) };
		case 'init':
			return action.value === ''
				? { count: 1 }
				: { count: Number(action.value) };
		default:
			throw Error('Unknown action ' + action.type);
	}
};
