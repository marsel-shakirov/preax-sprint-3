import { usePageContext } from '@/shared/hooks';
import PropTypes from 'prop-types';

import { PAGES } from '@/shared/constants';

export const Content = ({ WelcomePage, CardPage, ResultPage }) => {
	const { currentPage } = usePageContext();
	return (
		<main>
			{currentPage === PAGES.home && <WelcomePage title="Welcome" />}
			{currentPage === PAGES.card && <CardPage title="Card" />}
			{currentPage === PAGES.result && <ResultPage title="Result" />}
		</main>
	);
};

Content.propTypes = {
	WelcomePage: PropTypes.node,
	CardPage: PropTypes.node,
	ResultPage: PropTypes.node,
};
