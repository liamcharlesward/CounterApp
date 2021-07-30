import React, { Component } from "react";

//  TODO: Integrate styling into App.css and remove inline styling

class Button extends Component {
    render() {
        return (
            <div className="Counter" style={{ width: '15vh', height: '15vh', background: this.props.colour, display: 'flex', flexDirection: 'column', borderRadius: '50%', justifyContent: 'center', alignItems: 'center' }}>
                <h1 style={{ fontSize: '3em', fontWeight: '300', margin: '0' }}>{this.props.text}</h1>
            </div>
        );
    }
}

export default Button;