'use client'
import React from 'react'
import Header from '../Components/Header'

function TeachersInfo() {
  return (
    <div className='wrap overflow-x-hidden'>
      <div className='inWrap'>
        <Header />
        <div className='text w-full items-center'>
          <h1 className='pt-6 font-bold text-center w-full text-cyan-600 h-10 text-4xl'>Teachers Data</h1>
        </div>
        <div className='TList'>

          <input type='month' placeholder='MONTH' style={{ textAlign: "center" }}></input>
          <input type='text' placeholder='NAME'></input>
          <input type='Text' placeholder='CLASS' style={{ textAlign: "center" }}></input>
          <select type='TEXT' placeholder='SUBJECT'>
            <option>MATH</option>
            <option>BIO</option>
            <option>PHY</option>
            <option>CHEM</option>
            <option>ENG</option>
            <option>URDU</option>
            <option>SCI</option>
            <option>PST</option>
          </select>
          <input type='INT' placeholder='AMOUNT'></input>
          <input type='INT' placeholder='INCRERMENT' className='inc bg-emerald-800'></input>
          <button onClick={
            (emerald) => {
              alert("SUBMIT")
            }
          }>SUBMIT</button>
        </div>
        <div className='TDisplay'>
        </div>    
      </div>
    </div>
  )
}

export default TeachersInfo