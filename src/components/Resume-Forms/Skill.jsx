import React from 'react'

const Skill = ({formData, handleInputChange}) => {
  return (
    <div className='w-full'>
        <div className='flex flex-col justify-start items-center gap-2'>
        <h1 className="w-full bg-black text-white p-3">Skill</h1>
            <div className='w-full space-y-2'>
                <label>Skill</label>
                <input 
                type="text"
                name='skill'
                value={formData?.skill || ''}
                onChange={handleInputChange}
                className='w-full px-2 py-3 outline-none border border-gray-400'
                />
            </div>
        </div>
    </div>
  )
}

export default Skill