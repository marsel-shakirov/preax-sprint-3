import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import { useCounterContext } from '@/shared/context-hooks';
import { usePageContext } from '@/shared/context-hooks/usePageContext';

import { Button } from '@/features/button';
import { Label } from '@/shared/ui';
import { ButtonWrapper } from '@/widgets/button-wrapper';

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
							<img src={srcImage} alt={altImage} width="90" height="60" />
							<fieldset className={styles.quiz}>
								<legend className={styles.quizTitle}>
									Флаг какой страны изображен?
								</legend>

								{countries.map((country, index) => (
									<Label key={`${country}_${index}`}>
										<input
											onClick={handleCheckedCard}
											className={styles.input}
											type="radio"
											name="answer"
											value={++index}
										/>
										<span className={styles.quizText}>{country}</span>
									</Label>
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
