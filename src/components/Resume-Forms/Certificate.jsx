import React, { useState } from 'react';
import {FiPlusCircle, FiTrash } from 'react-icons/fi';  // Ensure you import FiTrash for the delete icon

const Certificate = ({ formData, handleInputChange }) => {
  const [certificates, setCertificates] = useState(formData?.certificates || []);
  const [currentCertificate, setCurrentCertificate] = useState({
    CertificateName: '',
    CertificateInstitue: '',
    CertificateDate: '',
  });

  // Handle input change for current certificate
  const handleInputChangeForCertificate = (e) => {
    const { name, value } = e.target;
    setCurrentCertificate((prev) => ({ ...prev, [name]: value }));
  };

  // Add current certificate to the list
  const handleAddCertificate = () => {
    if (currentCertificate.CertificateName && currentCertificate.CertificateInstitue && currentCertificate.CertificateDate) {
      setCertificates((prev) => [...prev, currentCertificate]);
      setCurrentCertificate({
        CertificateName: '',
        CertificateInstitue: '',
        CertificateDate: '',
      });

      // Update the parent component's state through the handleInputChange function
      handleInputChange({ target: { name: 'certificates', value: [...certificates, currentCertificate] } });
    } else {
      alert("Please fill in all fields before adding the certificate.");
    }
  };

  // Delete a certificate
  const handleDeleteCertificate = (index) => {
    const updatedCertificates = certificates.filter((_, i) => i !== index);
    setCertificates(updatedCertificates);

    // Update the parent component's state after deleting a certificate
    handleInputChange({ target: { name: 'certificates', value: updatedCertificates } });
  };

  return (
    <div className='w-full'>
      <div className='flex flex-col justify-start items-center gap-2'>
      <div className="w-full flex justify-between items-center p-3 bg-black text-white">
        <h1 className="w-full">Certificate</h1>
         <button
                    onClick={handleAddCertificate}
                    className="w-full flex justify-end items-center gap-2 text-white px-3 py-2 cursor-pointer"
                  >
                    <FiPlusCircle className="text-xl" />
                    Add Certificate
                  </button>
                  </div>
        <div className='w-full grid grid-cols-2 gap-2'>
          <div className='w-full space-y-2'>
            <label>Certificate Name</label>
            <input
              type="text"
              name='CertificateName'
              value={currentCertificate.CertificateName}
              onChange={handleInputChangeForCertificate}
              placeholder='Web Development Mentor'
              className='w-full px-2 py-3 outline-none border border-gray-400'
            />
          </div>
          <div className='w-full space-y-2'>
            <label>Institution</label>
            <input
              type="text"
              name='CertificateInstitue'
              value={currentCertificate.CertificateInstitue}
              onChange={handleInputChangeForCertificate}
              placeholder='Computer Technology Club'
              className='w-full px-2 py-3 outline-none border border-gray-400'
            />
          </div>
          <div className='w-full space-y-2 col-span-2'>
            <label>Date of issued</label>
            <input
              type="date"
              name='CertificateDate'
              value={currentCertificate.CertificateDate}
              onChange={handleInputChangeForCertificate}
              className='w-full px-2 py-3 outline-none border border-gray-400'
            />
          </div>
        </div>

        {/* Display list of certificates */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      {certificates.map((cert, index) => (
        <div
          key={index}
          className="relative bg-white p-8 rounded-lg  space-y-4 border-4 border-dashed border-gray-300"
        >
          {/* Certificate Title */}
          <div className="flex justify-center items-center mb-4">
            <p className="text-2xl font-serif font-semibold text-gray-900">{cert.CertificateName || "Certificate Name"}</p>
          </div>

          {/* Certificate Content */}
          <div className="space-y-2 text-center">
            <p className="text-lg text-gray-800">{cert.CertificateInstitue || "Institution"}</p>
            <p className="text-sm text-gray-600">{cert.CertificateDate || "Date of Issue"}</p>
          </div>

          {/* Border Decoration */}
          <div className="absolute inset-0 border-8 border-double border-gray-200 rounded-lg pointer-events-none"></div>

          {/* Delete Button */}
          <button
            onClick={() => handleDeleteCertificate(index)}
            className="absolute bottom-2 right-2 flex items-center gap-1 bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded-md hover:bg-red-700 transition duration-200"
          >
            <FiTrash />
          </button>
        </div>
      ))}
    </div>
      </div>
    </div>
  );
};

export default Certificate;
