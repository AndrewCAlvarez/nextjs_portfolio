import styles from "./Hero.module.css";
import ParticlesDemo from "./ParticlesDemo";

export default function Hero() {
  return (
    <section className="hero">
      <ParticlesDemo />

      <p className={styles.tag}>Hi, my name is</p>
      <h1>Andrew Alvarez</h1>
      <h1 className={styles.subHeading}>Let's build the web.</h1>
      <p className={styles.text}>
        My approach to web development is to combine creativity with
        functionality. I believe that a website should not only look great but
        also be easy to use and navigate.{" "}
      </p>
      <button>Let's build something!</button>
    </section>
  );
}
