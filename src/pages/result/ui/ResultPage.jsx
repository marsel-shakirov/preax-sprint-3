import { usePageContext } from '@/shared/context-hooks/usePageContext';
import PropTypes from 'prop-types';

import { Button } from '@/features/button';
import { ButtonWrapper } from '@/widgets/button-wrapper';

import styles from './ResultPage.module.css';

export const ResultPage = ({ title, result = 'result' }) => {
	const { setCurrentPage } = usePageContext();

	const renderResultText = result => {
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
		<>
			<title>{`Quiz | ${title}`}</title>

			<section className={`content ${styles.result}`}>
				<div className={styles['image-block']}></div>
				<div className={styles.wrapper}>
					<h2 className={styles.title}>Результат</h2>
					{renderResultText(result)}
				</div>
				<ButtonWrapper>
					<Button
						onTriggerClick={() => setCurrentPage('welcome')}
						text={'Попробовать еще'}
					/>
				</ButtonWrapper>
			</section>
		</>
	);
};

ResultPage.propTypes = {
	title: PropTypes.string,
	result: PropTypes.string,
};
