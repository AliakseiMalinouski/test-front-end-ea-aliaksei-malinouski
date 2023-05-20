import React, { useEffect, useRef } from "react";
import styles from './Events.module.css';
import { useSelector } from "react-redux";
import { scrollToNode } from "../helpers/scrollToNode";

function Events () {

    let anchorNode = useRef();

    const anchorState = useSelector(state => state.anchor.anchorState);

    useEffect(() => {
        if(anchorState !== 0) scrollToNode(anchorNode.current);
    }, [anchorState]);

    return (
        <div className={styles.Events}>
            <h2 className={styles.EventsTitle}>All events</h2>
            <div className={styles.EventsContent}>

            </div>
            <div ref={anchorNode}></div>
        </div>
    )
}

export default Events;