import { Button } from '@/entities/button';
import { Counter } from '@/entities/counter';
import PropTypes from 'prop-types';

import styles from './WelcomeContent.module.css';

export const WelcomeContent = ({ title }) => {
	console.log('render 3');
	return (
		<>
			<title>{`Quiz | ${title}`}</title>

			<section className="content welcome">
				<h1 className={styles.title}>
					Добро пожаловать
					<span className={styles.desc}>
						на викторину по странам и столицам!
					</span>
				</h1>
				<div className={styles.question}>
					<p>Выбери количество вопросов:</p>
					<Counter />
				</div>
				<Button text="Начать" />
			</section>
		</>
	);
};

WelcomeContent.propTypes = {
	title: PropTypes.string,
	onStartQuiz: PropTypes.func,
};
