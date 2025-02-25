import { Logo } from '@/shared/ui';

import { useCounterContext, usePageContext } from '@/shared/hooks';
import { Button } from '@/shared/ui';
import styles from './Header.module.css';

export const Header = () => {
	const { currentPage, navigate } = usePageContext();
	const { dispatch } = useCounterContext();

	return (
		<header className={styles.header}>
			<Logo />
			{currentPage === '/card' && (
				<menu className={styles.menu}>
					<li className={styles.item}>
						<Button
							styled={{ classes: ['close'] }}
							onTriggerClick={() => {
								dispatch({ type: 'init-one' });
								navigate('/');
							}}
							ariaLabel="Вернуться на начальную страницу"
						/>
					</li>
				</menu>
			)}
		</header>
	);
};
