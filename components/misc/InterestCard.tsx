import { motion } from "framer-motion";
import styles from "./InterestCard.module.css";

const InterestCard = (props: any) => {
	return <>
        <motion.li
            initial={{ boxShadow: '0rem 0rem 0rem var(--secondary)' }}
            whileInView={{
                boxShadow: '0.1rem 0rem 2rem var(--secondary)',
                transition: { duration: 0.4 },
            }}
        >
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.4 },
                }}
            >
                <props.icon className={styles['icon-interest']} />
            </motion.div>
            <div className={styles['text-interest-container']}>
                <p className={styles['text-interest']}>{props.text}</p>
            </div>
        </motion.li>

	</>
}

export default InterestCard;