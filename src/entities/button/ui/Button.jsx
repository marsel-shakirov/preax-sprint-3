import PropTypes from 'prop-types';

import { usePageContext } from '@/shared/hooks/usePageContext';

import styles from './Button.module.css';

export const Button = ({ isDisabled = false, text }) => {
	const { isStart, setStart } = usePageContext();
	return (
		<div className={styles.row}>
			<button
				onClick={() => setStart(!isStart)}
				className={styles.btn}
				type="button"
				disabled={isDisabled}
			>
				{text}
			</button>
			<span className={`${isDisabled ? styles.disabled : ''} ${styles.desc}`}>
				или нажми <span className={styles.enter}>Enter</span>
			</span>
		</div>
	);
};

Button.propTypes = {
	text: PropTypes.string,
	isDisabled: PropTypes.bool,
};
