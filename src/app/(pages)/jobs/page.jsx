'use client';

import { useEffect, useState } from 'react';
import JobCard from '@/components/JobCard'; // Adjust the path based on your folder structure
import Searchbar from '@/components/Searchbar';

export default function JobsPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('/api/jobs');
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="w-full p-6">
        <Searchbar />
      <h1 className="text-2xl font-bold mb-4">Available Job Listings</h1>
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
  );
}
