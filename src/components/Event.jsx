import React from "react";
import styles from './Events.module.css';
import {customEventLoop} from '../event';
import { motion } from "framer-motion";
import { openEventVariant, openEventMediumVariant, openEventMiniVariant } from "../Motion Variants/variant";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Event = React.memo(({id, title, image, blur, button, date, number, back, lblur, bline, uline, activeEvent, windowSize, mimage, mlblur, mback, mblue, mdark, mblur,  slblur, sback, sblue, sdark, sblur, small, simage}) => {

    const openEvent = () => {
        customEventLoop.emit('openEvent', id);
    }

    let navigate = useNavigate();

    if(windowSize) {
        return (
            <>
                {
                    !small
                    ?
                    <>
                    {
                    id === activeEvent
                    ?
                    <>
                        <motion.div className={styles.OpenEventMedium}
                        variants={openEventMediumVariant}
                        initial={'hidden'}
                        animate={'visible'}
                        style={{
                            backgroundImage: `url(${mimage})`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                        >
                        {
                            id === 1
                            ?
                            null
                            :
                            <span style={{position: 'absolute', top: '20%', left: "30%", width: '50%', fontSize: '20px', color: 'white'}}>
                                К сожалению, не нашёл в макете остальные картинки для карточки {id}
                        </span>
                        }
                        <div className={styles.MbBlurMedium}
                        style={{
                            backgroundImage: `url(${mblur})`,
                            backgroundPosition: 'bottom',
                            backgroundRepeat: "no-repeat"
                        }}
                        >
                        <h4>{title}</h4>
                        <p>{date}</p>
                        </div>
                        <NavLink onClick={(eo) => {
                            eo.preventDefault();
                            const uri = "/details/" + title;
                            navigate(uri)
                        }}>
                            {button}<span className={styles.LinkWhiteLine}></span>
                            </NavLink>
                        </motion.div>
                        <div className={styles.SmallOpenEventMedium} style={{
                            backgroundImage: `url(${mblue})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center'
                        }}>
                            <h3>0{id}</h3>
                            <p>{title}</p>
                        </div>
                    </>
                    :
                    <div className={styles.StaticEventMedium}
                    style={{
                        background: `url(${mlblur}) left no-repeat, url(${mdark}) center no-repeat, url(${mback}) right no-repeat`
                    }}
                    onClick={openEvent}
                    >
                        <h3>0{id}</h3>
                        <p>{title}</p>
                        <div className={styles.RedLineMedium}></div>
                    </div>
                }
                    </>
                :
                <>
                {
                    id === activeEvent
                    ?
                    <>
                        <motion.div className={styles.OpenEventMini}
                        style={{
                            backgroundImage: `url(${simage})`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                        variants={openEventMiniVariant}
                        initial={'hidden'}
                        animate={'visible'}
                        >
                        {
                        id === 1
                        ?
                        null
                        :
                        <span style={{position: 'absolute', top: '10%', right: '100px', width: '50%', fontSize: '20px', color: 'white'}}>
                        К сожалению, не нашёл в макете остальные картинки для карточки {id}
                        </span>
                        }
                        <div className={styles.SBlur}
                        >
                        <h4>{title}</h4>
                        <p>{date}</p>
                        <NavLink onClick={(eo) => {
                            eo.preventDefault();
                            const uri = "/details/" + title;
                            navigate(uri)

                        }}>{button} <span style={{width: '3px', position: 'absolute', left: '0px', top: '0px', background: 'white', height: '100%'}}></span></NavLink>
                        </div>
                        </motion.div>
                        <div className={styles.OpenEventMiniChild}
                        style={{
                            backgroundImage: `url(${sblue})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center'
                        }}
                        >
                        <h3>0{id}</h3>
                        <p>{title}</p>
                        </div>
                    </>
                    :
                    <div className={styles.StaticMiniEvent}
                        style={{
                            background: `url(${slblur}) left no-repeat, url(${sdark}) center no-repeat, url(${sback}) right no-repeat`
                        }}
                        onClick={openEvent}
                        >
                        <h3>0{id}</h3>
                        <p>{title}</p>
                    </div>
                }
                </>
                }
            </>
        )
    }
    else {
        return (
            <>
                {
                    id === activeEvent
                    ?
                    <>
                        <div className={styles.SmallOpenEvent}>
                         <h3>{title}</h3>
                        <p>0{id}</p>
                         <div className={styles.RedLine}></div>
                    </div>
                    <motion.div className={styles.OpenEvent} style={{background: `url(${blur}) left 40% no-repeat, url(${image}) right no-repeat`}}
                    variants={openEventVariant} initial={'hidden'} animate={'visible'}
                    >
                        <img src="https://i.ibb.co/3kcLmBR/01.png" alt="Number"/>
                        {
                            id !== 1
                            ?
                            <span style={{position: 'absolute', top: '40%', right: '100px', width: '50%', fontSize: '20px', color: 'white'}}>
                                К сожалению, не нашёл в макете остальные картинки для карточки {id}
                            </span>
                            :
                            null
                        }
                        <div className={styles.MbBlur}>
                            <h4>{title}</h4>
                            <p>{date}</p>
                            <NavLink onClick={(eo) => {
                            eo.preventDefault();
                            const uri = "/details/" + title;
                            navigate(uri)

                        }}>
                            {button}
                            </NavLink>
                        </div>
                        <div className={styles.RedLine}></div>
                    </motion.div>
                    </>
                    :
                    <div className={styles.StaticEvent}
                        style={{
                            background: `url(${lblur}) top no-repeat, url(${back}) center no-repeat`
                        }}
                        onClick={openEvent}
                        >
                            <h3>{title}</h3>
                            <p>0{id}</p>
                            <div className={styles.RedLine}></div>
                    </div>
                }
            </>
        )
    }
})