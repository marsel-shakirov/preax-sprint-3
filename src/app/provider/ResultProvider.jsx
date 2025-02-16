import PropTypes from 'prop-types';
import { useState } from 'react';

import { ResultContext } from '@/shared/context';

export const ResultProvider = ({ children }) => {
	const [resultQuiz, setResultQuiz] = useState(0);

	return (
		<ResultContext value={{ resultQuiz, setResultQuiz }}>
			{children}
		</ResultContext>
	);
};

ResultProvider.propTypes = {
	children: PropTypes.node,
};
