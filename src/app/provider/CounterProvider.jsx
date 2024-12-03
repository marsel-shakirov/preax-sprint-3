import PropTypes from 'prop-types';

import { CounterContext } from '@/shared/context';
import { counterReducer } from '@/shared/helpers';
import { useReducer } from 'react';

export const CounterProvider = ({ children }) => {
	const [state, dispatch] = useReducer(counterReducer, { count: 1 });

	return (
		<CounterContext.Provider value={{ ...state, dispatch }}>
			{children}
		</CounterContext.Provider>
	);
};

CounterProvider.propTypes = {
	children: PropTypes.node,
};
