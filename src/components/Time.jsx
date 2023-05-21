import React, { useEffect, useMemo } from "react";
import { mathTime } from "../helpers/mathTime";
import { useState } from "react";
import styles from './Time.module.css';
import { Unit } from "./Unit";
import { motion } from "framer-motion";
import { timeVariant } from "../Motion Variants/variant";

export const Time = React.memo(() => {


    const [currentTime, setCurrentTime] = useState([]);
    const [size, setSize] = useState(false);

   
    useEffect(() => {
        setTimeout(() => {
            let updatedTime = mathTime();
            setCurrentTime(updatedTime);
        }, 1000);
    }, [currentTime]);

    useEffect(() => {
        let s = window.matchMedia("(max-width: 838px)");
        if(s.matches) setSize(true);
    }, []);
   
    let timeMemoizeed = useMemo(() => currentTime && currentTime?.map((elem, index) => <Unit key={elem.id} title={elem.title} rest={elem.rest} image={elem.image} icon={elem.icon} size={size}/>), [currentTime, size])

    return (
        <motion.div className={styles.Time} variants={timeVariant} initial={'hidden'} animate={'visible'}>
            {timeMemoizeed}
        </motion.div>
    )
})