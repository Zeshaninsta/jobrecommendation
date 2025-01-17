"use client";
import { useState, useEffect } from "react";
import Certificate from "@/components/Resume-Forms/Certificate";
import ContactInformation from "@/components/Resume-Forms/ContactInformation";
import Education from "@/components/Resume-Forms/Education";
import KeyWords from "@/components/Resume-Forms/KeyWords";
import Skill from "@/components/Resume-Forms/Skill";
import Summary from "@/components/Resume-Forms/Summary";
import WorkExperience from "@/components/Resume-Forms/WorkExperience";
import CV from "@/app/Template/page";

const ResumeMaker = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    city: "",
    country: "",
    state: "",
    educationLevel: "",
    institue: "",
    graduation: "",
    skill: "",
    summary: "",
    jobtitle: "",
    cname: "",
    SDate: "",
    EDate: "",
    jdesc: "",
    CertificateName: "",
    CertificateInstitue: "",
    CertificateDate: "",
    keyword: "",
    github: "",
    linkedin: "",
    role: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div className="w-full max-w-7xl mx-auto space-y-2 py-12 relative">
      <h1 className="p-4 text-4xl text-center uppercase font-black">Build Your Resume Now.</h1>
      {/* i want this one to be scrollable, means. this one has a lot of information so it will be srollable */}
      <div className="w-full flex justify-evenly items-start gap-4">
        <div className="scrollable-container flex-1 space-y-5 h-screen overflow-y-auto">
          <ContactInformation
            formData={formData}
            handleInputChange={handleInputChange}
          />
          <Summary formData={formData} handleInputChange={handleInputChange} />
          <WorkExperience
            formData={formData}
            handleInputChange={handleInputChange}
          />
          <Education
            formData={formData}
            handleInputChange={handleInputChange}
          />
          <Skill formData={formData} handleInputChange={handleInputChange} />
          <Certificate
            formData={formData}
            handleInputChange={handleInputChange}
          />
          <KeyWords formData={formData} handleInputChange={handleInputChange} />
        </div>

        {/* i want this one to be sticky at the top  */}
        <div className="flex-1">
          <div className="sticky top-0 ">
            <CV formData={formData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeMaker;
