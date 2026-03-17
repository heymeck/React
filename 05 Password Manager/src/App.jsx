import { useState, useCallback, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [charactersAllowed, setCharacters] = useState(false);
  const [numberAllowed, setNumbers] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charactersAllowed) str += "!@#$%^&*()_+-=[]{};':|,.<>/?~`";

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, charactersAllowed, numberAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, charactersAllowed, numberAllowed, passwordGenerator]);

  return (
    <>
      <div className="mx-auto w-fit px-10 bg-gray-700 h-fit rounded-3xl">
        <h1 className="">Password Generator</h1>
        <div className="min-w-fit relative">
          <input
            id="password"
            type="text"
            value={password}
            placeholder="Password"
            readOnly
            ref={passwordRef}
            className="border rounded-2xl p-3 min-w-75 w-fit md:w-150 h-fit my-5 bg-white text-gray-500 text-2xl focus:outline-none"
          />
          <button
            onClick={copyPasswordToClipboard}
            className="absolute bottom-5 right-0  p-3 h-fit w-30 text-2xl focus:outline-none bg-blue-600 rounded-l-none rounded-2xl
                        hover:bg-blue-300 active:border-b-2"
          >
            Copy
          </button>
        </div>

        {/* Range box */}
        <div className="flex justify-evenly w-full gap-3  px-3">
          <input
            id="range"
            type="range"
            max={100}
            min={6}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
            className="cursor-pointer h-10"
          />

          <label htmlFor="range" className="my-auto">
            Length: {length}
          </label>
          <div className="flex justify-center items-center gap-3">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumbers((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput" className="my-auto">
              Numbers
            </label>
          </div>
          <div className="flex justify-center items-center gap-3">
            <input
              type="checkbox"
              defaultChecked={charactersAllowed}
              id="characterInput"
              onChange={() => {
                setCharacters((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput" className="my-auto">
              Characters
            </label>
          </div>
        </div>
        {/* Number checkbox */}
      </div>
    </>
  );
}

export default App;
