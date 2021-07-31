import React, { useState, useEffect } from 'react';
import './App.css';
import CounterCircle from './components/CounterCircle.jsx'
import CounterButton from './components/CounterButton.jsx'

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const count = Number(localStorage.getItem("count") || 0);
    setCount(count);
  }, []);

  useEffect(() => {
    localStorage.setItem("count", count)
  }, [count]);

  return (
    <body>
      <div className="App">
        <div id="app-wrapper">
          <CounterCircle counterName="Count" count={count}></CounterCircle>
          <div id="buttons-row">
            <CounterButton colour="red" text="-" onClick={() => setCount(count - 1)}></CounterButton>
            <CounterButton colour="white" text="0" onClick={() => setCount(0)}></CounterButton>
            <CounterButton colour="green" text="+" onClick={() => setCount(count + 1)}></CounterButton>
          </div>
        </div>
      </div>
    </body >
  );
}

export default App;
