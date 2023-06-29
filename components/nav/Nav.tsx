import styles from './Nav.module.css';
import Image from 'next/image';
import menuIcon from '../public/menu-outline.svg';
import utils from '../../styles/utils.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MenuToggle } from './MenuToggle';
import { Navigation } from './Navigation';
import Logo from '../../public/PortfolioLogo.svg';
import LogoBordered from '../../public/PortfolioLogoBordered.svg';
import { useEffect } from 'react';

const variants = {
	open: { opacity: 1, x: 0 },
	closed: { opacity: 0, x: 0 },
};

export default function Nav() {
	const [isOpen, setIsOpen] = useState(false);
	const [screenWidth, setScreenWidth] = useState(0);

	useEffect(() => {
		const handleResize = () => {
			setScreenWidth(window.innerWidth);
		}
		handleResize();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		}
	}, []);

	return (
		<>
			<motion.nav
				className={`${styles.nav} ${utils.container} `}
				animate={isOpen ? 'open' : 'closed'}
			>
				<a className={styles.logo} href="#">

					<Image
						height={75}
						width={75}
						priority
						src={LogoBordered}
						alt='acalvarez.com logo'
					/>
				</a>
				{screenWidth < 1040 && <MenuToggle toggle={() => setIsOpen((isOpen) => !isOpen)} />}
				{screenWidth < 1040 ? <Navigation isOpen={isOpen} /> : <Navigation isOpen={true} />}
			</motion.nav>
		</>
	);


}
