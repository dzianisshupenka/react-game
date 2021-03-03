import React from 'react';

interface GameOverProps {
    loser : string
    visible: boolean
    newGame(): void
}

const GameOver:React.FC<GameOverProps> = ({loser, visible, newGame}) => {

    const gameOverClasses = ["game-over-main"];

    if (visible) {
        gameOverClasses.push("game-over-visible");
    }

    return (
        <div className={gameOverClasses.join(' ')} >
            <div className="game-over-modal">
                <span>Game over!</span>
                <span>{loser}{loser === 'Draw' ? '' : ' lose'}!</span>
                <button className="welcome-start-button" onClick={newGame}>NEW GAME</button>
            </div>
        </div>
    );
};

export default GameOver;