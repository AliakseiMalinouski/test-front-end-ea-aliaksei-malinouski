import React from "react";
import styles from './Time.module.css';

export const Unit = React.memo(({title, rest}) => {
    return (
        <div className={styles.Unit}>
            {rest}
        </div>
    )
})