import React from 'react'

const KeyWords = ({formData, handleInputChange}) => {
  return (
    <div className='w-full'>
        <div className='flex flex-col justify-start items-center gap-2'>
        <h1 className="w-full bg-black text-white p-3">Relevent Keywords</h1>
            <input 
            type="text"
            name='keyword'
            value={formData?.keyword || ''}
            onChange={handleInputChange}
            className='w-full py-3 px-2 outline-none border border-gray-400 '
            placeholder='data analyises, full stack developer'
            />
        </div>
    </div>
  )
}

export default KeyWords