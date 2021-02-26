import React from 'react';
import { Card } from '.';

const cards = ["A", "HA", "RM", "GC", "H", "M", "S"];

const CardsField:React.FC = () => {
    return (
        <div className="game-cards-field">
            {cards.map((item, index) => {
                return <Card name={item} key={index} />
            })}
        </div>
    );
};

export default CardsField;