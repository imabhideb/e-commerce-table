import React, { useState } from 'react'
import { ChairImage } from './ChairImage/ChairImage'
import { Link } from 'react-router-dom';

const FurnitureDetails = () => {

    const [sliderData, setSliderData] = useState(ChairImage[0]);

    const handleClick = (index) => {
        console.log(index)
        const slider = ChairImage[index]
        setSliderData(slider)
    }
    
    

  return (
    <div className='w-[1350px] rounded-lg flex justify-center items-center mt-[40px] '>
        
        
        {/* Image Section */}
        <div className='w-[700px] h-[800px] flex flex-col gap-[80px] justify-center items-center '>
            <div className='w-[500px]'>
                <img src={sliderData.value} height="300" width="500" alt="" />
            </div>
            <div className='flex justify-center gap-[30px]'>
                {
                    ChairImage.map((data, ind) => 
                        <img key={data.id} src={data.value} onClick={() => handleClick(ind)} className='border-2 border-solid border-slate-400 rounded-xl hover:scale-105' height="60" width="80" alt="" />
                    )
                }
            </div>
        </div>


        {/* Details Section */}
        <div className='w-[650px] h-[800px] bg-slate-500 bg-opacity-40 flex flex-col pl-[10px] justify-start items-start rounded-r-xl'>

            {/* Header */}
            <h1 className=' font-bold text-[40px] mt-[60px] ml-[20px]'>Gaming Chair</h1>
            <h1 className=' font-semibold text-[25px] mt-2 ml-[30px]'>$ 289.10</h1>


            {/* Blank line */}
            <hr className='w-[560px] ml-[15px] mt-[20px]' />

            {/* Description */}
            <div className='mt-[40px] w-[600px] h-[400px] flex flex-col'>
                  <p className='mx-[20px] text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam doloribus, amet quos saepe voluptatum id asperiores dolorem dolor molestias, minus, corporis ea. Dolore ut voluptatum eligendi similique eius dignissimos quae!</p>

                <p className='mt-[40px] mx-[20px] text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam doloribus, amet quos saepe voluptatum id asperiores dolorem dolor molestias, minus, corporis ea. Dolore ut voluptatum eligendi similique eius dignissimos quae!</p>
            </div>

            <div className='flex flex-col gap-6 justify-center items-center w-full'>
                  <button className='bg-white w-[380px] h-[50px] rounded-lg font-semibold text-2xl items-center hover:scale-105 duration-150'>Buy</button>
                  <Link to="/"><button className='bg-red-700 text-white w-[380px] h-[50px] rounded-lg font-semibold text-2xl items-center hover:scale-105 duration-150'>Continue Shopping</button></Link>
            </div>

        </div>
        
    </div>
  )
}

export default FurnitureDetails