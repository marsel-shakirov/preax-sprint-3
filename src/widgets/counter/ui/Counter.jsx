// import { useState } from 'react';

import { Button, Input } from '@/shared/ui';

import { useCounterContext } from '@/shared/hooks';

import styles from './Counter.module.css';

import { MAX_COUNT_VALUE, MIN_COUNT_VALUE } from '@/widgets/counter/index';

export const Counter = () => {
	const { count, dispatch } = useCounterContext();

	return (
		<div className={styles.counter}>
			<Button
				styled={{ classes: ['counter', 'decrement'] }}
				onTriggerClick={() => dispatch({ type: 'decrement' })}
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
				onTriggerClick={e => dispatch({ type: 'increment' })}
				isDisabled={count >= MAX_COUNT_VALUE}
				ariaLabel="Добавить вопросы"
			/>
		</div>
	);
};
