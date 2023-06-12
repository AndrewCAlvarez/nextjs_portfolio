import styles from './Tag.module.css';

interface Props {
  title: string;
}

const Tag = (props: Props) => {
  return (
    <>
      <span className={styles.tag}>{props.title}</span>
    </>
  );
};

export default Tag;
