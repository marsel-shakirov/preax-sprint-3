import PropTypes from 'prop-types';
import { useState } from 'react';

import { PageContext } from '@/shared/context';

export const PageProvider = ({ children }) => {
	const [currentPage, setCurrentPage] = useState('welcome');

	return (
		<PageContext value={{ currentPage, setCurrentPage }}>
			{children}
		</PageContext>
	);
};

PageProvider.propTypes = {
	children: PropTypes.node,
};
