import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import UserContextProvider from '../context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'
import './App.css'

function App() {

  return (
    <>
    <UserContextProvider>
      <h1>react with Chai</h1>
      <Login></Login>
      <Profile></Profile>
    </UserContextProvider>
    </>
  )
}

export default App
