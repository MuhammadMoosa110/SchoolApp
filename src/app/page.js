'use client'
import React from 'react'
import Header from './Components/Header'
import Link from 'next/link'
import Accounts from '@/app/Accounts/page.js'
import TeachersInfo from './Teachers/page'

function App() {

  return (

    <div className="flex flex-col items-center justify-start w-full min-h-screen bg-gray-100">
      <Header/>
      <div className='page1 w-full h-220 flex items-center gap-12  justify-center pt-3 mt-3'>
        <div className='boxOne   bg-blue-300    '>
          <div className='LinkOne'><Link href="/Accounts" className='text-white text-2xl font-bold text-center text-4xl' target='-blank'>Voucher</Link>          </div>
          <div className='LinkTwo'><Link href="/Teachers" className='text-white text-2xl font-bold text-center text-4xl' target='-blank'>Teacher Information</Link>          </div>
          </div>
        <div className='boxTwo w-140 h-210 bg-blue-400 rounded-2xl'></div>
        <div className='boxThree w-140 h-210 bg-blue-950 rounded-2xl'></div>
      </div>
    </div>
  )
}

export default App