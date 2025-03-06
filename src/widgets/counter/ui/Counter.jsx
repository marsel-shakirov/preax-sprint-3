import { useState } from 'react';

import { Button, Input } from '@/shared/ui';

import { useCounterContext } from '@/shared/hooks';

import styles from './Counter.module.css';

import { MAX_COUNT_VALUE, MIN_COUNT_VALUE } from '@/widgets/counter/index';

export const Counter = () => {
	const { count, dispatch } = useCounterContext();
	const [isFocused, setIsFocused] = useState(false);

	const handleButtonFocused = event =>
		event.code === 'Enter' && setIsFocused(true);

	const buttonIsNotFocused = event =>
		!isFocused ? event.target.blur() : setIsFocused(false);

	return (
		<div className={styles.counter}>
			<Button
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
				type="text"
				styled={{ classes: ['count'] }}
				id="count"
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
				styled={{ classes: ['counter', 'increment'] }}
<<<<<<< HEAD
				onTriggerClick={e => dispatch({ type: 'increment' })}
=======
				onKeyDown={handleButtonFocused}
				onClick={event => {
					dispatch({ type: 'increment' });
					buttonIsNotFocused(event);
				}}
>>>>>>> task-3-refactoring-useEnterPressButton
				isDisabled={count >= MAX_COUNT_VALUE}
				ariaLabel="Добавить вопросы"
			/>
		</div>
	);
};
