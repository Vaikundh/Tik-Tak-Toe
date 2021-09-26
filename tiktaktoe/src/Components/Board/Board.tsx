import React from "react"
import Square from '../Square/Square'
import './Board.css'

// handle putting a piece

interface Props {
    boardSquares: boolean[];
    // is_x: boolean; // x = True, o = False
    handleClick(index: number): void;
}


const Board = (props: Props) => {
    const {boardSquares, handleClick} = props;
    return (
        <div className="container">
            {boardSquares.map((val, ind) => (
                <Square 
                // x_or_o={is_x} 
                index={ind}
                value={boardSquares[ind]}
                handleClick={handleClick}
                />
            ))}
        </div>
    )
}

export default Board;