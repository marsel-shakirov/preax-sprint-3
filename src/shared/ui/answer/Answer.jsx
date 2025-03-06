import PropTypes from 'prop-types';

import { Label, Input as RadioButton } from '@/shared/ui';

import styles from './Answer.module.css';

export const Answer = ({
	isCheckResult,
	correctAnswer,
	countries,
	onChange,
}) => {
	return (
		<fieldset className={styles.quiz}>
			{countries.map((country, index) => {
				const isRightAnswer = correctAnswer === country;
				const resultAnswer = isRightAnswer
					? styles.rightAnswer
					: styles.wrongAnswer;

				return (
					<Label key={`${country}_${index}`}>
						<RadioButton
							styled={{ classes: ['cardInput'] }}
							onChange={onChange}
							type="radio"
							name="answer"
							value={country}
							isDisabled={isCheckResult}
						/>
						<span
							className={`${styles.quizText} ${
								isCheckResult ? resultAnswer : ''
							}`}
						>
							{country}
						</span>
					</Label>
				);
			})}
		</fieldset>
	);
};

Answer.propTypes = {
	isCheckResult: PropTypes.bool,
	correctAnswer: PropTypes.string,
	countries: PropTypes.array,
	onChange: PropTypes.func,
};
