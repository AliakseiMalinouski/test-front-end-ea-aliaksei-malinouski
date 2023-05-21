import React from "react";
import { useParams } from "react-router-dom";

function Details () {

    let params = useParams();

    let currentCard = params.cardname;

    return (
        <div style={{
            margin: '0 auto',
            width: '320px',
            textAlign: 'center',
            fontSize: '18px'
        }}>
            Information about Event: <span style={{
                color: 'red'
            }}>
                {currentCard}
            </span>
        </div>
    )
}

export default Details;