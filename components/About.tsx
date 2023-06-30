import Image from 'next/image';
import utils from '../styles/utils.module.css';
import styles from './About.module.css';
import headshot from '../public/profile_beanie.png';
import RoseProfilePic from '../public/Roseportfolio.png';
import { useEffect } from 'react';
import Heading from './utilities/Heading';
import Head from 'next/head';
import { FaPaintBrush, FaMusic, FaBone, FaBook } from 'react-icons/fa';
import { LuDog, LuBrush, LuMusic, LuBookMarked } from 'react-icons/lu';
import { TbMessageCircle2Filled } from 'react-icons/tb';
import ChatBubble from './misc/ChatBubble';
import { motion } from 'framer-motion';
import InterestCard from './misc/InterestCard';

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
				<ChatBubble />
				<Image
					className={[styles.profilePic].join(' ')}
					src={RoseProfilePic}
					alt="Picture of Andrew's dog, Rose."
				/>
			</div>
			<p className={styles.text1}>
				{`I'm Andrew Alvarez, a web developer with a passion for creating
        fun and functional websites and applications. My expertise lies
        in frontend development, and I am always
        up for a new challenge.`}
			</p>

			<h3 className={styles['heading-interests']}>After work I'm...</h3>

			<ul className={[styles['ul-interests']].join(' ')}>
				<InterestCard icon={LuMusic} text="Creating music" />
				<InterestCard icon={LuBrush} text="Painting minis" />
				<InterestCard icon={LuDog} text="With my dog" />
				<InterestCard icon={LuBookMarked} text="Stuck in a book" />
			</ul>

			<p className={styles.text2}>
				{` Check out my recent projects, and feel
        free to open a live demo or view the Github repos.`}
			</p>
		</section>
	);
}
