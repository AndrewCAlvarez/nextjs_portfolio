import styles from './Heading.module.css';
import { motion } from 'framer-motion';

export default function Heading(props: any) {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        className={styles.heading}
      >
        {props.title}
      </motion.h2>
    </>
  );
}
