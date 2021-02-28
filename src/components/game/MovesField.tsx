import React from 'react';

const moves = [
    "Player1 moves A",
    "Player1 moves A",
    "Player1 moves A",
    "Player1 moves A"
]

const MovesField:React.FC = () => {
    return (
        <div className="game-moves-field">
           <span className="moves-header">Moves:</span> 
           {moves.map((item, index) => {
               return <span className="moves-item" key={index}>{item}</span>
           })}
        </div>
    );
};

export default MovesField;