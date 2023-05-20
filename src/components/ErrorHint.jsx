import React from "react";
import { motion } from "framer-motion";
import { errorHintVariant } from "../Motion Variants/variant";
import styles from './ErrorHint.module.css';

export const ErrorHint = React.memo(({text, example, status, invalid}) => {

    return (
        <motion.p variants={errorHintVariant} initial={'hidden'} animate={'visible'} className={styles.ErrorHint}>
            {text}
            {
                status === 'error'
                ?
                <span className={styles.Example}>
                    example: {example}
                </span>
                :
                null
            }
            {
                status === 'invalid'
                ?
                <span className={styles.Invalid}>
                    <q>
                        {invalid}
                    </q>
                </span>
                :
                null
            }
        </motion.p>
    )
})