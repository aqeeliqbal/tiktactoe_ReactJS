import React, { useState } from 'react'
import './Clear.css'

const Clear = (props) => {
    const clearScores = () =>{
        props.setWins(0);
        props.setTies(0);
        props.setLosses(0);
        props.setDisplayMessage('')
    }
    const clearBoard = () =>{
        props.setBoard(['_', '_', '_', '_', '_', '_', '_', '_', '_',])
        props.setDisplayMessage('')
    }
    return (
        <center>
            <button className="clear" onClick={() => clearBoard()}>
                Reset Board
            </button>
            <button className="clear" onClick={() => clearScores()}>
                Reset Scores
            </button>
        </center>
      );
}

export default Clear;