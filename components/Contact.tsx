import { motion } from 'framer-motion';
import utils from '../styles/utils.module.css';
import styles from './Contact.module.css';
import Heading from './utilities/Heading';


export default function Contact() {
	return (
		<section id='contact' className={` ${styles['section-contact']}`}>
			<Heading title='Contact Me' />
			<p className={styles.text} >
					Thank you for visiting. If you have any questions, comments, or would
					like to discuss working together, then I would love to hear from
					you.
				</p>

			<motion.a
				whileHover={{backgroundColor: "var(--primary)", color: "var(--blue)"}}
				className={styles.link} href='mailto:andrewcalvarez01@gmail.com'>
					andrewcalvarez01@gmail.com
				</motion.a>
		</section>
	);
}
