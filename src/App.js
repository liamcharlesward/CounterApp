import React, { useState, useEffect } from 'react';
import './App.css';
import Counter from './components/Counter.jsx'
import Button from './components/Button.jsx'


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
          <Counter count={count}></Counter>
          <div id="buttons-row">
            {/* TODO: Implement toClick on Button, and remove the wrapping divs */}
            <div className="button" onClick={() => setCount(count - 1)}><Button className="buttons" colour="red" text="-" onClick={() => setCount(count + 1)}></Button></div>
            <div className="button" onClick={() => setCount(0)}><Button className="buttons" colour="white" text="0" onClick={() => setCount(0)}></Button></div>
            <div className="button" onClick={() => setCount(count + 1)}><Button className="buttons" colour="green" text="+" onClick={() => setCount(count + 1)}></Button></div>
          </div>
        </div>
      </div>
    </body >
  );
}

export default App;
