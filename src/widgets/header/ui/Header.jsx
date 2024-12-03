import { Logo } from '@/entities/logo';

import { usePageContext } from '@/shared/hooks/usePageContext';
import styles from './Header.module.css';

export const Header = () => {
	const { isStart, setStart } = usePageContext();
	return (
		<header className={styles.header}>
			<Logo />
			{isStart && (
				<menu className={styles.close}>
					<li className={styles.item}>
						<button
							onClick={() => setStart(false)}
							className={styles.button}
							type="button"
						></button>
					</li>
				</menu>
			)}
		</header>
	);
};
