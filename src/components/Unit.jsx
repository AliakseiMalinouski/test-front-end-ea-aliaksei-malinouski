import React from "react";
import styles from './Unit.module.css';

export const Unit = React.memo(({rest, image}) => {
    return (
        <div className={styles.Unit}>
            {rest}
            <img src={image} alt="Unit"/>
        </div>
    )
})