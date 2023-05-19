import React from "react";
import styles from './Hero.module.css';
import { Logo } from "./Logo";
import { Title } from "./Title";
import mainTitleStyles from './Title.module.css';
import { Time } from "./Time";

export const Hero = React.memo(() => {
    return (
        <div className={styles.Hero}>
            <Logo mainText="Lead" underText="Advisors" srcLogo="https://i.ibb.co/Wtgfz8K/Group.png"/>
            <Title text="Under Construction" typeOfStyles={mainTitleStyles}/>
            <p className={styles.Description}>We're making lots of improvements and will be back soon</p>
            <Time/>
        </div>
    )
})