import React, { useRef, useEffect } from 'react';
import { IMove } from '../../interfaces';

interface MovesFieldProps {
    moves?: Array<IMove>
}

const MovesField:React.FC<MovesFieldProps> = ({moves}) => {

    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (divRef.current !== null) {
            divRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [moves]);
  
    return (
        <div className="game-moves-field">
           <span className="moves-header">Moves:</span> 
           {moves ? moves.map((item, index) => {
               return <span className="moves-item" key={index}>
                    <span style={{color: "#ff595e"}}>
                        {item.hand}
                    </span>
                     : use {item.card}, damage: {item.damage}, healed: {item.healed}
                   </span>
           }) : <span>no moves</span>}
            <div ref={divRef} />
        </div>
    );
};

export default MovesField;