import { Logo } from '@/shared/ui';

import { Button } from '@/features/button';
import { usePageContext } from '@/shared/context-hooks/usePageContext';
import styles from './Header.module.css';

export const Header = () => {
	const { currentPage, setCurrentPage } = usePageContext();
	return (
		<header className={styles.header}>
			<Logo />
			{currentPage === 'card' && (
				<menu className={styles.close}>
					<li className={styles.item}>
						<Button
							styled={{ close: true }}
							onTriggerClick={() => setCurrentPage('welcome')}
						/>
					</li>
				</menu>
			)}
		</header>
	);
};
