import React from "react";
import styles from './Events.module.css';
import {customEventLoop} from '../event';

export const Event = React.memo(({id, title, image, blur, button, date, number, back, lblur, bline, uline, activeEvent}) => {

    const openEvent = () => {
        customEventLoop.emit('openEvent', id);
    }


    if(id === activeEvent) {
        return (
            <>
                <div className={styles.SmallOpenEvent}>
                    <h3>{title}</h3>
                    <p>0{id}</p>
                    <div className={styles.RedLine}></div>
                </div>
                <div className={styles.OpenEvent} style={{background: `url(${blur}) left 40% no-repeat, url(${image}) right no-repeat`}}>
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
                </div>
            </>
        )
    }
    else {
        return (
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
        )
    }
})