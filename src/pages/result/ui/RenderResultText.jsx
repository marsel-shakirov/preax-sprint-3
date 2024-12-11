import PropTypes from 'prop-types';

export const RenderResultText = ({ styles, result }) => {
	if (result === 'result') {
		return (
			<p className={styles.resultDesc}>
				Ты ответил правильно на&nbsp;
				<span className={styles.resultCorrect}>12</span>&nbsp;вопросов и
				сделал&nbsp;
				<span className={styles.resultMistake}>6</span>&nbsp;ошибок.
			</p>
		);
	}
	if (result === 'result-well') {
		return (
			<p className={styles.resultDesc}>
				Ты ответил правильно <br /> на все вопросы. Так держать!
			</p>
		);
	}
	if (result === 'result-fail') {
		return (
			<p className={styles.resultDesc}>
				Ты не ответил ни на один вопрос. Попробуй еще!
			</p>
		);
	}
};

RenderResultText.propTypes = {
	styles: PropTypes.object,
	result: PropTypes.string,
};
