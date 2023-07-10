import styles from './Project.module.css';
import utils from '../styles/utils.module.css';
import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';
import Tag from './tags/Tag';
import { FaGithubAlt } from 'react-icons/fa';

interface Props {
	tag: string;
	title: string;
	image: StaticImageData;
	skills: string[];
	text: string;
	link: string;
	github: string;
}

export default function Project(props: Props) {
	return (
		<>
			<motion.div
				initial={{ x: -100 }}
				whileInView={{
					x: 0,
					transition: { duration: 0.4 },
				}}
				className={[styles.project].join(' ')}
			>
				<div className={styles['text-content']}>
					<p className={styles.tag}>{props.tag}</p>
					<h5 className={styles.title}>{props.title}</h5>
					<motion.a
						className={styles['link-image']}
						whileHover={{ outline: "solid var(--primary)", scale: 1.1 }}
						href={props.link} target="_blank">
						<Image
							src={props.image}
							alt={`Hero section of portfolio project ${props.title}.`}
							className={styles.image}
						/>
					</motion.a>
					<div className={styles['skill-tag-container']}>
						{props.skills?.map((skill) => (
							<Tag key={skill + Math.random()} title={skill} />
						))}
					</div>
					<p className={styles.text}>{props.text}</p>

					<div className={styles['project-links-container']}>
						<motion.a
							whileHover={{ backgroundColor: "var(--primary)", color: "var(--blue)" }}
							className={styles.link} href={props.github} target='_blank'>
							<FaGithubAlt />
						</motion.a>
						<motion.a
							whileHover={{ backgroundColor: "var(--primary)", color: "var(--blue)" }}
							className={styles.link} href={props.link} target='_blank'>
							Live Demo &rarr;
						</motion.a>
					</div>
				</div>
			</motion.div>
		</>
	);
}
