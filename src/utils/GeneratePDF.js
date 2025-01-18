import { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const GeneratePDF = ({ divRef }) => {
  const handleDownload = () => {
    const input = divRef.current;

    // Set up styles to remove margin/padding globally
    document.body.style.margin = "0";
    document.body.style.padding = "0";

    // Use html2canvas to capture the content of the div and generate a canvas
    html2canvas(input, { scale: 2, logging: false, useCORS: true }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait", // Adjust orientation if needed
        unit: "px",              // Use pixels for measurements
      });

      const imageProperties = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      let contentHeight = (imageProperties.height * pdfWidth) / imageProperties.width;

      let yPosition = 0;
      let remainingHeight = contentHeight;

      // Add the first image to the PDF
      pdf.addImage(imgData, "PNG", 0, yPosition, pdfWidth, pdfHeight);
      remainingHeight -= pdfHeight;

      // If the content exceeds one page, add subsequent pages
      while (remainingHeight > 0) {
        yPosition = -remainingHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, yPosition, pdfWidth, pdfHeight);
        remainingHeight -= pdfHeight;
      }

      // Save the PDF
      pdf.save("Resume.pdf");

      // Reset margin and padding after PDF generation
      document.body.style.margin = "";
      document.body.style.padding = "";
    });
  };

  return (
    <button
      className="w-full p-2 bg-blue-600 text-white rounded-lg mt-4 z-50"
      onClick={handleDownload}
    >
      Download PDF
    </button>
  );
};

export default GeneratePDF;
