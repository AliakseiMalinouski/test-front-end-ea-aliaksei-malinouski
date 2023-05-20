import React from "react";
import styles  from './Logo.module.css';
import {motion} from 'framer-motion';
import { logoVariant } from "../Motion Variants/variant";
import { useNavigate } from "react-router-dom";

export const Logo = React.memo(({mainText, underText, srcLogo}) => {

    let navigate = useNavigate();

    return (
        <motion.h3 className={styles.Logo} variants={logoVariant} initial={'hidden'} animate={'visible'}
        onClick={() => navigate('/')}
        >
            <img src={srcLogo} alt="Logo"/>
            <p>
                <span>{mainText}</span>
                <span>{underText}</span>
            </p>
        </motion.h3>
    )
})