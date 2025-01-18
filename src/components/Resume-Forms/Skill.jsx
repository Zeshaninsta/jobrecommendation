'use client';
import React from 'react';
import { FiPlusCircle } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";

const Skill = ({ formData, handleInputChange }) => {
  // Add new skill to the formData.skills array
  const handleAddSkill = () => {
    const skill = formData.skill?.trim();
    const skillType = formData.skillType || '';
    const skillLevel = formData.skillLevel || '';
    
    if (skill && skillType && skillLevel) {
      const newSkill = `${skill} (${skillType}, ${skillLevel})`;
      if (!formData.skills.includes(newSkill)) {
        const newSkills = [...formData.skills, newSkill];
        handleInputChange({ target: { name: 'skills', value: newSkills } });
        handleInputChange({ target: { name: 'skill', value: '' } }); // Clear input field
      }
    }
  };

  // Remove a skill from the formData.skills array
  const handleSkillRemove = (index) => {
    const newSkills = formData.skills.filter((_, i) => i !== index);
    handleInputChange({ target: { name: 'skills', value: newSkills } });
  };

  const renderSkills = (formData.skills || []).map((skill, index) => (
    <div key={index} className="flex items-center gap-2">
      <input
        type="text"
        value={skill}
        readOnly
        className="w-full px-2 py-3 outline-none border border-gray-400"
        aria-label={`Skill ${index + 1}`}
      />
      <button
        onClick={() => handleSkillRemove(index)}
        className="text-red-500 text-2xl"
        aria-label={`Remove skill ${index + 1}`}
      >
        <FaTrashAlt />
      </button>
    </div>
  ));

  return (
    <div className="w-full">
      {/* Form Header */}
      <div className="flex justify-between items-center bg-black text-white p-3">
        <label htmlFor="skill">Skill</label>
        <button
          onClick={handleAddSkill}
          className="text-white text-2xl cursor-pointer"
          aria-label="Add skill"
        >
          <FiPlusCircle />
        </button>
      </div>

      {/* Skill Input Form */}
      <div className="w-full flex flex-col gap-2 mt-2">
        <select
          name="skillType"
          value={formData.skillType || ''}
          onChange={handleInputChange}
          className="bg-transparent p-2 border border-gray-400"
          aria-label="Skill type"
        >
          <option value="" disabled className="bg-white text-black">
            Select Skill Type
          </option>
          <option value="Soft Skill" className="bg-white text-black">
            Soft Skill
          </option>
          <option value="Hard Skill" className="bg-white text-black">
            Hard Skill
          </option>
        </select>
        <div className="grid grid-cols-2 w-full gap-4">
          <input
            type="text"
            name="skill"
            value={formData.skill || ''}
            onChange={handleInputChange}
            placeholder="Enter a skill"
            className="w-full px-2 py-3 outline-none border border-gray-400"
            aria-label="Skill name"
          />
          <select
            name="skillLevel"
            value={formData.skillLevel || ''}
            onChange={handleInputChange}
            className="bg-transparent p-2 border border-gray-400"
            aria-label="Skill level"
          >
            <option value="" disabled className="bg-white text-black">
              Select Skill Level
            </option>
            <option value="Beginner" className="bg-white text-black">
              Beginner
            </option>
            <option value="Intermediate" className="bg-white text-black">
              Intermediate
            </option>
            <option value="Professional" className="bg-white text-black">
              Professional
            </option>
          </select>
        </div>
      </div>

      {/* Render Skills */}
      <div className="mt-4 space-y-2">{renderSkills}</div>
    </div>
  );
};

export default Skill;
