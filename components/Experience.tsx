import utils from "../styles/utils.module.css";
import styles from "./Experience.module.css";
import Image from "next/image";
import UrbanUndergroundHero from "../public/websites/UrbanUnderGroundHero.png";
import KonreadsHero from "../public/websites/KonreadsHero.jpg";

export default function Experience() {
  return (
    <section className={[styles.container, styles.wrapper].join(" ")}>
      <h2>Experience</h2>
      <ul>
        <header className={styles.sectionHeader}>
          <Image
            className={styles.backgroundImage}
            src={UrbanUndergroundHero}
            alt="Hero section of portfolio project Urban Underground."
          />
          <h3>Urban Underground</h3>
        </header>
        <p>
          Urban Underground - HTML, CSS, Javascript - Urban Underground is
          personal project where I took the lessons learned about web design to
          create a beautiful page for a fictitious fashion magazine.{" "}
        </p>
        <a href="https://andrewcalvarez.github.io/rap-friends/">Link</a>

        <div>
          <Image
            src={KonreadsHero}
            alt="Hero section of portfolio project Konreads"
            width={400}
          />
          <h3>Konreads</h3>
          <p>
            Konreads - HTML, CSS, Javascript - Dark and elegant, Konreads is a
            book blog where the owner requested a design that was less standard
            than your typical blog.
          </p>
          <a href="https://andrewcalvarez.github.io/konreads/">Link</a>
        </div>
      </ul>
    </section>
  );
}
