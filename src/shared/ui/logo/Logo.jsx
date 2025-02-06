import { Icon } from '@/shared/ui';

import styles from './Logo.module.css';

export const Logo = () => {
	return (
		<a className={styles.logo} href="/">
			<Icon name="logo" color="#F1F1EF" width={179} height={48} />
			<p className="visually-hidden">Главная</p>
		</a>
	);
};
