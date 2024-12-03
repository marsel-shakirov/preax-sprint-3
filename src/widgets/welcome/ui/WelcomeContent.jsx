import { Button } from '@/entities/button';
import { Counter } from '@/entities/counter';

import styles from './WelcomeContent.module.css';

export const WelcomeContent = () => {
	console.log('render 3');
	return (
		<section className="content welcome">
			<h1 className={styles.title}>
				Добро пожаловать
				<span className={styles.desc}>на викторину по странам и столицам!</span>
			</h1>
			<div className={styles.question}>
				<p>Выбери количество вопросов:</p>
				<Counter />
			</div>
			<Button isDisabled={false} text="Начать" />
		</section>
	);
};
