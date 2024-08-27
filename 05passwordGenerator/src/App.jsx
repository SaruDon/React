import { useState, useCallback,useEffect,useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useref hook

  const passwordRef = useRef(null)


//useCallback -> memories the function to optimize it
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*()-_=+[]{};:'|,<.>/?`~";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1); //Generates a random number between 0 and str.length - 1 (the range of indices for str).
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);//its dependfent on these fields me used 

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])


  //runs when we relaod the page  and if anything changes in my array then rerun 
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])// if these value changes then my function will re-run

  return (
    <>
      <div
        className="w-full max-w-md mx-auto shadow-md 
     rounded-lg p-4  my-8 text-orange-400 bg-gray-800"
      >
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow-lg rounded-lg 
        overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            ref={passwordRef}
            readOnly
          />
          <button className="outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0"
          onClick={copyPasswordToClipboard}>
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
              <input type="range"
                min={6}
                max={100}
                value={length}
                className="cursor-pointer"
                onChange={(e)=>{setLength(e.target.value)}}
              />
              <label>
                Length: {length}
              </label>
            </div>
            <div className="flex items-center gap-x-1">
              <input 
                type="checkbox" 
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={()=>{
                  setNumberAllowed((prev)=>!prev) //reverse Prev value
                }}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input 
                type="checkbox" 
                defaultChecked={charAllowed}
                id="specialCharInput"
                onChange={()=>{
                  setCharacterAllowed((prev)=>!prev) //reverse Prev value
                }}
              />
              <label htmlFor="numberInput">Character</label>
            </div>
        </div>
      </div>
    </>
  );
}

export default App;
