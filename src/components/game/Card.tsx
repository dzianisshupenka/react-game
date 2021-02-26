import React from 'react';

interface CardProps {
    name: string
}

const Card:React.FC<CardProps> = ({name}) => {
    return (
        <div className="game-card">
            {name}
        </div>
    );
};

export default Card;
