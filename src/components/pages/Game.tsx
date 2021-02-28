import React from 'react';
import { CardsField, MovesField, PlayerField } from '../game';

interface GameProps {
    info: object
}

const Game:React.FC<GameProps> = (props) => {

    console.log(props.info);

    return (
        <div className="game-container">
            <div className="game-header">FIGURES BATTLE</div>
            <div className="game-players">
                <PlayerField avatar="circl" />
                <span className="game-vs">VS</span>
                <PlayerField avatar="diam" />
            </div>
            <div className="game-cards-and-moves">
                <CardsField />
                <MovesField />
                <CardsField />
            </div>
        </div>
    );
};

export default Game;
