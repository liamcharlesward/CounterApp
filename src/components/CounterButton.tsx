import React from "react";

export interface ICounterButton {
    colour: string,
    onClick: () => void,
    text: string
}

export default function CounterButton(props: ICounterButton) {
    return (
        <div className="CounterButton" style={{ background: props.colour }} onClick={props.onClick}>
            <h1>{props.text}</h1>
        </div>
    );
}