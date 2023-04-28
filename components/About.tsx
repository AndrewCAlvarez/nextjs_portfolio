import Image from "next/image";
import utils from "../styles/utils.module.css";
import styles from "./About.module.css";

export default function About() {
  function handleDisplayPic() {
    console.log("enter");
    let pics = document.querySelectorAll(`.${styles.profilePic}`);
    let index = 0;
    pics.forEach((pic) => {
      pic.className = [
        styles.profilePic,
        styles[`profilePic${index}Display`],
      ].join(" ");
      index++;
    });
    console.log(pics);
  }

  function handleHidePics() {
    console.log("Left");
    let pics = document.querySelectorAll(`.${styles.profilePic}`);
    let index = 0;
    pics.forEach((pic) => {
      pic.className = [styles.profilePic, styles[`profilePic${index}`]].join(
        " "
      );
      index++;
    });
  }

  return (
    <section className={`${styles.about} ${utils.container}`}>
      <h2 className={styles.heading}>About Me</h2>
      <div
        className={styles.picContainer}
        onMouseOver={handleDisplayPic}
        onMouseLeave={handleHidePics}
      >
        {/* This is a test for the glitch effect */}
        <Image
          className={[styles.glitch, styles.glitch1].join(" ")}
          src="/../public/cowboy_profile_pic.jpg"
          alt="Picture of Andrew."
          width={200}
          height={200}
        />
        <Image
          className={[styles.glitch, styles.glitch2].join(" ")}
          src="/../public/cowboy_profile_pic.jpg"
          alt="Picture of Andrew."
          width={200}
          height={200}
        />
        <Image
          className={[styles.glitch, styles.glitch3].join(" ")}
          src="/../public/cowboy_profile_pic.jpg"
          alt="Picture of Andrew."
          width={200}
          height={200}
        />
        {/* Image gallery */}
        <Image
          className={[styles.profilePic, styles.profilePic0].join(" ")}
          src="/../public/cowboy_profile_pic.jpg"
          alt="Picture of Andrew."
          width={200}
          height={200}
        />
        <Image
          className={[styles.profilePic, styles.profilePic1].join(" ")}
          src="/../public/cowboy_profile_pic.jpg"
          alt="Picture of Andrew."
          width={200}
          height={200}
        />
        <Image
          className={[styles.profilePic, styles.profilePic2].join(" ")}
          src="/../public/cowboy_profile_pic.jpg"
          alt="Picture of Andrew."
          width={200}
          height={200}
        />
        <Image
          className={[styles.profilePic, styles.profilePic3].join(" ")}
          src="/../public/cowboy_profile_pic.jpg"
          alt="Picture of Andrew."
          width={200}
          height={200}
        />
      </div>
      <p className={styles.text}>
        I'm Andrew Alvarez, a web developer with a passion for creating
        beautiful and functional websites. I have honed my skills in web
        development and design to deliver exceptional results. My expertise lies
        in frontend development using frameworks like React, and I am always up
        for a new challenge. Whether you need a simple website or a complex web
        application, I have the knowledge and skills to bring your vision to
        life.
      </p>

      <p className={styles.text}>
        Take a look at my portfolio to see some of my recent projects, and feel
        free to get in touch with me to discuss how I can help you create a
        stunning website that represents your brand and engages your audience.
      </p>
    </section>
  );
}
