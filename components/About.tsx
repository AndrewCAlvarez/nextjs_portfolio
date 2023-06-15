import Image from 'next/image';
import utils from '../styles/utils.module.css';
import styles from './About.module.css';
import headshot from '../public/profile_beanie.png';
import { useEffect } from 'react';
import Heading from './utilities/Heading';
import Head from 'next/head';
import { FaPaintBrush, FaMusic, FaBone, FaBook } from 'react-icons/fa';
import { LuDog, LuBrush, LuMusic, LuBookMarked } from 'react-icons/lu';
import { TbMessageCircle2Filled } from 'react-icons/tb';
import { motion } from 'framer-motion';

export default function About() {
  function handleDisplayPic() {
    console.log('enter');
    let pics = document.querySelectorAll(`.${styles.profilePic}`);
    let index = 0;
    pics.forEach((pic) => {
      pic.className = [styles.profilePic, styles[`profilePic${index}`]].join(
        ' '
      );
      index++;
    });
    console.log(pics);
  }

  function handleHidePics() {
    console.log('Left');
    let pics: NodeListOf<Element> = document.querySelectorAll(
      `.${styles.profilePic}`
    );
    let index = 0;
    pics.forEach((pic) => {
      // pic.className = [styles.profilePic, styles[`profilePic${index}`]].join(
      //   " "
      // );
      // pic.classList.toggle(styles[`profilePic${index}`]);
      index++;
    });
  }

  useEffect(() => {
    console.log('Use Effect');
  }, []);

  return (
    <section id='about' className={styles.about}>
      {/* <h2 className={[styles.heading, styles["slide-top"]].join(" ")}>
        About Me
      </h2> */}
      <Heading title='About Me' />
      <div className={styles.picContainer}>
        <Image
          className={[styles.profilePic].join(' ')}
          src={headshot}
          alt='Picture of Andrew.'
        />
        <TbMessageCircle2Filled className={styles['icon-profile']} />
      </div>
      <p className={styles.text1}>
        {`I'm Andrew Alvarez, a web developer with a passion for creating
        beautiful and functional websites. My expertise lies
        in frontend development using frontend frameworks such as React, and I am always
        up for a new challenge.`}
      </p>

      <h3 className={styles['heading-interests']}>After work I'm...</h3>

      <ul className={[styles['ul-interests']].join(' ')}>
        <motion.li
          initial={{ boxShadow: '0rem 0rem 0rem var(--secondary)' }}
          whileInView={{
            boxShadow: '0.1rem 0rem 2rem var(--secondary)',
            transition: { duration: 0.4 },
          }}
        >
          {' '}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.4 },
            }}
          >
            <LuMusic className={styles['icon-interest']} />{' '}
          </motion.div>
          <div className={styles['text-interest-container']}>
            <p className={styles['text-interest']}>{`Creating music`}</p>
          </div>
        </motion.li>
        <motion.li
          initial={{ boxShadow: '0rem 0rem 0rem var(--secondary)' }}
          whileInView={{
            boxShadow: '0.1rem 0rem 2rem var(--secondary)',
            transition: { duration: 0.4 },
          }}
        >
          {' '}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.4 },
            }}
          >
            <LuBrush className={styles['icon-interest']} />{' '}
          </motion.div>
          <div className={styles['text-interest-container']}>
            <p className={styles['text-interest']}>{`Painting miniatures`}</p>
          </div>
        </motion.li>
        <motion.li
          initial={{ boxShadow: '0rem 0rem 0rem var(--secondary)' }}
          whileInView={{
            boxShadow: '0.1rem 0rem 2rem var(--secondary)',
            transition: { duration: 0.4 },
          }}
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.4 },
            }}
          >
            <LuDog className={styles['icon-interest']} />
          </motion.div>
          <div className={styles['text-interest-container']}>
            <p className={styles['text-interest']}>{`Hiking with my dog`}</p>
          </div>
        </motion.li>
        <motion.li
          initial={{ boxShadow: '0rem 0rem 0rem var(--secondary)' }}
          whileInView={{
            boxShadow: '0.1rem 0rem 2rem var(--secondary)',
            transition: { duration: 0.4 },
          }}
        >
          {' '}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.4 },
            }}
          >
            <LuBookMarked className={styles['icon-interest']} />{' '}
          </motion.div>
          <div className={styles['text-interest-container']}>
            <p className={styles['text-interest']}>{`Stuck in a book`}</p>
          </div>
        </motion.li>
      </ul>

      <p className={styles.text2}>
        {` Check out my recent projects, and feel
        free open the live demo or view the Github repos.`}
      </p>
    </section>
  );
}
