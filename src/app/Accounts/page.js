'use client'
import React, { useRef, useState } from 'react'
import Header from '../Components/Header'
import { useReactToPrint } from 'react-to-print'

function Accounts() {
    const [voucherId, setVoucherId] = useState('')
    const [Date, setDate] = useState('')
    const [nature, setNature] = useState('')
    const [amount, setAmount] = useState('')
    const [rate, setRate] = useState('')
    const [days, setDays] = useState('')
    const [prompt, setPropmpt] = useState('')
    const [text, setText] = useState('')


    const contentRef = useRef(null);
    const reactToPrintFn = useReactToPrint({ contentRef });
    return (
        <>

            <div className='AccountsWrapper w-full  gap-8 bg-blue-200 min-h-screen flex flex-row items-center justify-center'>

                <div className='inputSide  '>
                    <input value={voucherId} onChange={(e) => {
                        setVoucherId(e.target.value)
                    }} placeholder='VOUCHER ID' type='ID' name='VOUCHER ID'   ></input>
                    <input value={Date} onChange={(e) => {
                        setDate(e.target.value)
                    }} placeholder='DATE' type='Date' name='DATE'></input>
                    <input value={text} onChange={(e) => {
                        setText(e.target.value)
                    }} placeholder='DESCRIPTION' type='text' name='DESCRIPTION' ></input>
                    <div style={{ width: "28%", height: "20%", position: "absolute", top: "10%", zIndex: "1", left: "2.3%", display: "flex" }}>
                        <input value={days} onChange={(e) => { setDays(e.target.value) }} placeholder='No Of Days' name='AMOUNT' style={{ width: "105px", height: "50px" }}></input>
                        <input value={rate} onChange={(e) => { setRate(e.target.value) }} placeholder='RATE' name='AMOUNT' style={{ width: "105px", height: "50px" }}></input>

                        <select value={prompt} onChange={(e) => { setPropmpt(e.target.value) }} style={{ width: "106px", height: "50px" }}>
                            <option>SELECT</option>
                            <option>Paid cash against {nature}

                                to purchase @Rs. {rate}/=
                                during the whole month = {days} working days</option>

                            <option>Paid Cash Against y</option>

                            <option>Paid Cash Against z</option>

                            <option>Paid Cash Against</option>
                        </select>
                    </div>
                    <input value={amount} onChange={(e) => { setAmount(e.target.value) }} placeholder='AMOUNT' type='INT' name='AMOUNT'></input>
                    <select value={nature} onChange={(e) => { setNature(e.target.value) }}>
                        <option value={setNature}>SELECT HERE</option>
                        <option value={setNature}>Electric Bill</option>
                        <option value={setNature}>Ice For Drinking Water</option>
                        <option value={setNature}>Solar Eexpense</option>
                        <option value={setNature}>Water Bill</option>
                        <option value={setNature}>Maintenance</option>
                    </select>

                    <button className='bg-amber-500 text-white w-50 p-2 mt-6 rounded-3xl' onClick={() => {
                        alert("Data Submitted Successfully")
                    }}>Submit</button>
                    
                    <button onClick={reactToPrintFn} className="print mt-5 bg-emerald-800 w-50 h-10 rounded-3xl ">Print</button>    
                </div>
                
                <div className="printContent" ref={contentRef}>
                    
                    <div className='outputSide '>
                        
                        <h1 className='text-2xl font-bold text-amber-950'>DEBIT VOUCHER</h1>
                        <div className='txt1 '>
                            <h1 className='date'>VOUCHER #{voucherId}</h1>
                            <h1 className='date'>DATE : {Date}</h1>
                        </div>
                        <div className='txt2'>
                            <h1 className='nature'>DEBIT ACCOUNT : {nature}</h1>
                        </div>
                        <div className='DescriptedData'>
                        <div className='txt3'>
                            <h1 className='description'>DESCRIPTION </h1>
                        </div>
                        <div className='txt4'>
                            <div className='txt4Prompt'>
                                <h1 className='prompt mt-2'>{prompt}{text}</h1>
                            </div>
                            <div>
                                <h1 className='amount pt-2'> {amount}/=</h1>
                            </div>
                        </div>
                        <div className='box'><div className='line'></div></div>
                        <div className='box'><div className='line'></div></div>
                        
                        </div>
                         <div className='LastBox'>
                            {/* <h1 className='text-sm text-amber-950 italic'>This is a system generated voucher and does not require any signature</h1> */}
                            <div className='Amou'><h1>TOTAL</h1></div>
                            <div className='Num'><h1 >{amount}/=</h1></div>
                         </div>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Accounts