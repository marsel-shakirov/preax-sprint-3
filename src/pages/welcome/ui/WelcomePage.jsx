import { usePageContext } from '@/shared/context-hooks/usePageContext';
import PropTypes from 'prop-types';

import { Button } from '@/features/button';
import { Label } from '@/shared/ui';
import { ButtonWrapper } from '@/widgets/button-wrapper';
import { Counter } from '@/widgets/counter';

import { useCounterContext } from '@/shared/context-hooks';

import styles from './WelcomePage.module.css';

export const WelcomePage = ({ title }) => {
	const { setCurrentPage } = usePageContext();
	const { count } = useCounterContext();

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
				<ButtonWrapper isDisabled={!count}>
					<Button
						onTriggerClick={e => {
							e.preventDefault();
							setCurrentPage('card');
						}}
						isDisabled={!count}
						text="Начать"
						type="submit"
						form="welcome"
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
