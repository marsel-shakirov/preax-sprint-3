import { Button } from '@/entities/button';
import { Counter } from '@/entities/counter';
import PropTypes from 'prop-types';

import styles from './WelcomePage.module.css';

export const WelcomePage = ({ title }) => {
	console.log('render 3');
	return (
		<>
			<title>{`Quiz | ${title}`}</title>

			<section className="content welcome">
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
				<Button text="Начать" />
			</section>
		</>
	);
};

WelcomePage.propTypes = {
	title: PropTypes.string,
	onStartQuiz: PropTypes.func,
};
