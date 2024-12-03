import PropTypes from 'prop-types';

import { Button } from '@/entities/button/ui/Button';

import styles from './ResultContent.module.css';

export const ResultContent = ({ result }) => {
	const renderResultText = (result = 'result') => {
		if (result === 'result') {
			return (
				<p className={styles.desc}>
					Ты ответил правильно на&nbsp;
					<span className={styles.correct}>12</span>&nbsp;вопросов и
					сделал&nbsp;
					<span className={styles.mistake}>6</span>&nbsp;ошибок.
				</p>
			);
		}
		if (result === 'result-well') {
			return (
				<p className={styles.desc}>
					Ты ответил правильно <br /> на все вопросы. Так держать!
				</p>
			);
		}
		if (result === 'result-fail') {
			return (
				<p className={styles.desc}>
					Ты не ответил ни на один вопрос. Попробуй еще!
				</p>
			);
		}
	};

	return (
		<section className={`content ${styles.result}`}>
			<div className={styles['image-block']}></div>
			<div className={styles.wrapper}>
				<h2 className={styles.title}>Результат</h2>
				{renderResultText(result)}
			</div>
			<Button isDisabled={false} text={'Попробовать еще'} />
		</section>
	);
};

ResultContent.propTypes = {
	result: PropTypes.string,
};
