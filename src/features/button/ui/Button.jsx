import PropTypes from 'prop-types';

import styles from './Button.module.css';

export const Button = ({
	styled = 'main',
	text,
	isDisabled,
	onTriggerClick,
}) => {
	let classes = styles[styled];

	if (styled.counter && styled.counter === 'decrement') {
		classes = `${styles.counter} ${styles.counterMinus}`;
	} else if (styled.counter) {
		classes = `${styles.counter} ${styles.counterPlus}`;
	}

	if (styled.close) {
		classes = `${styles.close}`;
	}

	return (
		<button
			onClick={onTriggerClick}
			className={`${styles.btn} ${classes}`}
			type="button"
			disabled={isDisabled}
		>
			{text}
		</button>
	);
};

Button.propTypes = {
	styled: PropTypes.object,
	text: PropTypes.string,
	isDisabled: PropTypes.bool,
	onTriggerClick: PropTypes.func,
};
