import React from "react";
import styles from './Events.module.css';
import {customEventLoop} from '../event';
import { motion } from "framer-motion";
import { openEventVariant } from "../Motion Variants/variant";

export const Event = React.memo(({id, title, image, blur, button, date, number, back, lblur, bline, uline, activeEvent, windowSize, mimage, mlblur, mback, mblue, mdark, mblur}) => {

    const openEvent = () => {
        customEventLoop.emit('openEvent', id);
    }

    if(windowSize) {
        return (
            <>
                {
                    id === activeEvent
                    ?
                    <>
                        <div className={styles.OpenEventMedium}
                        style={{
                            background: `url(${mimage}) top no-repeat, url(${mblur}) bottom no-repeat`
                        }}
                        >
                            
                        </div>
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
                    </div>
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