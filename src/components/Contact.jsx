import React from "react";
import styles from './Contact.module.css';
import { useState } from "react";
import { Snack } from "./Snack";
import { validationField } from "../helpers/validtionField";
import { ErrorHint } from "./ErrorHint";
import { updateAnchorState } from "../Redux/anchorSlice";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { contactVariant } from "../Motion Variants/variant";
import { updateStateCustomSnack } from "../Redux/customSnackSlice";

export const Contact = React.memo(() => {

    let dispatch = useDispatch();

    const customSnack = useSelector(state => state.customSnack.customSnack);
    

    const [inputState, setInputState] = useState("");
    const [snackState, setSnackState] = useState(false);
    const [sendData, setSendData] = useState({});

    const handleSubmit = (eo) => {
        eo.preventDefault();
        let resultOfValidation = validationField(inputState);
        if(resultOfValidation.status === 'error' || resultOfValidation.status === 'invalid') {
            setSendData(resultOfValidation);
        }
        else {
            if(customSnack) dispatch(updateStateCustomSnack);
            let mockArrayIndex = [1,2,3,4,5,6,7,8,9,10];
            setSendData(resultOfValidation);
            // в описании задания не нашёл API, c которым можно было бы работать и отправлять запрос, поэтому буду использовать jsonplaceholder
            fetch("https://jsonplaceholder.typicode.com/users", {
                method: 'POST',
                body: JSON.stringify({
                    title: "New user", 
                    body: resultOfValidation.value,
                    userId: mockArrayIndex[Math.floor(Math.random() * mockArrayIndex.length)]
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then(res => {
                if(res.ok) {
                    return res.json();
                }
                else {
                    alert('Error with download');
                }
            })
            .then(data => {
                dispatch(updateStateCustomSnack());
                setSnackState(true);
                setInputState("");
                console.log(data);
            })
            .catch(error => alert('Something went wrong...Try again'))
        }
    }

    const goToAllEvents = () => {
        dispatch(updateAnchorState());
    }
    
    return (
        <motion.div className="ContactWrapper" variants={contactVariant} initial={'hidden'} animate={'visible'}>
        <div style={{display: 'flex', justifyContent: 'center', height: '100%', alignItems: 'center', position: 'relative'}}>
            <p className={styles.Anchor} onClick={goToAllEvents}>
                <span>Other Events</span>
                <img src="https://i.ibb.co/QDYTNjM/fi-arrow-down.png" alt="Down arrow"/>
            </p>
            <form action="#" className={styles.Form}>
                <input type="text" placeholder="Enter your Email and get notified"
                className={styles.Input}
                value={inputState}
                onChange={(eo) => setInputState(eo.target.value)}
                maxLength={40}
                required={true}
                />
                <button type="submit" className={styles.Button} onClick={handleSubmit}>
                    <img src="https://i.ibb.co/2tjGkwx/Frame-2317.png" alt="Right Arrow"/>
                </button>
            </form>
            {
                sendData.state 
                ?
                <ErrorHint key={sendData.type} text={sendData.text} example={sendData.example} status={sendData.status} invalid={sendData.illigal}/>
                :
                null
            }
            </div>
        <Snack isOpen={snackState} onClose={() => setSnackState(false)} email={sendData.value && sendData.value}/>
        </motion.div>
    )
})