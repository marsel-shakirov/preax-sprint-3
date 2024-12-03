import PropTypes from 'prop-types';
import { useState } from 'react';

import { PageContext } from '@/shared/context';

export const PageProvider = ({ children }) => {
	const [isStart, setStart] = useState(false);

	return (
		<PageContext.Provider value={{ isStart, setStart }}>
			{children}
		</PageContext.Provider>
	);
};

PageProvider.propTypes = {
	children: PropTypes.node,
};
