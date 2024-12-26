import PropTypes from 'prop-types';

import styles from './Question.module.css';

export const Question = ({ title, imageSrc }) => {
	return (
		<figure className={styles.quizBlock}>
			<img
				className={styles.quizPicture}
				src={imageSrc}
				alt=""
				width="90"
				height="60"
			/>
			<figcaption className={styles.quizTitle}>{title}</figcaption>
		</figure>
	);
};

Question.propTypes = {
	title: PropTypes.string,
	imageSrc: PropTypes.string,
};
