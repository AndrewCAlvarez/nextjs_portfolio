import Image from "next/image";
import utils from "../styles/utils.module.css";
import styles from "./About.module.css";
import headshot from "../public/headshot.jpg";
import { useEffect } from "react";
import Heading from "./Heading";
import Head from "next/head";

export default function About() {
  function handleDisplayPic() {
    console.log("enter");
    let pics = document.querySelectorAll(`.${styles.profilePic}`);
    let index = 0;
    pics.forEach((pic) => {
      pic.className = [styles.profilePic, styles[`profilePic${index}`]].join(
        " "
      );
      index++;
    });
    console.log(pics);
  }

  function handleHidePics() {
    console.log("Left");
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
    console.log("Use Effect");
  }, []);

  return (
    <section className={styles.about}>
      {/* <h2 className={[styles.heading, styles["slide-top"]].join(" ")}>
        About Me
      </h2> */}
      <Heading title="About Me" />
      <div className={styles.picContainer}>
        {/* This is for the glitch effect */}
        {/* <Image
        className={[styles.glitch, styles.glitch1].join(" ")}
        src={headshot}
        alt="Picture of Andrew."
        // width={250}
        // height={250}
      />
      <Image
        className={[styles.glitch, styles.glitch2].join(" ")}
        src={headshot}
        alt="Picture of Andrew."
        // width={250}
        // height={250}
      />
      <Image
        className={[styles.glitch, styles.glitch3].join(" ")}
        src={headshot}
        alt="Picture of Andrew."
        // width={250}
        // height={250}
      /> */}

        {/* Image gallery */}
        <Image
          className={[styles.profilePic, styles.profilePic0].join(" ")}
          src={headshot}
          alt="Picture of Andrew."
          // width={250}
          // height={250}
        />
        {/* <Image
          className={[styles.profilePic, styles.profilePic1].join(" ")}
          src={headshot}
          alt="Picture of Andrew."
          // width={200}
          // height={200}
          fill
        />
        <Image
          className={[styles.profilePic, styles.profilePic2].join(" ")}
          src={headshot}
          alt="Picture of Andrew."
          // width={200}
          // height={200}
          fill
        />
        <Image
          className={[styles.profilePic, styles.profilePic3].join(" ")}
          src={headshot}
          alt="Picture of Andrew."
          width={200}
          height={200}
        /> */}
      </div>
      <p className={styles.text1}>
        I'm Andrew Alvarez, a web developer with a passion for creating
        beautiful and functional websites. I have honed my skills in web
        development and design to deliver exceptional results. My expertise lies
        in frontend development using frameworks like Next.js, and I am always
        up for a new challenge. Whether you need a simple website or a complex
        web application, I have the knowledge and skills to bring your vision to
        life.
      </p>

      <p className={styles.text2}>
        Take a look at my portfolio to see some of my recent projects, and feel
        free to get in touch with me to discuss how I can help you create a
        website that represents your brand and engages your audience.
      </p>
    </section>
  );
}
