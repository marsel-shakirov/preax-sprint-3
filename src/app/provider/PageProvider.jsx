import PropTypes from 'prop-types';

import { useState } from 'react';

import { PageContext } from '@/shared/context';

import { PAGES } from '@/shared/constants';

export const PageProvider = ({ children }) => {
	const [currentPage, setCurrentPage] = useState(PAGES.home);

	const navigate = url => {
		setCurrentPage(url);
	};

	return (
		<PageContext value={{ currentPage, navigate }}>{children}</PageContext>
	);
};

PageProvider.propTypes = {
	children: PropTypes.node,
};
