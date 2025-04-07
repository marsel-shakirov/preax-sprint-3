import PropTypes from 'prop-types';

import Icons from '/assets/svg/svg-sprite.svg';

import styles from './Icon.module.css';

export const Icon = ({ name, color, width, height }) => (
	<svg
		className={`${styles.icon} icon-${name}`}
		fill={color}
		width={width}
		height={height}
	>
		<use xlinkHref={`${Icons}#icon-${name}`} />
	</svg>
);

Icon.propTypes = {
	name: PropTypes.string.isRequired,
	color: PropTypes.string,
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
};
