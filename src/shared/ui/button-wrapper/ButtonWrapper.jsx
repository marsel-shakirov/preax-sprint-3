import PropTypes from 'prop-types';

import styles from './ButtonWrapper.module.css';

export const ButtonWrapper = ({ isDisabled = false, children }) => {
	return (
		<div className={styles.row}>
			{children}
			<span className={`${isDisabled ? styles.disabled : ''} ${styles.desc}`}>
				или нажми <span className={styles.enter}>Enter</span>
			</span>
		</div>
	);
};

ButtonWrapper.propTypes = {
	children: PropTypes.string,
	isDisabled: PropTypes.bool,
};
