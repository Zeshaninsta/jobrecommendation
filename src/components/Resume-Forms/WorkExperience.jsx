import React from 'react'

const WorkExperience = ({ formData, handleInputChange}) => {
  return (
    <div className='w-full'>
        <div className='w-full flex flex-col justify-start items-center gap-2'>
        <h1 className="w-full bg-black text-white p-3">Work Experience</h1>
        <div className='w-full grid grid-cols-2 gap-2'>
            <div className='w-full space-y-2'>
                <label>Job Title</label>
                <input 
                type="text"
                name='jobtitle'
                value={formData?.jobtitle || ''}
                onChange={handleInputChange}
                className='w-full px-2 py-3 outline-none border border-gray-400'
                />
            </div>
            <div className='w-full space-y-2'>
                <label>Company Names</label>
                <input 
                type="text"
                name='cname'
                value={formData?.cname || ''}
                onChange={handleInputChange}
                className='w-full px-2 py-3 outline-none border border-gray-400'
                />
            </div>
            <div className='w-full space-y-2'>
                <label>Start Date</label>
                <input 
                type="date"
                name='SDates'
                value={formData?.SDates || ''}
                onChange={handleInputChange}
                className='w-full px-2 py-3 outline-none border border-gray-400'
                />
            </div>
            <div className='w-full space-y-2'>
                <label>End Date</label>
                <input 
                type="date"
                name='EDates'
                value={formData?.EDates || ''}
                onChange={handleInputChange}
                className='w-full px-2 py-3 outline-none border border-gray-400'
                />
            </div>
            <div className='w-full space-y-2 col-span-2'>
            <h1>Job Description</h1>
            <textarea 
            name="jdesc" 
            onChange={handleInputChange} 
            value={formData?.jdesc || ''}
            placeholder='i Developed the frontend....'
            className='w-full resize-none border border-gray-400 px-2 py-3 outline-none'
            ></textarea>
        </div>
        </div>
        </div>
    </div>
  )
}

export default WorkExperience