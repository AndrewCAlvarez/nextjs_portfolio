import utils from '../styles/utils.module.css';
import styles from './Contact.module.css';
import Heading from './Heading';

export default function Contact() {
  return (
    <section
      id='contact'
      className={`${utils.container} ${styles['section-contact']}`}
    >
      <Heading title='Contact Me' />
      <p>
        Thank you for visiting. If you have any questions, comments, or would
        like to discuss potential collaboration, I would love to hear from you.
      </p>
      <a className={styles.link} href='mailto:andrewcalvarez01@gmail.com'>
        andrewcalvarez01@gmail.com
      </a>
    </section>
  );
}
