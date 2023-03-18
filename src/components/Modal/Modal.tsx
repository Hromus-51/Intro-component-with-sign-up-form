import { motion, AnimatePresence } from "framer-motion"
//============================================
import styles from './modal.module.scss';
import { props } from './types';

const Modal: React.FC<props> = ({ submitted, closePopup }) => {
    return (
        <AnimatePresence>
            {submitted &&
                <motion.div
                    onClick={() => { closePopup() }}
                    className={styles.popupBackground}
                    key='popupBackground'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        duration: 0.3
                    }}
                >
                    <motion.div
                        onClick={(e) => e.stopPropagation()}
                        className={styles.popup}
                        key='popup'
                        initial={{ y: 70, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{
                            y: {
                                duration: 0.3,
                                ease: 'easeOut',
                            },
                            opacity: {
                                delay: 0.1,
                                duration: 0.2,
                                ease: 'easeOut',
                            }
                        }}
                    >
                        <p className={styles.popupParagraph}>The application has been sent!</p>
                        <button onClick={() => { closePopup() }} className={styles.popupButton}>OK</button>
                    </motion.div>
                </motion.div>
            }
        </AnimatePresence>
    );
}

export default Modal;