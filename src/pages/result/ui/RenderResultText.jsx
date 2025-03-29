import PropTypes from 'prop-types';

import { pluralize } from '@/shared/utils';

export const RenderResultText = ({ styles, result, count }) => {
	const mistakes = count - result;

	const questionSuffixes = pluralize(result, ['вопрос', 'вопроса', 'вопросов']);

	const mistakeSuffixes = pluralize(mistakes, ['ошибку', 'ошибки', 'ошибок']);

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
			Ты ответил правильно
			<br />
			на&nbsp;
			<span className={styles.resultCorrect}>{result}</span>&nbsp;
			{questionSuffixes} и сделал&nbsp;
			<span className={styles.resultMistake}>{mistakes}</span>
			&nbsp;{mistakeSuffixes}.
		</p>
	);
};

RenderResultText.propTypes = {
	styles: PropTypes.object,
	result: PropTypes.number.isRequired,
	count: PropTypes.number.isRequired,
};
