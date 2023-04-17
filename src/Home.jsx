import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='gap-5'>
        <Link to="/additems"><button className='bg-gray-400 mr-7'>Add Items</button></Link>
        <Link to="/shopitems"><button className='bg-gray-400'>Shop Items</button></Link>
    </div>
  )
}

export default Home