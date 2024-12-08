// import styles from './cardImage.module.css';
import PropTypes from 'prop-types';

export const CardImage = ({ src, alt = '', width = 90, height = 60 }) => {
	return <img src={src} alt={alt} width={width} height={height} />;
};

CardImage.propTypes = {
	src: PropTypes.string,
	alt: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number,
};
