import Image from "next/image";
import { FaMapMarkerAlt, FaBriefcase, FaCalendarAlt, FaExternalLinkAlt } from "react-icons/fa";

export default function JobCard({ job }) {
  // Helper function to safely render data
  const safeRender = (data) => {
    if (!data) return 'N/A';
    if (typeof data === 'string') return data;
    if (Array.isArray(data)) return data.join(', ');
    if (typeof data === 'object') {
      return data.name || JSON.stringify(data); // Use a "name" property if available, else stringify
    }
    return String(data);
  };

  return (
    <div className="relative bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
      <div className="flex items-start space-x-4 ">
        {/* {job.organization_logo && (
          <Image
            src={job.organization_logo}
            alt={job.organization}
            width={60}
            height={60}
            className="w-16 h-16 rounded-md object-cover"
          />
        )} */}
        <div className="flex-1">
          <h2 className="text-xl font-bold text-gray-800">{job.title}</h2>
          <p className="text-sm text-gray-500">{job.organization}</p>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        <div className="flex items-center text-gray-600">
          <FaMapMarkerAlt className="text-blue-500 mr-2" />
          <span>
  {job.locations_raw?.[0]?.address?.addressLocality || 
   job.locations_raw?.[0]?.address?.addressRegion || 
   job.locations_raw?.[0]?.address?.addressCountry || 
   'Remote'}
</span>
        </div>
        <div className="flex items-center text-gray-600">
          <FaBriefcase className="text-green-500 mr-2" />
          <span>{safeRender(job.employment_type || 'Full-Time')}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <FaCalendarAlt className="text-yellow-500 mr-2" />
          <span>Posted: {new Date(job.date_posted).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <FaCalendarAlt className="text-red-500 mr-2" />
          <span>Expires: {new Date(job.date_validthrough).toLocaleDateString()}</span>
        </div>
      </div>

      <div className="mt-6 flex justify-between items-center">
        <div className="group">
        <p
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors"
        >
          Compnay Description <FaExternalLinkAlt className="ml-2" />
        </p>
      <div className="hidden group-hover:flex w-full absolute top-0 bg-white h-full  overflow-y-auto  flex-col p-5 ">
        <h1>Job Description</h1>
        <p className="w-full leading-relaxed text-sm">
            {job.linkedin_org_description}
        </p>
      </div>
      </div>
        <a
          href={job.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors"
        >
          Apply Now <FaExternalLinkAlt className="ml-2" />
        </a>
      </div>

    </div>
  );
}
