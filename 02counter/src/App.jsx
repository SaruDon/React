import "./App.css";
import { useState } from "react";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    counter++;
    setCounter(counter);
    console.log(`new value ${counter}`);
  };

  const reduceValue = () => {
    counter--;
    if (counter < 0) {
      counter =0;
      toast.warning("Counter value cannot be less than 0!");
      return 0
    } else {
      setCounter(counter);
      console.log(`new value ${counter}`);
    }
  };

  return (
    <>
      <h1>Vita Counter app</h1>
      <h2>Counter value{counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={reduceValue}>Remove value</button>
      <ToastContainer />
    </>
  );
}

export default App;
