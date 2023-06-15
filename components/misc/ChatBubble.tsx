import { TbMessageCircle2Filled } from 'react-icons/tb';
import styles from './ChatBubble.module.css';
import { motion } from 'framer-motion';

const ChatBubble = () => {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: { duration: 0.4 },
      }}
    >
      <TbMessageCircle2Filled className={styles['icon-profile']} />
    </motion.div>
  );
};

export default ChatBubble;
