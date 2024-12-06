import { usePageContext } from '@/shared/hooks';
import PropTypes from 'prop-types';

export const Content = ({ Card, WelcomePage }) => {
	const { isStart } = usePageContext();

	return (
		<main>
			{isStart ? <Card title="Card" /> : <WelcomePage title="Home" />}
		</main>
	);
};

Content.propTypes = {
	Card: PropTypes.node,
	WelcomePage: PropTypes.node,
};
