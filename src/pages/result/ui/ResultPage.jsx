import { usePageContext } from '@/shared/context-hooks/usePageContext';
import PropTypes from 'prop-types';

import { Button } from '@/features/button';
import { ButtonWrapper } from '@/widgets/button-wrapper';

import { RenderResultText } from './RenderResultText';

import styles from './ResultPage.module.css';

export const ResultPage = ({ title, result = 'result' }) => {
	const { setCurrentPage } = usePageContext();

	return (
		<>
			<title>{`QuizApp | ${title}`}</title>

			<section className={`content ${styles.result}`}>
				<div className={styles['resultImage']}></div>
				<div className={styles.resultWrapper}>
					<h2 className={styles.resultTitle}>Результат</h2>
					<RenderResultText styles={styles} result={result} />
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
