import PropTypes from 'prop-types';

import { useCounterContext, usePageContext } from '@/shared/context-hooks';
import { useEnterPressButton } from '@/shared/hooks';
import { useRef, useState } from 'react';

import { Button } from '@/features/button';
import { Input as RadioButton } from '@/features/input';
import { Label, Question } from '@/shared/ui';
import { Answer } from '@/widgets/answer';
import { ButtonWrapper } from '@/widgets/button-wrapper';

import { quizQuestions } from '@/shared/api/index';
import { getRandomArrayElements } from '../model/getRandomArrayElements';

import styles from './CardPage.module.css';

export const CardPage = ({ title }) => {
	const { count } = useCounterContext();
	const { navigate } = usePageContext();

	const [activeIndex, setActiveIndex] = useState(1);
	const [isDisabled, setDisabled] = useState(true);

	const { questions, countries } = quizQuestions;
	const [renderQuizQuestions] = useState(
		getRandomArrayElements(questions, count).map(obj => {
			return {
				...obj,
				countries: getRandomArrayElements(countries, 4, obj.correctAnswer),
			};
		})
	);

	const buttonRef = useRef(null);

	const isHaveSomeQuestions = activeIndex >= count;

	useEnterPressButton(buttonRef, isDisabled);

	const handleCheckedCard = () => {
		setDisabled(false);
	};

	return (
		<>
			<title>{`QuizApp | ${title}`}</title>

			<section className="content">
				<form id="quiz" className={styles.cardWrapper}>
					{renderQuizQuestions.map(
						({ question, correctAnswer, flag, countries }, index) => (
							<Answer
								isShowAnswer={activeIndex === index + 1}
								key={`${correctAnswer}_${index}`}
							>
								<Question title={question} imageSrc={flag} />

								<fieldset className={styles.quiz}>
									{countries.map((country, index) => (
										<Label key={`${country}_${index}`}>
											<RadioButton
												styled={{ classes: ['cardInput'] }}
												onChange={handleCheckedCard}
												type="radio"
												name="answer"
												value={++index}
											/>
											<span className={styles.quizText}>{country}</span>
										</Label>
									))}
								</fieldset>
							</Answer>
						)
					)}
				</form>
				<div className={styles.cardInner}>
					<ButtonWrapper isDisabled={isDisabled}>
						<Button
							ref={buttonRef}
							isDisabled={isDisabled}
							onTriggerClick={() => {
								isHaveSomeQuestions && navigate('/result');
								setActiveIndex(activeIndex + 1);
								setDisabled(true);
							}}
							text="Ответить"
							type="submit"
							form="quiz"
						/>
					</ButtonWrapper>
					<span className={styles.cardCount}>
						{activeIndex}&nbsp;/&nbsp;{count}
					</span>
				</div>
			</section>
		</>
	);
};

CardPage.propTypes = {
	title: PropTypes.string,
};
