import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Change from './Components/Change'


function App() {

  return (
    <>
      <div className='main'>
       <h1> Background Changer App</h1>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <Change/>
      </div>
     
      
    </>
  )
}

export default App
