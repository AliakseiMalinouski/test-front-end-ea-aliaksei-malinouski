import React from "react";
import styles  from './Logo.module.css';
import {motion} from 'framer-motion';
import { logoVariant } from "../Motion Variants/variant";

export const Logo = React.memo(({mainText, underText, srcLogo}) => {
    return (
        <motion.h3 className={styles.Logo} variants={logoVariant} initial={'hidden'} animate={'visible'}>
            <img src={srcLogo} alt="Logo"/>
            <p>
                <span>{mainText}</span>
                <span>{underText}</span>
            </p>
        </motion.h3>
    )
})