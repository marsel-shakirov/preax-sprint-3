import PropTypes from 'prop-types';

export const QuizContainer = ({ children, isShowAnswer }) => {
	return <>{isShowAnswer && children}</>;
};

QuizContainer.propTypes = {
	children: PropTypes.node,
	isShowAnswer: PropTypes.bool,
};
