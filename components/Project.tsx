import styles from './Project.module.css';
import utils from '../styles/utils.module.css';
import Image from 'next/image';

export default function Project(props: any) {
  return (
    <div className={[utils.container, styles.project].join(' ')}>
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
        <p className={styles.text}>{props.text}</p>
        <a className={styles.link} href={props.link}>
          Live Demo
        </a>
      </div>
      <div className={styles.divider}></div>
    </div>
  );
}
