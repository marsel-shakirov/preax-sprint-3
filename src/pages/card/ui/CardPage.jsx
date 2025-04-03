import PropTypes from 'prop-types';

import {
	useCounterContext,
	useDigitCheckedAnswer,
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

import { resetEnterKeyDown, setDelay } from '@/shared/utils';

import { getQuizQuestions } from '../model/getQuizQuestions';

import { action, quizQuestions } from '@/shared/api';

import { PAGES } from '@/shared/constants';

import styles from './CardPage.module.css';

export const CardPage = ({ title }) => {
	const { count } = useCounterContext();
	const { navigate } = usePageContext();
	const { setResultQuiz } = useResultContext();

	const quizFormId = useId();
	const [activeIndex, setActiveIndex] = useState(0);
	const [isDisabled, setDisabled] = useState(true);
	const [renderQuizQuestions] = useState(
		getQuizQuestions(quizQuestions, count)
	);
	const [state, formAction] = useActionState(action, []);
	const [isCheckResult, setIsCheckResult] = useState(false);
	const [buttonText, setButtonText] = useState('Ответить');
	const [isLoading, setIsLoading] = useState(false);
	const buttonRef = useRef(null);

	const currentCountQuestion = activeIndex + 1;

	useEffect(() => {
		if (currentCountQuestion > count) {
			const countOfCorrectAnswers = renderQuizQuestions.filter(
				(element, i) => element.correctAnswer === state[i]
			).length;

			setResultQuiz(countOfCorrectAnswers);
			navigate(PAGES.result);
		}
	}, [
		currentCountQuestion,
		count,
		setResultQuiz,
		navigate,
		renderQuizQuestions,
		state,
	]);

	const handleInitialSubmit = async event => {
		setIsLoading(true);
		const formData = new FormData(event.currentTarget);
		formAction(formData);

		await setDelay();
		setIsLoading(false);
		setIsCheckResult(true);

		setButtonText(currentCountQuestion === count ? 'Результат' : 'Дальше');
	};

	const handleNextQuestion = () => {
		setDisabled(true);
		setIsCheckResult(false);
		setButtonText('Ответить');
		setActiveIndex(activeIndex + 1);
	};

	const handleFormSubmit = async event => {
		event.preventDefault();

		if (!isCheckResult) {
			await handleInitialSubmit(event);
		} else {
			handleNextQuestion();
		}

		buttonRef.current.blur();
	};

	const handleCheckedCard = bool => setDisabled(bool);

	const handleClickButton = () => buttonRef.current.click();

	useDigitCheckedAnswer(handleCheckedCard);

	useEnterPressButton(handleClickButton, isDisabled);

	return (
		<>
			<title>{`QuizApp | ${title}`}</title>

			<div className="content">
				<form
					onKeyDown={resetEnterKeyDown}
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
									state={state}
									isLoading={isLoading}
								/>
							</QuizContainer>
						)
					)}
				</form>
				<div className={styles.cardInner}>
					<ButtonWrapper isDisabled={isDisabled}>
						<Button
							isLoading={isLoading}
							onKeyDown={resetEnterKeyDown}
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
