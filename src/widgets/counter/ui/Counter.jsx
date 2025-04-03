import PropTypes from 'prop-types';

import { useState } from 'react';

import { Button, Input } from '@/shared/ui';

import { useCounterContext } from '@/shared/hooks';

import styles from './Counter.module.css';

import { MAX_COUNT_VALUE, MIN_COUNT_VALUE } from '@/widgets/counter/index';

export const Counter = ({ isLoading, labelFormId }) => {
	const { count, dispatch } = useCounterContext();
	const [isFocused, setIsFocused] = useState(false);

	const handleButtonFocused = event =>
		event.code === 'Enter' && setIsFocused(true);

	const buttonIsNotFocused = event =>
		!isFocused ? event.target.blur() : setIsFocused(false);

	return (
		<div className={styles.counter}>
			<Button
				isLoading={isLoading}
				styled={{ classes: ['counter', 'decrement'] }}
				onKeyDown={handleButtonFocused}
				onClick={event => {
					dispatch({ type: 'decrement' });
					buttonIsNotFocused(event);
				}}
				isDisabled={count <= MIN_COUNT_VALUE}
				ariaLabel="Уменьшить вопросы"
			/>
			<Input
				isLoading={isLoading}
				type="text"
				styled={{ classes: ['count'] }}
				id={labelFormId}
				value={count}
				onFocus={() => dispatch({ type: 'init' })}
				onChange={event => {
					dispatch({
						type: 'change',
						value: event.target.value.replace(/\D+/g, ''),
					});
				}}
			/>
			<Button
				isLoading={isLoading}
				styled={{ classes: ['counter', 'increment'] }}
				onKeyDown={handleButtonFocused}
				onClick={event => {
					dispatch({ type: 'increment' });
					buttonIsNotFocused(event);
				}}
				isDisabled={count >= MAX_COUNT_VALUE}
				ariaLabel="Добавить вопросы"
			/>
		</div>
	);
};

Counter.propTypes = {
	isLoading: PropTypes.bool,
	labelFormId: PropTypes.string,
};
