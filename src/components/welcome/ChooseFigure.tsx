import React from 'react';
import { Figure } from './';

interface ChooseFigureProps {
    nickname: string
    figure: string
    choose(figure:string): void
    start(): void
}

const figures = [
    "quad",
    "trian",
    "circl",
    "diam"
]

const ChooseFigure: React.FC<ChooseFigureProps> = ({figure, choose, nickname, start}) => {

    const chooseFigureHandler = (figure: string) => {
        choose(figure);
    } 

    return (
        <div className="choose-figure-main">
            <h1 className="welcome-header">{nickname}, choose the figure for which you want to play</h1>
            <div className="choose-figure-figures">
                {figures.map((item, index) => {
                    return <Figure checkedFigure={figure} choose={(item) => chooseFigureHandler(item)} figure={item} key={index} />
                })}
            </div>
            <button  onClick={start} className="welcome-start-button" >START!</button>
        </div>
    );
};

export default ChooseFigure;
