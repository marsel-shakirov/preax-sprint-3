import PropTypes from 'prop-types';
import { useState } from 'react';

import { PageContext } from '@/shared/context';

export const PageProvider = ({ children }) => {
	const [isStart, setStart] = useState(false);

	return <PageContext value={{ isStart, setStart }}>{children}</PageContext>;
};

PageProvider.propTypes = {
	children: PropTypes.node,
};
