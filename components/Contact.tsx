import utils from '../styles/utils.module.css';
import styles from './Contact.module.css';
import Heading from './Heading';

export default function Contact() {
  return (
    <section id='contact' className={` ${styles['section-contact']}`}>
      <Heading title='Contact Me' />
      <div className={utils.container}>
        <p>
          Thank you for visiting. If you have any questions, comments, or would
          like to discuss potential collaboration, I would love to hear from
          you.
        </p>
        <p>
          “Great things are done by a series of small things brought together.”
          - Vincent Van Gogh
        </p>
        <a className={styles.link} href='mailto:andrewcalvarez01@gmail.com'>
          andrewcalvarez01@gmail.com
        </a>
      </div>
    </section>
  );
}
