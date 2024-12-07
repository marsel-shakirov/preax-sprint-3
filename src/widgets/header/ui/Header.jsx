import { Logo } from '@/entities/logo';

import { Button } from '@/features/button';
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
						<Button
							styled={{ close: true }}
							onTriggerClick={() => setStart(false)}
						/>
					</li>
				</menu>
			)}
		</header>
	);
};
