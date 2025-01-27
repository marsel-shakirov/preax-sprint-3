import { usePageContext } from '@/shared/context-hooks';
import PropTypes from 'prop-types';

export const Content = ({ WelcomePage, CardPage, ResultPage }) => {
	const { currentPage } = usePageContext();

	return (
		<main>
			{currentPage === '/' && <WelcomePage title="Welcome" />}
			{currentPage === '/card' && <CardPage title="Card" />}
			{currentPage === '/result' && (
				<ResultPage title="Result" result="result-fail" />
			)}
			{/* <ResultPage title="Result" result="result-well" />*/}
			{/* <ResultPage title="Result" result="result" />*/}
		</main>
	);
};

Content.propTypes = {
	WelcomePage: PropTypes.node,
	CardPage: PropTypes.node,
	ResultPage: PropTypes.node,
};
