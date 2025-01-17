import { useState, useEffect } from "react";
import { formatText, stripHtmlTags } from "@/utils/FormatText";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { TbCircleDotted } from "react-icons/tb";

const Summary = ({ formData, handleInputChange }) => {
  const [clickSearch, setClickSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  useEffect(() => {
    const FetchData = async () => {
      if (!clickSearch) return;

      setLoading(true);
      try {
        const response = await fetch(
          `/api/resume-enhancer?userInput=${encodeURIComponent(clickSearch)}`
        );
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
        const contentText = data?.result || "No content available.";

        const plainText = stripHtmlTags(contentText);
        setResult(plainText);
      } catch (error) {
        console.error("Error fetching data:", error.message, error.stack);
        setResult({ error: error.message });
      } finally {
        setLoading(false);
      }
    };

    FetchData();
  }, [clickSearch]);

  const TriggerSearch = () => {
    setClickSearch(formData?.summary);
  };

  const handleValueChange = (e) => {
    const newValue = e.target.value;
    setResult(newValue); // Update the local `result` state
    handleInputChange({ target: { name: "summary", value: newValue } });
  };
  return (
    <div className="w-full">
      <div className="flex flex-col justify-start items-center gap-2">
        <h1 className="w-full bg-black text-white p-3">Professional Summary</h1>
        <div className="w-full flex justify-between items-center px-2 gap-2">
          <textarea
            name="summary"
            onChange={handleValueChange}
            value={result || formData.summary}
            placeholder="Highly motivated and results-oriented...."
            className="w-full resize-none border border-gray-400 px-2 py-3 outline-none"
          ></textarea>
          {loading ? (
            <div className=" flex justify-center items-center cursor-pointer p-5 border h-[70px] border-gray-400">
              <TbCircleDotted className="animate-spin text-xl"/>
            </div>
          ) : (
            <div
              onClick={TriggerSearch}
              className="flex justify-center items-center cursor-pointer p-5 border h-[70px] border-gray-400"
            >
              <FaWandMagicSparkles />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Summary;
