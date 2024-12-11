import PropTypes from 'prop-types';

import styles from './ButtonWrapper.module.css';

export const ButtonWrapper = ({ isDisabled = false, children }) => {
	return (
		<div className={styles.buttonWrapper}>
			{children}
			<span
				className={`${isDisabled ? styles.disabled : ''} ${styles.buttonDesc}`}
			>
				или нажми <span className={styles.buttonEnter}>Enter</span>
			</span>
		</div>
	);
};

ButtonWrapper.propTypes = {
	children: PropTypes.string,
	isDisabled: PropTypes.bool,
};
