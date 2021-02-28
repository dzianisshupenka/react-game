import React from 'react';

interface FigureProps {
    figure: string,
    checkedFigure: string,
    choose(item:string): void 
}

const Figure: React.FC<FigureProps> = (props) => {

    let checked = "";

    if(props.checkedFigure === props.figure) {
        checked = "figure-checked";
    } else {
        checked = "";
    }

    const figureClasses = ["figure-wrapper", checked];

    return (
        <div className={figureClasses.join(' ')} onClick={() => props.choose(props.figure)}>
            <div className={props.figure}>
            </div>
        </div>

    );
};

export default Figure;
