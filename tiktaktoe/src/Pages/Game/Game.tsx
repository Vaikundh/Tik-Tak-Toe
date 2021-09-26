
import React, { useState, useEffect } from "react";
import Board from "../../Components/Board/Board"
import Winner from "../Winner/Winner";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory
} from "react-router-dom";
import "./Game.css";


// Represent X's and O's as players
// isWin
// Keep track of wins 


const Game = () => {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [is_x, setPlayer] = useState(true)
    const history = useHistory();

    var x_wins = Number(window.localStorage.getItem('x_wins'));
    var o_wins = Number(window.localStorage.getItem('o_wins'));
     
    function handleClick(i:number){
        // check if square is already clicked
        if (squares[i] !== null || isWinner()) {
            return
        }
        squares[i] = is_x ? 'X' : 'O';
        setSquares(squares);
        setPlayer(!is_x);
        if (isWinner()) {
            console.log('hi', is_x? 'X':'O');
            
            if (is_x) {
                window.localStorage.setItem('x_wins', (x_wins+1).toString());
                window.localStorage.setItem('message', 'Player 1 Wins!')
            } else {
                window.localStorage.setItem('o_wins', (o_wins+1).toString());
                console.log(o_wins + 1);
                window.localStorage.setItem('message', 'Player 2 Wins!');
            }
            
            history.push({
                pathname: '/winner/',
            })
        } else if (squares.every(Boolean) && !isWinner()) {
            console.log("tie");
            window.localStorage.setItem('message', 'Yall are dumb haha!');
            history.push({
                pathname: '/winner/',
            })
        }
    }
    
    function isWinner() {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    return (
        <div className="Game">
            <p className="x-text score text">{localStorage.getItem('x_wins')} </p>
            <p className="dash score text">-</p>
            <p className="o-text score text"> {localStorage.getItem('o_wins')}</p>
            <h2 className="turn text">Player {is_x ? 1:2}</h2>
            <Board boardSquares={squares} handleClick={handleClick} />
        </div>
    )
}

export default Game;