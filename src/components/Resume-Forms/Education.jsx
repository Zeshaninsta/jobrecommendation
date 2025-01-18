import React, { useState } from "react";
import { FiPlusCircle, FiTrash } from "react-icons/fi";

const Education = ({ formData, handleInputChange }) => {
  const [educations, setEducations] = useState(formData?.educations || []);
  const [currentEducation, setCurrentEducation] = useState({
    educationLevel: "",
    institue: "",
    graduation: "",
  });

  // Add current education to the list
  const handleAddEducation = () => {
    if (
      currentEducation.educationLevel &&
      currentEducation.institue &&
      currentEducation.graduation
    ) {
      const updatedEducations = [...educations, currentEducation];
      setEducations(updatedEducations);
      setCurrentEducation({
        educationLevel: "",
        institue: "",
        graduation: "",
      });
      handleInputChange({
        target: { name: "educations", value: updatedEducations },
      });
    } else {
      alert("Please fill in all fields before adding the education.");
    }
  };

  // Remove specific education entry
  const handleDeleteEducation = (index) => {
    const updatedEducations = educations.filter((_, i) => i !== index);
    setEducations(updatedEducations);
    handleInputChange({
      target: { name: "educations", value: updatedEducations },
    });
  };

  return (
    <div className="w-full">
      <div className="flex flex-col justify-start items-center gap-2">
        <div className="w-full flex justify-between items-center p-3 bg-black text-white">
          <h1 className="w-full">Education</h1>
          <button
            onClick={handleAddEducation}
            className="w-full flex justify-end items-center gap-2 text-white px-3 py-2 cursor-pointer"
          >
            <FiPlusCircle className="text-xl" />
            Add Education
          </button>
        </div>
        <div className="w-full grid grid-cols-2 gap-2">
          <div className="w-full space-y-2">
            <label>Education Level</label>
            <input
              type="text"
              name="educationLevel"
              value={currentEducation.educationLevel}
              onChange={(e) =>
                setCurrentEducation({
                  ...currentEducation,
                  educationLevel: e.target.value,
                })
              }
              placeholder="Bachelor of Science in Information Technology"
              className="w-full px-2 py-3 outline-none border border-gray-400"
            />
          </div>
          <div className="w-full space-y-2">
            <label>Institution</label>
            <input
              type="text"
              name="institue"
              value={currentEducation.institue}
              onChange={(e) =>
                setCurrentEducation({
                  ...currentEducation,
                  institue: e.target.value,
                })
              }
              placeholder="Addis Ababa Science and Technology University"
              className="w-full px-2 py-3 outline-none border border-gray-400"
            />
          </div>
          <div className="w-full space-y-2 col-span-2">
            <label>Graduation Date</label>
            <input
              type="date"
              name="graduation"
              value={currentEducation.graduation}
              onChange={(e) =>
                setCurrentEducation({
                  ...currentEducation,
                  graduation: e.target.value,
                })
              }
              className="w-full px-2 py-3 outline-none border border-gray-400"
            />
          </div>
        </div>
      </div>

      {/* Display list of education entries */}
      <div className="mt-4 w-full">
        {educations.map((edu, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 p-3 border border-gray-300 mb-2"
          >
            <div className="flex justify-between items-center">
              <h2 className="font-semibold">{edu.educationLevel || "N/A"}</h2>
              <button
                onClick={() => handleDeleteEducation(index)}
                className="text-red-500"
              >
                <FiTrash />
              </button>
            </div>
            <p className="text-sm text-gray-700">
              {edu.institue || "Institution Name"}
            </p>
            <p className="text-xs text-gray-500">
              {edu.graduation || "Graduation Date"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
