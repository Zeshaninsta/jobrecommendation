"use client";
import {useEffect} from "react";
const CV = ({ formData }) => {
  return (
    <div className="w-full min-h-screen border border-gray-400 px-8 py-12">
        <div className="flex gap-2">
            <div className="flex flex-col justify-start items-center text-start gap-2">
      <h1 className="text-blueTitle text-4xl font-black">
        {formData.fullName || "EMRAN MOHAMMED YAKOB"}
      </h1>
      <p className="w-full text-gray-800 text-sm">{formData.role || 'Experianced Frontend Engineer'}</p>
      </div>
      <div className="flex-1">
      <h1 className="text-black text-xs">{formData.phoneNumber || "+251928137925"}</h1>
      <h1 className="text-black text-xs">
        {formData.email || "zeshaninsta@gmail.com"}
      </h1>
      <div className="flex gap-1">
      <p className="text-black text-xs ">{formData.city || "Robe Bale"}</p>
      {/* <p className="text-black text-xs ">{formData.state || "Oromia"}</p> */}
      <p className="text-black text-xs ">{formData.country || "Ethiopia"}</p>
      </div>
      <p className="text-black text-xs ">{formData.github || "github.com/zeshaninsta"}</p>
      <p className="text-black text-xs ">{formData.linkedin || "linkedin.com/in/zeshaninsta"}</p>
      </div>
      </div>
      <div className="w-full h-[1px] my-2 bg-black"></div>
      <h1 className="text-gray-700 text-sm leading-relaxed w-full text-start my-2">
      {formData.result || formData.summary ||
          "Highly motivated and results-oriented Information Technology graduate with proven experience in web development (React, Node.js, Flask) and machine learning"}
      </h1>
      <div className="w-full h-[1px] my-2 bg-black"></div>
      <div>
        <h1 className="text-blueTitle font-semibold text-sm leading-relaxed w-full text-start my-2">
        RELEVANT EXPERIENCE
        </h1>
        <div className="flex gap-1 text-sm">
      <p className="text-black">{formData.jobtitle || "Mentor"},</p>
      <p className="text-gray-700">
        {formData.cname || "Madda Walabu University"}
      </p>
      </div>
      <div className="flex gap-2 text-xs">
      <h1 className="text-gray-700">{formData.SDates || "Jun-12-2022"}</h1>
      <span>-</span>
      <h1 className="text-gray-700">{formData.EDates || "Feb-22-2024"}</h1>
      </div>
      <ul className="w-full list-disc text-[13px] py-1 px-8">
      <li className="text-gray-800">
        {formData.jdesc ||
          "Lead the website development team for the Computer Technology Club (CTC), providing outstanding leadership and overseeing the development of the club’s official website using ReactJS and TailwindCSS."}
      </li>
      </ul>
      </div>
      <div>
      <h1 className="text-blueTitle font-semibold text-sm leading-relaxed w-full text-start my-2">
        EDUCATION
        </h1>
      
      <p className="text-black text-sm">
        {formData.institue || "Madda Walabu University"}
      </p>
      <p className="text-gray-700 text-sm ">
        {formData.educationLevel ||
          "Bachlor of Science in Information Technology"}
      </p>
      <p className="text-gray-700 text-xs">{formData.graduation || "March-19-2024"}</p>
      </div>
      <div>
      <h1 className="text-blueTitle font-semibold text-sm leading-relaxed w-full text-start my-2">
        SKILL
        </h1>
      
      <h1 className="text-gray-700 text-sm">
        {formData.skill ||
          "ReactJs, NextJs, Python, Javascript, C++, C#, Java "}
      </h1>
      <div>
      <h1 className="text-blueTitle font-semibold text-sm leading-relaxed w-full text-start my-2">
        ACHIVEMENT
        </h1>
      <h1 className="text-gray-700 text-sm">
        {formData.CertificateName || "Mentro of CTC"}
      </h1>
      </div>
      <div className="flex gap-1 text-gray-700 text-xs">
      <h1>
        {formData.CertificateInstitue || "CTC at MWU"}
      </h1>
      <h1>
        {formData.CertificateDate || "Feb-25-2024"}
      </h1>
      </div>
      </div>
      <div>
      <h1 className="text-blueTitle font-semibold text-sm leading-relaxed w-full text-start my-2">
        KEYWORD
        </h1>
      <h1 className="text-gray-700 text-sm">
        {formData.keyword || "Full Stack Developer, Reactjs Developer"}
      </h1>
      </div>
    </div>
  );
};
export default CV;
