import PropTypes from 'prop-types';

import { getClasses } from '@/shared/utils';

import styles from './Input.module.css';

export const Input = ({
	styled,
	type = 'text',
	id,
	value,
	name,
	onChange,
	onFocus,
	isDisabled = false,
	isLoading = false,
	data,
}) => {
	return (
		<input
			className={`${styles.input} ${getClasses(styles, styled)}`}
			onFocus={onFocus}
			onChange={onChange}
			type={type}
			id={id}
			value={value}
			name={name}
			data-value={data}
			disabled={isDisabled || isLoading}
		></input>
	);
};

Input.propTypes = {
	styled: PropTypes.object,
	type: PropTypes.string,
	id: PropTypes.string,
	value: PropTypes.number,
	name: PropTypes.string,
	onChange: PropTypes.func,
	onFocus: PropTypes.func,
	isDisabled: PropTypes.bool,
	isLoading: PropTypes.bool,
	data: PropTypes.number,
};
