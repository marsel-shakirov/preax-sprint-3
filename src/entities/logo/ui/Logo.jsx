import LogoSVG from '@/shared/assets/svg/logo/logo.svg';

import styles from './Logo.module.css';

export const Logo = () => {
	return (
		<a href="/">
			<img
				className={styles.logo}
				src={LogoSVG}
				alt="Логотип приложения Quiz - викторина по странам и столицам"
				width={178}
				height={48}
			/>
		</a>
	);
};
