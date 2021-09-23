import React from "react";
import './Square.css'

interface Props {
    x_or_o: boolean;
    index: number;
    value: any;  // null, true (X), or false (O)
    handleClick(index: number): void;
}

var squareClass = "Square";


const Square = (props: Props) => {
    const {x_or_o, index, handleClick} = props;
    if (props.value === 'X' && props.x_or_o !== null) {
        squareClass = "x Square";
    } else if (props.value === 'O' && props.x_or_o !== null) {
        squareClass = "o Square";
    } else {
        squareClass = "Square";
    }
    return (
        <div className= "Square">
            <button className={squareClass}
                onClick={() => handleClick(index)}>
            </button>
        </div>
    );
};


export default Square;