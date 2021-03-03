import React from 'react';

const Help:React.FC = () => {
    return (
        <div className="help-main">
            <h1>Help page</h1>
            <div className="help-text">
                <p>
                    This is my game in which you have to play as one of the figure. 
                    At the beginning of the game, you choose which figure to play. 
                    Then the game starts. Each player is given 5 random cards. 
                    Each card has its own meaning in the game.
                </p>

                <ul>
                    <li>Card "A" - Deals damage 20</li>
                    <li>Card "HA" - Deals damage 40</li>
                    <li>Card "H" - restores health by 20</li>
                    <li>Card "RM" - a random card is used</li>
                    <li>The "SM" card is a figure's superpower card.</li>
                </ul>
                Each figure has its own superpower:
                <ul>
                    <li>diam - restores health by 40</li>
                    <li>quad - deals 40 damage</li>
                    <li>cirkle - Deals 45 damage</li>
                    <li>trian - Deals 30 damage and restores 30 health</li>
                </ul>
                <p>
                    The game ends when one of the players has zero health, 
                    or when the cards run out, the player with lower health loses. 
                    If the health level is the same, it's a draw.
                </p>
                <p>
                    Have a good game!)
                </p>
            </div>
        </div>
    );
};

export default Help;