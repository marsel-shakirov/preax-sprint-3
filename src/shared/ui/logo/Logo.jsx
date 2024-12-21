import LogoSVG from '/assets/svg/logo/logo.svg';

import styles from './Logo.module.css';

export const Logo = () => {
	return (
		<div className={styles.flex}>
			<a href="/">
				<img
					className={styles.logo}
					src={LogoSVG}
					alt="Quiz - викторина по странам и столицам"
					width="178"
					height="48"
				/>
			</a>
		</div>
	);
};
