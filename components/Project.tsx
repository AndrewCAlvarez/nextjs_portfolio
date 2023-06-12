import styles from './Project.module.css';
import utils from '../styles/utils.module.css';
import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';
import Tag from './tags/Tag';

interface Props {
  tag: string;
  title: string;
  skills: [];
  text: string;
  link: string;
}

export default function Project(props: Props) {
  return (
    <>
      <motion.div
        initial={{ x: -100 }}
        whileInView={{
          x: 0,
          transition: { duration: 0.4 },
        }}
        className={[utils.container, styles.project].join(' ')}
      >
        <div className={styles['text-content']}>
          <p className={styles.tag}>{props.tag}</p>
          <h5 className={styles.title}>{props.title}</h5>
          <a href={props.link}>
            <Image
              src={props.image}
              alt={`Hero section of portfolio project ${props.title}.`}
              className={styles.image}
            />
          </a>
          <div className={styles['skill-tag-container']}>
            {props.skills?.map((skill) => (
              <Tag key={skill + Math.random()} title={skill} />
            ))}
          </div>
          <p className={styles.text}>{props.text}</p>

          <a className={styles.link} href={props.link}>
            Live Demo &rarr;
          </a>
        </div>
      </motion.div>
    </>
  );
}
