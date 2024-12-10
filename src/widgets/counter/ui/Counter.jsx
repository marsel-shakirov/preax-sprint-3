import { Button } from '@/features/button';
import { useCounterContext } from '@/shared/context-hooks';
import styles from './Counter.module.css';

export const Counter = () => {
	const { count, dispatch } = useCounterContext();

	return (
		<div className={styles.counter}>
			<Button
				styled={{ counter: 'decrement' }}
				onTriggerClick={() => dispatch({ type: 'decrement' })}
				isDisabled={count === 1}
			/>
			<input
				type="number"
				id="count"
				value={count}
				onChange={e => dispatch({ type: 'change', value: e.target.value })}
				className={styles.count}
			/>
			<Button
				styled={{ counter: 'increment' }}
				onTriggerClick={() => dispatch({ type: 'increment' })}
			/>
		</div>
	);
};
