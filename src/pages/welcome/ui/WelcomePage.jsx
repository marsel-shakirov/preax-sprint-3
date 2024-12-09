import { usePageContext } from '@/shared/hooks/usePageContext';
import PropTypes from 'prop-types';

import { Button } from '@/features/button';
import { ButtonWrapper } from '@/shared/ui';
import { Counter } from '@/widgets/counter';

import styles from './WelcomePage.module.css';

export const WelcomePage = ({ title }) => {
	const { setCurrentPage } = usePageContext();
	return (
		<>
			<title>{`Quiz | ${title}`}</title>
			<section className={`content ${styles.welcome}`}>
				<h1 className={styles.welcomeTitle}>
					Добро пожаловать
					<span className={styles.welcomeDesc}>
						на викторину по странам и столицам!
					</span>
				</h1>
				<div className={styles.welcomeQuestion}>
					<p>Выбери количество вопросов:</p>
					<Counter />
				</div>
				<ButtonWrapper>
					<Button onTriggerClick={() => setCurrentPage('card')} text="Начать" />
				</ButtonWrapper>
			</section>
		</>
	);
};

WelcomePage.propTypes = {
	title: PropTypes.string,
	onStartQuiz: PropTypes.func,
};
