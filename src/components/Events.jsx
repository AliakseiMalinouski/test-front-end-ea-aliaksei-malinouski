import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from './Events.module.css';
import { useSelector, useDispatch } from "react-redux";
import { scrollToNode } from "../helpers/scrollToNode";
import { motion } from "framer-motion";
import { allEventsTitleVariant } from "../Motion Variants/variant";
import { allEventsThunk } from "../Redux/allEventsThunk";
import {Event} from './Event';
import {customEventLoop} from '../event';

function Events () {

    let anchorNode = useRef();

    let dispatch = useDispatch();

    const anchorState = useSelector(state => state.anchor.anchorState);
    const allEvents = useSelector(state => state.allEvents.allEvents);

    const [activeEvent, setActiveEvent] = useState(1);
    const [windowSize, setWindowSize] = useState(false);

    useEffect(() => {
        if(anchorState !== 0) scrollToNode(anchorNode.current);
    }, [anchorState]);

    useEffect(() => {
        if(!allEvents.length) dispatch(allEventsThunk);
    }, [dispatch, allEvents]);

    useEffect(() => {
        customEventLoop.addListener('openEvent', openEventParent);
        return () => {
            customEventLoop.addListener('openEvent', openEventParent);
        }
    }, []);

    useEffect(() => {
        let windowSize = window.matchMedia('(max-width: 1710px)');
        if(windowSize.matches) setWindowSize(true);
    }, []);

    const openEventParent = (id) => setActiveEvent(id);

    let allEventsMemoizeed = useMemo(() => allEvents && allEvents?.map(({id, title, image, blur, button, date, number, back, lblur, bline, uline, mimage, mlblur, mback, mblue, mdark, mblur}) => <Event
    key={id}
    id={id}
    title={title}
    image={image}
    blur={blur}
    button={button}
    date={date}
    number={number}
    back={back}
    lblur={lblur}
    bline={bline}
    uline={uline}
    activeEvent={activeEvent}
    windowSize={windowSize}
    mimage={mimage}
    mlblur={mlblur}
    mback={mback}
    mblue={mblue}
    mdark={mdark}
    mblur={mblur}
    />), [allEvents, activeEvent, windowSize]);

    return (
        <div className={styles.Events} style={{justifyContent: activeEvent ? "normal" : 'space-between'}}>
            <motion.h2 className={styles.EventsTitle} variants={allEventsTitleVariant} initial={'hidden'} whileInView={'visible'} viewport={{once: true, amount: 0.3}}>All events</motion.h2>
            <div className={styles.EventsContent}>
                {allEventsMemoizeed}
            </div>
            <div ref={anchorNode}></div>
        </div>
    )
}

export default Events;