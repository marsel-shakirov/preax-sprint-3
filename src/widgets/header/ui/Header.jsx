import { Logo } from '@/shared/ui';

import { usePageContext } from '@/shared/hooks';

import { Button } from '@/shared/ui';

import { PAGES } from '@/shared/constants';

import styles from './Header.module.css';

export const Header = () => {
	const { currentPage, navigate } = usePageContext();

	return (
		<header className={styles.header}>
			<Logo />
			{currentPage === '/card' && (
				<menu className={styles.menu}>
					<li className={styles.item}>
						<Button
							styled={{ classes: ['close'] }}
							onClick={() => navigate(PAGES.home)}
							ariaLabel="Вернуться на начальную страницу"
						/>
					</li>
				</menu>
			)}
		</header>
	);
};
