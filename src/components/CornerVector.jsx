import React from "react";
import styles from './Corners.module.css';
import {motion} from 'framer-motion';
import { cornerLeftVariant, cornerRightVariant } from "../Motion Variants/variant";
import { useState, useEffect } from "react";

export const CornerVector = React.memo(({type, left, right}) => {

    const [windowSize, setWindowSize] = useState(false);
    const [small, setSmall] = useState(false);

    useEffect(() => {
        let size = window.matchMedia("(max-width: 1710px)");
        if(size.matches) setWindowSize(true);
    }, []);

    useEffect(() => {
        let size = window.matchMedia("(max-width: 668px)");
        if(size.matches) setSmall(true);
    }, []);

    if(type === 'left') {
        return (
            <>
                {
                    small
                    ?
                    <motion.img 
                    src="https://i.ibb.co/gyDCRt7/Vector-4.png" 
                    alt="Left Corner Background"
                    className={styles.LeftCornerBackground}
                    variants={cornerLeftVariant}
                    initial={'hidden'}
                    animate={'visible'}
                    />
                    :
                    <motion.img 
                    src={!windowSize ? left : "https://i.ibb.co/RhsJvHK/Vector-2.png"} 
                    alt="Left Corner Background"
                    className={styles.LeftCornerBackground}
                    variants={cornerLeftVariant}
                    initial={'hidden'}
                    animate={'visible'}
            />
                }
            </>
        )
    }
    else {
        return (
            <>
                {
                    small
                    ?
                    <motion.img 
                    src="https://i.ibb.co/ns6zJPG/Frame-2103.png"
                    alt="Right Corner Background"
                    className={styles.RightCornerBackground}
                    variants={cornerRightVariant}
                    initial={'hidden'}
                    animate={'visible'}
                    />
                    :
                    <motion.img 
                    src={!windowSize ? right : "https://i.ibb.co/jMrZ07g/Vector-3.png"}
                    alt="Right Corner Background"
                    className={styles.RightCornerBackground}
                    variants={cornerRightVariant}
                    initial={'hidden'}
                    animate={'visible'}
            />
                }
            </>
        )
    }
})