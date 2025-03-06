import PropTypes from 'prop-types';

import { CounterContext } from '@/shared/context';
import { counterReducer } from '@/widgets/counter';
import { useReducer } from 'react';

export const CounterProvider = ({ children }) => {
	const [state, dispatch] = useReducer(counterReducer, { count: 18 });

	return (
		<CounterContext value={{ ...state, dispatch }}>{children}</CounterContext>
	);
};

CounterProvider.propTypes = {
	children: PropTypes.node,
};
