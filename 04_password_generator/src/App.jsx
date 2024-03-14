import { useState, useCallback, useEffect,useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(10);
  const [numberAllowed, setNumbers] = useState(false);
  const [charAllowed, setCharacters] = useState(false);

  const [password, setPassword] = useState("");
  const passwordRef=useRef(null) // password copy karne ke liye use kiya yeh hook
  const passwordGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";
    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%^&*()_+";
    for (let i = 0; i < length; i++) {
      let char = (Math.floor(Math.random() * str.length + 1));
      pass+=str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyToClipboard=useCallback(()=>{
    passwordRef.current?.select(); // isse password input feild ka highlight hoga for user so he knows what is being copied
    window.navigator.clipboard.writeText(password); // isse password copy ho jayega clipboard me 

  },[password])

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w full text-white my-20 mx-1 px-10 py-10 rounded-lg border-2 border-white-600 bg-gray-800">
        <h1 className="text-white text-center text-3xl my-3">
          Password Generator
        </h1>
        <div className="flex rounded-lg overflow-hidden my-3">
          <input
            type="text"
            value={password}
            className="outline-none w-full text-black py-1 px-3 "
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button 
          onClick={copyToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-1">copy</button>
        </div>
        <div className="flex items-center gap-2 ">
          <input
            type="range"
            max={100}
            min={10}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />{" "}
          <label> Length:{length}</label>
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => setNumbers((prev) => !prev)}
          />
          <label>Numbers</label>
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => setCharacters((prev) => !prev)}
          />
          <label>Characters</label>
        </div>
      </div>
    </>
  );
}

export default App;
