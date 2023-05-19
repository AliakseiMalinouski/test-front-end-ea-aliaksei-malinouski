import React, { useEffect, useMemo } from "react";
import { mathTime } from "../helpers/mathTime";
import { useState } from "react";
import styles from './Time.module.css';
import { Unit } from "./Unit";
import { transformToObject } from "../helpers/transformToObject";

export const Time = React.memo(() => {


    const [currentTime, setCurrentTime] = useState([]);

   
    useEffect(() => {
        setTimeout(() => {
            let updatedTime = mathTime();
            let transformedObjectWithTime = transformToObject(updatedTime);
            setCurrentTime(transformedObjectWithTime);
        }, 1000);
    }, [currentTime]);
   
    let timeMemoizeed = useMemo(() => currentTime && currentTime?.map((elem, index) => <Unit key={elem.id} title={elem.title} rest={elem.rest}/>), [currentTime])

    return (
        <div className={styles.Time}>
            {
                timeMemoizeed
            }
        </div>
    )
})