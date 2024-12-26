import PropTypes from 'prop-types';

export const Answer = ({ children, isShowAnswer }) => {
	return <>{isShowAnswer && children}</>;
};

Answer.propTypes = {
	children: PropTypes.node,
	isShowAnswer: PropTypes.bool,
};
