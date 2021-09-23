import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

interface Props {
    x_wins: number;
    o_wins: number;
    winner: string;
}

const Winner = (props: Props) => {
    console.log(props.winner)
    return (
        <div>
            <h2>{props.x_wins} - {props.o_wins}</h2>
            <h1>Player {props.winner} Won!</h1>
            <button><Link to="/">Play Again!</Link></button>
        </div>
    )
};

export default Winner;