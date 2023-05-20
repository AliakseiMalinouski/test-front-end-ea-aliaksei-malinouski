import React, { useState } from "react";
import { Hero } from "./Hero";
import Events from "./Events";
import { Contact } from "./Contact";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { updateStateCustomSnack } from "../Redux/customSnackSlice";

function Home () {

    let dispatch = useDispatch();

    const customSnack = useSelector(state => state.customSnack.snack);

    const [snackAlert, setSnackAlert] = useState(false);

    useEffect(() => {
        if(customSnack) {
            setSnackAlert(true);
            document.body.style.overflow = 'hidden';
            
        }
        else {
            setSnackAlert(false);
            document.body.style.overflow = '';
        }
    }, [customSnack]);

    const closeSnack = () => {
        dispatch(updateStateCustomSnack())
    }

    return (
        <>
        <div className={snackAlert ? "Home" : "Home"}>
            <Hero/>
            <Contact/>
            <Events/>
        </div>
        {
            snackAlert
            ?
            <div className="SnackWrapper">
                <div className="CustomSnack">
                <img src="https://i.ibb.co/nQhVmq2/Frame-97.png" alt="Cross Close" onClick={closeSnack}/>
                    <div className="SnackContent">
                    <h4>SUCCESS</h4>
                    <p>You have successfully subscribed to the email newsletter</p>
                    <button className="CrossClose" type="button" onClick={closeSnack}>Close</button>
                    </div>
                </div>
                <div className="Overlay">

                </div>
            </div>
            :
            null
        }
        </>
    )
}

export default Home;