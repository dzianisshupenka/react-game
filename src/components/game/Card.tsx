import React, { useEffect, useState } from 'react';

interface CardProps {
    name: string
    index: number
    init: boolean
    turn: string
    move(id:number, card: string): void
}

const Card:React.FC<CardProps> = ({name, index, init, move, turn}) => {

    const [value, setValue] = useState('base');

    useEffect(() => {
        if(init) {
            setTimeout(() => {
                setValue(name)
            }, 500 * (index + 1))
        } else {
            setValue(name);
        }
    }, [])

    const onClickHandler = () => {
        if (turn === "player") {
            move(index, name);
        }
    }

    return value !== 'base' ? 
        <div className="game-card" onClick={onClickHandler}>
            {value}
        </div> :
        <div>
            {''}
        </div>
};

export default Card;
