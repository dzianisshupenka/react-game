import React, { useEffect, useState } from 'react';
import { IGameInfo, IMove } from '../../interfaces';
import { CardsField, MovesField, PlayerField } from '../game';

interface GameProps {
    info: IGameInfo
}

const figures = [
    "quad",
    "trian",
    "circl",
    "diam"
]

const cards = [
    "A", 
    "HA", 
    "RM", 
    "H",
    "S"
]

const Game:React.FC<GameProps> = ({info}) => {

    const [enemyCardsList, setEnemyCardsList] = useState<Array<string>>();
    const [playerCardsList, setPlayerCardsList] = useState<Array<string>>();
    const [enemyId, setEnemyId] = useState<number>(0);
    const [moves, setMoves] = useState<Array<IMove>>();
    const [currentMove, setCurrentMove] = useState<IMove>();
    const [turn, setTurn] = useState("player");
    const [init, setInit ] = useState(true);
    const [playerHealth, setPlayerHealth ] = useState(100);
    const [enemyHealth, setEnemyHealth ] = useState(100);

    useEffect(() => {
        console.log(currentMove);
        if(currentMove) {
            if(moves?.length){
                setMoves([...moves, currentMove])
            } else {
                setMoves([currentMove])
            }
        }
        console.log(moves);
    }, [currentMove]);

    const specialMOve = () => {
        const hand =  turn === "player" ? info.player : "Enemy";
        const card = "SM";
        switch (turn === "player" ? info.figure : figures[enemyId]) {
            case "quad":
                turn === "player" ? setEnemyHealth(prev => prev - 40) : setPlayerHealth(prev => prev - 40);
                setCurrentMove({
                    hand,
                    card,
                    healed: 0,
                    damage: 40
                });
                break;
            case "trian":
                if (turn === "player") {
                    setPlayerHealth(prev => (prev + 30) > 100 ? 100 : prev + 30);
                    setEnemyHealth(prev => prev - 30);
                } else {
                    setPlayerHealth(prev => prev - 30);
                    setEnemyHealth(prev => (prev + 30) > 100 ? 100 : prev + 30);
                }
                setCurrentMove({
                    hand,
                    card,
                    healed: 30,
                    damage: 30
                });
                break;
            case "circl":
                turn === "player" ? setEnemyHealth(prev => prev - 45) : setPlayerHealth(prev => prev - 45);
                setCurrentMove({
                    hand,
                    card,
                    healed: 0,
                    damage: 45
                });
                break;
            case "diam":
                turn === "player" ? setPlayerHealth(prev => (prev + 45) > 100 ? 100 : prev + 45) : setEnemyHealth(prev => (prev + 45) > 100 ? 100 : prev + 45);
                setCurrentMove({
                    hand,
                    card,
                    healed: 45,
                    damage: 0
                });
                break;
        }
    }

    const randomMove = () => {
        const cardsForRandom = [
            "A", 
            "HA",
            "H",
            "S"
        ]
        const randomCard = cardsForRandom[Math.floor(Math.random() * 4)];
        const hand =  turn === "player" ? info.player : "Enemy";
        switch (randomCard) {
            case "A":
                turn === "player" ? setEnemyHealth(prev => prev - 20) : setPlayerHealth(prev => prev - 20);
                setCurrentMove({
                    hand,
                    card: "RM(A)",
                    healed: 0,
                    damage: 20
                });
                break;
            case "HA":
                turn === "player" ? setEnemyHealth(prev => prev - 40) : setPlayerHealth(prev => prev - 40);
                setCurrentMove({
                    hand,
                    card: "RM(HA)",
                    healed: 0,
                    damage: 40
                });
                break;
            case "H":
                turn === "player" ? 
                setEnemyHealth(prev => (prev + 25) > 100 ? 100 : prev + 25) : 
                setPlayerHealth(prev => (prev + 25) > 100 ? 100 : prev + 25);
                setCurrentMove({
                    hand,
                    card: "RM(H)",
                    healed: 25,
                    damage: 0
                });
                break;
            case "S":
                specialMOve();
                break;
        }
    };

    const playerMove = (id:number, card: string) => {
        setInit(false);
        const hand =  turn === "player" ? info.player : "Enemy";
        if (turn === "player") {
            switch(card) {
                case "A":
                    setEnemyHealth(prev => prev - 20);
                    setCurrentMove({
                        hand,
                        card,
                        healed: 0,
                        damage: 20
                    });
                    break;
                case "HA":
                    setEnemyHealth(prev => prev - 40);
                    setCurrentMove({
                        hand,
                        card,
                        healed: 0,
                        damage: 40
                    });
                    break;
                case "RM":
                    randomMove();
                    break;
                case "H":
                    setPlayerHealth(prev => (prev + 20) > 100 ? 100 : prev + 20);
                    setCurrentMove({
                        hand,
                        card,
                        healed: 20,
                        damage: 0
                    });
                    break;
                case "S":
                    specialMOve();
                    break;
            }
            setPlayerCardsList(prev => prev?.filter((item, index) => id !== index));
            setTurn("enemy");
        }
    }

    const enemyMove = (id:number, card: string) => {
        setInit(false)
        const hand =  turn === "player" ? info.player : "Enemy";
        if (turn === "enemy") {
            switch(card) {
                case "A":
                    setPlayerHealth(prev => prev - 20);
                    setCurrentMove({
                        hand,
                        card,
                        healed: 0,
                        damage: 20
                    });
                    break;
                case "HA":
                    setPlayerHealth(prev => prev - 40);
                    setCurrentMove({
                        hand,
                        card,
                        healed: 0,
                        damage: 40
                    });
                    break;
                case "RM":
                    randomMove();
                    break;
                case "H":
                    setEnemyHealth(prev => (prev + 20) > 100 ? 100 : prev + 20);
                    setCurrentMove({
                        hand,
                        card,
                        healed: 20,
                        damage: 0
                    });
                    break;
                case "S":
                    specialMOve();
                    break;
            }
            setEnemyCardsList(prev => prev?.filter((item, index) => id !== index));
            setTurn("player");
        }
    }

    useEffect(() => {
        setEnemyId(Math.floor(Math.random() * 4));

        const playerCards = [];
        const enemyCards = [];

        for(let i = 0; i < 5; i++ ) {
            playerCards.push(cards[Math.floor(Math.random() * 5)]);
            enemyCards.push(cards[Math.floor(Math.random() * 5)]);
        }
        setPlayerCardsList(playerCards);
        setEnemyCardsList(enemyCards);
    }, [])

    

    return (
        <div className="game-container">
            <div className="game-header">FIGURES BATTLE</div>
            {info.isRunning ? 
            <>
                <div className="game-players">
                    <PlayerField health={playerHealth} avatar={info.figure} player={info.player} />
                    <span className="game-vs">VS</span>
                    <PlayerField health={enemyHealth} player="Enemy" avatar={figures[enemyId]} />
                </div>
                <div className="game-cards-and-moves">
                    <CardsField init={init} move={playerMove} cardsList={playerCardsList} />
                    <MovesField moves={moves} />
                    <CardsField init={init} move={enemyMove} cardsList={enemyCardsList} />
                </div>
            </> : 
            <h1 className="game-header">NO ACTIVE GAME FOUNDED</h1>}

        </div>
    );
};

export default Game;
