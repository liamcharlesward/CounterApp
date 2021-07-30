import React, { Component } from 'react';

//  TODO: Integrate styling into App.css and remove inline styling

class Counter extends Component {
    render() {
        return (
            <div className="Counter" style={{ width: '40vh', height: '40vh', background: '#6efffa', display: 'flex', flexDirection: 'column', borderRadius: '50%', justifyContent: 'center', alignItems: 'center' }}>
                <p style={{ fontSize: '1.5em', margin: '0' }}>Count:</p>
                <h1 style={{ fontSize: '5em', fontWeight: '300', margin: '0' }}>{this.props.count}</h1>
            </div>
        )
    }
}

export default Counter;