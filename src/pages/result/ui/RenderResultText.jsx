import PropTypes from 'prop-types';

export const RenderResultText = ({ styles, result, count }) => {
	const mistakes = count - result;

	if (result === count) {
		return (
			<p className={styles.resultDesc}>
				Ты ответил правильно <br /> на все вопросы. Так держать!
			</p>
		);
	}
	if (result === 0) {
		return (
			<p className={styles.resultDesc}>
				Ты не ответил ни на один вопрос. Попробуй еще!
			</p>
		);
	}

	return (
		<p className={styles.resultDesc}>
			Ты ответил правильно на&nbsp;
			<span className={styles.resultCorrect}>{result}</span>&nbsp;вопросов и
			сделал&nbsp;
			<span className={styles.resultMistake}>{mistakes}</span>
			&nbsp;ошибок.
		</p>
	);
};

RenderResultText.propTypes = {
	styles: PropTypes.object,
	result: PropTypes.string.isRequired,
	count: PropTypes.string.isRequired,
};
