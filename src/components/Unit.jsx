import React from "react";
import styles from './Unit.module.css';

export const Unit = React.memo(({rest, image, icon, size}) => {
    if(size) {
        return (
            <div className={styles.Unit}>
                {rest}
                <img src={icon} alt="Unit"/>
            </div>
        )
    }
    else {
        return (
            <div className={styles.Unit}>
                {rest}
                <img src={image} alt="Unit"/>
            </div>
        )
    }
})