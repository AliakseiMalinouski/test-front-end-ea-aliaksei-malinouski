import React from "react";
import {NavLink} from 'react-router-dom';
import styles from './Link.module.css';
import { useNavigate } from "react-router-dom";

export const Link = React.memo(({to, text}) => {
    let navigate = useNavigate();
    return (
        <div className={styles.LinkWrapper}
        onClick={() => navigate(to)}
        >
            <NavLink to={to} className={styles.Link}>
                <span>{text}</span>
                <img src="https://i.ibb.co/2jQqcp9/arrow-right.png" alt="Arrow Right"/>
            </NavLink>
        </div>
    )
})