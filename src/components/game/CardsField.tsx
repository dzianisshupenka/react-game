import React, { useEffect, useState } from 'react';
import { Card } from '.';

interface CardsFieldProps {
    cardsList: Array<string> | undefined
    init: boolean
    move(id:number, card: string): void
}


const CardsField:React.FC<CardsFieldProps> = ({cardsList, init, move}) => {

    return (
        <div className="game-cards-field">
            {cardsList ?  
            cardsList.map((item, index) => {
                return <Card init={init} move={move} name={item} index={index} key={index+item} />
            }): 
            null
            }
        </div>
    );
};

export default CardsField;
