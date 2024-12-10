import { usePageContext } from '@/shared/context-hooks';
import PropTypes from 'prop-types';

export const Content = ({ WelcomePage, Card, ResultPage }) => {
	const { currentPage } = usePageContext();

	return (
		<main>
			{currentPage === 'welcome' && <WelcomePage title="Welcome" />}
			{currentPage === 'card' && <Card title="Card" />}
			{currentPage === 'result' && (
				<ResultPage title="Result" result="result-fail" />
			)}
		</main>
	);
};

Content.propTypes = {
	WelcomePage: PropTypes.node,
	Card: PropTypes.node,
	ResultPage: PropTypes.node,
};
