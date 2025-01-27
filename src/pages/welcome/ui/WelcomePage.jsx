import PropTypes from 'prop-types';

import { Button } from '@/features/button';
import { Label } from '@/shared/ui';
import { ButtonWrapper } from '@/widgets/button-wrapper';
import { Counter } from '@/widgets/counter';

import { useCounterContext } from '@/shared/context-hooks';
import { usePageContext } from '@/shared/context-hooks/usePageContext';
import { useEnterPressButton } from '@/shared/hooks';
import { useRef } from 'react';

import styles from './WelcomePage.module.css';

export const WelcomePage = ({ title }) => {
	const { navigate } = usePageContext();
	const { count } = useCounterContext();

	const buttonRef = useRef(null);

	const isDisabled = !count;

	useEnterPressButton(buttonRef, isDisabled);

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
				<form id="welcome" className={styles.welcomeQuestion}>
					<Label labelFor="count">Выбери количество вопросов:</Label>
					<Counter />
				</form>
				<ButtonWrapper isDisabled={isDisabled}>
					<Button
						onTriggerClick={e => {
							e.preventDefault();
							navigate('/card');
						}}
						isDisabled={isDisabled}
						text="Начать"
						type="submit"
						form="welcome"
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
