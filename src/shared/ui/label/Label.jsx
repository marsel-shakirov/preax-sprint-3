import PropTypes from 'prop-types';

import styles from './Label.module.css';

export const Label = ({ children, labelFor }) => {
	return (
		<label className={styles.label} htmlFor={labelFor}>
			{children}
		</label>
	);
};

Label.propTypes = {
	children: PropTypes.node,
	labelFor: PropTypes.string,
};
