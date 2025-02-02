import PropTypes from 'prop-types';

import { Input as RadioButton } from '@/features/input';
import { Label } from '@/shared/ui';

import styles from './Answer.module.css';

export const Answer = ({ countries, onChange }) => {
	return (
		<fieldset className={styles.quiz}>
			{countries.map((country, index) => (
				<Label key={`${country}_${index}`}>
					<RadioButton
						styled={{ classes: ['cardInput'] }}
						onChange={onChange}
						type="radio"
						name="answer"
						value={++index}
					/>
					<span className={styles.quizText}>{country}</span>
				</Label>
			))}
		</fieldset>
	);
};

Answer.propTypes = {
	countries: PropTypes.array,
	onChange: PropTypes.func,
};
