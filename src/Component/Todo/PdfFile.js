// import React, { useState } from "react";
// import { PDFDocument } from "pdf-lib"; // Import PDFDocument from pdf-lib
// import { Document, Page, pdfjs } from "react-pdf"; // Import Document, Page, and pdfjs from react-pdf

// const PDFViewer = () => {
//   const [mergedPdfFile, setMergedPdfFile] = useState(null);
//   const [numPages, setNumPages] = useState(null);

// const handleFileChange = async (event) => {
//   const files = event.target.files;
//   const buffers = await Promise.all(
//     [...files].map((file) => file.arrayBuffer())
//   );

//   const mergedPdf = await PDFDocument.create();
//   for (const pdfBuffer of buffers) {
//     const pdf = await PDFDocument.load(pdfBuffer);
//     const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
//     copiedPages.forEach((page) => mergedPdf.addPage(page));
//   }

//   const mergedPdfBuffer = await mergedPdf.save();
//   const blob = new Blob([mergedPdfBuffer], { type: "application/pdf" });

//   // Create a new file object
//   const mergedPdfFile = new File([blob], "merged.pdf", {
//     type: "application/pdf",
//   });

//   // Set the merged PDF file in state
//   setMergedPdfFile(mergedPdfFile);
// };

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} multiple />
//       {mergedPdfFile && (
//         <div>
//           <Document
//             file={URL.createObjectURL(mergedPdfFile)}
//             onLoadSuccess={({ numPages }) => setNumPages(numPages)}
//             loading="Loading PDF..."
//             error="Failed to load PDF."
//             noData="No PDF file to display."
//             workerSrc={`//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`}
//           >
//             {[...Array(numPages)].map((_, index) => (
//               <Page key={`page_${index + 1}`} pageNumber={index + 1} />
//             ))}
//           </Document>
//           <p>Page 1 of {numPages}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PDFViewer;
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

function PDFViewer() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [numPages, setNumPages] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <h1>PDF File Loader</h1>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      {selectedFile && (
        <div>
          <h2>Selected File:</h2>
          <p>Name: {selectedFile.name}</p>
          <p>Type: {selectedFile.type}</p>
          <p>Size: {selectedFile.size} bytes</p>
        </div>
      )}

      <div>
        <h2>PDF Viewer:</h2>
        <Document
          file="https://www2.gov.bc.ca/assets/gov/health/forms/2820fil.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
          ))}
        </Document>
      </div>
    </div>
  );
}

export default PDFViewer;
