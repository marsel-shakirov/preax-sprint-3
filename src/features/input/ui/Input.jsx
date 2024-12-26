import PropTypes from 'prop-types';

import { getClasses } from '@/shared/model';

import styles from './Input.module.css';

export const Input = ({
	styled,
	type = 'text',
	id,
	value,
	name,
	onChangeInput,
	onBlurInput,
}) => {
	return (
		<input
			className={`${styles.input} ${getClasses(styles, styled)}`}
			onBlur={onBlurInput}
			onChange={onChangeInput}
			type={type}
			id={id}
			value={value}
			name={name}
		></input>
	);
};

Input.propTypes = {
	styled: PropTypes.object,
	type: PropTypes.string,
	id: PropTypes.string,
	value: PropTypes.number,
	name: PropTypes.string,
	onChangeInput: PropTypes.func,
	onClickInput: PropTypes.func,
	onBlurInput: PropTypes.func,
};
