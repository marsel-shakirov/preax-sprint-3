import PropTypes from 'prop-types';

import { Button, ButtonWrapper, Label } from '@/shared/ui';
import { Counter } from '@/widgets/counter';

import {
	useCounterContext,
	useEnterPressButton,
	usePageContext,
} from '@/shared/hooks';

import { useEffect, useId, useState } from 'react';

import { setDelay } from '@/shared/utils';

import { PAGES } from '@/shared/constants';

import styles from './WelcomePage.module.css';

export const WelcomePage = ({ title }) => {
	const { navigate } = usePageContext();
	const { count } = useCounterContext();

	const [isLoading, setIsLoading] = useState(false);
	const [isDisabled, setDisabled] = useState(!count);

	useEffect(() => {
		setDisabled(!count);
	}, [count]);

	const isTabFocusedElement = true;

	const handleStartQuiz = event => {
		event.preventDefault();
		setDisabled(true);
		setIsLoading(true);
		setDelay().then(() => navigate(PAGES.card));
	};

	useEnterPressButton(handleStartQuiz, isDisabled, isTabFocusedElement);

	const welcomeFormId = useId();

	return (
		<>
			<title>{`QuizApp | ${title}`}</title>

			<section className={`content ${styles.welcome}`}>
				<h1 className={styles.welcomeTitle}>
					Добро пожаловать
					<span className={styles.welcomeDesc}>
						на викторину по странам и столицам!
					</span>
				</h1>
				<form id={welcomeFormId} className={styles.welcomeQuestion}>
					<Label labelFor="count">Выбери количество вопросов:</Label>
					<Counter isLoading={isLoading} />
				</form>
				<ButtonWrapper isDisabled={isDisabled}>
					<Button
						onClick={handleStartQuiz}
						isDisabled={isDisabled}
						text="Начать"
						type="submit"
						isLoading={isLoading}
						form={welcomeFormId}
					/>
				</ButtonWrapper>
			</section>
		</>
	);
};

WelcomePage.propTypes = {
	title: PropTypes.string,
	onStartQuiz: PropTypes.func,
};
