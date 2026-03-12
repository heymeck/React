import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(0);

  function AddValue(){
    // console.log(counter)
    setCounter(counter+1)
  }

  function removeValue(){
    counter=counter-1;
    if(counter<0){
      alert("Cannot remove the value.")
    }else{
      // console.log(counter)
      setCounter(counter)
    }
  }
  return (
    <>
      <h1>React Counter</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={AddValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
      {/* <footer>Footer : {counter}</footer> */}
    </>
  )
}

export default App
