import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5);
  
  // let counter = 5;
  const addValue = () => {
    if(counter >= 20) {
      return;
    }
    // counter = counter + 1;
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
  }

  const removeValue = () => {
    if (counter === 0) {
      return;
    }
    // counter = counter - 1;
    setCounter(counter - 1);
  }

  const handleClick = () => {
    window.location.reload();
  };
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>remove value {counter}</button>
      <br />
      <button onClick={handleClick}>Refresh Page</button>
    </>
  )
}

export default App
