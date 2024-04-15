import React from 'react'

function Change() {
    const redChange=()=>{
        document.body.style.backgroundColor="red"
    }
    const yellowChange=()=>{
        document.body.style.backgroundColor="yellow"
    }
    const purpleChange=()=>{
        document.body.style.backgroundColor="purple"
    }
    const greenChange=()=>{
        document.body.style.backgroundColor="green"
    }
    const orangeChange=()=>{
        document.body.style.backgroundColor="orange"
    }
    
  return (
    <div>
        <button onClick={redChange} className="shape" style={{backgroundColor:'red'}}>Red</button>
        <button onClick={yellowChange} className="shape" style={{backgroundColor:'yellow'}}>Yellow</button>
        <button onClick={purpleChange} className="shape" style={{backgroundColor:'purple'}}>Purple</button>
        <button onClick={greenChange} className="shape" style={{backgroundColor:'green'}}>Green</button>
        <button onClick={orangeChange} className="shape" style={{backgroundColor:'orange'}}>Orange</button>
    </div>
  )
}

export default Change