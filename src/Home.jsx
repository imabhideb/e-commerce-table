import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className=' w-full h-screen bg-cover flex justify-center items-center bg-home '>
      <div className='bg-slate-400 bg-opacity-75 w-[900px] h-[300px] flex flex-col justify-center items-center gap-10 rounded-2xl'>
        <h1 className='text-[80px] font-bold text-gray-800'>Welcome to E-cart</h1>
        <div className='mb-[40px]'>
          <Link to="/additems"><button className='bg-slate-700 hover:bg-blue-950 text-white w-[300px] h-[50px] rounded-2xl font-bold text-xl mr-[55px]'>Add Items</button></Link>
          <Link to="/shopitems"><button className='bg-red-700 hover:bg-red-500 text-white w-[300px] h-[50px] rounded-2xl font-bold text-xl'>Shop Items</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Home