'use client'
import React from "react";

const ContactInformation = ({ formData, handleInputChange }) => {
  return (
    <div className="w-full ">
      <div className="flex flex-col justify-center items-center gap-4 h-full">
        <h1 className="w-full bg-black text-white p-3">Contact Information</h1>
        <div className="w-full gap-2 grid grid-cols-2">
          <div className="space-y-2">
            <label className="flex">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData?.fullName || ''}
              onChange={handleInputChange}
              required
              placeholder="John Smith"
              className="w-full outline-none border border-gray-400 px-2 py-3"
            />
          </div>
          <div className="space-y-2">
            <label className="flex">
              Role<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="role"
              value={formData?.role || ''}
              onChange={handleInputChange}
              required
              placeholder="Full Stack Developer"
              className="w-full outline-none border border-gray-400 px-2 py-3"
            />
          </div>
          <div className="space-y-2">
            <label className="flex">
              Phone Number<span className="text-red-500">*</span>
            </label>
            <input
              type="cell"
              name="phoneNumber"
              value={formData?.phoneNumber || ''}
              onChange={handleInputChange}
              required
              placeholder="+251..."
              className="w-full outline-none border border-gray-400 px-2 py-3"
            />
          </div>
          <div className="space-y-2">
            <label className="flex">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData?.email || ''}
              onChange={handleInputChange}
              required
              placeholder="resume@info.com"
              className="w-full outline-none border border-gray-400 px-2 py-3"
            />
          </div>
          <div className="space-y-2">
            <label className="flex">
              Github
            </label>
            <input
              type="url"
              name="github"
              value={formData?.github || ''}
              onChange={handleInputChange}
              placeholder="github.com/username"
              className="w-full outline-none border border-gray-400 px-2 py-3"
            />
          </div>
          <div className="space-y-2">
            <label className="flex">
              Linkedin
            </label>
            <input
              type="url"
              name="linkedin"
              value={formData?.linkedin || ''}
              onChange={handleInputChange}
              placeholder="linkedin.com/in/username"
              className="w-full outline-none border border-gray-400 px-2 py-3"
            />
          </div>
          <div className="w-full space-y-2 grid grid-cols-3 gap-4 col-span-2">
            <div className="w-full flex flex-col gap-2">
            <label className="flex">
              City<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="city"
              value={formData?.city || ''}
              required
              onChange={handleInputChange}
              placeholder="Addis Ababa"
              className="w-full outline-none border border-gray-400 px-2 py-3"
            />
            </div>
            <div>
            <label className="flex">
              State<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="state"
              value={formData?.state || ''}
              onChange={handleInputChange}
              placeholder="Addis Ababa"
              className="w-full outline-none border border-gray-400 px-2 py-3"
            />
            </div>
            <div>
            <label className="flex">
              Country<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="country"
              value={formData?.country || ''}
              required
              onChange={handleInputChange}
              placeholder="Ethiopia"
              className="w-full outline-none border border-gray-400 px-2 py-3"
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
