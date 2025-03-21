import PropTypes from 'prop-types';

import { getClasses } from '@/shared/utils';

import { Preloader } from '..';
import styles from './Button.module.css';

export const Button = ({
	styled = { classes: ['main'] },
	text,
	isDisabled,
	onClick,
	onKeyDown,
	onKeyUp,
	type = 'button',
	form,
	ariaLabel,
	ref,
	isLoading,
}) => {
	return (
		<button
			ref={ref}
			onClick={onClick}
			onKeyDown={onKeyDown}
			onKeyUp={onKeyUp}
			className={`${styles.btn} ${getClasses(styles, styled)} ${
				isLoading ? styles.loading : ''
			}`}
			type={type}
			disabled={isDisabled || isLoading}
			form={form}
			aria-label={ariaLabel}
		>
			{isLoading && text ? <Preloader /> : text}
		</button>
	);
};

Button.propTypes = {
	styled: PropTypes.object,
	text: PropTypes.string,
	isDisabled: PropTypes.bool,
	onClick: PropTypes.func,
	onKeyDown: PropTypes.func,
	onKeyUp: PropTypes.func,
	type: PropTypes.string,
	form: PropTypes.string,
	dataAttribute: PropTypes.string,
	ariaLabel: PropTypes.string,
	ref: PropTypes.node,
	isLoading: PropTypes.bool,
};
