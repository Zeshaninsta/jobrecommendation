"use client";
import React, { useState, useEffect } from "react";
import { formatText } from "@/utils/FormatText";

const Page = () => {
  const [search, setSearch] = useState("");
  const [clickSearch, setClickSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const TriggerSearch = () => {
    setClickSearch(search);
    setSearch("");
  };

  useEffect(() => {
    const FetchData = async () => {
      if (!clickSearch) return;
  
      setLoading(true);
      try {
        const response = await fetch(`/api/resume-parser?userInput=${encodeURIComponent(clickSearch)}`);
        if (!response.ok) {
          let errorMessage = `HTTP Error: ${response.status}`;
          try {
            const errorData = await response.json();
            errorMessage += ` - ${errorData.error?.message || "Unknown error"}`;
          } catch {
            errorMessage += " - Unable to parse error details.";
          }
          throw new Error(errorMessage);
        }
  
        const data = await response.json();
        const contentText =
          data?.result || "No content available.";
  
        const formattedText = formatText(contentText);
        setResult(formattedText);
      } catch (error) {
        console.error("Error fetching data:", error.message, error.stack);
        setResult({ error: error.message });
      } finally {
        setLoading(false);
      }
    };
  
    FetchData();
  }, [clickSearch]);
  
  
  return (
    <div className="w-full min-h-screen p-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col justify-center items-center gap-4">
          <textarea
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none border border-gray-200 p-2 text-black resize-none"
          />
          <button
            className="px-4 py-2 text-white bg-blue-400 hover:bg-blue-600 duration-500 ease-in-out"
            onClick={TriggerSearch}
          >
            Search
          </button>
        </div>
        <div className="mt-5">
          {loading ? (
            <p>Loading...</p>
          ) : result ? (
            result.error ? (
              <p className="text-red-500">{result.error}</p>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: result }} />
            )
          ) : (
            <p>No data to display.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
