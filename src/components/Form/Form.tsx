import { useForm, SubmitHandler } from 'react-hook-form';
import { motion, AnimatePresence } from "framer-motion";
import clsx from 'clsx';
//============================================
import { FormValues, Input, Props } from './types';
import styles from './form.module.scss';
import iconError from '../../assets/image/icon-error.svg';

const inputs: Input[] = [
    {
        name: 'firstName',
        type: 'text',
        placeholder: 'First Name',
        requiredMessage: 'First Name cannot be empty',

        pattern: 'pattern',
        patternParams: {
            value: /^[a-zA-Z]{2,12}$/,
            message: 'Requires from 2 to 12 characters of the Latin alphabet',
        }
    },
    {
        name: 'lastName',
        type: 'text',
        placeholder: 'Last Name',
        requiredMessage: 'Last Name cannot be empty',

        pattern: 'pattern',
        patternParams: {
            value: /^[a-zA-Z]{2,12}$/,
            message: 'Requires from 2 to 12 characters of the Latin alphabet',
        }
    },
    {
        name: 'email',
        type: 'text',
        placeholder: 'Email Address',
        requiredMessage: 'Email Address cannot be empty',

        pattern: 'pattern',
        patternParams: {
            value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
            message: 'Looks like this is not an email',
        }
    },
    {
        name: 'password',
        type: 'password',
        placeholder: 'Password',
        requiredMessage: 'Password cannot be empty',

        pattern: 'pattern',
        patternParams: {
            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
            message: 'Requires at least 8 characters, including numbers and uppercase characters',
        }
    },
]

const Form: React.FC<Props> = ({ showPopup }) => {
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset
    } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data);
        if (isValid) {
            showPopup();
        }
        reset();
    }

    return (
        <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>

                {
                    inputs.map((item) => (
                        <div className={styles.inputContainer} key={item.name}>
                            <div className={styles.inputWrapper}>
                                <input
                                    className={clsx(styles.input, errors?.[item.name] && styles.input_error)}
                                    placeholder={item.placeholder}
                                    key={item.name}
                                    type={item.type}
                                    {...register(item.name, {
                                        required: item.requiredMessage,
                                        [item.pattern]: item.patternParams,
                                    })}
                                />
                                <AnimatePresence>
                                    {errors?.[item.name]?.message &&
                                        <motion.img
                                            key='iconError'
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{
                                                duration: 0.15,
                                            }}
                                            className={styles.iconError}
                                            src={iconError}
                                            alt="error" />
                                    }
                                </AnimatePresence>
                            </div>
                            <AnimatePresence>
                                {errors?.[item.name]?.message &&
                                    <motion.div
                                        key='errorParagraph'
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{
                                            height: {
                                                duration: 0.2,
                                            },
                                            opacity: {
                                                delay: 0.2,
                                                duration: 0.2,
                                            }
                                        }}
                                        className={clsx(styles.errorContainer)}>
                                        <p className={clsx(styles.errorParagraph)}>
                                            {errors?.[item.name]?.message}
                                        </p>
                                    </motion.div>
                                }
                            </AnimatePresence>
                        </div>
                    ))
                }

                <button
                    className={styles.buttonSubmit}
                    type='submit'>
                    CLAIM YOUR FREE TRIAL
                </button>

            </form>
            <p className={styles.assent}>
                By clicking the button, you are agreeing to our <span className={styles.assentSpan}>Terms and Services</span>
            </p>
        </div>
    );
}

export default Form;       