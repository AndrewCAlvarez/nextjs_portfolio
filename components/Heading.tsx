import styles from "./Heading.module.css";

export default function Heading(props: any) {
  return <h2 className={styles.heading}>{props.title}</h2>;
}
