import React from "react";
import styles  from './Logo.module.css';

export const Logo = React.memo(({mainText, underText, srcLogo}) => {
    return (
        <h3 className={styles.Logo}>
            <img src={srcLogo} alt="Logo"/>
            <p>
                <span>{mainText}</span>
                <span>{underText}</span>
            </p>
        </h3>
    )
})