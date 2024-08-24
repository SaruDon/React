import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200 "
      style={{ backgroundColor: color }}
    >
      <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-xl px-2 py-2">
        <button
          className="outline-none px-4 py-1 rounded-lg text-white"
          style={{ backgroundColor: "red" }}
          onClick={() => setColor("red")}
        >
          Red
        </button>
        <button
          className="outline-none px-4 py-1 rounded-lg text-white"
          style={{ backgroundColor: "green" }}
          onClick={() => setColor("green")}
        >
          Green
        </button>
        <button
          className="outline-none px-4 py-1 rounded-lg text-white"
          style={{ backgroundColor: "blue" }}
          onClick={() => setColor("blue")}
        >
          Blue
        </button>
      </div>
    </div>
  )
}

export default App
