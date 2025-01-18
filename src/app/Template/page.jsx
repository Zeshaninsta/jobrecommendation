"use client";
import { useRef } from "react";
import GeneratePDF from "@/utils/GeneratePDF";


const CV = ({ formData }) => {
  const resumeRef = useRef(null);
  return (
    <div className="w-full min-h-screen">
      <div ref={resumeRef} className="w-full border border-gray-400 px-8 py-12">
      {/* Header Section */}
      <div className="w-full flex justify-between gap-2 ">
        <div className="flex flex-col justify-start items-center text-start gap-2">
          <h1 className="text-blueTitle text-4xl font-black">
            {formData.fullName || "EMRAN MOHAMMED YAKOB"}
          </h1>
          <p className="w-full text-gray-800 text-sm">
            {formData.role || "Experienced Frontend Engineer"}
          </p>
        </div>
        <div className="">
          <h1 className="text-black text-xs">
            {formData.phoneNumber || "+251928137925"}
          </h1>
          <h1 className="text-black text-xs">
            {formData.email || "zeshaninsta@gmail.com"}
          </h1>
          <div className="flex gap-1">
            <p className="text-black text-xs ">
              {formData.city || "Robe Bale"}
            </p>
            <p className="text-black text-xs ">
              {formData.country || "Ethiopia"}
            </p>
          </div>
          <p className="text-black text-xs ">
            {formData.github || "github.com/zeshaninsta"}
          </p>
          <p className="text-black text-xs ">
            {formData.linkedin || "linkedin.com/in/zeshaninsta"}
          </p>
        </div>
      </div>

      <div className="w-full h-[1px] my-2 bg-black"></div>
      <h1 className="text-gray-700 text-sm leading-relaxed w-full text-start my-2">
        {formData.result ||
          formData.summary ||
          "Highly motivated and results-oriented Information Technology graduate with proven experience in web development (React, Node.js, Flask) and machine learning"}
      </h1>
      <div className="w-full h-[1px] my-2 bg-black"></div>

      {/* Relevant Experience Section */}
      <div>
        <h1 className="text-blueTitle font-semibold text-sm leading-relaxed w-full text-start my-2">
          RELEVANT EXPERIENCE
        </h1>
        {formData.workExperiences && formData.workExperiences.length > 0 ? (
          formData.workExperiences.map((experience, index) => (
            <div key={index} className="mb-1">
              <div className="flex gap-1 text-sm">
                <p className="text-black">{experience.jobtitle || "Mentor"},</p>
                <p className="text-gray-700">
                  {experience.cname || "Madda Walabu University"}
                </p>
              </div>
              <div className="flex gap-2 text-xs">
                <h1 className="text-gray-700">
                  {experience.SDates || "Jun-12-2022"}
                </h1>
                <span>-</span>
                <h1 className="text-gray-700">
                  {experience.EDates || "Feb-22-2024"}
                </h1>
              </div>
              <ul className="w-full list-disc text-[13px] py-1 px-8">
                <li className="text-gray-800">
                  {experience.jdesc ||
                    "Lead the website development team for the Computer Technology Club (CTC), providing outstanding leadership and overseeing the development of the club’s official website using ReactJS and TailwindCSS."}
                </li>
              </ul>
            </div>
          ))
        ) : (
          // Default experience if no work experience is provided
          <div className="mb-4">
            <div className="flex gap-1 text-sm">
              <p className="text-black">Mentor,</p>
              <p className="text-gray-700">Madda Walabu University</p>
            </div>
            <div className="flex gap-2 text-xs">
              <h1 className="text-gray-700">Jun-12-2022</h1>
              <span>-</span>
              <h1 className="text-gray-700">Feb-22-2024</h1>
            </div>
            <ul className="w-full list-disc text-[13px] py-1 px-8">
              <li className="text-gray-800">
                Lead the website development team for the Computer Technology
                Club (CTC), providing outstanding leadership and overseeing the
                development of the club’s official website using ReactJS and
                TailwindCSS.
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Education Section */}
      <div>
        <h1 className="text-blueTitle font-semibold text-sm leading-relaxed w-full text-start my-2">
          EDUCATION
        </h1>

        {/* Dynamically render education entries */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
          {formData?.educations && formData?.educations.length > 0 ? (
            formData.educations.map((edu, index) => (
              <div key={index} className="w-full mb-4 relative ">
                <div className="absolute -left-3 w-[1px] h-full bg-gray-800"></div>
                <div className="relative">
                  <div className="absolute -left-4 top-1 w-2 h-2 rounded-full bg-gray-700 "></div>
                  <p className="text-black text-sm">
                    {edu?.institue || "Madda Walabu University"}
                  </p>
                  <p className="text-gray-700 text-sm">
                    {edu?.educationLevel ||
                      "Bachelor of Science in Information Technology"}
                  </p>
                  <p className="text-gray-700 text-xs">
                    {edu?.graduation || "March-19-2024"}
                  </p>
                </div>
              </div>
            ))
          ) : (
            // Default display when no education is provided
            <div>
              <p className="text-black text-sm">Madda Walabu University</p>
              <p className="text-gray-700 text-sm">
                Bachelor of Science in Information Technology
              </p>
              <p className="text-gray-700 text-xs">March-19-2024</p>
            </div>
          )}
        </div>
      </div>

      {/* Skills Section */}
      <div>
        <h1 className="text-blueTitle font-semibold text-sm leading-relaxed w-full text-start my-2">
          SKILLS
        </h1>
        <ul className="list-disc pl-5 grid grid-cols-2">
          {(formData.skills && formData.skills.length > 0
            ? formData.skills
            : ["ReactJs", "NextJs", "Python", "Javascript", "C++", "C#", "Java"]
          ).map((skill, index) => (
            <li key={index} className="text-gray-700 text-sm">
              {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* Achievements Section */}
      <div>
        <h1 className="text-blueTitle font-semibold text-sm leading-relaxed w-full text-start my-2">
          ACHIEVEMENTS
        </h1>

        {/* Check if certificates are provided in formData */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
          {formData?.certificates && formData.certificates.length > 0 ? (
            formData.certificates.map((cert, index) => (
              <div key={index} className="w-full relative mb-2">
                <div className="absolute -left-3 w-[1px] h-full bg-gray-800"></div>
                <div className="relative">
                  <div className="absolute -left-4 top-1 w-2 h-2 rounded-full bg-gray-700 "></div>
                  <h1 className="text-gray-700 text-sm">
                    {cert.CertificateName || "Mentor of CTC"}
                  </h1>
                  <div className="flex flex-col gap-1 text-gray-700 text-xs">
                    <h1 className="">
                      {cert.CertificateInstitue || "CTC at MWU"}
                    </h1>
                    <h1>{cert.CertificateDate || "Feb-25-2024"}</h1>
                  </div>
                </div>
              </div>
            ))
          ) : (
            // If no certificates are available, display default
            <div>
              <h1 className="text-gray-700 text-sm">{"Mentor of CTC"}</h1>
              <div className="flex gap-1 text-gray-700 text-xs">
                <h1>{"CTC at MWU"}</h1>
                <h1>{"Feb-25-2024"}</h1>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Keywords Section */}
      <div>
        <h1 className="text-blueTitle font-semibold text-sm leading-relaxed w-full text-start my-2">
          KEYWORDS
        </h1>
        <h1 className="text-gray-700 text-sm">
          {formData.keyword || "Full Stack Developer, Reactjs Developer"}
        </h1>
      </div>
      </div>
      <div className="w-full p-2 z-50">
      <GeneratePDF divRef={resumeRef} />
      </div>
    </div>
  );
};

export default CV;
