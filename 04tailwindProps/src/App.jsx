import { useState } from 'react'
import Cards from './Components/Cards'
import './App.css'

function App() {
let myObj={
  name:"Hemant",
  age:24
}

  return (
    <>
      <div className=''>
      <h1 className='mx-auto bg-green-400 my-0 py-7 px-5 w-fit rounded-xl'>Tailwind Test</h1>
      </div>
    <div className='flex flex-col items-center'>
      <Cards username= "HeyMant" someObj={myObj}/>
      <Cards title="Code with HeyMant"/>
    </div>
    </>
  )
}

export default App
