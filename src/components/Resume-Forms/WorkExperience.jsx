import React, { useState } from "react";
import { FiPlusCircle, FiTrash2 } from "react-icons/fi";

const WorkExperience = ({ formData, handleInputChange }) => {
  const [currentExperience, setCurrentExperience] = useState({
    jobtitle: "",
    cname: "",
    SDates: "",
    EDates: "",
    jdesc: "",
  });

  const [workExperiences, setWorkExperiences] = useState(
    formData?.workExperiences || []
  );

  const handleAddExperience = () => {
    if (
      currentExperience.jobtitle &&
      currentExperience.cname &&
      currentExperience.SDates &&
      currentExperience.EDates &&
      currentExperience.jdesc
    ) {
      const updatedExperiences = [...workExperiences, currentExperience];
      setWorkExperiences(updatedExperiences);
      setCurrentExperience({
        jobtitle: "",
        cname: "",
        SDates: "",
        EDates: "",
        jdesc: "",
      });
      handleInputChange({ target: { name: "workExperiences", value: updatedExperiences } });
    } else {
      alert("Please fill in all fields before adding the experience.");
    }
  };

  const handleDeleteExperience = (index) => {
    const updatedExperiences = workExperiences.filter((_, i) => i !== index);
    setWorkExperiences(updatedExperiences);
    handleInputChange({ target: { name: "workExperiences", value: updatedExperiences } });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentExperience({ ...currentExperience, [name]: value });
  };

  return (
    <div className="w-full">
      <div className="w-full flex flex-col justify-start items-center gap-2">
        <div className="w-full bg-black text-white flex justify-between items-center p-3">
          <h1 className="w-full">Work Experience</h1>
          <div
            className="text-white text-2xl cursor-pointer"
            onClick={handleAddExperience}
            aria-label="Add Work Experience"
          >
            <FiPlusCircle />
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-2">
          <div className="w-full space-y-2">
            <label>Job Title</label>
            <input
              type="text"
              name="jobtitle"
              value={currentExperience.jobtitle}
              onChange={handleChange}
              className="w-full px-2 py-3 outline-none border border-gray-400"
            />
          </div>
          <div className="w-full space-y-2">
            <label>Company Names</label>
            <input
              type="text"
              name="cname"
              value={currentExperience.cname}
              onChange={handleChange}
              className="w-full px-2 py-3 outline-none border border-gray-400"
            />
          </div>
          <div className="w-full space-y-2">
            <label>Start Date</label>
            <input
              type="date"
              name="SDates"
              value={currentExperience.SDates}
              onChange={handleChange}
              className="w-full px-2 py-3 outline-none border border-gray-400"
            />
          </div>
          <div className="w-full space-y-2">
            <label>End Date</label>
            <input
              type="date"
              name="EDates"
              value={currentExperience.EDates}
              onChange={handleChange}
              className="w-full px-2 py-3 outline-none border border-gray-400"
            />
          </div>
          <div className="w-full space-y-2 col-span-2">
            <h1>Job Description</h1>
            <textarea
              name="jdesc"
              value={currentExperience.jdesc}
              onChange={handleChange}
              placeholder="I developed the frontend...."
              className="w-full resize-none border border-gray-400 px-2 py-3 outline-none"
            ></textarea>
          </div>
        </div>

        {/* List of added work experiences */}
        <div className="w-full mt-4">
          {workExperiences.map((experience, index) => (
            <div
              key={index}
              className="w-full flex justify-between items-center border-b border-gray-400 py-2"
            >
              <div>
                <h2 className="font-bold">{experience.jobtitle}</h2>
                <p>{experience.cname}</p>
                <p>
                  {experience.SDates} - {experience.EDates}
                </p>
                <p>{experience.jdesc}</p>
              </div>
              <button
                className="text-red-500 text-xl"
                onClick={() => handleDeleteExperience(index)}
                aria-label="Delete Work Experience"
              >
                <FiTrash2 />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
