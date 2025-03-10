import PropTypes from 'prop-types';

import { Button, ButtonWrapper } from '@/shared/ui';

import {
	useCounterContext,
	useEnterPressButton,
	usePageContext,
	useResultContext,
} from '@/shared/hooks';

import { RenderResultText } from './RenderResultText';

import { PAGES } from '@/shared/constants';

import styles from './ResultPage.module.css';

export const ResultPage = ({ title }) => {
	const { navigate } = usePageContext();
	const { resultQuiz } = useResultContext();
	const { count } = useCounterContext();

	const handleReturnHome = () => navigate(PAGES.home);

	useEnterPressButton(handleReturnHome);

	return (
		<>
			<title>{`QuizApp | ${title}`}</title>

			<section className={`content ${styles.result}`}>
				<div className={styles.resultImage}></div>
				<div className={styles.resultWrapper}>
					<h2 className={styles.resultTitle}>Результат</h2>
					<RenderResultText styles={styles} result={resultQuiz} count={count} />
				</div>
				<ButtonWrapper>
					<Button onClick={handleReturnHome} text={'Попробовать еще'} />
				</ButtonWrapper>
			</section>
		</>
	);
};

ResultPage.propTypes = {
	title: PropTypes.string,
	result: PropTypes.string,
};
