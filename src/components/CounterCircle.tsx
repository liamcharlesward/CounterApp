import React from 'react';

export interface ICounterCircle {
    counterName: string,
    count: number
}

export default function CounterCircle(props: ICounterCircle) {
    return (
        <div className="CounterCircle">
            <p>{props.counterName}:</p>
            <h1>{props.count}</h1>
        </div>
    )
}