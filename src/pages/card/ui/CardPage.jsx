import PropTypes from 'prop-types';

import {
	useCounterContext,
	useEnterPressButton,
	usePageContext,
	useResultContext,
} from '@/shared/hooks';
import { useActionState, useEffect, useId, useRef, useState } from 'react';

import {
	Answer,
	Button,
	ButtonWrapper,
	Question,
	QuizContainer,
} from '@/shared/ui';

import { getRandomArrayElements } from '../model/getRandomArrayElements';

import { action, quizQuestions } from '@/shared/api';

import styles from './CardPage.module.css';

export const CardPage = ({ title }) => {
	const { count } = useCounterContext();
	const { navigate } = usePageContext();
	const { setResultQuiz } = useResultContext();

	const quizFormId = useId();
	const [activeIndex, setActiveIndex] = useState(0);
	const [isDisabled, setDisabled] = useState(true);
	const [renderQuizQuestions] = useState(
		getRandomArrayElements(quizQuestions.questions, count).map(obj => {
			return {
				...obj,
				countries: getRandomArrayElements(
					quizQuestions.countries,
					4,
					obj.correctAnswer
				),
			};
		})
	);
	const [state, formAction] = useActionState(action, []);
	const buttonRef = useRef(null);
	const [isCheckResult, setIsCheckResult] = useState(false);
	const [buttonText, setButtonText] = useState('Ответить');

	const currentCountQuestion = activeIndex + 1;

	const handleCheckedCard = () => {
		setDisabled(false);
	};

	useEffect(() => {
		if (currentCountQuestion > count) {
			const countOfCorrectAnswers = renderQuizQuestions.reduce(
				(acc, element, i) => {
					if (element.correctAnswer === state[i]) {
						return (acc += 1);
					}
					return acc;
				},
				0
			);
			setResultQuiz(countOfCorrectAnswers);
			navigate('/result');
		}
	}, [
		currentCountQuestion,
		count,
		setResultQuiz,
		navigate,
		renderQuizQuestions,
		state,
	]);

	const handleFormSubmit = async event => {
		event.preventDefault();

		if (!isCheckResult) {
			const formData = new FormData(event.currentTarget);
			formAction(formData);
			setIsCheckResult(true);
			currentCountQuestion === count
				? setButtonText('Результат')
				: setButtonText('Дальше');
		}

		if (isCheckResult) {
			setActiveIndex(activeIndex + 1);
			setIsCheckResult(false);
			setDisabled(true);
			setButtonText('Ответить');
		}
	};

	useEnterPressButton(buttonRef, isDisabled);

	return (
		<>
			<title>{`QuizApp | ${title}`}</title>

			<div className="content">
				<form
					onSubmit={handleFormSubmit}
					id={quizFormId}
					className={styles.cardWrapper}
				>
					{renderQuizQuestions.map(
						({ flag, question, correctAnswer, countries }, index) => (
							<QuizContainer
								isShowAnswer={activeIndex === index}
								key={`${index}_${correctAnswer}`}
							>
								<Question title={question} imageSrc={flag} />
								<Answer
									isCheckResult={isCheckResult}
									correctAnswer={correctAnswer}
									countries={countries}
									onChange={handleCheckedCard}
								/>
							</QuizContainer>
						)
					)}
				</form>
				<div className={styles.cardInner}>
					<ButtonWrapper isDisabled={isDisabled}>
						<Button
							ref={buttonRef}
							isDisabled={isDisabled}
							text={buttonText}
							type="submit"
							form={quizFormId}
						/>
					</ButtonWrapper>
					<span className={styles.cardCount}>
						{currentCountQuestion}&nbsp;/&nbsp;{count}
					</span>
				</div>
			</div>
		</>
	);
};

CardPage.propTypes = {
	title: PropTypes.string,
};
