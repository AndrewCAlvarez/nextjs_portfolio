import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './MenuItem.module.css';

const variants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = (props) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={styles['menu-li']}
    >
      <Link className={styles['menu-item']} href={`#${props.i}`}>
        <span>
          <span className={styles['menu-item-index']}>0{props.index + 1}</span>.
        </span>{' '}
        {props.i}
      </Link>
    </motion.li>
  );
};
