import styles from './Preloader.module.css';

export const Preloader = () => {
	return (
		<div className={styles.preloader}>
			<span className={`${styles.circle} ${styles.animateCircleOne}`}></span>
			<span className={`${styles.circle} ${styles.animateCircleTwo}`}></span>
			<span className={`${styles.circle} ${styles.animateCircleTree}`}></span>
		</div>
	);
};
