import React, { Component } from 'react';

class CounterCircle extends Component {
    render() {
        return (
            <div className="CounterCircle">
                <p>{this.props.counterName}:</p>
                <h1>{this.props.count}</h1>
            </div>
        )
    }
}

export default CounterCircle;