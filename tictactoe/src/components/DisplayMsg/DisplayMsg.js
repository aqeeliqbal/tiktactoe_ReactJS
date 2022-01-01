//import react, { useState } from 'react'
import './DisplayMsg.css'

const DisplayMsg = (props) => {
    
    return (
        <div className="displayMsg">
            {props.displayMessage}
            <br/>
            SCORE
            <br/>
            {props.wins} - {props.ties} - {props.losses}
        </div>
      );
}

export default DisplayMsg;