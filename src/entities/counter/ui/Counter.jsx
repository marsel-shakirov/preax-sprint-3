import { useCounterContext } from '@/shared/hooks';
import styles from './Counter.module.css';

export const Counter = () => {
	const { count, dispatch } = useCounterContext();
	console.log('render 4');

	return (
		<div className={styles.counter}>
			<button
				onClick={() => dispatch({ type: 'decrement' })}
				type="button"
				className={`${styles.btn} ${styles.minus}`}
			></button>
			<div className={styles.count}>{count}</div>
			<button
				onClick={() => dispatch({ type: 'increment' })}
				type="button"
				className={`${styles.btn} ${styles.plus}`}
			></button>
		</div>
	);
};
