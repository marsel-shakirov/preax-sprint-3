import PropTypes from 'prop-types';

import { Button, ButtonWrapper, Label } from '@/shared/ui';
import { Counter } from '@/widgets/counter';

import {
	useCounterContext,
	useEnterPressButton,
	usePageContext,
} from '@/shared/hooks';

import { useId, useRef } from 'react';

import styles from './WelcomePage.module.css';

export const WelcomePage = ({ title }) => {
	const { navigate } = usePageContext();
	const { count } = useCounterContext();

	const buttonRef = useRef(null);

	const isDisabled = !count;

	useEnterPressButton(() => navigate('/card'), isDisabled);

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
					<Counter />
				</form>
				<ButtonWrapper isDisabled={isDisabled}>
					<Button
						onClick={e => {
							e.preventDefault();
							navigate('/card');
						}}
						isDisabled={isDisabled}
						text="Начать"
						type="submit"
						form={welcomeFormId}
						ref={buttonRef}
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
