import PropTypes from 'prop-types';

import { Input as RadioButton } from '@/features/input';
import { Label } from '@/shared/ui';

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

				return (
					<Label key={`${country}_${index}`}>
						<RadioButton
							styled={{ classes: ['cardInput'] }}
							onChange={() => {
								onChange();
							}}
							type="radio"
							name={`answer`}
							value={country}
							isDisabled={!isCheckResult}
						/>
						<span
							className={`${styles.quizText} ${
								isCheckResult
									? ''
									: isRightAnswer
									? styles.rightAnswer
									: styles.wrongAnswer
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
