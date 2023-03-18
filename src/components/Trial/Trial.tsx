import { motion } from "framer-motion"
import { useState } from "react";
//============================================
import Form from '../Form/Form';
import Modal from "../Modal/Modal";
//============================================
import styles from './trial.module.scss';

const Trial = () => {
    const [submitted, setSubmitted] = useState(false);

    return (
        <div className={styles.trial}>

            <div className={styles.container}>
                <div className={styles.content}>

                    <motion.div
                        className={styles.titleText}
                    >
                        <motion.h1
                            className={styles.title}
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                y: {
                                    delay: 0.2,
                                    duration: 0.4,
                                    ease: 'easeOut',
                                },
                                opacity: {
                                    delay: 0.3,
                                    duration: 0.4,
                                    ease: 'easeOut',
                                }
                            }}
                        >
                            Learn to code by watching others
                        </motion.h1>
                        <motion.h5
                            className={styles.subtitle}
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                y: {
                                    delay: 0.3,
                                    duration: 0.4,
                                    ease: 'easeOut',
                                },
                                opacity: {
                                    delay: 0.4,
                                    duration: 0.4,
                                    ease: 'easeOut',
                                }
                            }}
                        >
                            See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. </motion.h5>
                    </motion.div>

                    <motion.div
                        className={styles.trialForm}
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            y: {
                                delay: 0.5,
                                duration: 0.4,
                                ease: 'easeOut',
                            },
                            opacity: {
                                delay: 0.6,
                                duration: 0.4,
                                ease: 'easeOut',
                            }
                        }}
                    >
                        <div className={styles.offerPlate}><span className={styles.offerSpan}>Try it free 7 days</span> then $20/mo. thereafter</div>
                        <Form showPopup={() => { setSubmitted(true) }} />
                    </motion.div>

                </div>
            </div>

            <Modal closePopup={() => { setSubmitted(false) }} submitted={submitted} />
        </div >
    );
}

export default Trial;