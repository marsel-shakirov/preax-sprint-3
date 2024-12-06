import { usePageContext } from '@/shared/hooks';
import PropTypes from 'prop-types';

export const Content = ({ Card, WelcomeContent }) => {
	const { isStart } = usePageContext();

	return (
		<main>
			{isStart ? <Card title="Card" /> : <WelcomeContent title="Home" />}
		</main>
	);
};

Content.propTypes = {
	Card: PropTypes.node,
	WelcomeContent: PropTypes.node,
};
