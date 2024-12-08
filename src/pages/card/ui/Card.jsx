import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import { useCounterContext } from '@/shared/hooks';
import { usePageContext } from '@/shared/hooks/usePageContext';

import { Button } from '@/features/button';
import { ButtonWrapper, CardImage } from '@/shared/ui';

import { dataQuizCard } from '../api/dataQuizCard';

import styles from './Card.module.css';

export const Card = ({ title }) => {
	const [isDisabled, setDisabled] = React.useState(true);
	const { count } = useCounterContext();
	const { setCurrentPage } = usePageContext();

	const handleCheckedCard = () => {
		setDisabled(false);
	};

	return (
		<>
			<title>{`Quiz | ${title}`}</title>
			<section className="content">
				<form id="quiz" className={styles.cardWrapper}>
					{dataQuizCard.map(({ id, srcImage, altImage, countries }) => (
						<Fragment key={id}>
							<CardImage src={srcImage} alt={altImage} />
							<fieldset className={styles.quiz}>
								<legend className={styles.quizTitle}>
									Флаг какой страны изображен?
								</legend>

								{countries.map((country, index) => (
									<label
										key={`${country}_${index}`}
										className={styles.quizLabel}
									>
										<input
											onClick={handleCheckedCard}
											className={styles.input}
											type="radio"
											name="answer"
											value={++index}
										/>
										<span className={styles.quizText}>{country}</span>
									</label>
								))}
							</fieldset>
						</Fragment>
					))}
				</form>
				<div className={styles.cardInner}>
					<ButtonWrapper isDisabled={isDisabled}>
						<Button
							isDisabled={isDisabled}
							onTriggerClick={() => setCurrentPage('result')}
							text="Ответить"
							type="submit"
							form="quiz"
						/>
					</ButtonWrapper>
					<span className={styles.cardCount}>1 / {count}</span>
				</div>
			</section>
		</>
	);
};

Card.propTypes = {
	title: PropTypes.string,
};
