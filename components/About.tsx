import Image from "next/image";

export default function About() {
  return (
    <section>
      <h2>About Me</h2>
      <p>
        - I'm Andrew Alvarez, a web developer with a passion for creating
        beautiful and functional websites. With over [insert number] years of
        experience in the industry, I have honed my skills in web development
        and design to deliver exceptional results to my clients. - My expertise
        lies in [insert areas of specialization], and I am always up for a new
        challenge. Whether you need a simple website or a complex web
        application, I have the knowledge and skills to bring your vision to
        life. - Take a look at my portfolio to see some of my recent projects,
        and feel free to get in touch with me to discuss how I can help you
        create a stunning website that represents your brand and engages your
        audience.
      </p>
      <Image
        src="/../public/cowboy_profile_pic.jpg"
        alt="Picture of Andrew."
        width={100}
        height={100}
      />
    </section>
  );
}
