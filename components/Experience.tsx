import utils from '../styles/utils.module.css';
import styles from './Experience.module.css';
import Image from 'next/image';
import UrbanUndergroundHero from '../public/websites/UrbanUnderGroundHero.png';
import KonreadsHero from '../public/websites/KonreadsHero.jpg';
import Heading from './utilities/Heading';
import Project from './Project';
import { motion } from 'framer-motion';

const urbanUndergroundText =
  'Urban Underground - HTML, CSS, Javascript - Urban Underground is a personal project where I took the lessons learned about web design to create a beautiful page for a fictitious fashion magazine.';

const konreadsText =
  'Konreads - HTML, CSS, Javascript - Dark and elegant, Konreads is a book blog where the owner requested a design that was less standard than your typical blog.';

export default function Experience() {
  return (
    <section id='projects' className={styles['section-projects']}>
      <Heading title='Projects' />
      <motion.div className={styles['projects-card-container']}>
        <Project
          image={UrbanUndergroundHero}
          title={'Portfolio'}
          tag={'Software'}
          skills={[
            'Next.js',
            'React',
            'TypeScript',
            'Framer Motion',
            'HTML',
            'CSS',
            'JavaScript',
          ]}
          text={urbanUndergroundText}
          link={'#'}
          github={'https://github.com/AndrewCAlvarez/nextjs_portfolio'}
        />
        <Project
          image={UrbanUndergroundHero}
          title={'Urban Underground'}
          tag={'Fashion'}
          skills={['HTML', 'CSS', 'JavaScript']}
          text={urbanUndergroundText}
          link={'https://andrewcalvarez.github.io/rap-friends/'}
          github={'https://github.com/AndrewCAlvarez/rap-friends'}
        />
        <Project
          image={KonreadsHero}
          title={'Konreads'}
          tag={'Literature'}
          skills={['HTML', 'CSS', 'JavaScript']}
          text={konreadsText}
          link={'https://andrewcalvarez.github.io/konreads/'}
          github={'https://github.com/AndrewCAlvarez/konreads'}
        />
      </motion.div>
    </section>
  );
}
