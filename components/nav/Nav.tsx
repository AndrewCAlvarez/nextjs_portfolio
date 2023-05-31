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

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: 0 },
};

// const sidebar = {
//   open: (height = 1000) => ({
//     clipPath: `circle(${height * 2 + 200}px at 4px 40px)`,
//     transition: {
//       type: 'spring',
//       stiffness: 20,
//       restDelta: 2,
//     },
//   }),
//   closed: {
//     clipPath: 'circle(30px at 40px 40px)',
//     transition: {
//       delay: 0.5,
//       type: 'spring',
//       stiffness: 400,
//       damping: 40,
//     },
//   },
// };

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        className={`${styles.nav} ${utils.container} `}
        animate={isOpen ? 'open' : 'closed'}
      >
        <Image
          height={75}
          width={75}
          priority
          src={Logo}
          alt='acalvarez.com logo'
        />
        <MenuToggle toggle={() => setIsOpen((isOpen) => !isOpen)} />
        {/* <motion.div className={styles.background} variants={sidebar} /> */}
        {/* <nav className={styles['icon-menu-container']}>
          <span
          onClick={() => setIsOpen((isOpen) => !isOpen)}
          className={styles['icon-menu']}
          ></span>
        </nav> */}
        {/* <ul className={styles['nav-responsive']}>
          <Link href={'#about'}>About</Link>
          <Link href={'#projects'}>Projects</Link>
          <Link href={'#contact'}>Contact</Link>
        </ul> */}
      </motion.nav>
      <Navigation isOpen={isOpen} />
    </>
  );
}

{
  /* <nav
  className={
    isOpen
    ? `${styles['nav-animation']} ${styles['nav-mobile']}`
    : `${styles['nav-mobile']} ${styles['nav-animation-exit']}`
  }
      >
        <ul>
          <motion.li
            whileHover={{ scale: 1.2 }}
            className={isOpen ? styles['nav-li-0'] : styles['nav-li-0-exit']}
          >
            <Link href={'#home'}>Home</Link>
          </motion.li>
          <li className={isOpen ? styles['nav-li-1'] : styles['nav-li-1-exit']}>
            <Link href={'#about'}>About</Link>
          </li>
          <li className={isOpen ? styles['nav-li-2'] : styles['nav-li-2-exit']}>
            <Link href={'#projects'}>Projects</Link>
          </li>
          <li className={isOpen ? styles['nav-li-3'] : styles['nav-li-3-exit']}>
            <Link href={'#contact'}>Contact</Link>
          </li>
        </ul>
      </nav> */
}
