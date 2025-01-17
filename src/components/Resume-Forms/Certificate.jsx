import React from 'react'

const Certificate = ({ formData, handleInputChange}) => {
  return (
    <div className='w-full'>
        <div className='flex flex-col justify-start items-center gap-2'>
        <h1 className="w-full bg-black text-white p-3">Certificate</h1>
        <div className='w-full grid grid-cols-2 gap-2'>
            <div className='w-full space-y-2'>
                <label>Certificate Name</label>
                <input 
                type="text"
                name='CertificateName'
                value={formData?.CertificateName || ''}
                onChange={handleInputChange}
                placeholder='Web Development Mentor'
                className='w-full px-2 py-3 outline-none border border-gray-400'
                />
            </div>
            <div className='w-full space-y-2'>
                <label>Institution</label>
                <input 
                type="text"
                name='CertificateInstitue'
                value={formData?.CertificateInstitue || ''}
                onChange={handleInputChange}
                placeholder='Computer Technology Club'
                className='w-full px-2 py-3 outline-none border border-gray-400'
                />
            </div>
            <div className='w-full space-y-2 col-span-2'>
                <label>Date of issued</label>
                <input 
                type="date"
                name='CertificateDate'
                value={formData?.CertificateDate || ''}
                onChange={handleInputChange}
                className='w-full px-2 py-3 outline-none border border-gray-400'
                />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Certificate