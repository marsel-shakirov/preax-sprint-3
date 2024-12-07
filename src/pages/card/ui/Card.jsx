import PropTypes from 'prop-types';
import React from 'react';

import CameroonImage from '@/shared/assets/svg/flags/cameroon.svg';

import { useCounterContext } from '@/shared/hooks';
import { usePageContext } from '@/shared/hooks/usePageContext';

import { Button } from '@/features/button';
import { ButtonWrapper } from '@/shared/ui';

import styles from './Card.module.css';

const dataCard = [
	'Камерун',
	'Нигерия',
	'Центрально-Африканская Республика',
	'Гаити',
];

export const Card = ({ title }) => {
	const [isDisabled, setDisabled] = React.useState(true);
	const { count } = useCounterContext();
	const { isStart, setStart } = usePageContext();

	const handleCheckedCard = () => {
		setDisabled(false);
	};

	return (
		<>
			<title>{`Quiz | ${title}`}</title>
			<section className="content">
				<div>
					<img
						className={styles.image}
						src={CameroonImage}
						alt="Флаг в трёх равных вертикальных полосах зеленый, красный, жёлтый c одной золотой звездой в центре красной полосы"
						width={90}
						height={60}
					/>
					<fieldset className={styles.quiz}>
						<legend className={styles.title}>
							Флаг какой страны изображен?
						</legend>

						{dataCard.map((text, index) => (
							<label key={`${text}_${index}`} className={styles.label}>
								<input
									onClick={handleCheckedCard}
									className={styles.input}
									type="radio"
									name="answer"
									value={++index}
								/>
								<span className={styles.text}>{text}</span>
							</label>
						))}
					</fieldset>
				</div>
				<div className={styles.inner}>
					<ButtonWrapper isDisabled={isDisabled}>
						<Button
							isDisabled={isDisabled}
							onTriggerClick={() => setStart(!isStart)}
							text="Ответить"
						/>
					</ButtonWrapper>
					<span className={styles.count}>1 / {count}</span>
				</div>
			</section>
		</>
	);
};

Card.propTypes = {
	title: PropTypes.string,
};
