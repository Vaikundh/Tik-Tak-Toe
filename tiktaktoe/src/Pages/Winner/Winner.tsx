import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import "./Winner.css";


const Winner = () => {

    function resetScore() {
        window.localStorage.setItem('x_wins', (0).toString());
        window.localStorage.setItem('o_wins', (0).toString());
        window.localStorage.setItem('message', '');
    }
    
    return (
        <div>
            <p className="x-text score text">{localStorage.getItem('x_wins')} </p>
            <p className="dash score text">-</p>
            <p className="o-text score text"> {localStorage.getItem('o_wins')}</p>
            <h1 className="winner text">{window.localStorage.getItem('message')}</h1>
            <Link to="/"><button className="play-button text">Play Again!</button></Link>
            <Link to="/"><p className="reset text" onClick={() => resetScore()}>Reset Score</p></Link>
        </div>
    )
};

export default Winner;