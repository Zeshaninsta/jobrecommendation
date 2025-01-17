import React from 'react'

const Education = ({ formData, handleInputChange}) => {
  return (
    <div className='w-full'>
        <div className='flex flex-col justify-start items-center gap-2'>
        <h1 className="w-full bg-black text-white p-3">Education</h1>
        <div className='w-full grid grid-cols-2 gap-2'>
            <div className='w-full space-y-2'>
                <label>Education Level</label>
                <input 
                type="text"
                name='educationLevel'
                value={formData?.educationLevel || ''}
                onChange={handleInputChange}
                placeholder='Bachelor of science in Information Technology'
                className='w-full px-2 py-3 outline-none border border-gray-400'
                />
            </div>
            <div className='w-full space-y-2'>
                <label>Institution</label>
                <input 
                type="text"
                name='institue'
                value={formData?.institue || ''}
                onChange={handleInputChange}
                placeholder='Addis Ababa science and Technology University'
                className='w-full px-2 py-3 outline-none border border-gray-400'
                />
            </div>
            <div className='w-full space-y-2 col-span-2'>
                <label>Graduation Date</label>
                <input 
                type="date"
                name='graduation'
                value={formData?.graduation || ''}
                onChange={handleInputChange}
                className='w-full px-2 py-3 outline-none border border-gray-400'
                />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Education