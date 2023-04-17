import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const AddData = () => {
    const [images, setImages] = useState([]);
    const [title, setTitle] = useState("")
    const [price,setPrice] = useState("")
    const [desc, setDesc] = useState("")

    const handleImageChange = (event) => {
        const selectedImages = Array.from(event.target.files);
        if (selectedImages.length <= 4) {
            setImages(selectedImages);
        } else {
            alert('You can select up to 4 images only');
        }
    };

    const handleSubmit = () => {
        setTitle("")
        setPrice("")
        setDesc("")
        setImages([])
        alert(`${title} added`)
    }
    return (
        <div className=' bg-add bg-contain w-full h-screen flex justify-center items-center'>
            <div className='w-[600px] h-[800px] flex flex-col justify-center items-center bg-slate-400 rounded-xl bg-opacity-60'>
                <h1 className=' font-bold text-[35px] mb-3 top-0'>Add Items</h1>

                <form className='flex flex-col' onSubmit={handleSubmit}>
                    <label htmlFor="name" className=' text-white text-[20px]'>Enter the title of item</label>
                    <input className='bg-gray-100 mb-5 w-[400px] h-[38px] rounded-lg pl-3 outline-none font-semibold' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Eg. Chair...' type="text" />

                    <label htmlFor="name" className='text-white text-[20px]'>Enter the price (in dollars) </label>
                    <input className='bg-gray-100 mb-5 w-[400px] h-[38px] rounded-lg pl-3 outline-none ' value={price} onChange={(e) => setPrice(e.target.value)} placeholder='$ 281' type="text" />

                    <label htmlFor="name" className='text-white text-[20px]'>Enter the description for the item</label>
                    <textarea className='bg-gray-100 mb-3 rounded-lg pl-3 outline-none py-1 text-base' value={desc} onChange={(e) => setDesc(e.target.value)} name="" id="" cols="30" rows="4" placeholder='It is a gaming chair with ergonomic features...'></textarea>

                    <label htmlFor="images" className='text-white text-[20px] mr-3'>Add Images </label>
                    <input type="file" accept="image/*" className='mb-2 text-white' multiple onChange={handleImageChange} />
                    <div className='flex'>
                        {images.map((image) => (
                            <img key={image.name} src={URL.createObjectURL(image)} className='w-[80px] flex mr-2 border border-black rounded-md hover:scale-105' alt={image.name} />
                        ))}
                    </div>

                    <button className='bg-gray-400 w-[400px] h-[45px] rounded-md font-medium text-[17px] flex justify-center items-center text-white px-2 py-2 mt-4'>Add Item</button>
                </form>
                <h1 className='text-white text-center font-bold text-lg my-2'>OR</h1>
                <Link to="/shopitems"><button className='bg-red-400 w-[400px] h-[45px] rounded-md font-medium text-[17px] flex justify-center items-center text-white px-2 py-2'>Continue Shopping</button></Link>
            </div>

        </div>
    )
}

export default AddData