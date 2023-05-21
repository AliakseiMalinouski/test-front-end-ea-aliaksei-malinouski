import React from "react";
import styles from './Hero.module.css';
import { Logo } from "./Logo";
import { Title } from "./Title";
import mainTitleStyles from './Title.module.css';
import { Time } from "./Time";
import { motion } from "framer-motion";
import { paragraphVariant } from "../Motion Variants/variant";
import { Link } from "./Link";
import { linkVariant } from "../Motion Variants/variant";

export const Hero = React.memo(() => {
    return (
        <div className={styles.Hero}>
            <Title text="Under Construction" typeOfStyles={mainTitleStyles}/>
            <motion.p className={styles.Description}
            variants={paragraphVariant}
            initial={'hidden'}
            animate={'visible'}
            >We're making lots of improvements and will be back soon</motion.p>
            <Time/>
            <motion.div className="Divider" variants={linkVariant} initial={'hidden'} animate={'visible'}>
                <p>Check our event page when you wait:</p>
                <Link to='/events' text="Go to the event"/>
            </motion.div>
        </div>
    )
})