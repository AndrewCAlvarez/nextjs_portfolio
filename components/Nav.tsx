import styles from './Nav.module.css';
import Image from 'next/image';
import menuIcon from '../public/menu-outline.svg';
import utils from '../styles/utils.module.css';
import Link from 'next/link';

export default function Nav() {
  return (
    <nav className={`${styles.nav} ${utils.container}`}>
      <div>A</div>
      <Image
        className={styles.iconMenu}
        priority
        src={menuIcon}
        alt='Menu icon.'
        width={40}
        height={40}
      />
      <ul>
        <Link href={'#about'}>About</Link>
        <Link href={'#experience'}>Experience</Link>
        <Link href={'#contact'}>Contact</Link>
      </ul>
    </nav>
  );
}
