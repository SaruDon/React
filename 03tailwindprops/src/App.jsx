import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cards from "./components/Cards";

function App() {

  return (
    <>
      <h1 className="bg-green-300 text-black p-4 rounded-xl m-5">Hello</h1>
      <Cards userName='Lisha' btn-name='clickMe'/>
      <Cards userName='Tejal' btn-name='later'/>
    </>
  );
}

export default App;
