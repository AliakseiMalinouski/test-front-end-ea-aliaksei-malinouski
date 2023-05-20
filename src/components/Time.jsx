import React, { useEffect, useMemo } from "react";
import { mathTime } from "../helpers/mathTime";
import { useState } from "react";
import styles from './Time.module.css';
import { Unit } from "./Unit";
import { transformToArray } from "../helpers/transformToArray";
import { motion } from "framer-motion";
import { timeVariant } from "../Motion Variants/variant";

export const Time = React.memo(() => {


    const [currentTime, setCurrentTime] = useState([]);

   
    useEffect(() => {
        setTimeout(() => {
            let updatedTime = mathTime();
            let transformedObjectWithTime = transformToArray(updatedTime);
            setCurrentTime(transformedObjectWithTime);
        }, 1000);
    }, [currentTime]);
   
    let timeMemoizeed = useMemo(() => currentTime && currentTime?.map((elem, index) => <Unit key={elem.id} title={elem.title} rest={elem.rest} image={elem.image}/>), [currentTime])

    return (
        <motion.div className={styles.Time} variants={timeVariant} initial={'hidden'} animate={'visible'}>
            {timeMemoizeed}
        </motion.div>
    )
})