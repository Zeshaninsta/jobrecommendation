"use clinet ";
import { useState, useEffect, use } from "react";

const Searchbar = () => {
  const [change, setChange] = useState("");
  const [title, setTitle] = useState("");
  const [jobs, setJobs] = useState("");
  const [loading, setLoading] = useState(false);
  console.log(change);
  const sendSearchData = () => {
    setTitle(change);
    console.log(title);
    setChange("");
  };

  useEffect(() => {
    if (!title) return; 
    const SearchJobs = async () => {
        setLoading(true);
      try {
        const response = await fetch(`/api/search?title=${title}`);
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };
    SearchJobs();
  }, []);

  return (
    <div className="relative flex w-full p-4 gap-4">
      <input
        type="search"
        onChange={(e) => setChange(e.target.value)}
        value={change}
        placeholder="search..."
        className="w-full outline-none  border border-gray-200 p-2"
      />
      <button
        onClick={sendSearchData}
        className="px-4 py-2 bg-blue-400 text-white hover:bg-blue-600 duration-500 transition-all ease-out cursor-pointer"
      >
        search
      </button>
      <div className="absolute top-10 w-full">
        <div>
          {loading ? (
            <p>Loading jobs...</p>
          ) : jobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <p>No jobs found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
