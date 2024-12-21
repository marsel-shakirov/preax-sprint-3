import { Button } from '@/features/button';
import { Input } from '@/features/input';
import { useCounterContext } from '@/shared/context-hooks';
import styles from './Counter.module.css';

export const Counter = () => {
	const { count, dispatch } = useCounterContext();

	return (
		<div className={styles.counter}>
			<Button
				styled={{ classes: ['counter', 'decrement'] }}
				onTriggerClick={() => dispatch({ type: 'decrement' })}
				isDisabled={count === 1}
				ariaLabel="Уменьшить вопросы"
			/>
			<Input
				type="number"
				styled={{ classes: ['count'] }}
				id="count"
				value={count}
				onChangeInput={e => dispatch({ type: 'change', value: e.target.value })}
			/>
			<Button
				styled={{ classes: ['counter', 'increment'] }}
				onTriggerClick={() => dispatch({ type: 'increment' })}
				ariaLabel="Добавить вопросы"
			/>
		</div>
	);
};
