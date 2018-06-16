import * as React from "react";
import "../styles/Hello.css";

export interface IProps{
    name: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

function getExlamationMarks(numberOfMarks: number){
    return Array(numberOfMarks + 1).join('!');
}

function Hello({ name, enthusiasmLevel = 1, onIncrement, onDecrement}: IProps) {
    if (enthusiasmLevel <= 0) {
        throw new Error("You could be a little more enthusiatic...");        
    }

    return (
        <div className="hello">
            <div className="greeting">
                Hello {name + getExlamationMarks(enthusiasmLevel)}
            </div>
            <div>
                <button onClick={onDecrement}>-</button>
                <button onClick={onIncrement}>+</button>
            </div>
        </div>
    );
}

export default Hello;