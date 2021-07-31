import React, { Component } from "react";

class CounterButton extends Component {
    render() {
        return (
            <div className="CounterButton" style={{ background: this.props.colour }} onClick={this.props.onClick}>
                <h1>{this.props.text}</h1>
            </div>
        );
    }
}

export default CounterButton;