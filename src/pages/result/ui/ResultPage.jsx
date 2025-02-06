import PropTypes from 'prop-types';

import { Button } from '@/features/button';
import { ButtonWrapper } from '@/shared/ui';

import { usePageContext } from '@/shared/context-hooks/usePageContext';
import { useEnterPressButton } from '@/shared/hooks';
import { useRef } from 'react';

import { RenderResultText } from './RenderResultText';

import styles from './ResultPage.module.css';

export const ResultPage = ({ title, result = '/result' }) => {
	const { navigate } = usePageContext();

	const buttonRef = useRef(null);

	useEnterPressButton(buttonRef);

	return (
		<>
			<title>{`QuizApp | ${title}`}</title>

			<section className={`content ${styles.result}`}>
				<div className={styles.resultImage}></div>
				<div className={styles.resultWrapper}>
					<h2 className={styles.resultTitle}>Результат</h2>
					<RenderResultText styles={styles} result={result} />
				</div>
				<ButtonWrapper>
					<Button
						ref={buttonRef}
						onTriggerClick={() => navigate('/')}
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
