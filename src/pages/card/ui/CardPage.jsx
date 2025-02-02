import PropTypes from 'prop-types';

import { useCounterContext, usePageContext } from '@/shared/context-hooks';
import { useEnterPressButton } from '@/shared/hooks';
import { useRef, useState } from 'react';

import { Button } from '@/features/button';
import { Answer, ButtonWrapper, Question, QuizContainer } from '@/shared/ui';

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

	const isNotHaveSomeQuestions = activeIndex >= count;

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
							<QuizContainer
								isShowAnswer={activeIndex === index + 1}
								key={`${correctAnswer}_${index}`}
							>
								<Question title={question} imageSrc={flag} />
								<Answer countries={countries} onChange={handleCheckedCard} />
							</QuizContainer>
						)
					)}
				</form>
				<div className={styles.cardInner}>
					<ButtonWrapper isDisabled={isDisabled}>
						<Button
							ref={buttonRef}
							isDisabled={isDisabled}
							onTriggerClick={() => {
								isNotHaveSomeQuestions && navigate('/result');
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
