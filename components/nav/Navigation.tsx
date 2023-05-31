import * as React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from './MenuItem';
import styles from './Navigation.module.css';
import { link } from 'fs';

// I dont know how to animate and show this component once the toggle button is pressed. Where is the state for this?
const variants = {
  open: {
    x: 0,
    transition: {
      // when: 'beforeChildren',
      staggerChildren: 0.1,
      ease: 'easeOut',
      duration: 0.3,
    },
  },
  closed: {
    x: 100,
    transition: {
      when: 'afterChildren',
    },
  },
};

export const Navigation = (props) => {
  // console.log(props.isOpen);
  if (!props.isOpen) {
    return <></>;
  }
  return (
    <motion.ul
      initial='closed'
      animate='open'
      variants={variants}
      className={styles['nav-list']}
    >
      {menuLinks.map((i) => (
        <MenuItem i={i} index={menuLinks.indexOf(i)} key={i} />
      ))}
    </motion.ul>
  );
};
const menuLinks = ['about', 'projects', 'contact', 'resume'];
