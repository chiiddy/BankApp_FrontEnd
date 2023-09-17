import React from 'react';
import ecommerceLogo from '../assets/ecommerceLogo.png';
import { LuLogOut } from 'react-icons/lu';

export default function Home() {
  return (
    <div>
        <div className='flex justify-center'>
        <div className='flex mr-[31rem]'>
        <img src={ecommerceLogo} alt='Magneto Bank'  className='w-[6rem]'/>
        <div className='mt-6'>
            <p>Magneto Bank</p>
        </div>
        </div>
        <div className='mr-[36rem] mt-6'>
            <h1>Customer's Dashboard</h1>
        </div>
        <div className='flex mr-10 mt-6'>
        <LuLogOut className='mt-1'/> 
        <div>
       < a href='/Login'> Logout </a>
        </div>
        </div>
        </div>
    <div className='w-full h-full mt-[5rem]'>
        <div className='grid grid-cols-2 gap-2.5 auto-rows-[minmax(100, auto)] justify-center items-center m-4'>
        <a href='/Deposit'>  <div className='bg-red-600 h-16 flex justify-center items-center border border-red-500 text-xl hover:bg-white'>
          <a href='/Deposit'> Deposit</a>
            </div> </a>
            <a href='/Balance'>    <div className='bg-red-600 h-16 flex justify-center items-center border border-red-500 text-xl hover:bg-white'>
            <a href='/Balance'> Balance </a>
            </div> </a>
            <a href='/Withdrawal'>  <div className='bg-red-600 h-16 flex justify-center items-center border border-red-500 text-xl hover:bg-white'>
       <a href='/Withdrawal'> Withdrawal </a>
            </div> </a>
        </div>
    </div>
    </div>
  )
}
