import PropTypes from 'prop-types';

import { getClasses } from '@/shared/model';
import styles from './Button.module.css';

export const Button = ({
	styled = { classes: ['main'] },
	text,
	isDisabled,
	onTriggerClick,
	type = 'button',
	form,
	ariaLabel,
}) => {
	return (
		<button
			onClick={onTriggerClick}
			className={`${styles.btn} ${getClasses(styles, styled)}`}
			type={type}
			disabled={isDisabled}
			form={form}
			aria-label={ariaLabel}
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
	type: PropTypes.string,
	form: PropTypes.string,
	dataAttribute: PropTypes.string,
	ariaLabel: PropTypes.string,
};
