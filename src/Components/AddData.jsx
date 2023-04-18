import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const AddData = () => {
    // const [images, setImages] = useState([]);
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [imageFile1, setImageFile1] = useState(null);
    const [imageFile2, setImageFile2] = useState(null);
    const [imageFile3, setImageFile3] = useState(null);
    const [imageFile4, setImageFile4] = useState(null);

    const handleImageChange1 = (event) => {
        const file = event.target.files[0];
        setImageFile1(file);
    };
    const handleImageChange2 = (event) => {
        const file = event.target.files[0];
        setImageFile2(file);
    };
    const handleImageChange3 = (event) => {
        const file = event.target.files[0];
        setImageFile3(file);
    };
    const handleImageChange4 = (event) => {
        const file = event.target.files[0];
        setImageFile4(file);
    };



    const [selectedOption, setSelectedOption] = useState('');

    function handleOptionChange(event) {
        setSelectedOption(event.target.value);
    }

    const handleSubmit = () => {
        setTitle("")
        setSelectedOption("")
        setDesc("")
        setImageFile1(null)
        setImageFile2(null)
        setImageFile3(null)
        setImageFile4(null)
        alert(`${title} added`)
    }

    return (
        <div className=' bg-add bg-contain w-full h-screen flex justify-center items-center'>
            <div className='w-[600px] h-[800px] flex flex-col justify-center items-center bg-slate-400 rounded-xl bg-opacity-60'>
                <h1 className=' font-bold text-[35px] mb-3 top-0'>Add Items</h1>

                <form className='flex flex-col' onSubmit={handleSubmit}>
                    <label htmlFor="name" className=' text-white text-[20px]'>Enter the title of item</label>
                    <input className='bg-gray-100 mb-5 w-[400px] h-[38px] rounded-lg pl-3 outline-none font-semibold' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Eg. Chair...' type="text" />


                    <label htmlFor="dropdown" className=' text-white text-[20px]'>Select an option</label>
                    <select id="dropdown" value={selectedOption} className='outline-none rounded-lg h-[38px] pl-2 mb-5' onChange={handleOptionChange}>
                        <option value="" disabled hidden>Select an option</option>
                        <option value="option1">Chair</option>
                        <option value="option2">Dinning Tabel</option>
                        <option value="option3">Study Table</option>
                        <option value="option4">Bed</option>
                        <option value="option5">Sofa</option>
                    </select>

                    <label htmlFor="name" className='text-white text-[20px]'>Enter the description for the item</label>
                    <textarea className='bg-gray-100 mb-3 rounded-lg pl-3 outline-none py-1 text-base' value={desc} onChange={(e) => setDesc(e.target.value)} name="" id="" cols="30" rows="2" placeholder='It is a gaming chair with ergonomic features...'></textarea>

                    <div className='mb-2 flex'>
                        <label htmlFor="imageInput" className='mr-2'>Image 1:</label>
                        <input type="file" id="imageInput" onChange={handleImageChange1} accept="image/*" />
                        {imageFile1 && <img src={URL.createObjectURL(imageFile1)} className='w-[40px]' alt="pic 1" />}
                    </div>
                    <div className='mb-2 flex'>
                        <label htmlFor="imageInput" className='mr-2'>Image 2:</label>
                        <input type="file" id="imageInput" onChange={handleImageChange2} accept="image/*" />
                        {imageFile2 && <img src={URL.createObjectURL(imageFile2)} className='w-[40px]' alt="pic 1" />}
                    </div>
                    <div className='mb-2 flex'>
                        <label htmlFor="imageInput" className='mr-2'>Image 3:</label>
                        <input type="file" id="imageInput" onChange={handleImageChange3} accept="image/*" />
                        {imageFile3 && <img src={URL.createObjectURL(imageFile3)} className='w-[40px]' alt="pic 1" />}
                    </div>
                    <div className='mb-2 flex'>
                        <label htmlFor="imageInput" className='mr-2'>Image 4:</label>
                        <input type="file" id="imageInput" onChange={handleImageChange4} accept="image/*" />
                        {imageFile4 && <img src={URL.createObjectURL(imageFile4)} className='w-[40px]' alt="pic 1" />}
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