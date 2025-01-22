import { MAX_COUNT_VALUE, MIN_COUNT_VALUE } from '@/widgets/counter/index';

export const counterReducer = (state, action) => {
	const count =
		action.type === 'change' ? Number(action.value) : Number(state.count);

	switch (action.type) {
		case 'increment':
			return { count: count + 1 };
		case 'decrement':
			return { count: count - 1 };
		case 'change':
			return count < MIN_COUNT_VALUE
				? { count: '' }
				: count > MAX_COUNT_VALUE
				? { count: MAX_COUNT_VALUE }
				: { count: count };
		case 'init':
			return { count: '' };
		default:
			throw Error('Unknown action ' + action.type);
	}
};
