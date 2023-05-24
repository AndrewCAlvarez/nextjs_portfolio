import styles from './Nav.module.css';
import Image from 'next/image';
import menuIcon from '../public/menu-outline.svg';
import utils from '../styles/utils.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  function navHandler() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav className={`${styles.nav} ${utils.container}`}>
        <div>A</div>
        <Image
          className={styles.iconMenu}
          priority
          src={menuIcon}
          alt='Menu icon.'
          width={40}
          height={40}
          onClick={navHandler}
        />
        <ul className={styles['nav-responsive']}>
          <Link href={'#about'}>About</Link>
          <Link href={'#projects'}>Projects</Link>
          <Link href={'#contact'}>Contact</Link>
        </ul>
      </nav>
      {/* <nav
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
      </nav> */}
    </>
  );
}
