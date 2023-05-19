import React from "react";
import styles from './Corners.module.css';
import {motion} from 'framer-motion';
import { cornerLeftVariant, cornerRightVariant } from "../Motion Variants/variant";

export const CornerVector = React.memo(({type, left, right}) => {
    if(type === 'left') {
        return (
            <motion.img 
            src={left} 
            alt="Left Corner Background"
            className={styles.LeftCornerBackground}
            variants={cornerLeftVariant}
            initial={'hidden'}
            animate={'visible'}
            />
        )
    }
    else {
        return (
            <motion.img 
            src={right}
            alt="Right Corner Background"
            className={styles.RightCornerBackground}
            variants={cornerRightVariant}
            initial={'hidden'}
            animate={'visible'}
            />
        )
    }
})